using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace WebApi.Models
{
    public class MyDbContext : DbContext
    {
        public DbSet<User> Users { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Server=tcp:nextechserver.database.windows.net,1433;Initial Catalog=NextechInterviewDB;Persist Security Info=False;User ID=ebwaked;Password=1187Waked;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;");
        }

    }
}
