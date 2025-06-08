async function carregarFarmacias() {
    try {
        const response = await fetch('http://localhost:5068/api/farmacia');
        if (!response.ok) {
            throw new Error('Erro ao buscar: ' + response.statusText);
        }
        const farmacias = await response.json();

        const tbody = document.querySelector('#tabela-farmacias tbody');
        tbody.innerHTML = '';

        farmacias.forEach(farmacia => {
            const tr = document.createElement('tr');

            tr.innerHTML = `
                        <td>${farmacia.id_farmacia}</td>
                        <td>${farmacia.nome}</td>
                        <td>${farmacia.email}</td>
                        <td>${farmacia.telefone}</td>
                        <td>${farmacia.cnpj}</td>
                        <td>${farmacia.endereco}</td>
                        <td>${farmacia.cep}</td>
                        <td>${farmacia.numero}</td>
                    `;

            tbody.appendChild(tr);
        });
    } catch (error) {
        alert(error.message);
    }
}