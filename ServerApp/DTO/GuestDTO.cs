using System.ComponentModel.DataAnnotations;

namespace ServerApp.DTO
{
    public class GuestDTO
    {
        [Key]
        public int GuestId { get; set; }
        public string Adi { get; set; }
        public string Soyadi { get; set; }
        public string TcKimlikNo { get; set; } 
        public string HesKodu { get; set; }
    }
}