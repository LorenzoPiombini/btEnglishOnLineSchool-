using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Infrastructure.Data;
using Core.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Core.Interfaces;
using Core.SPECIFICATION;
using API.Dtos;
using AutoMapper;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]


    public class ProductsController : ControllerBase
    {

        private readonly IGenericRepository<Product> _productsRepo;
        private readonly IGenericRepository<ProductType> _productTypeRepo;
        private readonly IMapper _mapper;

        public ProductsController(IGenericRepository<Product> productsRepo, IGenericRepository<ProductType> productTypeRepo, IMapper mapper)
        {
            _mapper = mapper;
            _productTypeRepo = productTypeRepo;
            _productsRepo = productsRepo;

        }

        [HttpGet]
        public async Task<ActionResult<IReadOnlyList<ProductToReturnDTO>>> GetProducts()
        {
            var spec = new ProductsWithTypesSpecification();

            var products = await _productsRepo.ListAsync(spec);
            return Ok(_mapper.Map<IReadOnlyList<Product>, IReadOnlyList<ProductToReturnDTO>>(products) );
        }


        [HttpGet("{id}")]
        public async Task<ActionResult<ProductToReturnDTO>> GetProduct(int id)
        {
            var spec = new ProductsWithTypesSpecification(id);
            var product = await _productsRepo.GetEntitiesWithSpec(spec);
            return _mapper.Map<Product, ProductToReturnDTO>(product);
        }

        [HttpGet("types")]
        public async Task<ActionResult<IReadOnlyList<ProductType>>> GetProductTypes()
        {
            return Ok(await _productTypeRepo.ListAllAsync());

        }
    }
}