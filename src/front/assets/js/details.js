function mostrarDetalhes(idProduto) {
    fetch(`http://localhost:5068/api/produto/detalhes/${idProduto}`)
        .then(response => response.json())
        .then(data => {
            const detalhesDiv = document.getElementById('detalhes');
            detalhesDiv.innerHTML = `
                    <h2>${data.produto.nome}</h2>
                    <p>Categoria: ${data.produto.categoria}</p>
                    <p>Preço: R$ ${data.produto.preco.toFixed(2)}</p>
                    <p>Estoque: ${data.produto.estoque}</p>
                    <p>Descrição: ${data.produto.descricao}</p>
                    <hr/>
                    <h3>Avaliações:</h3>
                `;

            if (data.avaliacoes.length === 0) {
                detalhesDiv.innerHTML += '<p>Nenhuma avaliação disponível.</p>';
            } else {
                data.avaliacoes.forEach(av => {
                    detalhesDiv.innerHTML += `
                            <div style="margin-bottom:10px;">
                                <strong>${av.autor}</strong> - Nota: ${av.nota}<br/>
                                <p>${av.avaliacao}</p>
                            </div>
                        `;
                });
            }
        })
        .catch(error => {
            console.error("Erro ao carregar detalhes:", error);
        });
}