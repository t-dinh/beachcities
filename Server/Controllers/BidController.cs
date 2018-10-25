// using System;
// using System.Collections.Generic;
// using System.Linq;
// using System.Threading.Tasks;
// using Microsoft.AspNetCore.Mvc;
// using Microsoft.EntityFrameworkCore;

// namespace Server
// {
//     [Route("api/bids")]
//     [ApiController]
//     public class bidController : Controller
//     {

//         private BcpDBContext _context;

//         public bidController(BcpDBContext context)
//         {
//             _context = context;
//         }

//         [HttpGet]
//         public List<Bid> Get()
//         {
//             return _context.bid
//                                     .Include(l => l.contact)
//                                     .ToList();
//         }


//         [HttpGet("{id}", Name = "Getbid")]
//         public async Task<IActionResult> GetById(int? id)
//         {  
//             if (id == null)
//             {
//                 return NotFound();
//             }
            
//             Bid bid = await _context.bid
//                                 .Include(e => e.contact)
//                                 .SingleOrDefaultAsync(l => l.bid_id == id);
//             if (bid == null)
//             {
//                 return NotFound();
//             }

//             return Ok(bid);
//         }

//     [HttpPost]
//         public async Task<IActionResult> Post([FromBody] Bid bid)
//         {
//             if (bid == null)
//             {
//                 return BadRequest();
//             }

//             _context.bid.Add(bid);
//             _context.SaveChanges();

//             // Grab the newly created job such that can return below in "CreatedAtRoute"
//             Bid newbid = await _context.bid
//                                 .Include(l => l.contact)
//                                 .SingleOrDefaultAsync(l => l.bid_id == bid.bid_id);
            
//             if (newbid == null)
//             {
//                 return BadRequest();
//             }

//             return CreatedAtRoute("Getbid", new {id = bid.bid_id }, newbid);
//         }

//         [HttpPut("{id}")]
//         public IActionResult UpdateById(int id, [FromBody]Bid bid)
//         {
//             Bid item = _context.bid.Find(id);
            
//             if (bid == null)
//             {
//                 return NotFound();
//             }

//             _context.bid.Remove(item);
//             _context.bid.Add(bid);
//             _context.SaveChanges();

//             return Ok(bid);
//         }

//         [HttpDelete("{id}")]
//         public IActionResult Delete(int id)
//         {
//             Bid item = _context.bid.Find(id);

//             if (item == null)
//             {
//                 return NotFound();
//             }

//             _context.bid.Remove(item);
//             _context.SaveChanges();
//             return Ok(item);
//         }


//     }
// }

