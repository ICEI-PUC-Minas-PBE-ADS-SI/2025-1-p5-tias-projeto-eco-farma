using eco_farma_API.Classes;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace eco_farma_API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EntregaController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public EntregaController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Entrega>>> GetAll()
        {
            return await _context.Entrega.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Entrega>> GetById(int id)
        {
            var entrega = await _context.Entrega.FindAsync(id);
            if (entrega == null) return NotFound();
            return entrega;
        }

        [HttpPost]
        public async Task<ActionResult<Entrega>> Create(Entrega novo)
        {
            _context.Entrega.Add(novo);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetById), new { id = novo.id_entrega }, novo);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, Entrega atualizado)
        {
            if (id != atualizado.id_entrega)
                return BadRequest();

            _context.Entry(atualizado).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EntregaExists(id)) return NotFound();
                else throw;
            }

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var entrega = await _context.Entrega.FindAsync(id);
            if (entrega == null) return NotFound();

            _context.Entrega.Remove(entrega);
            await _context.SaveChangesAsync();
            return NoContent();
        }

        private bool EntregaExists(int id) =>
            _context.Entrega.Any(e => e.id_entrega == id);
    }
}
