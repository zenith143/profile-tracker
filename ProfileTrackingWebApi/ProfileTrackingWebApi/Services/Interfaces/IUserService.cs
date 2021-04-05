using ProfileTrackingWebApi.DataModels;

namespace ProfileTrackingWebApi.Services.Interfaces
{
    public interface IUserService
    {
        UserResponseModel Login(string email, string password);
    }
}
