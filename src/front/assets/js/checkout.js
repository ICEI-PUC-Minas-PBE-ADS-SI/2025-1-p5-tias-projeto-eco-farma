function verificarCupons() {
    const idCliente = 1; // Substitua pelo ID real do cliente logado

    fetch(`http://localhost:5068/api/cupom/cupons/${idCliente}`)
        .then(res => res.json())
        .then(data => {
            const cuponsDiv = document.getElementById('cupons');
            if (data.length === 0) {
                cuponsDiv.innerHTML = "<p>Você não possui cupons disponíveis.</p>";
            } else {
                cuponsDiv.innerHTML = "<h3>Seus Cupons:</h3>";
                data.forEach(c => {
                    cuponsDiv.innerHTML += `<p>Código: <strong>${c.codigo}</strong></p>`;
                });
            }
        })
        .catch(error => console.error("Erro ao buscar cupons:", error));
}

async function carregarCupons() {
    try {
        const response = await fetch('http://localhost:5068/api/cupom');
        if (!response.ok) {
            throw new Error('Erro ao buscar: ' + response.statusText);
        }
        const cupons = await response.json();

        const tbody = document.querySelector('#tabela-cupons tbody');
        tbody.innerHTML = '';

        cupons.forEach(cupom => {
            const tr = document.createElement('tr');

            tr.innerHTML = `
                        <td>${cupom.id_cupom}</td>
                        <td>${cupom.codigo}</td>
                        <td>${cupom.id_cliente}</td>
                    `;

            tbody.appendChild(tr);
        });
    } catch (error) {
        alert(error.message);
    }
}

//Se o pagamento der ok, chamar a função de salvarCompra()
async function salvarPedido() {
    const data = {
        qtd_produto: parseInt(document.getElementById("pedido_qtd_produto").value),
        preco_produto: parseFloat(document.getElementById("pedido_preco_produto").value),
        id_cliente: parseInt(document.getElementById("pedido_id_cliente").value),
        id_produto: parseInt(document.getElementById("pedido_id_produto").value),
        id_farmacia: parseInt(document.getElementById("pedido_id_farmacia").value)
    };

    const entregaSelecionada = document.getElementById("entregaCheckbox").checked;

    try {
        const url = entregaSelecionada
            ? "http://localhost:5068/api/pedido?idEntregador=1" // exemplo: entregador fixo ID=1
            : "http://localhost:5068/api/pedido";

        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            const resultado = await response.json();
            alert("Pedido salvo com sucesso. ID: " + resultado.id_pedido);
        } else {
            const erro = await response.text();
            alert("Erro ao salvar pedido:\n" + erro);
        }
    } catch (e) {
        alert("Erro de conexão com a API:\n" + e.message);
    }
}