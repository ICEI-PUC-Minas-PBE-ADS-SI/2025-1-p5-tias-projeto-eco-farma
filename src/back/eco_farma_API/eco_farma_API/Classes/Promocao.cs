using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace eco_farma_API.Classes
{
    [Table("promocao")]
    public class Promocao
    {
        [Key]
        public int id_promocao { get; set; }
        [ForeignKey("Produto")]
        public int id_produto { get; set; }
        public double preco_promocao { get; set; }
    }
}
