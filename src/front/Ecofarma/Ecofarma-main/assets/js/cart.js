
let pontosUsados = 0;

function carregarCarrinho() {
  const lista = document.getElementById("lista-carrinho");
  lista.innerHTML = "";

  const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  let total = 0;

  carrinho.forEach((item, index) => {
    const subtotal = (item.preco * item.quantidade) / 100;
    total += subtotal;

    const div = document.createElement("div");
    div.classList.add("carrinho-item");
    div.innerHTML = `
      <img src="${item.imagem}" alt="produto"/>
      <div>
        <strong>${item.nome}</strong>
        <p>R$ ${(item.preco / 100).toFixed(2)}</p>
      </div>
      <input type="number" value="${item.quantidade}" min="1" onchange="atualizarQuantidade(${index}, this.value)" />
      <p>Subtotal: R$ ${subtotal.toFixed(2)}</p>
      <button onclick="removerItem(${index})">🗑️</button>
    `;
    lista.appendChild(div);
  });

  atualizarResumo(total);
}

function atualizarResumo(total) {
  const desconto = pontosUsados * 0.25;
  document.getElementById("total-produtos").textContent = `Total: R$ ${total.toFixed(2)}`;
  document.getElementById("desconto-cupom").textContent = `Desconto: R$ ${desconto.toFixed(2)}`;
  document.getElementById("total-final").textContent = `Total Final: R$ ${(total - desconto).toFixed(2)}`;
}

function atualizarQuantidade(index, novaQtd) {
  const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  carrinho[index].quantidade = parseInt(novaQtd);
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  carregarCarrinho();
}

function removerItem(index) {
  const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  carrinho.splice(index, 1);
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  carregarCarrinho();
}



function abrirModalCupons() {
  document.getElementById("modalCupons").style.display = "block";
  document.getElementById("overlayCupons").style.display = "block";
  document.getElementById("pontosTotais").innerHTML = `Você tem <strong>${pontosUsuario}</strong> pontos :)`;
  document.getElementById("pontosUsar").value = pontosUsados;
}

function fecharModal() {
  document.getElementById("modalCupons").style.display = "none";
  document.getElementById("overlayCupons").style.display = "none";
}

function confirmarPontos() {
  pontosUsados = parseInt(document.getElementById("pontosUsar").value) || 0;
  if (pontosUsados > pontosUsuario) {
    alert("Você não pode usar mais pontos do que possui.");
    return;
  }

  // Aqui você pode aplicar o desconto no resumo da compra
  const desconto = (pontosUsados * 0.25).toFixed(2);
  console.log(`Desconto aplicado: R$${desconto}`);
  
  fecharModal();
}


function aplicarCupons() {
  const usar = parseInt(document.getElementById("pontosUsar").value);
  if (usar >= 0 && usar <= pontosUsuario) {
    pontosUsados = usar;
    fecharModal();
    carregarCarrinho();
  } else {
    alert("Quantidade de pontos inválida!");
  }
}

document.addEventListener("DOMContentLoaded", carregarCarrinho);


async function mostrarModalPontos() {
  const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
  const id = usuarioLogado?.id_usuario;

  if (!id) return alert("Usuário não encontrado.");

  try {
    const response = await fetch(`http://localhost:5068/api/cupom/cliente/${id}`);
    const cupons = await response.json();

    const totalPontos = cupons.length;

    // Atualiza texto do modal
    document.getElementById("info-pontos").innerHTML = `Você tem <strong>${totalPontos}</strong> ponto${totalPontos !== 1 ? 's' : ''} :)`;
    document.getElementById("pontos-para-usar").max = totalPontos;

    // Aqui você pode abrir o modal (ex: remover hidden)
    document.querySelector(".modal-pontos").style.display = "block";
  } catch (e) {
    console.error("Erro ao buscar cupons:", e);
    alert("Erro ao buscar pontos.");
  }
}
