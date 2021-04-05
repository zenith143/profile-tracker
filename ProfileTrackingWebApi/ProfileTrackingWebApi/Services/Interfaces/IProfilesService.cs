using ProfileTrackingWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProfileTrackingWebApi.Services.Interfaces
{
    public interface IProfilesService
    {
        List<Profile> Get();
    }
}
