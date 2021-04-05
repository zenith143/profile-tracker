using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProfileTrackingWebApi.DataModels
{
    public class UserResponseModel
    {
        public string email { get; set; }
        public string jwt { get; set; }
    }
}