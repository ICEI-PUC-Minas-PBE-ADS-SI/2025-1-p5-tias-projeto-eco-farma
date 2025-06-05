using eco_farma_API.Classes;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace eco_farma_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AvaliacaoController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public AvaliacaoController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Avaliacao
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Avaliacao>>> GetAvaliacoes()
        {
            return await _context.Avaliacao.ToListAsync();
        }

        // GET: api/Avaliacao/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Avaliacao>> GetAvaliacao(int id)
        {
            var avaliacao = await _context.Avaliacao.FindAsync(id);

            if (avaliacao == null)
            {
                return NotFound();
            }

            return avaliacao;
        }

        // POST: api/Avaliacao
        [HttpPost]
        public async Task<ActionResult<Avaliacao>> PostAvaliacao(Avaliacao avaliacao)
        {
            _context.Avaliacao.Add(avaliacao);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetAvaliacao), new { id = avaliacao.id_avaliacao }, avaliacao);
        }

        // PUT: api/Avaliacao/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAvaliacao(int id, Avaliacao avaliacao)
        {
            if (id != avaliacao.id_avaliacao)
            {
                return BadRequest();
            }

            _context.Entry(avaliacao).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!_context.Avaliacao.Any(e => e.id_avaliacao == id))
                    return NotFound();

                throw;
            }

            return NoContent();
        }

        // DELETE: api/Avaliacao/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAvaliacao(int id)
        {
            var avaliacao = await _context.Avaliacao.FindAsync(id);
            if (avaliacao == null)
            {
                return NotFound();
            }

            _context.Avaliacao.Remove(avaliacao);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
