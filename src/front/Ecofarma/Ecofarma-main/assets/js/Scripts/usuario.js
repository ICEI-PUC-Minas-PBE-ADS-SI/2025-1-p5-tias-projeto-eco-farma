import api from '../services/Api.js';


async function carregarUsuarios() {
    try {
        const usuarios = await api.usuario.getAll();
        return usuarios;
    } catch (error) {
        console.error('Erro ao carregar usuários:', error);
        throw error;
    }
}


async function buscarUsuarioPorId(id) {
    try {
        const usuario = await api.usuario.getById(id);
        return usuario;
    } catch (error) {
        console.error(`Erro ao buscar usuário com ID ${id}:`, error);
        throw error;
    }
}

async function criarUsuario(usuarioData) {
    try {
        const novoUsuario = await api.usuario.create(usuarioData);
        return novoUsuario;
    } catch (error) {
        console.error('Erro ao criar usuário:', error);
        throw error;
    }
}


async function atualizarUsuario(id, usuarioData) {
    try {
        await api.usuario.update(id, usuarioData);
        return true;
    } catch (error) {
        console.error(`Erro ao atualizar usuário com ID ${id}:`, error);
        throw error;
    }
}

async function excluirUsuario(id) {
    try {
        await api.usuario.delete(id);
        return true;
    } catch (error) {
        console.error(`Erro ao excluir usuário com ID ${id}:`, error);
        throw error;
    }
}

export default {
    carregarUsuarios,
    buscarUsuarioPorId,
    criarUsuario,
    atualizarUsuario,
    excluirUsuario
};