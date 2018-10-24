using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Server
{
    [Route("api/projects")]
    [ApiController]
    public class ProjectController : Controller
    {

        private BcpDBContext _context;

        public ProjectController(BcpDBContext context)
        {
            _context = context;
        }

        [HttpGet]
        public List<Project> Get()
        {
            return _context.project
                                    .Include(p => p.contact)
                                    .ToList();
        }


        [HttpGet("{id}", Name = "GetProject")]
        public async Task<IActionResult> GetById(int? id)
        {  
            if (id == null)
            {
                return NotFound();
            }
            
            Project project = await _context.project
                                .Include(e => e.contact)
                                .SingleOrDefaultAsync(p => p.project_id == id);
            if (project == null)
            {
                return NotFound();
            }

            return Ok(project);
        }

    [HttpPost]
        public async Task<IActionResult> Post([FromBody] Project project)
        {
            if (project == null)
            {
                return BadRequest();
            }

            _context.project.Add(project);
            _context.SaveChanges();

            // Grab the newly created job such that can return below in "CreatedAtRoute"
            Project newProject = await _context.project
                                .Include(p => p.contact)
                                .SingleOrDefaultAsync(p => p.project_id == project.project_id);
            
            if (newProject == null)
            {
                return BadRequest();
            }

            return CreatedAtRoute("Getproject", new {id = project.project_id }, newProject);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateById(int id, [FromBody]Project project)
        {
            Project item = _context.project.Find(id);
            
            if (project == null)
            {
                return NotFound();
            }

            _context.project.Remove(item);
            _context.project.Add(project);
            _context.SaveChanges();

            return Ok(project);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            Project item = _context.project.Find(id);

            if (item == null)
            {
                return NotFound();
            }

            _context.project.Remove(item);
            _context.SaveChanges();
            return Ok(item);
        }


    }
}

