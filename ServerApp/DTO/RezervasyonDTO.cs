using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ServerApp.Models;

namespace ServerApp.DTO
{
    public class RezervasyonDTO
    {
        public int RezId { get; set; }
        public string TcKimlikNo { get; set; }
        public int OdaNo { get; set; }
        public int Ucret { get; set; }
        public DateTime Tarih { get; set; }

        public int GuestId { get; set; }
        public List<RezervasyonList> RezervasyonLists { get; set; }
        public Guest Guest { get; set; }
    }
}
