namespace eco_farma_API.Classes
{
    public class Produto
    {
        public int id_produto { get; set; }
        public string? nome { get; set; }
        public string? categoria { get; set; }
        public double preco { get; set; }
        public int estoque { get; set; }
        public string? anexo { get; set; }
        public string? descricao { get; set; }
        public int id_farmacia { get; set; }

    }
}
