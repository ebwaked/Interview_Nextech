﻿
using Newtonsoft.Json;
using System;

namespace WebApi.Models
{
    public class User
    {
        private string id;
        [JsonProperty(PropertyName = "id")]
        public string Id
        {
            get
            {
                if (string.IsNullOrWhiteSpace(id))
                {
                    id = Guid.NewGuid().ToString();
                }

                return id;
            }

            set
            {
                id = value;
            }
        }

        public string Name { get; set; }
        public string GithubHandle { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Zip { get; set; }

    }
}
