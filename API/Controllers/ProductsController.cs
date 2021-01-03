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

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]


    public class ProductsController : ControllerBase
    {

        private readonly IGenericRepository<Product> _productsRepo;
        private readonly IGenericRepository<ProductType> _productTypeRepo;

        public ProductsController(IGenericRepository<Product> productsRepo, IGenericRepository<ProductType> productTypeRepo)
        {
            _productTypeRepo = productTypeRepo;
            _productsRepo = productsRepo;

        }

        [HttpGet]
        public async Task<ActionResult<List<ProductToReturnDTO>>> GetProducts()
        {
            var spec = new ProductsWithTypesSpecification();

            var products = await _productsRepo.ListAsync(spec);
            return products.Select(product => new ProductToReturnDTO
            {
            Id = product.Id,
            Name = product.Name,
            Description = product.Description,
            url = product.url,
            Price = product.Price,
            ProductType = product.ProductType.Name
            }).ToList();
        }


        [HttpGet("{id}")]
        public async Task<ActionResult<ProductToReturnDTO>> GetProduct(int id)
        {
            var spec = new ProductsWithTypesSpecification(id);
        var product = await _productsRepo.GetEntitiesWithSpec(spec);
        return new ProductToReturnDTO
        {
            Id = product.Id,
            Name = product.Name,
            Description = product.Description,
            url = product.url,
            Price = product.Price,
            ProductType = product.ProductType.Name


        };
        }

        [HttpGet("types")]
        public async Task<ActionResult<IReadOnlyList<ProductType>>> GetProductTypes()
        {
            return Ok(await _productTypeRepo.ListAllAsync());

        }
    }
}