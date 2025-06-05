using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace eco_farma_API.Classes
{
    [Table("entrega")]
    public class Entrega
    {
        [Key]
        public int id_entrega { get; set; }
        [ForeignKey("Pedido")]
        public int id_pedido { get; set; }
        [ForeignKey("Entregador")]
        public int id_entregador { get; set; }
    }
}
