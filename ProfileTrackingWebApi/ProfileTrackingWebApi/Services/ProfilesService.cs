using ProfileTrackingWebApi.Models;
using ProfileTrackingWebApi.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProfileTrackingWebApi.Services
{
    public class ProfilesService : IProfilesService
    {
        private readonly ProfileTrackingDBEntities _entity;
        public ProfilesService(
            ProfileTrackingDBEntities entities
            )
        {
            _entity = entities;
        }

        public List<Profile> Get()
        {
            try
            {
                List<Profile> profiles = _entity.Profiles.ToList();
                return profiles;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}