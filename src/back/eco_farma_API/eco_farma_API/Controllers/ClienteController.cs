using eco_farma_API.Classes;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using eco_farma_API.Funções;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace eco_farma_API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ClienteController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public ClienteController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Cliente>>> GetAll()
        {
            return await _context.Cliente.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Cliente>> GetById(int id)
        {
            var cliente = await _context.Cliente.FindAsync(id);
            if (cliente == null) return NotFound();
            return cliente;
        }

        [HttpPost]
        public async Task<ActionResult<Cliente>> Create(Cliente novoCliente, Usuario novoClientes)
        {
            _context.Cliente.Add(novoCliente);
            await _context.SaveChangesAsync();

            var usuario = new Usuario
            {
                email = novoClientes.email,
                senha = Criptografia.DecriptarSenha(novoClientes.senha), 
                papel = "cliente",
                id_papel = 1
            };

            _context.Usuario.Add(usuario);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetById), new { id = novoCliente.id_cliente }, novoCliente);
        }


        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, Cliente atualizado)
        {
            if (id != atualizado.id_cliente)
                return BadRequest();

            _context.Entry(atualizado).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ClienteExists(id)) return NotFound();
                else throw;
            }

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var cliente = await _context.Cliente.FindAsync(id);
            if (cliente == null) return NotFound();

            _context.Cliente.Remove(cliente);
            await _context.SaveChangesAsync();
            return NoContent();
        }

        private bool ClienteExists(int id) =>
            _context.Cliente.Any(c => c.id_cliente == id);
    }
}
