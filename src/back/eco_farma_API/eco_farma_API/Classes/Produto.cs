using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace eco_farma_API.Classes
{
    [Table("produto")]
    public class Produto
    {
        [Key]
        public int id_produto { get; set; }
        public string? nome { get; set; }
        public string? categoria { get; set; }
        public double preco { get; set; }
        public int estoque { get; set; }
        public string? descricao { get; set; }
        [ForeignKey("Farmacia")]
        public int id_farmacia { get; set; }
        public byte[]? anexo { get; set; }





    }
}
