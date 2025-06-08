import api from '../services/Api.js';

async function carregarPromocoes() {

    try {
        const promocoes = await api.promocao.getAll();
        return promocoes;
    } catch (error) {
        console.error('Erro ao carregar promoções:', error);
        throw error;
    }
}

async function buscarPromocaoPorId(id) {
    try {
        const promocao = await api.promocao.getById(id);
        return promocao;
    } catch (error) {
        console.error(`Erro ao buscar promoção com ID ${id}:`, error);
        throw error;
    }
}

async function criarPromocao(promocaoData) {
    try {
        const novaPromocao = await api.promocao.create(promocaoData);
        return novaPromocao;
    } catch (error) {
        console.error('Erro ao criar promoção:', error);
        throw error;
    }
}


async function atualizarPromocao(id, promocaoData) {
    try {
        await api.promocao.update(id, promocaoData);
        return true;
    } catch (error) {
        console.error(`Erro ao atualizar promoção com ID ${id}:`, error);
        throw error;
    }
}


async function excluirPromocao(id) {
    try {
        await api.promocao.delete(id);
        return true;
    } catch (error) {
        console.error(`Erro ao excluir promoção com ID ${id}:`, error);
        throw error;
    }
}

export default {
    carregarPromocoes,
    buscarPromocaoPorId,
    criarPromocao,
    atualizarPromocao,
    excluirPromocao
};