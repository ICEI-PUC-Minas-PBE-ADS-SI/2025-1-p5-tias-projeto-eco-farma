using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace eco_farma_API.Classes
{
    [Table("farmacia")]
    public class Farmacia
    {
        [Key]

        public int id_farmacia { get; set; }
        public int numero { get; set; }
        public string? email { get; set; }
        public string? cnpj { get; set; }
        public string? telefone { get; set; }
        public string? cep { get; set; }
        public string? endereco { get; set; }
        public string? nome { get; set; }
        public string? senha { get; set; }
    }
}
