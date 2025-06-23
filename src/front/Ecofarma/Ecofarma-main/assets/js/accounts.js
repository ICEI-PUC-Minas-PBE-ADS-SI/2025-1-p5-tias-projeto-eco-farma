
document.addEventListener("DOMContentLoaded", async () => {
  // === Dados do usuário ===
  const API_URL = "http://localhost:5068/api/cliente";
  const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
  const idCliente = usuarioLogado?.dadosPapel?.id_cliente;

  if (!usuarioLogado || !usuarioLogado.dadosPapel) return;

  const dados = usuarioLogado.dadosPapel;

  // Saudação
  const saudacao = document.getElementById("saudacao-usuario");
  if (saudacao) saudacao.textContent = `Olá ${dados.nome || "Usuário"}!`;

  // Preencher inputs direto do localStorage (evita fetch extra se quiser)
  if (document.getElementById("input-nome")) document.getElementById("input-nome").value = dados.nome || "";
  if (document.getElementById("input-email")) document.getElementById("input-email").value = dados.email || "";
  if (document.getElementById("input-telefone")) document.getElementById("input-telefone").value = dados.telefone || "";
  if (document.getElementById("input-cpf")) document.getElementById("input-cpf").value = dados.cpf || "";

  if (document.getElementById("input-endereco")) document.getElementById("input-endereco").value = dados.endereco || "";
  if (document.getElementById("input-numero")) document.getElementById("input-numero").value = dados.numero || "";
  if (document.getElementById("input-cep")) document.getElementById("input-cep").value = dados.cep || "";

  // Endereço resumido
  if (document.getElementById("endereco-usuario")) {
    document.getElementById("endereco-usuario").innerHTML = `
      ${dados.endereco || "Sem endereço cadastrado"}<br>
      <a href="#" class="edit">Editar</a>`;
  }

  // Cupom
  carregarCupons();

  // Tabs
  const tabs = document.querySelectorAll(".account__tab");
  const contents = document.querySelectorAll(".tab__content");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active-tab"));
      contents.forEach(c => c.style.display = "none");

      tab.classList.add("active-tab");
      const targetId = tab.getAttribute("data-target");
      const targetContent = document.querySelector(targetId);
      if (targetContent) targetContent.style.display = "block";
    });
  });

  const activeTab = document.querySelector(".account__tab.active-tab");
  if (activeTab) {
    const targetId = activeTab.getAttribute("data-target");
    contents.forEach(c => c.style.display = "none");
    const activeContent = document.querySelector(targetId);
    if (activeContent) activeContent.style.display = "block";
  }

  // Atualizar perfil
  document.getElementById("form-editar-perfil")?.addEventListener("submit", async (e) => {
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
    if (response.ok) alert("Perfil atualizado com sucesso! Deslogue para atualizar os dados");
  });

  // Atualizar senha
  document.querySelector("#change-password form")?.addEventListener("submit", async (e) => {
    e.preventDefault();
    const senhaAtual = e.target[0].value;
    const novaSenha = e.target[1].value;
    const confirmar = e.target[2].value;

    if (novaSenha !== confirmar) return alert("As senhas não coincidem");

    const cliente = await fetch(`${API_URL}/${idCliente}`).then(res => res.json());
    if (cliente.senha !== senhaAtual) return alert("Senha atual incorreta!");

    cliente.senha = novaSenha;
    const response = await fetch(`${API_URL}/${idCliente}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cliente),
    });
    if (response.ok) alert("Senha atualizada com sucesso!");
  });

  // Atualizar endereço
  document.getElementById("form-endereco")?.addEventListener("submit", async (e) => {
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

});

// ====================== CUPOM ========================
function cadastrarCupom() {
  const codigo = document.getElementById("codigoCupom").value.trim();
  const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));
  if (!codigo || !usuario?.id_usuario) return alert("Preencha o código do cupom.");

  const data = { codigo: codigo, id_cliente: usuario.id_usuario };

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
      carregarCupons();
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


function carregarPedidos() {
  const container = document.querySelector("#orders .tab__body");
  container.innerHTML = "";

  const pedidos = JSON.parse(localStorage.getItem("meusPedidos")) || [];
  if (pedidos.length === 0) {
    container.innerHTML = "<p>Nenhum pedido encontrado.</p>";
    return;
  }

  // Somar o total geral
  const totalGeral = pedidos.reduce((sum, p) => sum + p.qtd_produto * p.preco_produto, 0);

  // Criar o container do pedido único
  const div = document.createElement("div");
  div.className = "pedido";
  div.style = `
    border: 1px solid #ccc;
    padding: 15px;
    border-radius: 10px;
    margin-bottom: 20px;
    background-color: #f9f9f9;
  `;

  const icone = "🛍️"; // sacola
  const data = new Date().toLocaleDateString("pt-BR"); // data atual, pois não temos timestamp real agrupado

  div.innerHTML = `
    <h4 style="margin-bottom: 5px;">${icone} Pedidos Feitos</h4>
    <p><strong>Data:</strong> ${data}</p>
    <p><strong>Total:</strong> R$ ${totalGeral.toFixed(2)}</p>
    <ul style="margin-top: 10px; padding-left: 20px;">
      ${pedidos.map(p => `<li>${p.qtd_produto}x ${p.nome_produto} - <strong>R$ ${(p.qtd_produto * p.preco_produto).toFixed(2)}</strong></li>`).join("")}
    </ul>
  `;

  container.appendChild(div);
}

document.addEventListener("DOMContentLoaded", carregarPedidos);

