function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

async function carregarDetalhesProduto(id) {
    try {
        const response = await fetch(`http://localhost:5068/api/produto/${id}`);
        if (!response.ok) throw new Error("Produto não encontrado");

        const produto = await response.json();

        // Imagem principal
        const imgPrincipal = document.querySelector(".details__img");
        imgPrincipal.src = produto.anexo
            ? `data:image/jpeg;base64,${produto.anexo}`
            : "assets/img/default.jpg";

        // Imagem miniatura
        const imgPequena = document.querySelector(".details__small-img");
        imgPequena.src = produto.anexo
            ? `data:image/jpeg;base64,${produto.anexo}`
            : "assets/img/default.jpg";

        // Título
        document.querySelector(".details__title").textContent = produto.nome;

        // Preço
        const preco = (produto.preco / 100).toFixed(2).replace('.', ',');
        document.querySelector(".new__price").textContent = `R$ ${preco}`;

        // Descrição
        const info = document.getElementById("info");
        info.textContent = produto.descricao || "Sem descrição disponível.";

        // Avaliações
        const lista = document.getElementById("lista-avaliacoes");
        lista.innerHTML = ""; // limpa se recarregar

        if (produto.avaliacoes && produto.avaliacoes.length > 0) {
            produto.avaliacoes.forEach(av => {
                const item = document.createElement("li");
                item.innerHTML = `
      <p><strong>${av.autor}</strong> - Nota: ${av.nota}</p>
      <p>${av.avaliacao}</p>
    `;
                lista.appendChild(item);
            });
        } else {
            lista.innerHTML = "<li>Nenhuma avaliação disponível.</li>";
        }

        const containerExtra = document.getElementById("info-produto-extra");

// Frete fixo
let html = `<p class="frete-message">🚚 Frete grátis em todo o Brasil</p>`;

// Verifica estoque
if (produto.estoque > 0) {
    html += `
      <p class="stock-message">✔ Estoque disponível</p>
      <label for="quantidade">Quantidade:</label>
      <input type="number" id="quantidade" min="1" max="${produto.estoque}" value="1" class="input-quantidade" />
      <div class="details__action">
      </div>
    `;
} else {
    html += `<p style="color: red; font-weight: bold;">Produto fora de estoque</p>`;
}

containerExtra.innerHTML = html;


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
            const response = await fetch("http://localhost:5068/api/avaliacao_produto", {
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
        const response = await fetch(`http://localhost:5068/api/avaliacao_produto/produto/${idProduto}`);
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

if (nome) {
    // Se tiver nome, mostra o span com a mensagem e nome
    const span = document.getElementById('nome_info');
    span.textContent = `Olá ${nome}! Você tem um total de: 5 pontos`;
    span.style.display = 'inline'; // ou block, se preferir
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

