using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using Core.Entities;

namespace Core.SPECIFICATION
{
    public class ProductsWithTypesSpecification : BaseSpecification<Product>
    {
        public ProductsWithTypesSpecification()
        {
            addInclude(x => x.ProductType);
        }

        public ProductsWithTypesSpecification(int id) : base(x => x.Id == id)
        {
             addInclude(x => x.ProductType);
        }

    
    }
}