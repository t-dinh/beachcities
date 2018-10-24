using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Server
{
    [Route("api/leads")]
    [ApiController]
    public class LeadController : Controller
    {

        private BcpDBContext _context;

        public LeadController(BcpDBContext context)
        {
            _context = context;
        }

        [HttpGet]
        public List<Lead> Get()
        {
            return _context.lead
                                    .Include(l => l.contact)
                                    .ToList();
        }


        [HttpGet("{id}", Name = "GetLead")]
        public async Task<IActionResult> GetById(int? id)
        {  
            if (id == null)
            {
                return NotFound();
            }
            
            Lead lead = await _context.lead
                                .Include(e => e.contact)
                                .SingleOrDefaultAsync(l => l.lead_id == id);
            if (lead == null)
            {
                return NotFound();
            }

            return Ok(lead);
        }

    [HttpPost]
        public async Task<IActionResult> Post([FromBody] Lead lead)
        {
            if (lead == null)
            {
                return BadRequest();
            }

            _context.lead.Add(lead);
            _context.SaveChanges();

            // Grab the newly created job such that can return below in "CreatedAtRoute"
            Lead newLead = await _context.lead
                                .Include(l => l.contact)
                                .SingleOrDefaultAsync(l => l.lead_id == lead.lead_id);
            
            if (newLead == null)
            {
                return BadRequest();
            }

            return CreatedAtRoute("GetLead", new {id = lead.lead_id }, newLead);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateById(int id, [FromBody]Lead lead)
        {
            Lead item = _context.lead.Find(id);
            
            if (lead == null)
            {
                return NotFound();
            }

            _context.lead.Remove(item);
            _context.lead.Add(lead);
            _context.SaveChanges();

            return Ok(lead);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            Lead item = _context.lead.Find(id);

            if (item == null)
            {
                return NotFound();
            }

            _context.lead.Remove(item);
            _context.SaveChanges();
            return Ok(item);
        }


    }
}

