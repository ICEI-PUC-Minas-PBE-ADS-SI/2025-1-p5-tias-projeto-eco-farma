import api from '../services/Api.js';

async function carregarEntregadores() {
    try {
        const entregadores = await api.entregador.getAll();
        return entregadores;
    } catch (error) {
        console.error('Erro ao carregar entregadores:', error);
        throw error;
    }
}

async function buscarEntregadorPorId(id) {
    try {
        const entregador = await api.entregador.getById(id);
        return entregador;
    } catch (error) {
        console.error(`Erro ao buscar entregador com ID ${id}:`, error);
        throw error;
    }
}

async function criarEntregador(entregadorData) {
    try {
        const novoEntregador = await api.entregador.create(entregadorData);
        return novoEntregador;
    } catch (error) {
        console.error('Erro ao criar entregador:', error);
        throw error;
    }
}

async function atualizarEntregador(id, entregadorData) {
    try {
        await api.entregador.update(id, entregadorData);
        return true;
    } catch (error) {
        console.error(`Erro ao atualizar entregador com ID ${id}:`, error);
        throw error;
    }
}


async function excluirEntregador(id) {
    try {

        await api.entregador.delete(id);
        return true;
    } catch (error) {
        console.error(`Erro ao excluir entregador com ID ${id}:`, error);
        throw error;
    }
}

export default {
    carregarEntregadores,
    buscarEntregadorPorId,
    criarEntregador,
    atualizarEntregador,
    excluirEntregador
};