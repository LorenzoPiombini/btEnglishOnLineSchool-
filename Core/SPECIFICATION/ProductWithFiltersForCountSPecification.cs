using Core.Entities;

namespace Core.SPECIFICATION
{
    public class ProductWithFiltersForCountSPecification : BaseSpecification<Product>
    {
        public ProductWithFiltersForCountSPecification(ProductSpecParam productParams) 
        : base(x =>
            (!productParams.TypeId.HasValue || x.ProductTypeId == productParams.TypeId)
        
        )
        {
        }
    }
}