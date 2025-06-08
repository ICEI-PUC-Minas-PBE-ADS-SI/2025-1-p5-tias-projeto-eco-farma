const api_url = API_BASE_URL;

async function request(endpoint, method = "GET", body = null) {
    const options = {
        method, 
        headers: {
            "Content-Type": "application/json",
        },
    };
    if (body) options.body = JSON.stringify(body);
    const response = await fetch(`${api_url}/${endpoint}`, options);

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Erro na requisição");
    }
    return response.json();
}


export default {

    promocao: {
        getAll: () => request("Promocao"),
        getById: (id) => request(`Promocao/${id}`),
        create: (novaPromocao) => request("Promocao", "POST", novaPromocao),
        update: (id, promocaoAtualizada) => request(`Promocao/${id}`, "PUT", promocaoAtualizada),
        delete: (id) => request(`Promocao/${id}`, "DELETE"),
    },

    avaliacao: {
        getAll: () => request("Avaliacao"),
        getById: (id) => request(`Avaliacao/${id}`),
        create: (avaliacao) => request("Avaliacao", "POST", avaliacao),
        update: (id, avaliacaoAtualizada) => request(`Avaliacao/${id}`, "PUT", avaliacaoAtualizada),
        delete: (id) => request(`Avaliacao/${id}`, "DELETE"),
    },

    pedido: {
        getAll: () => request("Pedido"),
        getById: (id) => request(`Pedido/${id}`),
        create: (novoPedido) => request("Pedido", "POST", novoPedido),
        update: (id, pedidoAtualizado) => request(`Pedido/${id}`, "PUT", pedidoAtualizado),
        delete: (id) => request(`Pedido/${id}`, "DELETE"),
    },

    farmacia: {
        getAll: () => request("Farmacia"),
        getById: (id) => request(`Farmacia/${id}`),
        create: (novaFarmacia) => request("Farmacia", "POST", novaFarmacia),
        update: (id, farmaciaAtualizada) => request(`Farmacia/${id}`, "PUT", farmaciaAtualizada),
        delete: (id) => request(`Farmacia/${id}`, "DELETE"),
    },

    entrega: {
        getAll: () => request("Entrega"),
        getById: (id) => request(`Entrega/${id}`),
        create: (novaEntrega) => request("Entrega", "POST", novaEntrega),
        update: (id, entregaAtualizada) => request(`Entrega/${id}`, "PUT", entregaAtualizada),
        delete: (id) => request(`Entrega/${id}`, "DELETE"),
    },

    produto: {
        getAll: () => request("Produto"),
        getById: (id) => request(`Produto/${id}`),
        create: (novoProduto) => request("Produto", "POST", novoProduto),
        update: (id, produtoAtualizado) => request(`Produto/${id}`, "PUT", produtoAtualizado),
        delete: (id) => request(`Produto/${id}`, "DELETE"),
    },
    avaliacaoProduto: {
        getAll: () => request("Avaliacao_produto"),
        getById: (id) => request(`Avaliacao_produto/${id}`),
        create: (novaAvaliacao) => request("Avaliacao_produto", "POST", novaAvaliacao),
        update: (id, avaliacaoAtualizada) => request(`Avaliacao_produto/${id}`, "PUT", avaliacaoAtualizada),
        delete: (id) => request(`Avaliacao_produto/${id}`, "DELETE"),
    },

    usuario: {
        getAll: () => request("Usuario"),
        getById: (id) => request(`Usuario/${id}`),
        create: (novoUsuario) => request("Usuario", "POST", novoUsuario),
        update: (id, usuarioAtualizado) => request(`Usuario/${id}`, "PUT", usuarioAtualizado),
        delete: (id) => request(`Usuario/${id}`, "DELETE"),
    },

    entregador: {
        getAll: () => request("Entregador"),
        getById: (id) => request(`Entregador/${id}`),
        create: (novoEntregador) => request("Entregador", "POST", novoEntregador),
        update: (id, entregadorAtualizado) => request(`Entregador/${id}`, "PUT", entregadorAtualizado),
        delete: (id) => request(`Entregador/${id}`, "DELETE"),
    },
    cliente: {
        getAll: () => request("Cliente"),
        getById: (id) => request(`Cliente/${id}`),
        create: (novoCliente) => request("Cliente", "POST", novoCliente),
        update: (id, clienteAtualizado) => request(`Cliente/${id}`, "PUT", clienteAtualizado),
        delete: (id) => request(`Cliente/${id}`, "DELETE"),
    },
};