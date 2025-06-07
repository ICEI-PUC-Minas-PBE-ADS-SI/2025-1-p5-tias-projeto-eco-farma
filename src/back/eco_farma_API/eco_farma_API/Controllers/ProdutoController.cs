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
        public async Task<ActionResult<IEnumerable<Produto>>> GetAll()
        {
            return await _context.Produto.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Produto>> GetById(int id)
        {
            var produto = await _context.Produto.FindAsync(id);
            if (produto == null) return NotFound();
            return produto;
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
        public async Task<ActionResult<Produto>> Create(Produto novo)
        {
            _context.Produto.Add(novo);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetById), new { id = novo.id_produto }, novo);
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
        public IActionResult FiltrarProdutos([FromQuery] string? categoria, [FromQuery] double? precoMin, [FromQuery] double? precoMax)
        {
            var produtos = _context.Produto.AsQueryable();

            if (!string.IsNullOrEmpty(categoria))
                produtos = produtos.Where(p => p.categoria == categoria);

            if (precoMin.HasValue)
                produtos = produtos.Where(p => p.preco >= precoMin.Value);

            if (precoMax.HasValue)
                produtos = produtos.Where(p => p.preco <= precoMax.Value);

            return Ok(produtos.ToList());
        }


        private bool ProdutoExists(int id) =>
            _context.Produto.Any(p => p.id_produto == id);
    }
}
