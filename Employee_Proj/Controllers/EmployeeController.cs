using System;
using Employee_Proj.Data;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using Employee_Proj.Models;
using System.Threading.Tasks;

namespace Employee_Proj.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {

        private readonly AppDbContext _db;

        public EmployeeController(AppDbContext db)
        {
            _db = db;
        }

        //Action Methods

        [HttpGet]
        public IActionResult GetEmployees()
        {
            return Ok(_db.Employees.ToList());
        }

        [HttpPost]
        public async Task<IActionResult> AddEmployee([FromBody] Employee objEmployee)
        {
            if (!ModelState.IsValid)
            {
                return new JsonResult("Error While Creating New Employee");
            }
            _db.Employees.Add(objEmployee);
            await _db.SaveChangesAsync();

            return new JsonResult("Employee created Successfully");
        }

        [HttpPut("{Id}")]
        public async Task<IActionResult> UpdateEmployee([FromRoute] int Id, [FromBody] Employee objEmployee)
        {
            if (objEmployee == null || Id != objEmployee.Id)
            {
                return new JsonResult("Employee was not found");

            }
            else
            {
                _db.Employees.Update(objEmployee);
                await _db.SaveChangesAsync();
                return new JsonResult("Employee updated successfully");
            }
        }

        [HttpDelete("{Id}")]
        public async Task<IActionResult> DeleteEmployee([FromRoute] int Id)
        {
            var findEmployee = await _db.Employees.FindAsync(Id);
            if (findEmployee == null)
            {
                return NotFound();
            }
            else
            {
                _db.Employees.Remove(findEmployee);
                await _db.SaveChangesAsync();
                return new JsonResult("Employee deleted successfully");
            }
        }

    }
    
}
