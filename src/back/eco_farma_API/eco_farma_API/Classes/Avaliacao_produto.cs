using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace eco_farma_API.Classes
{
    [Table("avaliacao_produto")]
    public class Avaliacao_produto
    {
        [Key]
        public int id_avaliacao_produto { get; set; }
        [ForeignKey("Produto")]
        public int id_produto { get; set; }
        [ForeignKey("Cliente")]
        public int id_cliente { get; set; }
        public string? autor { get; set; }
        public string? avaliacao { get; set; }
        public double nota { get; set; }
        public string? anexo { get; set; }
    }
}
