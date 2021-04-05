using ProfileTrackingWebApi.Models;
using ProfileTrackingWebApi.Services.Interfaces;
using System;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Web;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using ProfileTrackingWebApi.DataModels;

namespace ProfileTrackingWebApi.Services
{
    public class UserService : IUserService
    {
        private readonly ProfileTrackingDBEntities _entity;
        public UserService(
            ProfileTrackingDBEntities entities
            )
        {
            _entity = entities;
        }

        public UserResponseModel Login(string email, string password)
        {
            try
            {
                var user = _entity.Users.Where(x => x.Email == email && x.Password == password).FirstOrDefault();
                if (user != null)
                {
                    user.jwt = GenerateJwtToken(email);
                }
                _entity.SaveChanges();
                UserResponseModel result = new UserResponseModel();
                result.email = email;
                result.jwt = user.jwt;
                return result;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        private string GenerateJwtToken(string email)
        {
            var claimsdata = new[] {
                new Claim("email",email)
            };
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("asdfafadgfadgf"));
            var signIn = new SigningCredentials(key, SecurityAlgorithms.HmacSha256Signature);
            var token = new JwtSecurityToken(
                issuer: "",
                audience: "",
                signingCredentials: signIn,
                expires: DateTime.Now.AddMinutes(60),
                claims: claimsdata
                );
            var jwt = new JwtSecurityTokenHandler().WriteToken(token);
            return jwt;
        }
    }
}