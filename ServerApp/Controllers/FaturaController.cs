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
    public class FaturalarController : ControllerBase
    {
        private OtelContext _context;
        public FaturalarController(OtelContext context)
        {
            _context = context;
        }

        // localhost:5000/api/faturalar
        [HttpGet]
        public async Task<ActionResult> GetFaturalar()
        {
            var faturalar = await _context
            .Faturalar
            .Select(p => FaturaToDTO(p))
            .ToListAsync();
            return Ok(faturalar);
        }

        // localhost:5000/api/faturalar/2
        [HttpGet("{id}")]
        public async Task<IActionResult> GetFaturalar(int id)
        {
            var p = await _context.Faturalar.FindAsync(id);
            if (p == null)
            {
                return NotFound();
            }
            return Ok(FaturaToDTO(p));

        }

        [HttpPost]
        public async Task<IActionResult> CreateFatura(Fatura fatura1)
        {
            _context.Faturalar.Add(fatura1);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetFaturalar), new { id = fatura1.Id }, FaturaToDTO(fatura1));
        }

        // localhost/api/guest/3  
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateFatura(int id, Fatura fatura2)
        {
            if (id != fatura2.Id)
            {
                return BadRequest();
            }

            var fatura = await _context.Faturalar.FindAsync(id);
            if (fatura == null)
            {
                return NotFound();
            }

            fatura.Unvan = fatura2.Unvan;
            fatura.Adres = fatura2.Adres;
            fatura.VergiDairesi = fatura2.VergiDairesi;
            fatura.VergiNo = fatura2.VergiNo;
            fatura.Not1 = fatura2.Not1;
            fatura.Not2 = fatura2.Not2;
            
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (System.Exception)
            {

                return NotFound();
            }

            return NoContent();


        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteFatura(int id)
        {
            var fatura = await _context.Faturalar.FindAsync(id);
            if (fatura == null)
            {
                return NotFound();
            }

            _context.Faturalar.Remove(fatura);
            await _context.SaveChangesAsync();

            return NoContent();
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