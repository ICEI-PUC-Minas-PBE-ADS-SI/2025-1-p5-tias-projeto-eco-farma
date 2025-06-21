using eco_farma_API.Classes;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace eco_farma_API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProdutoController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public ProdutoController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetPaginado(int pagina = 1, int tamanhoPagina = 16)
        {
            var total = _context.Produto.Count();

            var produtos = _context.Produto
                .Skip((pagina - 1) * tamanhoPagina)
                .Take(tamanhoPagina)
                .ToList();

            var resultado = new
            {
                total,
                paginaAtual = pagina,
                tamanhoPagina,
                produtos
            };

            return Ok(resultado);
        }

        [HttpGet("busca")]
        public IActionResult BuscarProdutos(string termo)
        {
            var produtos = _context.Produto
                .Where(p => p.nome.ToLower().Contains(termo.ToLower()))
                .Select(p => new {
                    p.id_produto,
                    p.nome,
                    p.anexo
                })
                .Take(10)
                .ToList();

            return Ok(produtos);
        }


        [HttpGet("{id}")]
        public IActionResult GetProdutoSemAvaliacoes(int id)
        {
            var produto = _context.Produto
                .FirstOrDefault(p => p.id_produto == id);

            if (produto == null)
                return NotFound();

            var resultado = new
            {
                produto.id_produto,
                produto.nome,
                produto.categoria,
                produto.preco,  // ajustar conforme seu armazenamento
                produto.estoque,
                produto.descricao,
                anexo = produto.anexo != null ? Convert.ToBase64String(produto.anexo) : null
            };

            return Ok(resultado);
        }







        [HttpGet("por-farmacia/{id}")]
        public IActionResult ProdutosPorFarmacia(int id)
        {
            var produtos = _context.Produto
                .Where(p => p.id_farmacia == id)
                .ToList();

            return Ok(produtos);
        }


        [HttpGet("detalhes/{id}")]
        public IActionResult DetalhesProduto(int id)
        {
            var produto = _context.Produto.FirstOrDefault(p => p.id_produto == id);
            if (produto == null) return NotFound("Produto não encontrado.");

            var avaliacoes = _context.Avaliacao_produto
                .Where(a => a.id_produto == id)
                .ToList();

            return Ok(new
            {
                produto,
                avaliacoes
            });
        }


        [HttpPost]
        public async Task<ActionResult<Produto>> Create(
    [FromForm] string nome,
    [FromForm] string categoria,
    [FromForm] double preco,
    [FromForm] int estoque,
    [FromForm] string descricao,
    [FromForm] int id_farmacia,
    [FromForm] IFormFile imagem)
        {
            byte[] anexoBytes = null;

            if (imagem != null && imagem.Length > 0)
            {
                using (var ms = new MemoryStream())
                {
                    await imagem.CopyToAsync(ms);
                    anexoBytes = ms.ToArray();
                }
            }

            var produto = new Produto
            {
                nome = nome,
                categoria = categoria,
                preco = preco,
                estoque = estoque,
                descricao = descricao,
                id_farmacia = id_farmacia,
                anexo = anexoBytes
            };

            _context.Produto.Add(produto);
            await _context.SaveChangesAsync();

            return produto;
        }



        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, Produto atualizado)
        {
            if (id != atualizado.id_produto)
                return BadRequest();

            _context.Entry(atualizado).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProdutoExists(id)) return NotFound();
                else throw;
            }

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var produto = await _context.Produto.FindAsync(id);
            if (produto == null) return NotFound();

            _context.Produto.Remove(produto);
            await _context.SaveChangesAsync();
            return NoContent();
        }

        [HttpGet("filtrar")]
        public IActionResult FiltrarProdutos(
    [FromQuery] string? categoria,
    [FromQuery] double? precoMin,
    [FromQuery] double? precoMax,
    [FromQuery] int? id_farmacia,
    [FromQuery] int pagina = 1,
    [FromQuery] int tamanhoPagina = 16)
        {
            var query = _context.Produto.AsQueryable();

            if (!string.IsNullOrEmpty(categoria))
                query = query.Where(p => p.categoria == categoria);

            if (precoMin.HasValue)
                query = query.Where(p => p.preco / 100 >= precoMin.Value);

            if (precoMax.HasValue)
                query = query.Where(p => p.preco / 100 <= precoMax.Value);

            if (id_farmacia.HasValue)
                query = query.Where(p => p.id_farmacia == id_farmacia);

            var totalProdutos = query.Count();

            var produtos = query
                .Skip((pagina - 1) * tamanhoPagina)
                .Take(tamanhoPagina)
                .ToList();

            return Ok(new { produtos, totalProdutos });
        }




        private bool ProdutoExists(int id) =>
            _context.Produto.Any(p => p.id_produto == id);
    }
}
