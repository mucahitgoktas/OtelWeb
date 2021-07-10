using System.ComponentModel.DataAnnotations;

namespace DTO
{
    public class GuestDTO
    {
        [Key]
        public int GuestId { get; set; }
        public string Adi { get; set; }
        public string Soyadi { get; set; }
        public string TcKimlikNo { get; set; } 
        public string HesKodu { get; set; }
        public string DogumYeri { get; set; }
        public string OdaNo { get; set; }
        public string Ucret { get; set; }
        public string CiltNo { get; set; }
        public string Notlar { get; set; }
               
    }
}