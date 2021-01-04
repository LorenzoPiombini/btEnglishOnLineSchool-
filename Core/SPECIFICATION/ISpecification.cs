using System;
using System.Collections.Generic;
using System.Linq.Expressions;

namespace Core.SPECIFICATION
{
    public interface ISpecification<T>
    {
         Expression<Func<T, bool>> Criteria {get; }
         List<Expression<Func<T, object>>> Includes {get; }
         Expression<Func<T, object>> Orderby { get; } 
         Expression<Func<T, object>> OrderByDescending {get; }

         int Take { get;}
         int Skip { get;}
         bool IsPaginigEnabled { get;}
    }
}