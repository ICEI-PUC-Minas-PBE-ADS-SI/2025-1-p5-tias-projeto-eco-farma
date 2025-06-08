import api from '../services/Api.js';

async function carregarAvaliacoesProduto() {
    try {
        const avaliacoes = await api.avaliacaoProduto.getAll();
        return avaliacoes;
    } catch (error) {
        console.error('Erro ao carregar avaliações de produto:', error);
        throw error;
    }
}


async function buscarAvaliacaoProdutoPorId(id) {
    try {
        const avaliacao = await api.avaliacaoProduto.getById(id);
        return avaliacao;
    } catch (error) {
        console.error(`Erro ao buscar avaliação de produto com ID ${id}:`, error);
        throw error;
    }
}


async function criarAvaliacaoProduto(avaliacaoData) {
    try {
        const novaAvaliacao = await api.avaliacaoProduto.create(avaliacaoData);
        return novaAvaliacao;
    } catch (error) {
        console.error('Erro ao criar avaliação de produto:', error);
        throw error;
    }
}


async function atualizarAvaliacaoProduto(id, avaliacaoData) {
    try {
        await api.avaliacaoProduto.update(id, avaliacaoData);
        return true;
    } catch (error) {
        console.error(`Erro ao atualizar avaliação de produto com ID ${id}:`, error);
        throw error;
    }
}


async function excluirAvaliacaoProduto(id) {
    try {
        await api.avaliacaoProduto.delete(id);
        return true;
    } catch (error) {
        console.error(`Erro ao excluir avaliação de produto com ID ${id}:`, error);
        throw error;
    }
}

export default {
    carregarAvaliacoesProduto,
    buscarAvaliacaoProdutoPorId,
    criarAvaliacaoProduto,
    atualizarAvaliacaoProduto,
    excluirAvaliacaoProduto
};