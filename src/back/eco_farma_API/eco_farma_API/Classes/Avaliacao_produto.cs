namespace eco_farma_API.Classes
{
    public class Avaliacao_produto
    {
        public int id_avaliacao_produto { get; set; }
        public int id_produto { get; set; }
        public int id_cliente { get; set; }
        public string? autor { get; set; }
        public string? avaliacao { get; set; }
        public double nota { get; set; }
        public string? anexo { get; set; }
    }
}
