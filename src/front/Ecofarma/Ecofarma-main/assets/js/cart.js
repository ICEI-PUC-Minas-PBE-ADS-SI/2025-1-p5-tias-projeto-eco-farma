
let pontosUsados = 0;
let pontosUsuario = 0;
let carrinho = [];

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
  document.getElementById("descontoFinal").textContent = `Desconto: R$ ${desconto}`;
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

  fecharModal();
  carregarCarrinho(); // recarrega o carrinho com desconto atualizado
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

    pontosUsuario = cupons.length; // ← define pontos globalmente
    document.getElementById("pontosTotais").innerHTML = `Você tem <strong>${pontosUsuario}</strong> ponto${pontosUsuario !== 1 ? 's' : ''} :)`;
    document.getElementById("pontosUsar").value = pontosUsados;
    document.getElementById("pontosUsar").max = pontosUsuario;

    // Exibe o modal
    document.getElementById("modalCupons").style.display = "block";
    document.getElementById("overlayCupons").style.display = "block";
  } catch (e) {
    console.error("Erro ao buscar cupons:", e);
    alert("Erro ao buscar pontos.");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const u = JSON.parse(localStorage.getItem("usuarioLogado"));
  if (u?.dadosPapel){
    const d = u.dadosPapel;
    document.getElementById("enderecoCampo").value = d.endereco;
    document.getElementById("cepCampo").value = d.cep;
  }
});


function fetchPontos(){
  // simula API
  const u = JSON.parse(localStorage.getItem("usuarioLogado"));
  const totalP = u?.dadosPapel?.pontos || 0;
  pontosUsuario = totalP;
  setupModal();
}

function setupModal(){
  document.getElementById("pontosDisponiveis").textContent = pontosUsuario;
  const sel = document.getElementById("pontosSelect");
  sel.innerHTML = "";
  for(let i=0;i<=pontosUsuario;i++){
    let o = new Option(`${i} pontos`, i);
    if (i===0) o.selected=true;
    sel.add(o);
  }
  document.getElementById("descontoFinal").textContent = "0.00";
  toggleEndereco(false);
  atualizarResumoFinalizacao();
  document.getElementById("overlayFinalizacao").style.display="block";
  document.getElementById("modalFinalizacao").style.display="block";
}

function toggleEndereco(show){
  document.getElementById("formEndereco").style.display = show?"block":"none";
}

function atualizarResumoFinalizacao(){
  let subtotal = carrinho.reduce((sum,i)=> sum + (i.preco*i.quantidade)/100,0);
  let pts = parseInt(document.getElementById("pontosSelect").value);
  if (pts>pontosUsuario) pts=pontosUsuario;
  let desconto = (pts * 0.25).toFixed(2);
  let total = (subtotal - desconto).toFixed(2);
  document.getElementById("pontosRestantes").textContent = pontosUsuario-pts;
  document.getElementById("descontoFinal").textContent = `Desconto: R$ ${desconto}`;
  //document.getElementById("descontoResumo").textContent = desconto;
  document.getElementById("subtotalResumo").textContent = `R$${subtotal.toFixed(2)}`;
  document.getElementById("totalFinal").textContent = `R$${total}`;
  // popula lista de produtos
  const ul = document.getElementById("listaResumo");
  ul.innerHTML = "";
  carrinho.forEach(i=>{
    let li = document.createElement("li");
    li.textContent = `${i.nome} `;
    let sp = document.createElement("span");
    sp.textContent = `R$${((i.preco*i.quantidade)/100).toFixed(2)}`; 
    li.appendChild(sp);
    ul.appendChild(li);
  });
}

function finalizarCompra(){
  // valida
  const entrega = document.querySelector('input[name="entrega"]:checked').value;
  const endereco = document.getElementById("enderecoCampo").value.trim();
  if (entrega==="domicilio" && endereco===""){
    return alert("Preencha o endereço!");
  }
  if (!document.getElementById("formaPagamento").value ||
      !document.getElementById("nomeCartao").value ||
      !document.getElementById("numeroCartao").value){
    return alert("Preencha os dados de pagamento!");
  }
  // salva pedidos individuais
  const pedidos = JSON.parse(localStorage.getItem("meusPedidos"))||[];
  carrinho.forEach(item=>{
    const novaCompra = {
      id_cliente: JSON.parse(localStorage.getItem("usuarioLogado")).id_usuario,
      id_farmacia: 1,
      id_produto: item.id,
      qtd_produto: item.quantidade,
      preco_produto: item.preco/100,
      //data: new Date().toISOString(),
      entrega: entrega,
      endereco: entrega==="domicilio"? endereco : null
    };
    pedidos.push(novaCompra);
  });
  localStorage.setItem("meusPedidos", JSON.stringify(pedidos));
  localStorage.removeItem("carrinho");
  alert("Compra realizada!");
  fecharModalFinalizacao();
  window.location.href = "/src/front/Ecofarma/Ecofarma-main/index.html";
}


function abrirModalFinalizacao() {
  document.getElementById("overlayFinalizacao").style.display = "block";
  document.getElementById("modalFinalizacao").style.display = "block";

  // Copiar dados do carrinho
  document.getElementById("subtotalResumo").textContent = document.getElementById("total-produtos").textContent.replace("Total: ", "");
  document.getElementById("descontoFinal").textContent = document.getElementById("desconto-cupom").textContent;
  document.getElementById("totalFinal").textContent = document.getElementById("total-final").textContent.replace("Total Final: ", "");

  // Preencher lista de produtos (exemplo, você pode adaptar com dados reais do localStorage)
  const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  const listaResumo = document.getElementById("listaResumo");
  listaResumo.innerHTML = "";
  carrinho.forEach(produto => {
  const li = document.createElement("li");
  const precoTotal = (produto.preco * produto.quantidade / 100).toFixed(2);
  li.innerHTML = `${produto.nome} <span>R$ ${precoTotal}</span>`;
  listaResumo.appendChild(li);
});

}


  function fecharModalFinalizacao() {
    document.getElementById("modalFinalizacao").style.display = "none";
    document.getElementById("overlayFinalizacao").style.display = "none";
  }
