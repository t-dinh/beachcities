using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Server
{
    [Route("api/login")]
    [ApiController]
    public class AppUserController : ControllerBase
    {

        private BcpDBContext _context;

        public AppUserController(BcpDBContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult Get()
        {
            if( _context.appuser.ToList().Count == 0)
            {
               return NotFound();
            }
            return Ok(_context.appuser.ToList());
        }


    //     [HttpGet("{id}", Name = "GetAppUser")]
    //     public async Task<IActionResult> GetById(int? id)
    //     {  
    //         if (id == null)
    //         {
    //             return NotFound();
    //         }
            
    //         AppUser appUser = await _context.appUser.SingleOrDefaultAsync(ap => ap.user_id == id);
    //         if (appUser == null)
    //         {
    //             return NotFound();
    //         }

    //         return Ok(appUser);
    //     }

    // [HttpPost]
    //     public async Task<IActionResult> Post([FromBody] AppUser appUser)
    //     {
    //         if (appUser == null)
    //         {
    //             return BadRequest();
    //         }

    //         _context.appUser.Add(appUser);
    //         _context.SaveChanges();

    //         // Grab the newly created job such that can return below in "CreatedAtRoute"
    //         AppUser newAppUser = await _context.appUser.SingleOrDefaultAsync(ap => ap.user_id == appUser.user_id);
            
    //         if (newAppUser == null)
    //         {
    //             return BadRequest();
    //         }

    //         return CreatedAtRoute("GetAppUser", new {id = appUser.user_id }, newAppUser);
    //     }

    //     [HttpPut("{id}")]
    //     public IActionResult UpdateById(int id, [FromBody]AppUser appUser)
    //     {
    //         AppUser item = _context.appUser.Find(id);
            
    //         if (appUser == null)
    //         {
    //             return NotFound();
    //         }

    //         _context.appUser.Remove(item);
    //         _context.appUser.Add(appUser);
    //         _context.SaveChanges();

    //         return Ok(appUser);
    //     }

        // [HttpDelete("{id}")]
        // public IActionResult Delete(int id)
        // {
        //     AppUser item = _context.appUser.Find(id);

        //     if (item == null)
        //     {
        //         return NotFound();
        //     }

        //     _context.appUser.Remove(item);
        //     _context.SaveChanges();
        //     return Ok(item);
        // }


    }
}

