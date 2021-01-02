using System.Collections.Generic;
using System.Threading.Tasks;
using Core.Entities;

namespace Core.Interfaces
{
    public interface IProductRepositiry
    {
       Task<Product> GetProductByIdAsync(int id);
        

        Task<IReadOnlyList<Product>> GetProductAsync();
        Task<IReadOnlyList<ProductType>> GetProductTypeAsync();

       
    }
}