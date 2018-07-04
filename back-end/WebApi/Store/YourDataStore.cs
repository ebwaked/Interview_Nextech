
using System;
using System.Data;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Data.SqlClient;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using WebApi.Models;
using System.Linq;

namespace WebApi.Store
{
    public class YourDataStore : IDataStore
    {
        //public IConfiguration _ConnectionString;
        SqlConnection conn;

        public Task Connect()
        {
            string connectionInfo = "Server=tcp:nextechserver.database.windows.net,1433;Initial Catalog=NextechInterviewDB;Persist Security Info=False;User ID=ebwaked;Password=1187Waked;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;";
            //string connectionInfo = _ConnectionString.GetSection("ConnectionStrings").GetSection("DatabaseConnection").Value;
            try 
            {
               conn = new SqlConnection(connectionInfo);
                    return Task.CompletedTask;
            }
            catch 
            {
                    Console.WriteLine("SQL connection not open!");
                    throw;
                    //return Task.CompletedTask;
            }            
            //throw new NotImplementedException();
        }

        public Task Delete(string id)
        {
            using (var context = new MyDbContext())
            {
                var toDelete = new User {Id = id };

                context.Users.Attach(toDelete);
                context.Users.Remove(toDelete);
                context.SaveChanges();
            }
            throw new NotImplementedException();
        }

        public Task<IEnumerable<T>> Get<T>()
        {
            using (var context = new MyDbContext())
            {
                var users = context.Users.ToList();
                if (users != null) 
                {
                    //return users; ### still getting errors because its not generic
                    throw new System.ArgumentException("needs to be generic");
                }
                else
                {
                    throw new System.ArgumentException("Parameter cannot be null");
                }
            }
        }

        public Task<T> Get<T>(string id)
        {
            using (var context = new MyDbContext())
            {
                var user = context.Users.First(u => u.Id == id);
                // return user ### return the generic type instead to get working 
            }
            throw new NotImplementedException();
        }

        public Task<string> Insert<T>(T document)
        {
            using (var context = new MyDbContext())
            {
                var users = context.Set<User>();
                users.Add( new User { 
                        Id = document.Id, 
                        Name = document.Name
                        } 
                    );

                db.SaveChanges();
            }

            throw new NotImplementedException();
        }

        public Task<IEnumerable<T>> Query<T>(string query)
        {
            throw new NotImplementedException();
        }

        public Task Update<T>(T document)
        {
            throw new NotImplementedException();
        }
    }
}
