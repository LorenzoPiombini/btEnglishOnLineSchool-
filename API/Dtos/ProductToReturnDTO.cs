using Core.Entities;

namespace API.Dtos
{
    public class ProductToReturnDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        

        public string Description { get; set; }
        public decimal Price { get; set; }

        public string url {get; set;}

        public string ProductType { get; set; }
 
    }
}