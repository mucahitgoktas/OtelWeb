using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DTO;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ServerApp.Data;
using ServerApp.DTO;
using ServerApp.Models;

namespace ServerApp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class FaturaController : ControllerBase
    {
        private OtelContext _context;
        public FaturaController(OtelContext context)
        {
            _context = context;
        }

        // localhost:5000/api/guests
        [HttpGet]
        public async Task<ActionResult> GetGuests()
        {
            var faturalar = await _context
            .Faturalar
            .Select(p => FaturaToDTO(p))
            .ToListAsync();
            return Ok(faturalar);
        }

        private static FaturaDTO FaturaToDTO(Fatura g)
        {
            return new FaturaDTO()
            {
                Id = g.Id,
                Unvan = g.Unvan,
                Adres = g.Adres,
                VergiDairesi = g.VergiDairesi,
                VergiNo = g.VergiNo,
                Not1 = g.Not1,
                Not2 = g.Not2
            };
        }
    }
}