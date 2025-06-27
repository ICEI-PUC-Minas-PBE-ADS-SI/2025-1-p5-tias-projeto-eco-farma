document.addEventListener("DOMContentLoaded", async () => {
  // === Dados do usuário ===
  const API_URL = "https://ecofarma-f4ake0gkhwapfmh3.canadacentral-01.azurewebsites.net/api/entregador";
  const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
  const idEntregador = usuarioLogado?.dadosPapel?.id_entregador;

  if (!usuarioLogado || !usuarioLogado.dadosPapel) return;

  const dados = usuarioLogado.dadosPapel;


  // Atualizar senha
  document.querySelector("#change-password form")?.addEventListener("submit", async (e) => {
    e.preventDefault();
    const senhaAtual = e.target[0].value;
    const novaSenha = e.target[1].value;
    const confirmar = e.target[2].value;

    if (novaSenha !== confirmar) return alert("As senhas não coincidem");

    const entregador = await fetch(`${API_URL}/${idEntregador}`).then(res => res.json());
    if (entregador.senha !== senhaAtual) return alert("Senha atual incorreta!");

    entregador.senha = novaSenha;
    const response = await fetch(`${API_URL}/${idEntregador}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(entregador),
    });
    if (response.ok) alert("Senha atualizada com sucesso!");
  });

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

});

// Variável global para armazenar pedidos concluídos
const entregasConcluidas = [];

async function carregarPedidos() {
  const container = document.querySelector("#orders .tab__body");
  container.innerHTML = "";

  try {
    const response = await fetch('https://ecofarma-f4ake0gkhwapfmh3.canadacentral-01.azurewebsites.net/api/pedido/ultimos-tres');
    if (!response.ok) throw new Error('Erro ao buscar pedidos');

    const pedidos = await response.json();

    if (pedidos.length === 0) {
      container.innerHTML = "<p>Nenhum pedido encontrado.</p>";
      return;
    }

    pedidos.forEach(pedido => {
      const div = document.createElement("div");
      div.className = "pedido";
      div.style = `
        border: 1px solid #ccc;
        padding: 15px;
        border-radius: 10px;
        margin-bottom: 20px;
        background-color: #f9f9f9;
        position: relative;
      `;

      let status = "Aguardando entrega";

      div.innerHTML = `
        <h4 style="margin-bottom: 5px;">🛍️ Pedido</h4>
        <p><strong>Data:</strong> ${new Date().toLocaleDateString("pt-BR")}</p>
        <p><strong>Total:</strong> R$ ${(pedido.qtd_produto * pedido.preco_produto).toFixed(2)}</p>
        <p><strong>Status:</strong> <span class="status">${status}</span></p>
        <button class="btn-fazer-entrega" style="margin-right: 10px;background-color:blue;color:white;">Fazer Entrega</button>
        <button class="btn-concluir-entrega" style="background-color:green;color:white;">Concluir Entrega</button>
      `;

      // Evento "Fazer Entrega"
      div.querySelector('.btn-fazer-entrega').addEventListener('click', () => {
        div.style.backgroundColor = "#d0f0c0"; // verde claro
        div.querySelector('.status').innerText = "Fazendo entrega";
      });

      // Evento "Concluir Entrega"
      div.querySelector('.btn-concluir-entrega').addEventListener('click', () => {
        // Atualiza o status visual
        div.querySelector('.status').innerText = "Concluído";
        // Muda a cor
        div.style.backgroundColor = "#e0e0e0"; // cor cinza claro
        // Adiciona na lista de entregas concluídas
        const pedidoConcluido = {
          nome: pedido.nome,
          qtd: pedido.qtd_produto,
          preco: pedido.preco_produto,
          data: new Date().toLocaleDateString("pt-BR"),
          status: "Concluído"
        };
        entregasConcluidas.push(pedidoConcluido);
        // Navega para a aba "Entregas concluídas"
        document.querySelector('[data-target="#orders2"]').click();
        // Atualiza a lista de entregas concluídas
        carregarEntregasConcluidas();
      });

      container.appendChild(div);
    });
  } catch (error) {
    console.error(error);
    container.innerHTML = "<p>Erro ao carregar pedidos.</p>";
  }
}

function carregarEntregasConcluidas() {
  const container = document.querySelector("#orders2 .tab__body");
  container.innerHTML = "";

  if (entregasConcluidas.length === 0) {
    container.innerHTML = "<p>Nenhuma entrega concluída.</p>";
    return;
  }

  // Criar lista de entregas concluídas
  const ul = document.createElement("ul");
  entregasConcluidas.forEach(p => {
    const li = document.createElement("li");
    li.innerHTML = `Pedido - R$ ${(p.qtd * p.preco).toFixed(2)} - <strong>Status:</strong> ${p.status} (${p.data})`;
    ul.appendChild(li);
  });
  container.appendChild(ul);
}

// Carregar pedidos ao abrir a página
document.addEventListener("DOMContentLoaded", () => {
  carregarPedidos();
});

