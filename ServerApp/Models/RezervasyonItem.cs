using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.AccessControl;
using System.Threading.Tasks;
using ServerApp.Interfaces;

namespace ServerApp.Models
{
    public class RezervasyonItem 
    {
        public string Id { get; set; }
        public string Adi { get; set; }
        public string Soyadi { get; set; }
        public string TcKimlikNo { get; set; }
        public string HesKodu { get; set; }
        public string DogumYeri { get; set; }
        public int OdaNo { get; set; }
        public decimal Ucret { get; set; }
        public int CiltNo { get; set; }
        public string Notlar { get; set; }
        public int FaturaNo { get; set; }


    }
}
