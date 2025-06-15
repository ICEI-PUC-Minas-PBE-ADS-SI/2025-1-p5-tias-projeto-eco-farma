import api from '../services/Api.js';


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
};