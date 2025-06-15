import api from '../services/Api.js';


async function carregarFarmacias() {
    try {
        const farmacias = await api.farmacia.getAll();
        return farmacias;
    } catch (error) {
        console.error('Erro ao carregar farmácias:', error);
        throw error;
    }
}

async function buscarFarmaciaPorId(id) {
    try {
        const farmacia = await api.farmacia.getById(id);
        return farmacia;
    } catch (error) {
        console.error(`Erro ao buscar farmácia com ID ${id}:`, error);
        throw error;
    }
}


async function criarFarmacia(farmaciaData) {
    try {
        const novaFarmacia = await api.farmacia.create(farmaciaData);
        return novaFarmacia;
    } catch (error) {
        console.error('Erro ao criar farmácia:', error);
        throw error;
    }
}


async function atualizarFarmacia(id, farmaciaData) {
    try {
        await api.farmacia.update(id, farmaciaData);
        return true;
    } catch (error) {
        console.error(`Erro ao atualizar farmácia com ID ${id}:`, error);
        throw error;
    }
}
async function excluirFarmacia(id) {
    try {
        await api.farmacia.delete(id);
        return true;
    } catch (error) {
        console.error(`Erro ao excluir farmácia com ID ${id}:`, error);
        throw error;
    }
}

export default {
    carregarFarmacias,
    buscarFarmaciaPorId,
    criarFarmacia,
    atualizarFarmacia,
    excluirFarmacia
};