using eco_farma_API.Classes;
using Microsoft.EntityFrameworkCore;

namespace eco_farma_API
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options)
        {}

        public DbSet<Avaliacao> Avaliacao { get; set; }
        public DbSet<Avaliacao_produto> Avaliacao_produto { get; set; }
        public DbSet<Cliente> Cliente { get; set; }
        public DbSet<Entrega> Entrega { get; set; }
        public DbSet<Entregador> Entregador { get; set; }
        public DbSet<Farmacia> Farmacia { get; set; }
        public DbSet<Pedido> Pedido { get; set; }
        public DbSet<Produto> Produto { get; set; }
        public DbSet<Promocao> Promocao { get; set; }
        public DbSet<Usuario> Usuario { get; set; }
        public DbSet<Cupom> Cupom { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Avaliacao>().ToTable("avaliacao");
            modelBuilder.Entity<Cliente>().ToTable("cliente");
            modelBuilder.Entity<Produto>().ToTable("produto");
            modelBuilder.Entity<Avaliacao_produto>().ToTable("avaliacao_produto");
            modelBuilder.Entity<Entrega>().ToTable("entrega");
            modelBuilder.Entity<Entregador>().ToTable("entregador");
            modelBuilder.Entity<Farmacia>().ToTable("farmacia");
            modelBuilder.Entity<Pedido>().ToTable("pedido");
            modelBuilder.Entity<Promocao>().ToTable("promocao");
            modelBuilder.Entity<Usuario>().ToTable("usuario");
            modelBuilder.Entity<Cupom>().ToTable("cupom");
        }



        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseNpgsql("Host=127.0.0.1;Database=ecofarma_db;Username=postgres;Password=Secreta1234");
            }
        }



    }
}
