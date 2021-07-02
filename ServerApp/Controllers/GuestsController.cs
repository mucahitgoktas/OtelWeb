using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
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
            var guests = await _context.Guests.ToListAsync();
            return Ok(guests);      
        }


        // localhost:5000/api/guests/2
        [HttpGet("{id}")]
        public async Task<IActionResult> GetGuest(int id)
        {
            var p = await _context.Guests.FirstOrDefaultAsync(i => i.GuestId == id);
            if (p==null)
            {
                return NotFound();
            }
            return Ok(p);

        }

        /*[HttpPost]
        public IActionResult CreateGuest(Guest p)
        {
            _context.Guests.Add(p);
            return Ok(p);
        }*/
        
    }
}