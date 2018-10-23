using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;

namespace Server
{
    [Route("api/contacts")]
    [ApiController]
    public class ClientController : Controller
    {

        private BcpDBContext _context;

        public ClientController(BcpDBContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult Get()
        {
            if (_context.Contact.ToList().Count == 0)
            {
                return NotFound();
            }

            return Ok(_context.Contact.ToList());
        }
        // [HttpPost]
        // public ActionResult<AppUser> Register([FromBody] AppUser user)
        // {

        //     user.password = BCrypt.Net.BCrypt.HashPassword(user.password);

        //     _context.appuser.Add(user);
        //     _context.SaveChanges();

        //     return Ok(user);
        // }

        // [HttpPost("login")]
        // public ActionResult Login([FromBody] AppUser user)
        // {
        //     foreach (AppUser u in _context.appuser)
        //     {
        //         if (u.username == user.username)
        //         {
        //             bool verified = BCrypt.Net.BCrypt.Verify(user.password, u.password);
        //             if (verified)
        //             {
        //                 string token = BuildToken(u);
        //                 return Ok(token);
        //             }
        //             else
        //             {
        //                 return NotFound();
        //             }
        //         }
        //     }

        //     return NotFound();
        // }

        // public string BuildToken(AppUser user)
        // {
        //     var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("superSecretsuperSecretsuperSecret"));
        //     var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

        //     var token = new JwtSecurityToken(
        //         "localhost", 
        //         "localhost", 
        //         expires: DateTime.Now.AddSeconds(15),
        //         signingCredentials: creds);

        //     return new JwtSecurityTokenHandler().WriteToken(token);
        // }
    }
}
