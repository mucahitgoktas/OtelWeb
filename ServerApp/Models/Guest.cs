using System.ComponentModel.DataAnnotations;

namespace ServerApp.Models
{
    public class Guest
    {
        [Key]
        public int GuestId { get; set; }
        public string Adi { get; set; }
        public string Soyadi { get; set; }
        public string TcKimlikNo { get; set; } 
        public string HesKodu { get; set; }
        public string DogumYeri { get; set; }
        public int OdaNo { get; set; }
        public int Ucret { get; set; }
        public int CiltNo { get; set; }
                
        public string Secret { get; set; }
    }
}