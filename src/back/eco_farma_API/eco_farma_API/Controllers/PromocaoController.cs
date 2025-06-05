using eco_farma_API.Classes;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace eco_farma_API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PromocaoController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public PromocaoController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Promocao>>> GetAll()
        {
            return await _context.Promocao.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Promocao>> GetById(int id)
        {
            var promocao = await _context.Promocao.FindAsync(id);
            if (promocao == null) return NotFound();
            return promocao;
        }

        [HttpPost]
        public async Task<ActionResult<Promocao>> Create(Promocao novaPromocao)
        {
            _context.Promocao.Add(novaPromocao);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetById), new { id = novaPromocao.id_promocao }, novaPromocao);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, Promocao promocaoAtualizada)
        {
            if (id != promocaoAtualizada.id_promocao)
                return BadRequest();

            _context.Entry(promocaoAtualizada).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PromocaoExists(id)) return NotFound();
                else throw;
            }

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var promocao = await _context.Promocao.FindAsync(id);
            if (promocao == null) return NotFound();

            _context.Promocao.Remove(promocao);
            await _context.SaveChangesAsync();
            return NoContent();
        }

        private bool PromocaoExists(int id) =>
            _context.Promocao.Any(p => p.id_promocao == id);
    }
}
