using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ServerApp.Interfaces;
using ServerApp.Models;

namespace ServerApp.Controllers
{
    public class RezervasyonController:ControllerBase
    {
        private readonly IRezervasyonRepository _rezervasyonRepository;

        public RezervasyonController(IRezervasyonRepository rezervasyonRepository)
        {
            _rezervasyonRepository = rezervasyonRepository;
        }

        [HttpGet]
        public async Task<ActionResult<Rezervasyon>> GetRezervasyonById(string id)
        {
            var rezervasyon = await _rezervasyonRepository.GetRezervasyonAsync(id);
            return Ok(rezervasyon ?? new Rezervasyon(id));
        }

        [HttpPost]
        public async Task<ActionResult<Rezervasyon>> UpdateRezervasyon(Rezervasyon rezervasyon)
        {
            var updateRezervasyon = await _rezervasyonRepository.UpdateRezervasyonAsync(rezervasyon);
            return Ok(updateRezervasyon);
        }

        [HttpDelete]
        public async Task DeleteRezervasyonAsync(string id)
        {
            await _rezervasyonRepository.DeleteRezervasyonAsync(id);
        }

    }
}
