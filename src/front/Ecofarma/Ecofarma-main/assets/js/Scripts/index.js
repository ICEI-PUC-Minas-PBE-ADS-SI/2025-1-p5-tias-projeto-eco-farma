let slideIndex = 0;
const porPagina = 3;

function atualizarCarrossel() {
    const wrapper = document.querySelector('.avaliacoes__wrapper');
    const cardWidth = document.querySelector('.avaliacoes__item')?.offsetWidth + 20 || 420;
    wrapper.style.transform = `translateX(-${slideIndex * cardWidth * porPagina}px)`;
}


document.querySelector('.avaliacoes__btn.next').onclick = () => {
    const maxSlide = Math.floor((avaliacoes.length - 1) / porPagina);
    if (slideIndex < maxSlide) {
        slideIndex++;
        atualizarCarrossel();
    }
};

document.querySelector('.avaliacoes__btn.prev').onclick = () => {
    if (slideIndex > 0) {
        slideIndex--;
        atualizarCarrossel();
    }
};


function renderAvaliacoes() {
    const container = document.getElementById('avaliacoes-container');
    container.innerHTML = '';
    avaliacoes.forEach(a => {
        const estrelas = '★'.repeat(a.nota) + '☆'.repeat(5 - a.nota);
        const div = document.createElement('div');
        div.className = 'avaliacoes__item';
        div.innerHTML = `
        <div class="avaliacoes__autor">${a.autor}</div>
        <div class="avaliacoes__nota">${estrelas}</div>
        <p>${a.avaliacao}</p>
      `;
        container.appendChild(div);
    });
    atualizarCarrossel();
}


async function carregarAvaliacoes() {
    try {
        const res = await fetch('https://ecofarma-f4ake0gkhwapfmh3.canadacentral-01.azurewebsites.net/api/avaliacao');
        if (!res.ok) throw new Error('Erro ao carregar avaliações');
        avaliacoes = await res.json();
        renderAvaliacoes();
    } catch (e) {
        console.error(e);
    }
}

async function enviarAvaliacao() {
    const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));
    const dados = usuarioLogado.dadosPapel;
    const avaliacao = document.getElementById('textoAvaliacao').value.trim();
    const nota = parseInt(document.getElementById('notaAvaliacao').value);
    const autor = dados.nome || 'Anônimo';
    const id_cliente = usuario.id_usuario;
    console.log(autor)

    if (!avaliacao || !nota || !id_cliente) {
        alert('Preencha todos os campos!');
        return;
    }

    const nova = { id_cliente: parseInt(id_cliente), autor, avaliacao, nota };
    try {
        const res = await fetch('https://ecofarma-f4ake0gkhwapfmh3.canadacentral-01.azurewebsites.net/api/avaliacao', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(nova)
        });
        if (!res.ok) throw new Error('Erro ao enviar avaliação');
        alert('Avaliação enviada!');
        carregarAvaliacoes();
    } catch (e) {
        console.error(e);
        alert('Erro ao enviar avaliação.');
    }
}

document.querySelectorAll(".category__item").forEach(item => {
    item.addEventListener("click", function (e) {
        e.preventDefault(); // evita o link padrão
        const id = this.getAttribute("data-id");
        if (id) {
            window.location.href = `shop.html?id_farmacia=${id}`;
        } else {
            window.location.href = "shop.html";
        }
    });
});


window.onload = carregarAvaliacoes;