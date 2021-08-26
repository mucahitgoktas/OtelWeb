using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using ServerApp.Interfaces;

namespace ServerApp.Models
{
    

    public class Rezervasyon
    {
        [Key]
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
