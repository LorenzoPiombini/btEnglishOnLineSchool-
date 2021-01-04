using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using Core.Entities;

namespace Core.SPECIFICATION
{
    public class ProductsWithTypesSpecification : BaseSpecification<Product>
    {
        public ProductsWithTypesSpecification(ProductSpecParam productParams)
        : base(x =>
            (!productParams.TypeId.HasValue || x.ProductTypeId == productParams.TypeId)
        
        )
        {
            addInclude(x => x.ProductType);
            AddOrderBy(x => x.Name);
            //ApplyPaging(productParams.PageSize * (productParams.PageIndex - 1), productParams.PageSize);

            if (!string.IsNullOrEmpty(productParams.Sort))
            {
            switch (productParams.Sort)
            {
                case "priceAsc":
                AddOrderBy(p => p.Price);
                break;
                case "proceDesc":
                AddOrderBy(p => p.Price);
                break;
                default:
                AddOrderBy(p => p.Name);
                break;


            }

            }

            

        }

        public ProductsWithTypesSpecification(int id) : base(x => x.Id == id)
        {
             addInclude(x => x.ProductType);
        }

    
    }
}