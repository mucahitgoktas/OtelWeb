using System.ComponentModel.DataAnnotations;

namespace ServerApp.Models
{
    public class Guest
    {
        [Key]
        public int GuestId { get; set; }
        public string Name { get; set; }

        public int TcKimlikNo { get; set; } 
        public string HesKodu { get; set; }
    }
}