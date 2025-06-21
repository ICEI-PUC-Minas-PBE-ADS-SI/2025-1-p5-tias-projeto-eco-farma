/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== Menu Show =====*/
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== Hide Show =====*/
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== IMAGE GALLERY ===============*/
function imgGallery() {
  const mainImg = document.querySelector(".details__img"),
    smallImg = document.querySelectorAll(".details__small-img");

  smallImg.forEach((img) => {
    img.addEventListener("click", function () {
      mainImg.src = this.src;
    });
  });
}

imgGallery();

/*=============== SWIPER CATEGORIES ===============*/
let swiperCategories = new Swiper(".categories__container", {
  spaceBetween: 24,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    350: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 24,
    },
    1400: {
      slidesPerView: 6,
      spaceBetween: 24,
    },
  },
});

/*=============== SWIPER PRODUCTS ===============*/
let swiperProducts = new Swiper(".new__container", {
  spaceBetween: 24,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },
});

/*=============== PRODUCTS TABS ===============*/
const tabs = document.querySelectorAll("[data-target]"),
  tabsContents = document.querySelectorAll("[content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabsContents.forEach((tabsContent) => {
      tabsContent.classList.remove("active-tab");
    });

    target.classList.add("active-tab");

    tabs.forEach((tab) => {
      tab.classList.remove("active-tab");
    });

    tab.classList.add("active-tab");
  });
});

// função para limpar o localStorage
function limparLocalStorage() {
  localStorage.clear();
  console.log("Local Storage limpo com sucesso.");

  // Opcional: redirecionar para login após limpar
  window.location.href = "login-register.html";
}

// Verifica se há usuário logado
const usuarioStr = localStorage.getItem("usuarioLogado");
if (usuarioStr) {
  const usuario = JSON.parse(usuarioStr);  // converte de string para objeto
  const idUsuario = usuario.id_usuario;

  if (idUsuario) {
    // Exibe o item "Minha conta" (exemplo)
    document.getElementById("minhaContaItem").style.display = "block";

    // Configura o link de "Sair"
    const authLink = document.getElementById("authLink");
    authLink.textContent = "Sair";
    authLink.href = "login-register.html"; // ou '#' se preferir
    authLink.onclick = function () {
      limparLocalStorage();
    };
  } else {
    // Se não tiver id_usuario, mostra "Entrar"
    const authLink = document.getElementById("authLink");
    authLink.textContent = "Entrar";
    authLink.href = "login-register.html";
    authLink.onclick = null;
  }
} else {
  // Se não tiver usuário logado, mostrar "Entrar"
  const authLink = document.getElementById("authLink");
  authLink.textContent = "Entrar";
  authLink.href = "login-register.html";
  authLink.onclick = null;
}




async function carregarProdutos(pagina = 1) {
  try {
    const response = await fetch(`http://localhost:5068/api/produto?pagina=${pagina}&tamanhoPagina=8`);

    if (!response.ok) throw new Error("Erro ao buscar produtos");

    const dados = await response.json();
    const produtos = dados.produtos;
    const total = dados.total;

    const container = document.getElementById("container-produtos");
    container.innerHTML = "";

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

function atualizarPaginacao(paginaAtual, totalProdutos) {
  const totalPaginas = Math.ceil(totalProdutos / 15);
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

  // Números das páginas
  for (let i = 1; i <= totalPaginas; i++) {
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


function criarCardProduto(produto) {
  const card = document.createElement("div");
  card.className = "product__item";

  const btn = document.createElement("a");
  btn.href = "#";
  btn.className = "action__btn cart__btn";
  btn.setAttribute("aria-label", "Adicionar");
  btn.innerHTML = `<i class="fi fi-rs-shopping-bag-add"></i>`;
  btn.addEventListener("click", e => {
    e.preventDefault();
    adicionarAoCarrinho(produto);
  });


  // Converte base64 (ou nulo para imagem padrão)
  const imagemSrc = produto.anexo
    ? `data:image/jpeg;base64,${produto.anexo}`
    : "assets/img/product-1-1.jpg"; // fallback

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
            <a href="details.html?id=${produto.id}">
                <h3 class="product__title">${produto.nome}</h3>
            </a>
            <div class="product__price flex">
                <span class="new__price">R$ ${(produto.preco / 100).toFixed(2)}</span>
                
            </div>
            <a href="#" class="action__btn cart__btn" aria-label="Adicionar" onclick='adicionarAoCarrinho(${JSON.stringify(produto)})'>
  <i class="fi fi-rs-shopping-bag-add"></i>
</a>

        </div>
    `;

  return card;

  //<span class="old__price">R$19.99</span> mexer nisso depois, nao é prioridade (promocao)
}

carregarProdutos(1);


const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
const nome = usuarioLogado?.dadosPapel?.nome;

if (nome) {
  // Se tiver nome, mostra o span com a mensagem e nome
  const span = document.getElementById('nome_info');
  span.textContent = `Olá ${nome}! Você tem um total de: 5 pontos`;
  span.style.display = 'inline'; // ou block, se preferir
}

// Suponha que isso venha da API após o login


/* function verificarSessao() {

  const dadosRecebidos = await response.json();

// Adiciona o horário de login
dadosRecebidos.loginTime = new Date().getTime();

// Salva no localStorage
localStorage.setItem("usuarioLogado", JSON.stringify(dadosRecebidos));
  const dados = localStorage.getItem("usuarioLogado");

  if (!dados) {
    redirecionarParaLogin();
    return;
  }

  const usuario = JSON.parse(dados);
  const agora = new Date().getTime();
  //const umaHora = 60 * 60 * 1000;
  const umaHora = 5 * 1000;  // 1 hora em ms

  if (!usuario.loginTime || agora - usuario.loginTime > umaHora) {
    localStorage.removeItem("usuario");
    alert("Sua sessão expirou. Faça login novamente.");
    redirecionarParaLogin();
  }
}

function redirecionarParaLogin() {
  window.location.href = "/src/front/Ecofarma/Ecofarma-main/login-register.html";
}

verificarSessao();
 */


async function buscarProdutos() {
  const termo = document.getElementById("campoBusca").value.trim();
  const container = document.getElementById("sugestoesBusca");

  if (termo.length < 2) {
    container.style.display = "none";
    container.innerHTML = "";
    return;
  }

  try {
    const response = await fetch(`http://localhost:5068/api/produto/busca?termo=${encodeURIComponent(termo)}`);
    if (!response.ok) throw new Error("Erro ao buscar sugestões");

    const resultados = await response.json();
    container.innerHTML = "";
    resultados.forEach(produto => {
      const imagem = produto.anexo
        ? `data:image/jpeg;base64,${produto.anexo}`
        : "assets/img/product-1-1.jpg";

      const item = document.createElement("div");
      item.className = "sugestao__item";
      item.innerHTML = `
        <img src="${imagem}" class="sugestao__img" alt="${produto.nome}" />
        <span class="sugestao__nome">${produto.nome}</span>
      `;
      item.onclick = () => {
        window.location.href = `details.html?id=${produto.id_produto}`;
      };
      container.appendChild(item);
    });

    container.style.display = resultados.length > 0 ? "block" : "none";
  } catch (e) {
    console.error(e);
  }
}


function adicionarAoCarrinho(produto) {
  const usuarioStr = localStorage.getItem("usuarioLogado");
  if (usuarioStr) {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    const produtoExistente = carrinho.find(p => p.id === produto.id_produto);

    if (produtoExistente) {
      produtoExistente.quantidade += 1;
    } else {
      carrinho.push({
        id: produto.id_produto,
        nome: produto.nome,
        preco: produto.preco,
        imagem: produto.anexo
          ? `data:image/jpeg;base64,${produto.anexo}`
          : "assets/img/product-1-1.jpg",
        quantidade: 1
      });
    }

    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    atualizarContadorCarrinho();
    exibirMensagemSucesso("Produto adicionado ao carrinho!");
  }else{
    exibirMensagemErro("Precisa de login para adicionar ao carrinho");
  }

}


function atualizarContadorCarrinho() {
  const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  const total = carrinho.reduce((acc, item) => acc + item.quantidade, 0);
  const contador = document.querySelector(".count");

  if (contador) {
    if (total > 0) {
      contador.textContent = total;
      contador.classList.add("visivel");
    } else {
      contador.textContent = '';
      contador.classList.remove("visivel");
    }
  }
}



document.addEventListener("DOMContentLoaded", atualizarContadorCarrinho);


function exibirMensagemSucesso(msg) {
  const alerta = document.createElement("div");
  alerta.textContent = msg;
  alerta.style.position = "fixed";
  alerta.style.top = "1rem";
  alerta.style.right = "1rem";
  alerta.style.backgroundColor = "#4CAF50";
  alerta.style.color = "white";
  alerta.style.padding = "0.75rem 1rem";
  alerta.style.borderRadius = "5px";
  alerta.style.zIndex = 1000;
  alerta.style.boxShadow = "0 2px 6px rgba(0,0,0,0.2)";
  document.body.appendChild(alerta);

  setTimeout(() => alerta.remove(), 3000);
}

function exibirMensagemErro(msg) {
  const alerta = document.createElement("div");
  alerta.textContent = msg;
  alerta.style.position = "fixed";
  alerta.style.top = "1rem";
  alerta.style.right = "1rem";
  alerta.style.backgroundColor = "rgb(255, 7, 7)";
  alerta.style.color = "white";
  alerta.style.padding = "0.75rem 1rem";
  alerta.style.borderRadius = "5px";
  alerta.style.zIndex = 1000;
  alerta.style.boxShadow = "0 2px 6px rgba(0,0,0,0.2)";
  document.body.appendChild(alerta);

  setTimeout(() => alerta.remove(), 3000);
}


document.getElementById("btnAddCarrinho").addEventListener("click", function (e) {
    e.preventDefault();
    adicionarAoCarrinho(produto);
});