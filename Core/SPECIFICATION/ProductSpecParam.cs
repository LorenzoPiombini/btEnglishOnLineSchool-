namespace Core.SPECIFICATION
{
    public class ProductSpecParam
    {
        private const int MaxPageSize = 50;
        public int PageIndex { get; set; } = 1;
        private int _pageSize = 1; //you will change it if the store gets bigger 
        public int PageSize
        {
            get => _pageSize;
            set => _pageSize = (value > MaxPageSize) ? MaxPageSize: value;
        }

        public int? TypeId { get; set; }
        public string Sort { get; set; }
    }
}