function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

async function carregarDetalhesProduto(id) {
    try {
        const response = await fetch(`https://ecofarma-f4ake0gkhwapfmh3.canadacentral-01.azurewebsites.net/api/produto/${id}`);
        if (!response.ok) throw new Error("Produto não encontrado");

        const produto = await response.json();

        // Atualiza imagem principal
        document.querySelector(".details__img").src = produto.anexo
            ? `data:image/jpeg;base64,${produto.anexo}`
            : "assets/img/default.jpg";

        // Miniatura
        document.querySelector(".details__small-img").src = produto.anexo
            ? `data:image/jpeg;base64,${produto.anexo}`
            : "assets/img/default.jpg";

        // Título e preço
        document.querySelector(".details__title").textContent = produto.nome;
        const preco = (produto.preco / 100).toFixed(2).replace('.', ',');
        document.querySelector(".new__price").textContent = `R$ ${preco}`;

        // Descrição
        document.getElementById("info").textContent = produto.descricao || "Sem descrição disponível.";

        // Avaliações
        /* const lista = document.getElementById("lista-avaliacoes");
        lista.innerHTML = produto.avaliacoes?.length > 0
            ? produto.avaliacoes.map(av => `
                <li>
                    <p><strong>${av.autor}</strong> - Nota: ${av.nota}</p>
                    <p>${av.avaliacao}</p>
                </li>
              `).join('')
            : "<li>Nenhuma avaliação disponível.</li>"; */

        // HTML extra (frete, estoque e botão)
        const containerExtra = document.getElementById("info-produto-extra");
        let html = `<p class="frete-message">🚚 Frete grátis em todo o Brasil</p>`;

        if (produto.estoque > 0) {
            html += `
                <p class="stock-message">✔ Estoque disponível</p>
                <label for="quantidade">Quantidade:</label>
                <input type="number" id="quantidade" min="1" max="${produto.estoque}" value="1" class="input-quantidade" />
                <div class="details__action">
                    <a href="#" class="btn btn--sm" id="btnAddCarrinho">Adicionar no carrinho</a>
                </div>
            `;
            containerExtra.innerHTML = html;

            // Evento do botão de adicionar ao carrinho
            document.getElementById("btnAddCarrinho").addEventListener("click", function (e) {
                e.preventDefault();
                const quantidade = parseInt(document.getElementById("quantidade").value) || 1;
                adicionarAoCarrinho(produto, quantidade);
                //alert("Produto adicionado ao carrinho!");
            });

        } else {
            html += `<p style="color: red; font-weight: bold;">Produto fora de estoque</p>`;
            containerExtra.innerHTML = html;
        }

    } catch (error) {
        console.error(error);
        alert("Erro ao carregar detalhes do produto.");
    }
}


// Formulário de avaliação
const form = document.getElementById("form-avaliacao");
if (form) {
    form.addEventListener("submit", async function (e) {
        e.preventDefault();

        const autor = document.getElementById("autor").value;
        const avaliacao = document.getElementById("avaliacao").value;
        const nota = parseFloat(document.getElementById("nota").value);
        //const imagemInput = document.getElementById("imagem-avaliacao");

        await enviarAvaliacao({ autor, avaliacao, nota });

    });
}

async function enviarAvaliacao(data) {

    const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));

    if (!usuarioLogado || !usuarioLogado.id_usuario) {
        alert("Você precisa estar logado para enviar avaliações.");
        // opcional: redirecionar para login
        window.location.href = "/src/front/Ecofarma/Ecofarma-main/login-register.html";
    } else {
        const idProduto = getQueryParam("id");

        const payload = {
            id_produto: parseInt(idProduto),
            autor: data.autor,
            avaliacao: data.avaliacao,
            nota: data.nota,
            id_cliente: usuarioLogado.id_usuario
        };

        try {
            const response = await fetch("https://ecofarma-f4ake0gkhwapfmh3.canadacentral-01.azurewebsites.net/api/avaliacao_produto", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                alert("Avaliação enviada com sucesso!");
                location.reload(); // recarrega para exibir nova avaliação
            } else {
                alert("Erro ao enviar avaliação.");
            }
        } catch (err) {
            console.error(err);
            alert("Erro ao conectar com a API.");
        }
    }

}

// Inicialização
const produtoId = getQueryParam("id");
if (produtoId) {
    carregarDetalhesProduto(produtoId);
    carregarAvaliacoes(produtoId);
} else {
    alert("Produto não especificado.");
}


// Exemplo simples, adapte para sua forma real de armazenar login




async function carregarAvaliacoes(idProduto) {
    try {
        const response = await fetch(`https://ecofarma-f4ake0gkhwapfmh3.canadacentral-01.azurewebsites.net/api/avaliacao_produto/produto/${idProduto}`);
        if (!response.ok) throw new Error("Erro ao buscar avaliações");

        const avaliacoes = await response.json();
        const lista = document.getElementById("lista-avaliacoes");
        lista.innerHTML = "";

        if (avaliacoes.length > 0) {
            avaliacoes.forEach(av => {
                const item = document.createElement("li");
                item.className = "reviews__item";
                item.innerHTML = `
          <p class="reviews__author"><strong>${av.autor}</strong> - Nota: ${av.nota}</p>
          <p class="reviews__text">${av.avaliacao}</p>
        `;
                lista.appendChild(item);
            });
        } else {
            lista.innerHTML = "<li class='reviews__item'>Nenhuma avaliação disponível.</li>";

        }
    } catch (err) {
        console.error(err);
    }
}


const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
const nome = usuarioLogado?.dadosPapel?.nome;

if (nome && usuarioLogado?.id_usuario) {
    fetch(`https://ecofarma-f4ake0gkhwapfmh3.canadacentral-01.azurewebsites.net/api/cupom/cliente/${usuarioLogado.id_usuario}`)
        .then(response => response.json())
        .then(cupons => {
            const quantidadePontos = cupons.length;
            const span = document.getElementById('nome_info');
            span.textContent = `Olá ${nome}! Você tem um total de: ${quantidadePontos} ponto${quantidadePontos !== 1 ? 's' : ''}`;
            span.style.display = 'inline';
        })
        .catch(() => {
            // Se der erro, mostra só o nome
            const span = document.getElementById('nome_info');
            span.textContent = `Olá ${nome}! (Erro ao carregar pontos)`;
            span.style.display = 'inline';
        });
}

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

async function buscarProdutos() {
    const termo = document.getElementById("campoBusca").value.trim();
    const container = document.getElementById("sugestoesBusca");

    if (termo.length < 2) {
        container.style.display = "none";
        container.innerHTML = "";
        return;
    }

    try {
        const response = await fetch(`https://ecofarma-f4ake0gkhwapfmh3.canadacentral-01.azurewebsites.net/api/produto/busca?termo=${encodeURIComponent(termo)}`);
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


function adicionarAoCarrinho(produto, quantidade) {
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
    } else {
        exibirMensagemErro("Precisa de login para adicionar ao carrinho");
    }

}


function atualizarContadorCarrinho() {
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    const total = carrinho.reduce((soma, item) => soma + item.quantidade, 0);
    const contador = document.querySelector(".header__action-btn span.count");
    if (contador) {
        contador.textContent = total;
        contador.style.display = total > 0 ? "block" : "none";
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


