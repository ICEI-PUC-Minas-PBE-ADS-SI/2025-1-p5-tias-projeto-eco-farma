function buscarProdutos() {
    const categoria = document.getElementById('categoria').value;
    const precoMin = document.getElementById('precoMin').value;
    const precoMax = document.getElementById('precoMax').value;

    let url = `http://localhost:5068/api/produto/filtrar?`;

    if (categoria) url += `categoria=${encodeURIComponent(categoria)}&`;
    if (precoMin) url += `precoMin=${precoMin}&`;
    if (precoMax) url += `precoMax=${precoMax}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const resultado = document.getElementById('resultado');
            resultado.innerHTML = '';

            if (data.length === 0) {
                resultado.innerHTML = '<p>Nenhum produto encontrado.</p>';
                return;
            }

            data.forEach(p => {
                resultado.innerHTML += `<p><strong>${p.nome}</strong> - R$ ${p.preco.toFixed(2)} - Categoria: ${p.categoria}</p>`;
            });
        })
        .catch(error => console.error('Erro:', error));
}

function buscarPorFarmacia(idFarmacia) {
    fetch(`http://localhost:5068/api/produto/por-farmacia/${idFarmacia}`)
        .then(response => response.json())
        .then(data => {
            const produtosDiv = document.getElementById('produtos');
            produtosDiv.innerHTML = '';

            if (data.length === 0) {
                produtosDiv.innerHTML = '<p>Nenhum produto encontrado para esta farmácia.</p>';
                return;
            }

            data.forEach(p => {
                produtosDiv.innerHTML += `<p><strong>${p.nome}</strong> - R$ ${p.preco.toFixed(2)} - Estoque: ${p.estoque}</p>`;
            });
        })
        .catch(error => console.error('Erro:', error));
}