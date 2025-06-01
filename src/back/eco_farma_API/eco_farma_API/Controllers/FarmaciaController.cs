using Microsoft.AspNetCore.Mvc;
//using Projeto_TIAS.Classes;
using System;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace eco_farma_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FarmaciaController : ControllerBase
    {
        //private readonly AppDbContext _context;

        ///public FarmaciaController(AppDbContext context)
        //{
        //    _context = context;
        //}

        // POST api/<FarmaciaController>
       // [HttpPost]
        ////public async Task<IActionResult> Post([FromBody] Farmacia farmacia)
        //{
          //  if (farmacia == null)
           //     return BadRequest();

           // _context.Farmacias.Add(farmacia);
          //  await _context.SaveChangesAsync();
          //  return Ok(farmacia);
       // }
        // GET: api/<FarmaciaController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<FarmaciaController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // PUT api/<FarmaciaController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<FarmaciaController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
