using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Principal;
using System.Web;

namespace ProfileTrackingWebApi.Filters
{
    public class BasicAuthentication : GenericIdentity
    {
        public string email { get; set; }
        public string password { get; set; }

        public BasicAuthentication(string email, string password) : base(email, "Basic")
        {
            this.email = email;
            this.password = password;
        }
    }
}