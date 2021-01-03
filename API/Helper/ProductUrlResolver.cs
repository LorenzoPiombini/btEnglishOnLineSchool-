using API.Dtos;
using AutoMapper;
using Core.Entities;
using Microsoft.Extensions.Configuration;

namespace API.Helper
{
    public class ProductUrlResolver : IValueResolver<Product, ProductToReturnDTO, string>
    {
        private readonly IConfiguration _config;
        public ProductUrlResolver(IConfiguration config)
        {
            _config = config;
        }

        public string Resolve(Product source, ProductToReturnDTO destination, string destMember, ResolutionContext context)
        {
            if(!string.IsNullOrEmpty(source.url))
            {
                return _config["ApiUrl"] + source.url;
            }

            return null;
        }
    }
}