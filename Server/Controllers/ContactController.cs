using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace Server
{
    [Route("api/contacts")]
    [ApiController]
    public class ContactController : Controller
    {

        private BcpDBContext _context;

        public ContactController(BcpDBContext context)
        {
            _context = context;
        }

        [HttpGet]
        public List<Contact> Get()
        {
            return _context.contact.ToList();
        }


        [HttpGet("{id}", Name = "GetContact")]
        public IActionResult GetById(int? id)
        {  
            
            Contact contact = _context.contact.Find(id);
            if (contact == null)
            {
                return NotFound();
            }

            return Ok(contact);
        }

        [HttpPost]
        public IActionResult Create([FromBody] Contact contact)
        {
            if (contact == null)
            {
                return BadRequest();
            }

            _context.contact.Add(contact);
            _context.SaveChanges();
            
            return CreatedAtRoute("GetContact", new { id = contact.contact_id}, contact);
        }


        [HttpPut("{id}")]
        public IActionResult UpdateById(int id, [FromBody]Contact contact)
        {
            Contact item = _context.contact.Find(id);
            
            if (contact == null)
            {
                return NotFound();
            }

            _context.contact.Remove(item);
            _context.contact.Add(contact);
            _context.SaveChanges();

            return Ok(contact);
        }


        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            Contact item = _context.contact.Find(id);

            if (item == null)
            {
                return NotFound();
            }

            _context.contact.Remove(item);
            _context.SaveChanges();
            return Ok(item);
        }


//     }
// }

    }
}