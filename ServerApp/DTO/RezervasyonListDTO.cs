using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ServerApp.Models;

namespace ServerApp.DTO
{
    public class RezervasyonListDTO
    {
        public int RezListId { get; set; }
        public string TcKimlikNo { get; set; }
        public int OdaNo { get; set; }
        public int Ucret { get; set; }
        public DateTime Tarih { get; set; }

        public int RezId { get; set; }
        public Rezervasyon Rezervasyon { get; set; }
    }
}
