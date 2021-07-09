using Microsoft.EntityFrameworkCore;
using ServerApp.Models;

namespace ServerApp.Data
{
    public class OtelContext : DbContext
    {
        public OtelContext(DbContextOptions<OtelContext> options):base(options)
        {
            
        }
        public DbSet<Guest> Guests1 { get; set; }
    }
}