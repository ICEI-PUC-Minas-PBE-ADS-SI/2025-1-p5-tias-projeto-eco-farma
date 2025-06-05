using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace eco_farma_API.Classes
{
    [Table("cupom")]
    public class Cupom
    {
        [Key]
        public int id_cupom { get; set; }
        public string? codigo { get; set; }
        [ForeignKey("Cliente")]
        public int id_cliente { get; set; }
    }
}
