/* import api from '../services/Api.js';

async function carregarProdutos() {
    try {
        const produtos = await api.produto.getAll();
        return produtos;
    } catch (error) {
        console.error('Erro ao carregar produtos:', error);
        throw error;
    }
}

async function buscarProdutoPorId(id) {
    try {
        const produto = await api.produto.getById(id);
        return produto;
    } catch (error) {
        console.error(`Erro ao buscar produto com ID ${id}:`, error);
        throw error;
    }
}

async function criarProduto(produtoData) {
    try {
        const novoProduto = await api.produto.create(produtoData);
        return novoProduto;
    } catch (error) {
        console.error('Erro ao criar produto:', error);
        throw error;
    }
}

async function atualizarProduto(id, produtoData) {
    try {
        await api.produto.update(id, produtoData);
        return true;
    } catch (error) {
        console.error(`Erro ao atualizar produto com ID ${id}:`, error);
        throw error;
    }
}

async function excluirProduto(id) {
    try {
        await api.produto.delete(id);
        return true;
    } catch (error) {
        console.error(`Erro ao excluir produto com ID ${id}:`, error);
        throw error;
    }
}

export default {
    carregarProdutos,
    buscarProdutoPorId,
    criarProduto,
    atualizarProduto,
    excluirProduto
}; */


window.onload = carregarProdutos;

async function salvarProduto() {
    const formData = new FormData();

    // Pega valores do formulário
    formData.append("nome", document.getElementById("produto_nome").value);
    formData.append("categoria", document.getElementById("produto_categoria").value);
    formData.append("descricao", document.getElementById("produto_descricao").value);
    formData.append("preco", document.getElementById("produto_preco").value);
    formData.append("estoque", document.getElementById("produto_estoque").value);

    // Pega imagem
    const imagemInput = document.getElementById("produto_anexo");
    if (imagemInput.files.length > 0) {
        formData.append("imagem", imagemInput.files[0]); // nome deve bater com parâmetro no C#
    }

    // Pega o ID da farmácia do localStorage (ou valor fixo se não existir)
    const idFarmacia = localStorage.getItem("id_farmacia") || "99";
    formData.append("id_farmacia", idFarmacia);

    try {
        const response = await fetch("http://localhost:5068/api/produto", {
            method: "POST",
            body: formData // sem headers — o navegador define boundary do multipart
        });

        if (response.ok) {
            const resultado = await response.json();
            alert("Produto cadastrado! ID: " + resultado.id_produto);
            location.reload(); // 🔄 Recarrega a página após o alerta
        }
        else {
            const erro = await response.text();
            alert("Erro ao cadastrar o produto:\n" + erro);
        }
    } catch (e) {
        alert("Erro de conexão com a API:\n" + e.message);
    }
}


// Estado global para filtros atuais e página atual
let filtrosAtuais = {
  categoria: '',
  precoMin: '',
  precoMax: '',
  pagina: 1
};

// Função para carregar produtos da API com filtros e paginação
async function carregarProdutos(pagina = 1) {
  try {
    filtrosAtuais.pagina = pagina;

    let url = `http://localhost:5068/api/produto/filtrar?pagina=${pagina}&tamanhoPagina=16`;

    if (filtrosAtuais.categoria) {
      url += `&categoria=${encodeURIComponent(filtrosAtuais.categoria)}`;
    }
    if (filtrosAtuais.precoMin !== '') {
      url += `&precoMin=${filtrosAtuais.precoMin}`;
    }
    if (filtrosAtuais.precoMax !== '') {
      url += `&precoMax=${filtrosAtuais.precoMax}`;
    }

    const response = await fetch(url);

    if (!response.ok) throw new Error("Erro ao buscar produtos");

    const dados = await response.json();
    const produtos = dados.produtos || dados;
    const total = dados.total || produtos.length;

    const container = document.getElementById("container-produtos");
    container.innerHTML = "";

    if (produtos.length === 0) {
      container.innerHTML = '<p>Nenhum produto encontrado.</p>';
      document.querySelector(".total__products span").textContent = 0;
      document.getElementById("paginacao").innerHTML = '';
      return;
    }

    produtos.forEach(produto => {
      const card = criarCardProduto(produto);
      container.appendChild(card);
    });

    atualizarPaginacao(pagina, total);
    document.querySelector(".total__products span").textContent = total;

  } catch (erro) {
    console.error("Erro ao carregar produtos:", erro);
  }
}

// Atualiza o estado dos filtros e recarrega produtos na página 1
function aplicarFiltros() {
  filtrosAtuais.categoria = document.getElementById('categoriaFiltro').value;

  const precoMinRaw = document.getElementById('precoMin').value;
  const precoMaxRaw = document.getElementById('precoMax').value;

  const precoMin = precoMinRaw !== '' ? parseFloat(precoMinRaw) : null;
  const precoMax = precoMaxRaw !== '' ? parseFloat(precoMaxRaw) : null;

  filtrosAtuais.precoMin = (precoMin !== null && !isNaN(precoMin)) ? precoMin : '';
  filtrosAtuais.precoMax = (precoMax !== null && !isNaN(precoMax)) ? precoMax : '';

  carregarProdutos(1);
}

// Função para atualizar os botões de paginação
function atualizarPaginacao(paginaAtual, totalProdutos) {
  const tamanhoPagina = 16;
  const totalPaginas = Math.ceil(totalProdutos / tamanhoPagina);
  const paginacao = document.getElementById("paginacao");
  paginacao.innerHTML = "";

  // Botão Anterior
  const btnAnterior = document.createElement("li");
  btnAnterior.innerHTML = `<a href="#" class="pagination__link icon">&laquo;</a>`;
  if (paginaAtual > 1) {
    btnAnterior.addEventListener("click", (e) => {
      e.preventDefault();
      carregarProdutos(paginaAtual - 1);
    });
  } else {
    btnAnterior.querySelector("a").classList.add("disabled");
  }
  paginacao.appendChild(btnAnterior);

  // Números das páginas (mostrar até 5 páginas centradas no atual)
  const maxLinks = 5;
  let startPage = Math.max(1, paginaAtual - Math.floor(maxLinks / 2));
  let endPage = Math.min(totalPaginas, startPage + maxLinks - 1);

  // Ajustar startPage se não houver páginas suficientes no fim
  startPage = Math.max(1, endPage - maxLinks + 1);

  for (let i = startPage; i <= endPage; i++) {
    const li = document.createElement("li");
    const link = document.createElement("a");
    link.href = "#";
    link.className = "pagination__link" + (i === paginaAtual ? " active" : "");
    link.textContent = i;

    link.addEventListener("click", (e) => {
      e.preventDefault();
      carregarProdutos(i);
    });

    li.appendChild(link);
    paginacao.appendChild(li);
  }

  // Botão Próximo
  const btnProximo = document.createElement("li");
  btnProximo.innerHTML = `<a href="#" class="pagination__link icon">&raquo;</a>`;
  if (paginaAtual < totalPaginas) {
    btnProximo.addEventListener("click", (e) => {
      e.preventDefault();
      carregarProdutos(paginaAtual + 1);
    });
  } else {
    btnProximo.querySelector("a").classList.add("disabled");
  }
  paginacao.appendChild(btnProximo);
}

// Função para criar o card do produto (já existente no seu código)
function criarCardProduto(produto) {
  const card = document.createElement("div");
  card.className = "product__item";

  const imagemSrc = produto.anexo
    ? `data:image/jpeg;base64,${produto.anexo}`
    : "assets/img/product-1-1.jpg";

  const badgeHtml = produto.estoque < 10
    ? `<div class="product__badge light-pink">Mais vendido!</div>`
    : '';

  card.innerHTML = `
    <div class="product__banner">
        <a href="details.html?id=${produto.id_produto}" class="product__images">
            <img src="${imagemSrc}" alt="${produto.nome}" class="product__img default" />
        </a>
        <div class="product__actions">
            <a href="details.html?id=${produto.id_produto}" class="action__btn" aria-label="Veja mais">
                <i class="fi fi-rs-eye"></i>
            </a>
        </div>
        ${badgeHtml}
    </div>
    <div class="product__content">
        <span class="product__category">${produto.categoria}</span>
        <a href="details.html?id=${produto.id_produto}">
            <h3 class="product__title">${produto.nome}</h3>
        </a>
        <div class="product__price flex">
            <span class="new__price">R$ ${(produto.preco / 100).toFixed(2)}</span>
        </div>
        <a href="#" class="action__btn cart__btn" aria-label="Adicionar">
            <i class="fi fi-rs-shopping-bag-add"></i>
        </a>
    </div>
  `;

  return card;
}

// Adiciona o evento no botão de filtro
document.getElementById('btnFiltrar').addEventListener('click', aplicarFiltros);

// Carrega produtos na página 1 ao iniciar
carregarProdutos(1);
