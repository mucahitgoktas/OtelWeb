using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ServerApp.Interfaces;

namespace ServerApp.Models
{
    public class Rezervasyon
    {
        public Rezervasyon()
        {
            
        }

        public Rezervasyon(string id)
        {
            Id = id;
        }

        public string Id { get; set; }
        public List<RezervasyonItem> Items { get; set; } = new List<RezervasyonItem>();
    }
}
