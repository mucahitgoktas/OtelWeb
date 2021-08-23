using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ServerApp.Models
{
    public class RezervasyonList
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
