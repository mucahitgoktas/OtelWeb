using System.ComponentModel.DataAnnotations;

namespace ServerApp.Models

{
    public class Fatura
    {
        [Key]
        public int Id { get; set; }
        public string Unvan { get; set; }
        public string Adres { get; set; }
        public string VergiDairesi { get; set; }
        public string VergiNo { get; set; }
        public string Not1 { get; set; }
        public string Not2 { get; set; }
    }
}