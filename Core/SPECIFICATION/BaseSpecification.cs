using System;
using System.Collections.Generic;
using System.Linq.Expressions;

namespace Core.SPECIFICATION
{
    public class BaseSpecification<T> : ISpecification<T>
    {
        public BaseSpecification(Expression<Func<T, bool>> criteria, List<Expression<Func<T, object>>> includes)
        {
            Criteria = criteria;
            Includes = includes;
        }

        public Expression<Func<T, bool>> Criteria { get; }
        public List<Expression<Func<T, object>>> Includes { get ; } = 
        new List<Expression<Func<T, object>>>();
        protected void addInclude(Expression<Func<T, object>> includeExpression)
        {
           Includes.Add(includeExpression);
        }  
    }
}