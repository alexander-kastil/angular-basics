using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace ngDemoApp
{
    [Route("[controller]")]
    [ApiController]
    public class DemoController : ControllerBase
    {
        // GET http://localhost:5001/demo
        [HttpGet("")]
        public ActionResult<Demo[]> GetDemos()
        {
            List<Demo> demos =
            [
                new Demo { title = "NgRx", url = "ngrx", component = "NgRxComponent" },
                new Demo { title = "Reusability", url = "reusability", component = "ReusabilityComponent" },
            ];
            return Ok(demos); 
        }
    }
}