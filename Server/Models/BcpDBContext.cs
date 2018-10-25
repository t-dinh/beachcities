using Microsoft.EntityFrameworkCore;

namespace Server
{
    public class BcpDBContext : DbContext
    {
        public BcpDBContext(DbContextOptions<BcpDBContext> options) : base(options)
        {

        }

        public DbSet<Contact>       contact     { get; set; }
        public DbSet<Employee>      employee    { get; set; }

        // public DbSet<Bid>           bid         { get; set; }

        public DbSet<Project>       project     { get; set; }
        public DbSet<AppUser>       appUser     { get; set; }
    }
}