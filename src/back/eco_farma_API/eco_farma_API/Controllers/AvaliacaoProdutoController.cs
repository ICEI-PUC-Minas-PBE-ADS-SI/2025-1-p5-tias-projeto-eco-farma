using eco_farma_API.Classes;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace eco_farma_API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class Avaliacao_produtoController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public Avaliacao_produtoController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Avaliacao_produto>>> GetAll()
        {
            return await _context.Avaliacao_produto.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Avaliacao_produto>> GetById(int id)
        {
            var avaliacao = await _context.Avaliacao_produto.FindAsync(id);
            if (avaliacao == null) return NotFound();
            return avaliacao;
        }

        [HttpPost]
        public async Task<ActionResult<Avaliacao_produto>> Create(Avaliacao_produto novo)
        {
            _context.Avaliacao_produto.Add(novo);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetById), new { id = novo.id_avaliacao_produto }, novo);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, Avaliacao_produto atualizado)
        {
            if (id != atualizado.id_avaliacao_produto)
                return BadRequest();

            _context.Entry(atualizado).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AvaliacaoProdutoExists(id)) return NotFound();
                else throw;
            }

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var avaliacao = await _context.Avaliacao_produto.FindAsync(id);
            if (avaliacao == null) return NotFound();

            _context.Avaliacao_produto.Remove(avaliacao);
            await _context.SaveChangesAsync();
            return NoContent();
        }

        private bool AvaliacaoProdutoExists(int id) =>
            _context.Avaliacao_produto.Any(a => a.id_avaliacao_produto == id);
    }
}
