using ProfileTrackingWebApi.Models;
using ProfileTrackingWebApi.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ProfileTrackingWebApi.Controllers
{
    public class ProfilesController : ApiController
    {
        private readonly IProfilesService _ProfilesService;
        public ProfilesController(
            IProfilesService profilesService
            )
        {
            _ProfilesService = profilesService;
        }

        [HttpGet]
        public List<Profile> Get()
        {
            try
            {
                return _ProfilesService.Get();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
