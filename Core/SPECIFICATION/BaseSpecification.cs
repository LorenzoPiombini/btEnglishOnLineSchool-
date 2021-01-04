
using System;
using System.Collections.Generic;
using System.Linq.Expressions;

namespace Core.SPECIFICATION
{
    public class BaseSpecification<T> : ISpecification<T>
    {
        public BaseSpecification()
        {
        }

        public BaseSpecification(Expression<Func<T, bool>> criteria)
        {
            Criteria = criteria;
            
        }

        public Expression<Func<T, bool>> Criteria { get; }
        public List<Expression<Func<T, object>>> Includes { get ; } = 
        new List<Expression<Func<T, object>>>();

        public Expression<Func<T, object>> Orderby {get; private set; }

        public Expression<Func<T, object>> OrderByDescending {get; private set;}

        public int Take  {get; private set;}

        public int Skip {get; private set;}

        public bool IsPaginigEnabled {get; private set;}

        protected void addInclude(Expression<Func<T, object>> includeExpression)
        {
           Includes.Add(includeExpression);
        }

        protected void AddOrderBy(Expression<Func<T, Object>> orderByExpression)
        {
            Orderby = orderByExpression;
        }  
        protected void AddOrderByDescending(Expression<Func<T, Object>> orderByDescending)
        {
            OrderByDescending = orderByDescending;
        }

        protected void ApplyPaging(int skip, int take)
        {
            Skip = Skip;
            Take = Take;
            IsPaginigEnabled  = true;

        }
        
    }
}