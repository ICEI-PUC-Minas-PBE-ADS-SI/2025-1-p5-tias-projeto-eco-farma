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


document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".account__tab");
  const contents = document.querySelectorAll(".tab__content");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      // Remove classe ativa de todas as abas
      tabs.forEach(t => t.classList.remove("active-tab"));

      // Oculta todos os conteúdos
      contents.forEach(c => c.style.display = "none");

      // Ativa a aba clicada
      tab.classList.add("active-tab");

      // Exibe o conteúdo correspondente
      const targetId = tab.getAttribute("data-target");
      const targetContent = document.querySelector(targetId);
      if (targetContent) {
        targetContent.style.display = "block";
      }
    });
  });

  // Garante que apenas a aba ativa seja exibida ao carregar
  const activeTab = document.querySelector(".account__tab.active-tab");
  if (activeTab) {
    const targetId = activeTab.getAttribute("data-target");
    document.querySelectorAll(".tab__content").forEach(c => c.style.display = "none");
    const activeContent = document.querySelector(targetId);
    if (activeContent) activeContent.style.display = "block";
  }
});


const API_URL = "http://localhost:5068/api/cliente";
const idCliente = JSON.parse(localStorage.getItem("usuarioLogado"))?.id_cliente;

async function carregarDadosCliente() {
  const response = await fetch(`${API_URL}/${idCliente}`);
  const cliente = await response.json();

  document.getElementById("input-nome").value = cliente.nome || "";
  document.getElementById("input-email").value = cliente.email || "";
  document.getElementById("input-telefone").value = cliente.telefone || "";
  document.getElementById("input-cpf").value = cliente.cpf || "";

  document.getElementById("input-endereco").value = cliente.endereco || "";
document.getElementById("input-numero").value = cliente.numero || "";
document.getElementById("input-cep").value = cliente.cep || "";

}

// Atualizar perfil
document.getElementById("form-editar-perfil").addEventListener("submit", async (e) => {
  e.preventDefault();

  const clienteAtualizado = {
    id_cliente: idCliente,
    nome: document.getElementById("input-nome").value,
    email: document.getElementById("input-email").value,
    telefone: document.getElementById("input-telefone").value,
    cpf: document.getElementById("input-cpf").value,
  };

  const response = await fetch(`${API_URL}/${idCliente}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(clienteAtualizado),
  });

  if (response.ok) alert("Perfil atualizado com sucesso!");
});

// Atualizar senha
document.querySelector("#change-password form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const senhaAtual = e.target[0].value;
  const novaSenha = e.target[1].value;
  const confirmar = e.target[2].value;

  if (novaSenha !== confirmar) {
    alert("As senhas não coincidem");
    return;
  }

  const cliente = await fetch(`${API_URL}/${idCliente}`).then(res => res.json());

  if (cliente.senha !== senhaAtual) {
    alert("Senha atual incorreta!");
    return;
  }

  cliente.senha = novaSenha;

  const response = await fetch(`${API_URL}/${idCliente}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(cliente),
  });

  if (response.ok) alert("Senha atualizada com sucesso!");
});

// Atualizar endereço
document.getElementById("form-endereco").addEventListener("submit", async (e) => {
  e.preventDefault();

  const endereco = document.getElementById("input-endereco").value;
  const numero = parseInt(document.getElementById("input-numero").value);
  const cep = parseInt(document.getElementById("input-cep").value);

  const cliente = await fetch(`${API_URL}/${idCliente}`).then(res => res.json());
  cliente.endereco = endereco;
  cliente.numero = numero;
  cliente.cep = cep;

  const response = await fetch(`${API_URL}/${idCliente}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(cliente),
  });

  if (response.ok) {
    alert("Endereço atualizado com sucesso!");
  } else {
    alert("Erro ao atualizar endereço.");
  }
});


// Inicialização
window.addEventListener("DOMContentLoaded", carregarDadosCliente);
