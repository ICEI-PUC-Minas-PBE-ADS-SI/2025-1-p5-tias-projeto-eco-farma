/* import api from '../services/Api.js';


async function carregarClientes() {
    try {
        const clientes = await api.cliente.getAll();
        return clientes;
    } catch (error) {
        console.error('Erro ao carregar clientes:', error);
        throw error;
    }
}


async function buscarClientePorId(id) {
    try {
        const cliente = await api.cliente.getById(id);
        return cliente;
    } catch (error) {
        console.error(`Erro ao buscar cliente com ID ${id}:`, error);
        throw error;
    }
}


async function criarCliente(clienteData) {
    try {
        const novoCliente = await api.cliente.create(clienteData);
        return novoCliente;
    } catch (error) {
        console.error('Erro ao criar cliente:', error);
        throw error;
    }
}


async function atualizarCliente(id, clienteData) {
    try {
        await api.cliente.update(id, clienteData);
        return true;
    } catch (error) {
        console.error(`Erro ao atualizar cliente com ID ${id}:`, error);
        throw error;
    }
}


async function excluirCliente(id) {
    try {
        await api.cliente.delete(id);
        return true;
    } catch (error) {
        console.error(`Erro ao excluir cliente com ID ${id}:`, error);
        throw error;
    }
}

export default {
    carregarClientes,
    buscarClientePorId,
    criarCliente,
    atualizarCliente,
    excluirCliente
}; */


async function salvarCliente() {
    /* const senhaCriptografada = CryptoJS.AES.encrypt(
        document.getElementById("cliente_senha").value,
        "chave-secreta"
    ).toString();

 */
    //const key = CryptoJS.enc.Utf8.parse("chave_secreta".padEnd(32, " "));
    //const iv = CryptoJS.enc.Utf8.parse("\0".repeat(16));

    /* const encrypted = CryptoJS.AES.encrypt(
        document.getElementById("cliente_senha").value,
        key,
        { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 }
    ).ciphertext.toString(CryptoJS.enc.Base64); */

    const data = {
        nome: document.getElementById("cliente_nome").value,
        sexo: document.getElementById("cliente_sexo").value,
        data_nasc: document.getElementById("cliente_data_nasc").value,
        email: document.getElementById("cliente_email").value,
        endereco: document.getElementById("cliente_endereco").value,
        telefone: document.getElementById("cliente_telefone").value,
        cpf: document.getElementById("cliente_cpf").value,
        senha: document.getElementById("cliente_senha").value,
        cep: parseInt(document.getElementById("cliente_cep").value),
        numero: parseInt(document.getElementById("cliente_numero").value),
        //id_cliente: parseInt(document.getElementById("id_cliente").value)
    };

    try {

        const response = await fetch("http://localhost:5068/api/cliente", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        //Mensagem não obrigatória
        if (response.ok) {
            alert("Cliente cadastrado com sucesso! Acesse a página de login para entrar no site");
            window.location.href = "/src/front/Ecofarma/Ecofarma-main/login-register.html";
        } else {
            const erro = await response.text();
            alert("Erro ao cadastrar cliente:\n" + erro);
        }
    } catch (e) {
        alert("Erro de conexão com a API:\n" + e.message);
    }


}