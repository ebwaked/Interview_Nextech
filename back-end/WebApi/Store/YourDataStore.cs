
using System;
using System.Data;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Data.SqlClient;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.EntityFrameworkCore;
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
                var dbName = context.Database.GetDbConnection().GetType().Name;
                User newUser = new User();
                newUser.Name = "Test Name";
                newUser.GithubHandle = "ebwaked";
                newUser.Address = "110 Davis St.";
                newUser.City = "Kernersville";
                newUser.State = "NC";
                newUser.Zip = "27284";
                if (newUser == null)
                {
                    //return;
                }
                //newUser = newUserParameter;
                context.Users.Add(newUser);
                context.SaveChanges();
            }

            throw new NotImplementedException();
        }

        public Task<IEnumerable<T>> Query<T>(string query)
        {
            // ******** Not supported in Core 2.0 ********
            // using (var context = new MyDbContext())
            // {
            //     var queryResult = context.Users.FromSql(query).FirstOrDefault();
            // }
            Connect();
            //SqlDataReader reader;
            SqlCommand cmd = new SqlCommand(query, conn);
            cmd.CommandType = CommandType.Text;
            conn.Open();
            var result = cmd.ExecuteReader();
            conn.Close();
            throw new NotImplementedException();
        }

        public Task Update<T>(T document)
        {
            using (var context = new MyDbContext())
            {
                var entity = context.Users.Find(document);
                if (entity == null)
                {
                    //return;
                }

                context.Users.Add(entity);
                context.SaveChanges();
            }
            throw new NotImplementedException();
        }
    }
}
