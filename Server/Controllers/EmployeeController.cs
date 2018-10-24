using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Server
{
    [Route("api/employees")]
    [ApiController]
    public class EmployeeController : Controller
    {

        private BcpDBContext _context;

        public EmployeeController(BcpDBContext context)
        {
            _context = context;
        }

        [HttpGet]
        public List<Employee> Get()
        {
            return _context.employee
                                    .Include(e => e.project)
                                    .ToList();
        }


        [HttpGet("{id}", Name = "GetEmployee")]
        public async Task<IActionResult> GetById(int? id)
        {  
            if (id == null)
            {
                return NotFound();
            }
            
            Employee employee = await _context.employee
                                .Include(e => e.project)
                                .SingleOrDefaultAsync(e => e.employee_id == id);
            if (employee == null)
            {
                return NotFound();
            }

            return Ok(employee);
        }

    [HttpPost]
        public async Task<IActionResult> Post([FromBody] Employee employee)
        {
            if (employee == null)
            {
                return BadRequest();
            }

            _context.employee.Add(employee);
            _context.SaveChanges();

            // Grab the newly created job such that can return below in "CreatedAtRoute"
            Employee newEmployee = await _context.employee
                                .Include(e => e.project)
                                .SingleOrDefaultAsync(e => e.employee_id == employee.employee_id);
            
            if (newEmployee == null)
            {
                return BadRequest();
            }

            return CreatedAtRoute("GetEmployee", new {id = employee.employee_id }, newEmployee);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateById(int id, [FromBody]Employee employee)
        {
            Employee item = _context.employee.Find(id);
            
            if (employee == null)
            {
                return NotFound();
            }

            _context.employee.Remove(item);
            _context.employee.Add(employee);
            _context.SaveChanges();

            return Ok(employee);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            Employee item = _context.employee.Find(id);

            if (item == null)
            {
                return NotFound();
            }

            _context.employee.Remove(item);
            _context.SaveChanges();
            return Ok(item);
        }


    }
}

