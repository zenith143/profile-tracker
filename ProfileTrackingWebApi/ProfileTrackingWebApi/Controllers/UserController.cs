using ProfileTrackingWebApi.DataModels;
using ProfileTrackingWebApi.Filters;
using ProfileTrackingWebApi.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading;
using System.Web.Http;

namespace ProfileTrackingWebApi.Controllers
{
    public class UserController : ApiController
    {
        private readonly IUserService _UserService;

        public UserController(IUserService UserService)
        {
            _UserService = UserService;
        }

        [HttpPost]
        public UserResponseModel Post()
        {
            try
            {
                if (System.Threading.Thread.CurrentPrincipal != null && System.Threading.Thread.CurrentPrincipal.Identity.IsAuthenticated)
                {
                    var AuthenticationObject = Thread.CurrentPrincipal.Identity as BasicAuthentication;
                    if (AuthenticationObject != null)
                    {
                        var email = AuthenticationObject.email;
                        var password = AuthenticationObject.password;
                        return _UserService.Login(email, password);
                    }
                    else
                    {
                        return new UserResponseModel();
                    }
                }
                else
                {
                    return new UserResponseModel();
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
