document.addEventListener("DOMContentLoaded", () => {
  const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
  if (!usuarioLogado || !usuarioLogado.dadosPapel) return;

  const dados = usuarioLogado.dadosPapel;

  // Atualiza o h3 com o nome do usuário
  const saudacao = document.getElementById("saudacao-usuario");
  if (saudacao) {
    saudacao.textContent = `Olá ${dados.nome || "Usuário"}!`;
  }

  // Nome no campo de perfil
  const nomeInput = document.getElementById("input-nome");
  if (nomeInput) nomeInput.value = dados.nome || "";

  // Endereço
  const enderecoDiv = document.getElementById("endereco-usuario");
  if (enderecoDiv) {
    enderecoDiv.innerHTML = `
      ${dados.endereco || "Sem endereço cadastrado"}<br>
      <a href="#" class="edit">Editar</a>
    `;
  }


  const emailInput = document.getElementById("input-email");
  if (emailInput) emailInput.value = dados.email || "";

  const telefoneInput = document.getElementById("input-telefone");
  if (telefoneInput) telefoneInput.value = dados.telefone || "";

  const cpfInput = document.getElementById("input-cpf");
  if (cpfInput) cpfInput.value = dados.cpf || "";

  // Exemplo de endereço (se tiver)
   // Preenche os dados do endereço
  const enderecoTexto = document.getElementById("endereco-texto");
  if (enderecoTexto) enderecoTexto.textContent = dados.endereco || "Não cadastrado";

  const numeroTexto = document.getElementById("numero-texto");
  if (numeroTexto) numeroTexto.textContent = dados.numero || "Não cadastrado";

  const cepTexto = document.getElementById("cep-texto");
  if (cepTexto) cepTexto.textContent = dados.cep || "Não cadastrado";

  // Outros campos...
});
