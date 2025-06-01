using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace eco_farma_API.Classes
{
    public class Pedido
    {
        [Key]
        public int id_pedido { get; set; }
        [ForeignKey("Cliente")]
        public int id_cliente { get; set; }
        [ForeignKey("Farmacia")]
        public int id_farmacia { get; set; }
        [ForeignKey("Produto")]
        public int id_produto { get; set; }
        public int qtd_produto { get; set; }
        public double preco_produto { get; set; }
    }
}
