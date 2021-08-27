using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.TagHelpers.Cache;
using StackExchange.Redis;

namespace ServerApp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CacheController : ControllerBase
    {
        private readonly IDatabase _database;

        public CacheController(IDatabase database)
        {
            _database = database;
        }

        // GET api/<CacheController>/5
        [HttpGet]
        public string Get([FromQuery] string key)
        {
            return _database.StringGet(key);

        }

        // POST api/<CacheController>
        [HttpPost]
        public void Post([FromBody] KeyValuePair<string, string> keyValue)
        {
            _database.StringSet(keyValue.Key, keyValue.Value);
        }
    }
}
