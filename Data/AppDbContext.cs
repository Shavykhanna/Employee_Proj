using System;
using Employee_Proj.Models;
using Microsoft.EntityFrameworkCore;

namespace Employee_Proj.Data
{
    public class AppDbContext:DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) :base(options)
        {

        }

        public DbSet<Employee> Employees { get; set; }
    }
}
