using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace ngDemoApp
{
    [Route("[controller]")]
    [ApiController]
    public class DemoController : ControllerBase
    {
        public DemoController()
        {
        }

        // GET http://localhost:5001/demo
        [HttpGet("")]
        public ActionResult<Demo[]> GetDemos()
        {
            List<Demo> demos = new List<Demo>();
            demos.Add(new Demo { title = "NgRx", url = "ngrx", component = "NgRxComponent" });
            demos.Add(new Demo { title = "Reusability", url = "reusability", component = "ReusabilityComponent" });
            return Ok(demos); 
        }
    }
}