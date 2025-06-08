async function carregarUsuarios() {
    try {
        const response = await fetch('http://localhost:5068/api/usuario');
        if (!response.ok) {
            throw new Error('Erro ao buscar: ' + response.statusText);
        }
        const usuarios = await response.json();

        const tbody = document.querySelector('#tabela-usuarios tbody');
        tbody.innerHTML = '';

        usuarios.forEach(usuario => {
            const tr = document.createElement('tr');

            tr.innerHTML = `
                        <td>${usuario.id_usuario}</td>
                        <td>${usuario.email}</td>
                        <td>${usuario.papel}</td>
                        <td>${usuario.id_papel}</td>
                    `;

            tbody.appendChild(tr);
        });
    } catch (error) {
        alert(error.message);
    }
}

async function carregarClientes() {
    try {
        const response = await fetch('http://localhost:5068/api/cliente');
        if (!response.ok) {
            throw new Error('Erro ao buscar: ' + response.statusText);
        }
        const clientes = await response.json();

        const tbody = document.querySelector('#tabela-clientes tbody');
        tbody.innerHTML = '';

        clientes.forEach(cliente => {
            const tr = document.createElement('tr');

            tr.innerHTML = `
                        <td>${cliente.id_cliente}</td>
                        <td>${cliente.nome}</td>
                        <td>${cliente.sexo}</td>
                        <td>${cliente.data_nasc}</td>
                        <td>${cliente.telefone}</td>
                        <td>${cliente.email}</td>
                        <td>${cliente.cpf}</td>
                        <td>${cliente.endereco}</td>
                        <td>${cliente.cep}</td>
                        <td>${cliente.numero}</td>
                    `;

            tbody.appendChild(tr);
        });
    } catch (error) {
        alert(error.message);
    }
}