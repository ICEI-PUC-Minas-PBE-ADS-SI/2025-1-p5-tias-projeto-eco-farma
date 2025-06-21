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


function cadastrarCupom() {
  const codigo = document.getElementById("codigoCupom").value.trim();
  const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));

  if (!codigo || !usuario?.id_usuario) {
    alert("Preencha o código do cupom.");
    return;
  }

  const data = {
    codigo: codigo,
    id_cliente: usuario.id_usuario
  };

  fetch("http://localhost:5068/api/cupom", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  })
  .then(resp => {
    if (!resp.ok) throw new Error("Erro ao cadastrar cupom");
    return resp.json();
  })
  .then(() => {
    document.getElementById("codigoCupom").value = "";
    carregarCupons(); // Recarrega a lista
  })
  .catch(erro => alert(erro.message));
}

function carregarCupons() {
  const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));
  if (!usuario?.id_usuario) return;

  fetch(`http://localhost:5068/api/cupom/cliente/${usuario.id_usuario}`)
    .then(resp => resp.json())
    .then(cupons => {
      const lista = document.getElementById("lista-cupom");
      lista.innerHTML = "";

      if (cupons.length === 0) {
        lista.innerHTML = "<li>Nenhum cupom cadastrado.</li>";
      } else {
        cupons.forEach(c => {
          const li = document.createElement("li");
          li.textContent = c.codigo;
          lista.appendChild(li);
        });
      }
    });
}

window.addEventListener("DOMContentLoaded", carregarCupons);
