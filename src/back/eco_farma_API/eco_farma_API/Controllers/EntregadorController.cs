using eco_farma_API.Classes;
using eco_farma_API.Funções;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace eco_farma_API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EntregadorController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public EntregadorController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Entregador>>> GetAll()
        {
            return await _context.Entregador.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Entregador>> GetById(int id)
        {
            var entregador = await _context.Entregador.FindAsync(id);
            if (entregador == null) return NotFound();
            return entregador;
        }

        [HttpPost]
        public async Task<ActionResult<Entregador>> Create(Entregador novoEntregador)
        {
            _context.Entregador.Add(novoEntregador);
            await _context.SaveChangesAsync();

            var usuario = new Usuario
            {
                email = novoEntregador.email,
                senha = Criptografia.DecriptarSenha(novoEntregador.senha), 
                papel = "entregador",
                id_papel = 3
            };

            _context.Usuario.Add(usuario);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetById), new { id = novoEntregador.id_entregador }, novoEntregador);
        }


        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, Entregador atualizado)
        {
            if (id != atualizado.id_entregador)
                return BadRequest();

            _context.Entry(atualizado).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EntregadorExists(id)) return NotFound();
                else throw;
            }

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var entregador = await _context.Entregador.FindAsync(id);
            if (entregador == null) return NotFound();

            _context.Entregador.Remove(entregador);
            await _context.SaveChangesAsync();
            return NoContent();
        }

        private bool EntregadorExists(int id) =>
            _context.Entregador.Any(e => e.id_entregador == id);
    }
}
