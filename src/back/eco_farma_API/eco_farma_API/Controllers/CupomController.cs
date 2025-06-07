using eco_farma_API.Classes;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace eco_farma_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CupomController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public CupomController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Cupom
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Cupom>>> GetCupons()
        {
            return await _context.Cupom.ToListAsync();
        }

        // GET: api/Cupom/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Cupom>> GetCupom(int id)
        {
            var cupom = await _context.Cupom.FindAsync(id);

            if (cupom == null)
            {
                return NotFound();
            }

            return cupom;
        }

        [HttpGet("cupons/{idCliente}")]
        public IActionResult VerificarCupons(int idCliente)
        {
            var cupons = _context.Cupom
                .Where(c => c.id_cliente == idCliente)
                .ToList();

            return Ok(cupons); // Retorna lista (vazia ou não)
        }


        // POST: api/Cupom
        [HttpPost]
        public async Task<ActionResult<Cupom>> PostCupom(Cupom cupom)
        {
            _context.Cupom.Add(cupom);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetCupom), new { id = cupom.id_cupom }, cupom);
        }

        // PUT: api/Cupom/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCupom(int id, Cupom cupom)
        {
            if (id != cupom.id_cupom)
            {
                return BadRequest();
            }

            _context.Entry(cupom).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CupomExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // DELETE: api/Cupom/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCupom(int id)
        {
            var cupom = await _context.Cupom.FindAsync(id);
            if (cupom == null)
            {
                return NotFound();
            }

            _context.Cupom.Remove(cupom);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CupomExists(int id)
        {
            return _context.Cupom.Any(e => e.id_cupom == id);
        }
    }
}
