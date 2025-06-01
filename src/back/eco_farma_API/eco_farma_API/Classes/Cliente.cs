using System.ComponentModel.DataAnnotations;

namespace eco_farma_API.Classes
{
    public class Cliente
    {
        [Key]
        public int id_cliente { get; set; }
        public string? nome { get; set; }
        public string? sexo { get; set; }
        public DateTime data_nasc { get; set; }
        public string? email { get; set; }
        public int telefone { get; set; }
        public int cpf { get; set; }
        public string? endereco { get; set; }
        public int cep { get; set; }
        public int numero { get; set; }


    }
}
