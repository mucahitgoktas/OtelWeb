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
    // localhost:5000/api/guests
    [ApiController]
    [Route("api/[controller]")]
    public class GuestsController:ControllerBase
    {
        private readonly OtelContext _context;
        public GuestsController(OtelContext context)
        {
           _context = context;
        }

        // localhost:5000/api/guests
        [HttpGet]
        public async Task<ActionResult> GetGuests()
        {
            var guests = await _context
            .Guests
            .Select(p=> GuestToDTO(p))
            .ToListAsync();
            return Ok(guests);      
        }


        // localhost:5000/api/guests/2
        [HttpGet("{id}")]
        public async Task<IActionResult> GetGuest(int id)
        {
            
            var p = await _context.Guests.FindAsync(id);
            if (p==null)
            {
                return NotFound();
            }
            return Ok(GuestToDTO(p));

        }

        [HttpPost]

        public async Task<IActionResult> CreateGuest(Guest guest1)
        {
            _context.Guests.Add(guest1);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetGuest), new {id=guest1.GuestId},GuestToDTO(guest1));
        }
        
        
        // localhost/api/guest/3  
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateGuest(int id,Guest guest2)
        {
            if (id!=guest2.GuestId)
            {
                return BadRequest();
            }

            var guest = await _context.Guests.FindAsync(id);
            if (guest==null)
            {
                return NotFound();
            }

            guest.Adi = guest2.Adi;
            guest.Soyadi = guest2.Soyadi;
            guest.HesKodu = guest2.HesKodu;
            guest.TcKimlikNo = guest2.TcKimlikNo;
            guest.CiltNo = guest2.CiltNo;
            guest.Notlar = guest2.Notlar;
            guest.DogumYeri = guest2.DogumYeri;
            guest.OdaNo = guest2.OdaNo;
            guest.Ucret = guest2.Ucret;

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
            var guest = await _context.Guests.FindAsync(id);
            if (guest==null)        
            {
                return NotFound();
            }

            _context.Guests.Remove(guest);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private static GuestDTO GuestToDTO(Guest g)
        {
          return new GuestDTO()
          {
                GuestId = g.GuestId,
                Adi = g.Adi,
                Soyadi = g.Soyadi,
                TcKimlikNo = g.TcKimlikNo,
                HesKodu = g.HesKodu,
                DogumYeri = g.DogumYeri,
                OdaNo = g.OdaNo,
                Ucret = g.Ucret,
                CiltNo = g.CiltNo,
                Notlar = g.Notlar,
                

          };  
        }
    }
}