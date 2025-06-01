using eco_farma_API.Classes;
using Microsoft.EntityFrameworkCore;

namespace eco_farma_API
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options)
        {}

        public DbSet<Avaliacao> Avaliacoes { get; set; }
        public DbSet<Avaliacao_produto> Avaliacoes_produto { get; set; }
        public DbSet<Cliente> Clientes { get; set; }
        public DbSet<Entrega> Entregas { get; set; }
        public DbSet<Entregador> Entregadores { get; set; }
        public DbSet<Farmacia> Farmacias { get; set; }
        public DbSet<Pedido> Pedidos { get; set; }
        public DbSet<Produto> Produtos { get; set; }
        public DbSet<Promocao> Promocoes { get; set; }
        public DbSet<Usuario> Usuarios { get; set; }


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseNpgsql("Host=127.0.0.1;Database=ecofarma_db;Username=postgres;Password=Secreta1234");
            }
        }



    }
}
