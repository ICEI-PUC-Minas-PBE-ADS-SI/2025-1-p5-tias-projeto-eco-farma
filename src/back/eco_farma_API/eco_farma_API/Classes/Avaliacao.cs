using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace eco_farma_API.Classes
{
    public class Avaliacao
    {
        [Key]
        public int id_avaliacao { get; set; }
        [ForeignKey("Cliente")]
        public int id_cliente { get; set; }
        public string? autor { get; set; }
        public string? avaliacao { get; set; }
        public double nota { get; set; }
    }
}
