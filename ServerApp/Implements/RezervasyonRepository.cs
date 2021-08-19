using System;
using System.Text.Json;
using System.Threading.Tasks;
using ServerApp.Interfaces;
using ServerApp.Models;
using StackExchange.Redis;

namespace ServerApp.Implements
{
    public class RezervasyonRepository : IRezervasyonRepository
    {
        private readonly IDatabase _database;
        public RezervasyonRepository(IConnectionMultiplexer redis)
        {
            _database = redis.GetDatabase();
        }
        public async Task<bool> DeleteRezervasyonAsync(string rezervasyonId)
        {
            return await _database.KeyDeleteAsync(rezervasyonId);
        }

        public async Task<Rezervasyon> GetRezervasyonAsync(string rezervasyonId)
        {
            var data = await _database.StringGetAsync(rezervasyonId);
            return data.IsNullOrEmpty ? null : JsonSerializer.Deserialize<Rezervasyon>(data);
        }

        public async Task<Rezervasyon> UpdateRezervasyonAsync(Rezervasyon rezervasyon)
        {
            var created = await _database.StringSetAsync(rezervasyon.Id, JsonSerializer.Serialize(rezervasyon), TimeSpan.FromDays(30));
            if (!created)
            {
                return null;
            }

            return await GetRezervasyonAsync(rezervasyon.Id);

        }
    }
}
