using System.ComponentModel.DataAnnotations;

namespace eco_farma_API.Classes
{
    public class Farmacia
    {
        [Key]

        public int id_farmacia { get; set; }
        public int numero { get; set; }
        public string? email { get; set; }
        public int cnpj { get; set; }
        public int telefone { get; set; }
        public int cep { get; set; }
        public string? endereco { get; set; }
        public string? nome { get; set; }
    }
}
