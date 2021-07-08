using System.ComponentModel.DataAnnotations;

namespace DTO
{
    public class GuestDTO
    {
        [Key]
        public int id { get; set; }
        public int odano { get; set; }
        public string adi { get; set; }
        public string soyadi { get; set; }
        public string tckimlikno { get; set; }
        public string heskodu { get; set; }
        public int ucret { get; set; }
        public string notlar { get; set; }

    }
}