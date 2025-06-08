async function carregarPedidos() {
    try {
        const response = await fetch('http://localhost:5068/api/pedido');
        if (!response.ok) {
            throw new Error('Erro ao buscar: ' + response.statusText);
        }
        const pedidos = await response.json();

        const tbody = document.querySelector('#tabela-pedidos tbody');
        tbody.innerHTML = '';

        pedidos.forEach(pedido => {
            const tr = document.createElement('tr');

            tr.innerHTML = `
                        <td>${pedido.id_pedido}</td>
                        <td>${pedido.id_cliente}</td>
                        <td>${pedido.id_farmacia}</td>
                        <td>${pedido.id_produto}</td>
                        <td>${pedido.qtd_produto}</td>
                        <td>${pedido.preco_produto}</td>
                    `;

            tbody.appendChild(tr);
        });
    } catch (error) {
        alert(error.message);
    }
}