import api from '../services/Api.js';

async function carregarProdutos() {
    try {
        const produtos = await api.produto.getAll();
        return produtos;
    } catch (error) {
        console.error('Erro ao carregar produtos:', error);
        throw error;
    }
}

async function buscarProdutoPorId(id) {
    try {
        const produto = await api.produto.getById(id);
        return produto;
    } catch (error) {
        console.error(`Erro ao buscar produto com ID ${id}:`, error);
        throw error;
    }
}

async function criarProduto(produtoData) {
    try {
        const novoProduto = await api.produto.create(produtoData);
        return novoProduto;
    } catch (error) {
        console.error('Erro ao criar produto:', error);
        throw error;
    }
}

async function atualizarProduto(id, produtoData) {
    try {
        await api.produto.update(id, produtoData);
        return true;
    } catch (error) {
        console.error(`Erro ao atualizar produto com ID ${id}:`, error);
        throw error;
    }
}

async function excluirProduto(id) {
    try {
        await api.produto.delete(id);
        return true;
    } catch (error) {
        console.error(`Erro ao excluir produto com ID ${id}:`, error);
        throw error;
    }
}

export default {
    carregarProdutos,
    buscarProdutoPorId,
    criarProduto,
    atualizarProduto,
    excluirProduto
};