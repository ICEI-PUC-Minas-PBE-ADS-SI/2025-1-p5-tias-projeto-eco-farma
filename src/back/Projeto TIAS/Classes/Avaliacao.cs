namespace Projeto_TIAS.Classes
{
    public class Avaliacao
    {
        public int id_avaliacao { get; set; }
        public int id_cliente { get; set; }
        public string? autor { get; set; }
        public string? avaliacao { get; set; }
        public double nota { get; set; }
    }
}
