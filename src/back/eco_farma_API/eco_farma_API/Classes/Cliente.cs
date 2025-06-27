using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace eco_farma_API.Classes
{
    [Table("cliente")]
    public class Cliente
    {
        [Key]
        public int id_cliente { get; set; }
        public string? nome { get; set; }
        public string? sexo { get; set; }
        public string? data_nasc { get; set; }
        public string? email { get; set; }
        public string? telefone { get; set; }
        public string? cpf { get; set; }
        public string? endereco { get; set; }
        public string? cep { get; set; }
        public int numero { get; set; }
        public string? senha { get; set; }


    }
}
