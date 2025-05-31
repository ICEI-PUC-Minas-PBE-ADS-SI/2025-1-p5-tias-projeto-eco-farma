namespace eco_farma_API.Classes
{
    public class Pedido
    {
        public int id_pedido { get; set; }
        public int id_cliente { get; set; }
        public int id_farmacia { get; set; }
        public int id_produto { get; set; }
        public int qtd_produto { get; set; }
        public double preco_produto { get; set; }
    }
}
