using System.Security.Cryptography;
using System.Text;

namespace eco_farma_API.Funções
{
    public class Criptografia
    {

        public static string DecriptarSenha(string senhaCriptografada)
        {
            byte[] chave = Encoding.UTF8.GetBytes("chave_secreta".PadRight(32)); // AES-256
            byte[] iv = new byte[16]; // IV fixo para simplicidade (não recomendado em produção)

            using var aes = Aes.Create();
            aes.Key = chave;
            aes.IV = iv;

            var buffer = Convert.FromBase64String(senhaCriptografada);
            using var decryptor = aes.CreateDecryptor(aes.Key, aes.IV);
            using var ms = new MemoryStream(buffer);
            using var cs = new CryptoStream(ms, decryptor, CryptoStreamMode.Read);
            using var reader = new StreamReader(cs);

            return reader.ReadToEnd();
        }

    }
}
