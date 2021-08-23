using Microsoft.EntityFrameworkCore;
using ServerApp.Models;

namespace ServerApp.Data
{
    public class OtelContext : DbContext
    {
        public OtelContext(DbContextOptions<OtelContext> options):base(options)
        {
            
        }
        public DbSet<Guest> Guests { get; set; }
        public DbSet<Fatura> Faturalar { get; set; }
        public DbSet<Rezervasyon> Rezervasyonlar { get; set; }
        public DbSet<RezervasyonList> RezervasyonLists { get; set; }
    }
}