using eco_farma_API.Classes;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

//using Projeto_TIAS.Classes;
using System;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace eco_farma_API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class FarmaciaController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public FarmaciaController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Farmacia>>> GetAll()
        {
            return await _context.Farmacias.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Farmacia>> GetById(int id)
        {
            var farmacia = await _context.Farmacias.FindAsync(id);
            if (farmacia == null) return NotFound();
            return farmacia;
        }

        [HttpPost]
        public async Task<ActionResult<Farmacia>> Create(Farmacia novo)
        {
            _context.Farmacias.Add(novo);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetById), new { id = novo.id_farmacia }, novo);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, Farmacia atualizado)
        {
            if (id != atualizado.id_farmacia)
                return BadRequest();

            _context.Entry(atualizado).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FarmaciaExists(id)) return NotFound();
                else throw;
            }

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var farmacia = await _context.Farmacias.FindAsync(id);
            if (farmacia == null) return NotFound();

            _context.Farmacias.Remove(farmacia);
            await _context.SaveChangesAsync();
            return NoContent();
        }

        private bool FarmaciaExists(int id) =>
            _context.Farmacias.Any(f => f.id_farmacia == id);
    }
}
