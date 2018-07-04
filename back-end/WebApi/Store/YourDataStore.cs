
using System;
using System.Data;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Data.SqlClient;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using WebApi.Models;

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
                    //conn.Open();
                    return Task.CompletedTask;
                    // if (connection != null && connection.State == ConnectionState.Open) {
                    //     return Task.CompletedTask;
                    // }
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
            throw new NotImplementedException();
        }

        public Task<IEnumerable<T>> Get<T>()
        {
            //List<User> UserList = new List<User>();
            List<User> UserList = new List<User>();
            Connect();
            SqlDataReader reader;
            conn.Open();
            //create a command object identifying the stored procedure
            SqlCommand cmd = new SqlCommand("GetAllUsers", conn);
            //set the command object so it knows to execute a stored procedure
            cmd.CommandType = CommandType.StoredProcedure;
            //add parameter to command, which will be passed to the stored procedure
            //cmd.Parameters.Add(new SqlParameter("@CustomerID", custId));
            //Execute
            reader = cmd.ExecuteReader();

            if (reader != null & reader.HasRows)
            {
                while (reader.Read())
                {
                    User user = new User();
                    user.Id = reader["Id"].ToString();
                    user.Name = reader["Name"].ToString();
                    user.GithubHandle = reader["GithubHandle"].ToString();
                    user.Address = reader["Address"].ToString();
                    user.City = reader["City"].ToString();
                    user.State = reader["State"].ToString();
                    user.Zip = reader["Zip"].ToString();
                    UserList.Add(user);
                }
            }
            Console.WriteLine("User List Returned: " + UserList);
            conn.Close();
            // TODO: Issues with returning correct type. Only way to compile without errors
            throw new NotImplementedException();
            //return Task.FromResult<IEnumerable<T>>(UserList);
        }

        public Task<T> Get<T>(string id)
        {
            throw new NotImplementedException();
        }

        public Task<string> Insert<T>(T document)
        {
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
