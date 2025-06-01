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


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseNpgsql("Host=127.0.0.1;Database=ecofarma_db;Username=postgres;Password=Secreta1234");
            }
        }



    }
}
