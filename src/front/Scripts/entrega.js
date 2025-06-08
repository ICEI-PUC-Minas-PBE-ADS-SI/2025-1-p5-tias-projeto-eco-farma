import api from '../services/Api.js';


async function carregarEntregas() {
    try {
        const entregas = await api.entrega.getAll();
        return entregas;
    } catch (error) {
        console.error('Erro ao carregar entregas:', error);
        throw error;
    }
}


async function buscarEntregaPorId(id) {
    try {
        const entrega = await api.entrega.getById(id);
        return entrega;
    } catch (error) {
        console.error(`Erro ao buscar entrega com ID ${id}:`, error);
        throw error;
    }
}


async function criarEntrega(entregaData) {
    try {
        const novaEntrega = await api.entrega.create(entregaData);
        return novaEntrega;
    } catch (error) {
        console.error('Erro ao criar entrega:', error);
        throw error;
    }
}


async function atualizarEntrega(id, entregaData) {
    try {
        await api.entrega.update(id, entregaData);
        return true;
    } catch (error) {
        console.error(`Erro ao atualizar entrega com ID ${id}:`, error);
        throw error;
    }
}
async function excluirEntrega(id) {
    try {
        await api.entrega.delete(id);
        return true;
    } catch (error) {
        console.error(`Erro ao excluir entrega com ID ${id}:`, error);
        throw error;
    }
}

export default {
    carregarEntregas,
    buscarEntregaPorId,
    criarEntrega,
    atualizarEntrega,
    excluirEntrega
};