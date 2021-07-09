using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DTO;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ServerApp.Data;
using ServerApp.Models;

namespace ServerApp.Controllers
{
    // localhost:5000/api/Guests1
    [ApiController]
    [Route("api/[controller]")]
    public class Guests1Controller:ControllerBase
    {
        private OtelContext _context;
        public Guests1Controller(OtelContext context)
        {
           _context = context;
        }

        // localhost:5000/api/Guests1
        [HttpGet]
        public async Task<ActionResult> GetGuests1()
        {
            var Guests1 = await _context
            .Guests1
            .Select(p=> GuestToDTO(p))
            .ToListAsync();
            return Ok(Guests1);      
        }


        // localhost:5000/api/Guests1/2
        [HttpGet("{id}")]
        public async Task<IActionResult> GetGuest(int id)
        {
            var p = await _context.Guests1.FindAsync(id);
            if (p==null)
            {
                return NotFound();
            }
            return Ok(GuestToDTO(p));

        }

        [HttpPost]
        public async Task<IActionResult> CreateGuest(Guest guest1)
        {
            _context.Guests1.Add(guest1);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetGuest), new {id=guest1.id},GuestToDTO(guest1));
        }
        // localhost/api/guest/3  
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateGuest(int id,Guest guest2)
        {
            if (id!=guest2.id)
            {
                return BadRequest();
            }

            var guest = await _context.Guests1.FindAsync(id);
            if (guest==null)
            {
                return NotFound();
            }

            guest.odano = guest2.odano;
            guest.adi = guest2.adi;
            guest.soyadi = guest2.soyadi;
            guest.heskodu = guest2.heskodu;
            guest.tckimlikno = guest2.tckimlikno;
            guest.ucret = guest2.ucret;
            guest.notlar = guest2.notlar;

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
        public async Task<IActionResult> DeleteGuest(int id)
        {
            var guest = await _context.Guests1.FindAsync(id);
            if (guest==null)        
            {
                return NotFound();
            }

            _context.Guests1.Remove(guest);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private static GuestDTO GuestToDTO(Guest p)
        {
          return new GuestDTO()
          {
                id = p.id,
                adi = p.adi,
                soyadi = p.soyadi,
                heskodu = p.heskodu,
                tckimlikno = p.tckimlikno,
                odano = p.odano,
                ucret = p.ucret,
                notlar = p.notlar

          };  
        }
    }
}