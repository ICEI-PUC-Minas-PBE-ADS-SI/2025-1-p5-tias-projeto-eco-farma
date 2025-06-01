using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace eco_farma_API.Classes
{
    public class Usuario
    {
        [Key]
        public int id_usuario { get; set; }
        public string email { get; set; }
        public string senha { get; set; }
        public string papel { get; set; }
        public int id_papel { get; set; }
    }
}
