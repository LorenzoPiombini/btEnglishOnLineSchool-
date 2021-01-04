using System.Collections.Generic;
using System.Threading.Tasks;
using Core.Entities;
using Core.SPECIFICATION;

namespace Core.Interfaces
{
    public interface IGenericRepository<T> where T : BaseEntity
    {
         Task<T> GetByIdAsync(int id);
         Task<IReadOnlyList<T>> ListAllAsync();
         Task<T> GetEntitiesWithSpec(ISpecification<T> spec);
         Task<IReadOnlyList<T>> ListAsync(ISpecification<T> spec);

         Task<int> CountAsync(ISpecification<T> spec);

    }
}