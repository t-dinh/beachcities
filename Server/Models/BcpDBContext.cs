using Microsoft.EntityFrameworkCore;

namespace Server
{
    public class BcpDBContext : DbContext
    {
        public BcpDBContext(DbContextOptions<BcpDBContext> options) : base(options)
        {

        }

        public DbSet<Contact>       Contact { get; set; }
        public DbSet<Employee>      Employee { get; set; }

        public DbSet<Lead>          Lead { get; set; }

        public DbSet<Project>       Project { get; set; }
        public DbSet<AppUser>       AppUser { get; set; }

    }
}