using eco_farma_API.Classes;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace eco_farma_API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PedidoController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public PedidoController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Pedido>>> GetAll()
        {
            return await _context.Pedido.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Pedido>> GetById(int id)
        {
            var pedido = await _context.Pedido.FindAsync(id);
            if (pedido == null)
                return NotFound();

            return pedido;
        }

        [HttpPost]
        public async Task<ActionResult<Pedido>> Create(Pedido novoPedido)
        {
            // Verifica se o produto existe
            var produto = await _context.Produto.FindAsync(novoPedido.id_produto);
            if (produto == null)
                return NotFound("Produto não encontrado.");

            // Verifica se há estoque suficiente
            if (produto.estoque < novoPedido.qtd_produto)
                return BadRequest("Estoque insuficiente.");

            // Diminui o estoque
            produto.estoque -= novoPedido.qtd_produto;

            // Cadastra o pedido
            _context.Pedido.Add(novoPedido);

            // Salva o pedido para gerar o ID
            await _context.SaveChangesAsync();

            // Busca todos os entregadores cadastrados
            var entregadores = await _context.Entregador.ToListAsync();

            // Cria uma entrega para cada entregador
            foreach (var entregador in entregadores)
            {
                var entrega = new Entrega
                {
                    id_pedido = novoPedido.id_pedido,
                    id_entregador = entregador.id_entregador
                };
                _context.Entrega.Add(entrega);
            }

            // Salva todas as entregas
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetById), new { id = novoPedido.id_pedido }, novoPedido);
        }





        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, Pedido pedidoAtualizado)
        {
            if (id != pedidoAtualizado.id_pedido)
                return BadRequest();

            _context.Entry(pedidoAtualizado).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PedidoExists(id))
                    return NotFound();
                else
                    throw;
            }

            return NoContent();
        }

        [HttpGet("ultimos-tres")]
        public async Task<ActionResult<IEnumerable<Pedido>>> GetUltimosTres()
        {
            var pedidos = await _context.Pedido
                .OrderByDescending(p => p.id_pedido) // ou por uma data se disponível
                .Take(3)
                .ToListAsync();

            return pedidos;
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var pedido = await _context.Pedido.FindAsync(id);
            if (pedido == null)
                return NotFound();

            _context.Pedido.Remove(pedido);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PedidoExists(int id)
        {
            return _context.Pedido.Any(p => p.id_pedido == id);
        }
    }
}
