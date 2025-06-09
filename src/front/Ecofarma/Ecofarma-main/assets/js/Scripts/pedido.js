import api from '../services/Api.js';


async function carregarPedidos() {
    try {
        const pedidos = await api.pedido.getAll();
        return pedidos;
    } catch (error) {
        console.guerra('Erro ao carregar pedidos:', error);
        throw error;
    }
}


async function buscarPedidoPorId(id) {
    try {
        const pedido = await api.pedido.getById(id);
        return pedido;
    } catch (error) {
        console.error(`Erro ao buscar pedido com ID ${id}:`, error);
        throw error;
    }
}


async function criarPedido(pedidoData) {
    try {
        const novoPedido = await api.pedido.create(pedidoData);
        return novoPedido;
    } catch (error) {
        console.error('Erro ao criar pedido:', error);
        throw error;
    }
}


async function atualizarPedido(id, pedidoData) {
    try {
        await api.pedido.update(id, pedidoData);
        return true;
    } catch (error) {
        console.error(`Erro ao atualizar pedido com ID ${id}:`, error);
        throw error;
    }
}


async function excluirPedido(id) {
    try {
        await api.pedido.delete(id);
        return true;
    } catch (error) {
        console.error(`Erro ao excluir pedido com ID ${id}:`, error);
        throw error;
    }
}



export default {
    carregarPedidos,
    buscarPedidoPorId,
    criarPedido,
    atualizarPedido,
    excluirPedido
};