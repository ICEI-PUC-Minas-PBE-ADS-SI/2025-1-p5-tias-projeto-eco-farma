using eco_farma_API.Classes;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using eco_farma_API.Funções;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace eco_farma_API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsuarioController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public UsuarioController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/usuario
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Usuario>>> GetAll()
        {
            var usuarios = await _context.Usuario.ToListAsync();
            return Ok(usuarios);
        }

        // GET: api/usuario/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Usuario>> GetById(int id)
        {
            var usuario = await _context.Usuario.FindAsync(id);

            if (usuario == null)
                return NotFound();

            return Ok(usuario);
        }

        // POST: api/usuario
        [HttpPost]
        public async Task<ActionResult<Usuario>> Create([FromBody] Usuario novoUsuario)
        {
            _context.Usuario.Add(novoUsuario);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetById), new { id = novoUsuario.id_usuario }, novoUsuario);
        }

        // PUT: api/usuario/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, [FromBody] Usuario usuarioAtualizado)
        {
            if (id != usuarioAtualizado.id_usuario)
                return BadRequest("ID do usuário não confere");

            var usuario = await _context.Usuario.FindAsync(id);
            if (usuario == null)
                return NotFound();

            // Atualiza os campos
            usuario.email = usuarioAtualizado.email;
            usuario.senha = usuarioAtualizado.senha;
            usuario.papel = usuarioAtualizado.papel;
            usuario.id_papel = usuarioAtualizado.id_papel;

            _context.Entry(usuario).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                // Aqui você pode adicionar lógica caso queira tratar conflitos
                throw;
            }

            return NoContent();
        }

        [HttpPost("login")]
        public IActionResult Login([FromBody] Usuario loginInfo)
        {
            string senhaDescriptografada;
            //try
            //{
                //senhaDescriptografada = Criptografia.DecriptarSenha(loginInfo.senha);
            //}
            //catch
            //{
               //return BadRequest("Erro ao descriptografar a senha.");
            //}

            var usuario = _context.Usuario.FirstOrDefault(u => u.email == loginInfo.email);

            if (usuario == null || usuario.senha != loginInfo.senha)
                return Unauthorized("Email ou senha inválidos.");

            // Buscar dados adicionais do papel (exemplo com Cliente)
            object dadosPapel = usuario.papel.ToLower() switch
            {
                "cliente" => _context.Cliente.FirstOrDefault(c => c.id_cliente == usuario.id_papel),
                "farmacia" => _context.Farmacia.FirstOrDefault(f => f.id_farmacia == usuario.id_papel),
                "entregador" => _context.Entregador.FirstOrDefault(e => e.id_entregador == usuario.id_papel),
                _ => null
            };

            return Ok(new
            {
                usuario.id_usuario,
                usuario.email,
                usuario.papel,
                usuario.id_papel,
                dadosPapel
            });
        }


        // DELETE: api/usuario/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var usuario = await _context.Usuario.FindAsync(id);
            if (usuario == null)
                return NotFound();

            _context.Usuario.Remove(usuario);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }

}
