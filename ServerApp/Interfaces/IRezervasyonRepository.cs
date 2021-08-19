using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ServerApp.Models;

namespace ServerApp.Interfaces
{
    public interface IRezervasyonRepository
    {
        Task<Rezervasyon> GetRezervasyonAsync(string rezervasyonId);
        Task<Rezervasyon> UpdateRezervasyonAsync(Rezervasyon rezervasyon);
        Task<bool> DeleteRezervasyonAsync(string rezervasyonId);
    }
}
