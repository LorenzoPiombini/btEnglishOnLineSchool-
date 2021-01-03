using API.Dtos;
using AutoMapper;
using Core.Entities;

namespace API.Helper
{
    public class MappingProfiles : Profile
    {
         public MappingProfiles()
         {
             CreateMap<Product, ProductToReturnDTO>()
             .ForMember(d => d.ProductType, o => o.MapFrom(s => s.ProductType.Name))
             .ForMember(d => d.url, o => o.MapFrom<ProductUrlResolver>());
         }
    }
}