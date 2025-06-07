//Esse arquivo é para fazer cópia para outros scripts
//Quando colocar nos arquivos prontos, colocar as mesmas variaveis (os que estão em document.getElementById("variavel"))
//Toda a API tem um link - http://localhost:5068 usado para todas as APIs do projeto
//O final deve ser de acordo com o /api/(nome da classe)
//Ultima alteração: 02/06/25
//Autor: Bianca Marques Teixeira

//-------------------------------------------------

//METODOS POST (SALVAR NO BANCO)

//-------------------------------------------------

async function salvarAvaliacao() {
    const data = {
        autor: document.getElementById("avaliacao_autor").value,
        avaliacao: document.getElementById("avaliacao_avaliacao").value,
        nota: parseFloat(document.getElementById("avaliacao_nota").value),
        //id_cliente: parseInt(document.getElementById("avaliacao_id_cliente").value)
    };

    try {

        const response = await fetch("http://localhost:5068/api/avaliacao", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        //Mensagem não obrigatória
        if (response.ok) {
            const resultado = await response.json();
            alert("Avaliação enviada com sucesso! ID: " + resultado.id_avaliacao);
        } else {
            const erro = await response.text();
            alert("Erro ao enviar avaliação:\n" + erro);
        }
    } catch (e) {
        alert("Erro de conexão com a API:\n" + e.message);
    }
}

async function salvarAvaliacaoProduto() {
    const data = {
        autor: document.getElementById("avaliacaop_autor").value,
        avaliacao: document.getElementById("avaliacaop_avaliacao").value,
        nota: parseFloat(document.getElementById("avaliacaop_nota").value),
        //Ver função para anexo
        anexo: document.getElementById("avaliacaop_anexo").value,
        id_cliente: parseInt(document.getElementById("avaliacaop_id_cliente").value),
        id_produto: parseInt(document.getElementById("avaliacaop_id_produto").value)
        //id_avaliacao_produto: parseInt(document.getElementById("avaliacaop_id_avaliacao_produto").value)
    };

    try {

        const response = await fetch("http://localhost:5068/api/avaliacao_produto", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        //Mensagem não obrigatória
        if (response.ok) {
            const resultado = await response.json();
            alert("Avaliação enviada com sucesso! ID: " + resultado.id_avaliacao_produto);
        } else {
            const erro = await response.text();
            alert("Erro ao enviar avaliação:\n" + erro);
        }
    } catch (e) {
        alert("Erro de conexão com a API:\n" + e.message);
    }
}

async function salvarCliente() {
    const senhaCriptografada = CryptoJS.AES.encrypt(
    document.getElementById("cliente_senha").value,
    "chave-secreta"
).toString();

    const data = {
        nome: document.getElementById("cliente_nome").value,
        sexo: document.getElementById("cliente_sexo").value,
        data_nasc: document.getElementById("cliente_data_nasc").value,
        email: document.getElementById("cliente_email").value,
        endereco: document.getElementById("cliente_endereco").value,
        telefone: document.getElementById("cliente_telefone").value,
        cpf: document.getElementById("cliente_cpf").value,
        senha: senhaCriptografada,
        cep: parseInt(document.getElementById("cliente_cep").value),
        numero: parseInt(document.getElementById("cliente_numero").value),
        //id_cliente: parseInt(document.getElementById("id_cliente").value)
    };

    try {

        const response = await fetch("http://localhost:5068/api/cliente", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        //Mensagem não obrigatória
        if (response.ok) {
            const resultado = await response.json();
            alert("Cliente cadastrado! ID: " + resultado.id_cliente);
        } else {
            const erro = await response.text();
            alert("Erro ao cadastrar cliente:\n" + erro);
        }
    } catch (e) {
        alert("Erro de conexão com a API:\n" + e.message);
    }
}

async function salvarEntregador() {
    const senhaCriptografada = CryptoJS.AES.encrypt(
    document.getElementById("entregador_senha").value,
    "chave-secreta"
).toString();

    const data = {
        nome: document.getElementById("entregador_nome").value,
        sexo: document.getElementById("entregador_sexo").value,
        data_nasc: document.getElementById("entregador_data_nasc").value,
        email: document.getElementById("entregador_email").value,
        endereco: document.getElementById("entregador_endereco").value,
        telefone: document.getElementById("entregador_telefone").value,
        cpf: document.getElementById("entregador_cpf").value,
        cep: parseInt(document.getElementById("entregador_cep").value),
        senha: senhaCriptografada,
        numero: parseInt(document.getElementById("entregador_numero").value),
        //id_entregador: parseInt(document.getElementById("id_entregador").value)
    };

    try {

        const response = await fetch("http://localhost:5068/api/entregador", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        //Mensagem não obrigatória
        if (response.ok) {
            const resultado = await response.json();
            alert("Entregador cadastrado! ID: " + resultado.id_entregador);
        } else {
            const erro = await response.text();
            alert("Erro ao cadastrar entregador:\n" + erro);
        }
    } catch (e) {
        alert("Erro de conexão com a API:\n" + e.message);
    }
}

async function salvarFarmacia() {
    const senhaCriptografada = CryptoJS.AES.encrypt(
    document.getElementById("farmacia_senha").value,
    "chave-secreta"
).toString();

    const data = {
        nome: document.getElementById("farmacia_nome").value,
        email: document.getElementById("farmacia_email").value,
        endereco: document.getElementById("farmacia_endereco").value,
        telefone: document.getElementById("farmacia_telefone").value,
        cnpj: document.getElementById("farmacia_cnpj").value,
        cep: parseInt(document.getElementById("farmacia_cep").value),
        numero: parseInt(document.getElementById("farmacia_numero").value),
        //id_farmacia: parseInt(document.getElementById("id_farmacia").value)
        senha: senhaCriptografada
    };

    try {

        const response = await fetch("http://localhost:5068/api/farmacia", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        //Mensagem não obrigatória
        if (response.ok) {
            const resultado = await response.json();
            alert("Farmacia cadastrado! ID:" + resultado.id_farmacia);
        } else {
            const erro = await response.text();
            alert("Erro ao cadastrar farmacia:\n" + erro);
        }
    } catch (e) {
        alert("Erro de conexão com a API:\n" + e.message);
    }
}

async function salvarProduto() {
    const data = {
        nome: document.getElementById("produto_nome").value,
        categoria: document.getElementById("produto_categoria").value,
        descricao: document.getElementById("produto_descricao").value,
        preco: parseFloat(document.getElementById("produto_preco").value),
        estoque: parseInt(document.getElementById("produto_estoque").value),
        //Ver função para anexo
        anexo: document.getElementById("produto_anexo").value,
        id_farmacia: parseInt(document.getElementById("produto_id_farmacia").value)
    };

    try {

        const response = await fetch("http://localhost:5068/api/produto", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        //Mensagem não obrigatória
        if (response.ok) {
            const resultado = await response.json();
            alert("Produto cadastrado! ID: " + resultado.id_produto);
        } else {
            const erro = await response.text();
            alert("Erro ao cadastrar o produto:\n" + erro);
        }
    } catch (e) {
        alert("Erro de conexão com a API:\n" + e.message);
    }
}

//Se o pagamento der ok, chamar a função de salvarCompra()
async function salvarPedido() {
    const data = {
        qtd_produto: parseInt(document.getElementById("pedido_qtd_produto").value),
        preco_produto: parseFloat(document.getElementById("pedido_preco_produto").value),
        id_cliente: parseInt(document.getElementById("pedido_id_cliente").value),
        id_produto: parseInt(document.getElementById("pedido_id_produto").value),
        id_farmacia: parseInt(document.getElementById("pedido_id_farmacia").value)
    };

    const entregaSelecionada = document.getElementById("entregaCheckbox").checked;

    try {
        const url = entregaSelecionada
            ? "http://localhost:5068/api/pedido?idEntregador=1" // exemplo: entregador fixo ID=1
            : "http://localhost:5068/api/pedido";

        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            const resultado = await response.json();
            alert("Pedido salvo com sucesso. ID: " + resultado.id_pedido);
        } else {
            const erro = await response.text();
            alert("Erro ao salvar pedido:\n" + erro);
        }
    } catch (e) {
        alert("Erro de conexão com a API:\n" + e.message);
    }
}


async function salvarEntrega() {
    const data = {
        id_pedido: parseInt(document.getElementById("entrega_id_pedido").value),
        id_entregador: parseInt(document.getElementById("entrega_id_entregador").value)
    };

    try {

        const response = await fetch("http://localhost:5068/api/entrega", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        //Mensagem não obrigatória
        if (response.ok) {
            const resultado = await response.json();
            alert("Salvo com sucesso. ID: " + resultado.id_entrega);
        } else {
            const erro = await response.text();
            alert("Erro ao salvar:\n" + erro);
        }
    } catch (e) {
        alert("Erro de conexão com a API:\n" + e.message);
    }
}


async function salvarUsuario() {
    const data = {
        email: document.getElementById("usuario_email").value,
        senha: document.getElementById("usuario_senha").value,
        papel: document.getElementById("usuario_papel").value,
        id_papel: parseInt(document.getElementById("usuario_id_papel").value)
    };

    try {

        const response = await fetch("http://localhost:5068/api/usuario", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        //Mensagem não obrigatória
        if (response.ok) {
            const resultado = await response.json();
            alert("Salvo com sucesso. ID: " + resultado.id_usuario);
        } else {
            const erro = await response.text();
            alert("Erro ao salvar:\n" + erro);
        }
    } catch (e) {
        alert("Erro de conexão com a API:\n" + e.message);
    }
}

async function salvarPromocao() {
    const data = {
        id_produto: parseInt(document.getElementById("promocao_id_produto").value),
        preco_promocao: parseFloat(document.getElementById("promocao_preco_promocao").value)
    };

    try {

        const response = await fetch("http://localhost:5068/api/promocao", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        //Mensagem não obrigatória
        if (response.ok) {
            const resultado = await response.json();
            alert("Salvo com sucesso. ID: " + resultado.id_promocao);
        } else {
            const erro = await response.text();
            alert("Erro ao salvar:\n" + erro);
        }
    } catch (e) {
        alert("Erro de conexão com a API:\n" + e.message);
    }
}

async function salvarCupom() {
    const data = {
        codigo: document.getElementById("cupom_codigo").value,
        id_cliente: parseInt(document.getElementById("cupom_id_cliente").value)
    };

    try {

        const response = await fetch("http://localhost:5068/api/cupom", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        //Mensagem não obrigatória
        if (response.ok) {
            const resultado = await response.json();
            alert("Salvo com sucesso. ID: " + resultado.id_cupom);
        } else {
            const erro = await response.text();
            alert("Erro ao salvar:\n" + erro);
        }
    } catch (e) {
        alert("Erro de conexão com a API:\n" + e.message);
    }
}

//-------------------------------------------------

//METODOS GET (RECEBER DO BANCO)

//-------------------------------------------------

// Avaliação
async function carregarAvaliacoes() {
    try {
        const response = await fetch('http://localhost:5068/api/avaliacao');
        if (!response.ok) {
            throw new Error('Erro ao buscar: ' + response.statusText);
        }
        const avaliacoes = await response.json();

        const tbody = document.querySelector('#tabela-avaliacoes tbody');
        tbody.innerHTML = '';

        avaliacoes.forEach(avaliacao => {
            const tr = document.createElement('tr');

            tr.innerHTML = `
                        <td>${avaliacao.id_avaliacao}</td>
                        <td>${avaliacao.autor}</td>
                        <td>${avaliacao.avaliacao}</td>
                        <td>${avaliacao.nota}</td>
                        <td>${avaliacao.id_cliente}</td>
                    `;

            tbody.appendChild(tr);
        });
    } catch (error) {
        alert(error.message);
    }
}

// Avaliação de Produto
async function carregarAvaliacoesProduto() {
    try {
        const response = await fetch('http://localhost:5068/api/avaliacao_produto');
        if (!response.ok) {
            throw new Error('Erro ao buscar: ' + response.statusText);
        }
        const avaliacoesProduto = await response.json();

        const tbody = document.querySelector('#tabela-avaliacoes-produto tbody');
        tbody.innerHTML = '';

        avaliacoesProduto.forEach(avaliacoesp => {
            const tr = document.createElement('tr');

            tr.innerHTML = `
                        <td>${avaliacoesp.id_avaliacao_produto}</td>
                        <td>${avaliacoesp.autor}</td>
                        <td>${avaliacoesp.avaliacao}</td>
                        <td>${avaliacoesp.nota}</td>
                        <td>${avaliacoesp.anexo}</td>
                        <td>${avaliacoesp.id_cliente}</td>
                        <td>${avaliacoesp.id_produto}</td>
                    `;

            tbody.appendChild(tr);
        });
    } catch (error) {
        alert(error.message);
    }
}

// Cliente
async function carregarClientes() {
    try {
        const response = await fetch('http://localhost:5068/api/cliente');
        if (!response.ok) {
            throw new Error('Erro ao buscar: ' + response.statusText);
        }
        const clientes = await response.json();

        const tbody = document.querySelector('#tabela-clientes tbody');
        tbody.innerHTML = '';

        clientes.forEach(cliente => {
            const tr = document.createElement('tr');

            tr.innerHTML = `
                        <td>${cliente.id_cliente}</td>
                        <td>${cliente.nome}</td>
                        <td>${cliente.sexo}</td>
                        <td>${cliente.data_nasc}</td>
                        <td>${cliente.telefone}</td>
                        <td>${cliente.email}</td>
                        <td>${cliente.cpf}</td>
                        <td>${cliente.endereco}</td>
                        <td>${cliente.cep}</td>
                        <td>${cliente.numero}</td>
                    `;

            tbody.appendChild(tr);
        });
    } catch (error) {
        alert(error.message);
    }
}

// Entrega
async function carregarEntregas() {
    try {
        const response = await fetch('http://localhost:5068/api/entrega');
        if (!response.ok) {
            throw new Error('Erro ao buscar: ' + response.statusText);
        }
        const entregas = await response.json();

        const tbody = document.querySelector('#tabela-entregas tbody');
        tbody.innerHTML = '';

        entregas.forEach(entrega => {
            const tr = document.createElement('tr');

            tr.innerHTML = `
                        <td>${entrega.id_entrega}</td>
                        <td>${entrega.id_pedido}</td>
                        <td>${entrega.id_entregador}</td>
                    `;

            tbody.appendChild(tr);
        });
    } catch (error) {
        alert(error.message);
    }
}

// Entregador
async function carregarEntregadores() {
    try {
        const response = await fetch('http://localhost:5068/api/entregador');
        if (!response.ok) {
            throw new Error('Erro ao buscar: ' + response.statusText);
        }
        const entregadores = await response.json();

        const tbody = document.querySelector('#tabela-entregadores tbody');
        tbody.innerHTML = '';

        entregadores.forEach(entregador => {
            const tr = document.createElement('tr');

            tr.innerHTML = `
                        <td>${entregador.id_entregador}</td>
                        <td>${entregador.nome}</td>
                        <td>${entregador.sexo}</td>
                        <td>${entregador.data_nasc}</td>
                        <td>${entregador.email}</td>
                        <td>${entregador.telefone}</td>
                        <td>${entregador.cpf}</td>
                        <td>${entregador.endereco}</td>
                        <td>${entregador.cep}</td>
                        <td>${entregador.numero}</td>
                    `;

            tbody.appendChild(tr);
        });
    } catch (error) {
        alert(error.message);
    }
}

// Farmácia
async function carregarFarmacias() {
    try {
        const response = await fetch('http://localhost:5068/api/farmacia');
        if (!response.ok) {
            throw new Error('Erro ao buscar: ' + response.statusText);
        }
        const farmacias = await response.json();

        const tbody = document.querySelector('#tabela-farmacias tbody');
        tbody.innerHTML = '';

        farmacias.forEach(farmacia => {
            const tr = document.createElement('tr');

            tr.innerHTML = `
                        <td>${farmacia.id_farmacia}</td>
                        <td>${farmacia.nome}</td>
                        <td>${farmacia.email}</td>
                        <td>${farmacia.telefone}</td>
                        <td>${farmacia.cnpj}</td>
                        <td>${farmacia.endereco}</td>
                        <td>${farmacia.cep}</td>
                        <td>${farmacia.numero}</td>
                    `;

            tbody.appendChild(tr);
        });
    } catch (error) {
        alert(error.message);
    }
}

// Pedido
async function carregarPedidos() {
    try {
        const response = await fetch('http://localhost:5068/api/pedido');
        if (!response.ok) {
            throw new Error('Erro ao buscar: ' + response.statusText);
        }
        const pedidos = await response.json();

        const tbody = document.querySelector('#tabela-pedidos tbody');
        tbody.innerHTML = '';

        pedidos.forEach(pedido => {
            const tr = document.createElement('tr');

            tr.innerHTML = `
                        <td>${pedido.id_pedido}</td>
                        <td>${pedido.id_cliente}</td>
                        <td>${pedido.id_farmacia}</td>
                        <td>${pedido.id_produto}</td>
                        <td>${pedido.qtd_produto}</td>
                        <td>${pedido.preco_produto}</td>
                    `;

            tbody.appendChild(tr);
        });
    } catch (error) {
        alert(error.message);
    }
}

// Produto
async function carregarProdutos() {
    try {
        const response = await fetch('http://localhost:5068/api/produto');
        if (!response.ok) {
            throw new Error('Erro ao buscar: ' + response.statusText);
        }
        const produtos = await response.json();

        const tbody = document.querySelector('#tabela-produtos tbody');
        tbody.innerHTML = '';

        produtos.forEach(produto => {
            const tr = document.createElement('tr');

            tr.innerHTML = `
                        <td>${produto.id_produto}</td>
                        <td>${produto.nome}</td>
                        <td>${produto.categoria}</td>
                        <td>${produto.preco}</td>
                        <td>${produto.estoque}</td>
                        <td>${produto.anexo}</td>
                        <td>${produto.descricao}</td>
                        <td>${produto.id_farmacia}</td>
                    `;

            tbody.appendChild(tr);
        });
    } catch (error) {
        alert(error.message);
    }
}


// Promoção
async function carregarPromocoes() {
    try {
        const response = await fetch('http://localhost:5068/api/promocao');
        if (!response.ok) {
            throw new Error('Erro ao buscar: ' + response.statusText);
        }
        const promocoes = await response.json();

        const tbody = document.querySelector('#tabela-promocoes tbody');
        tbody.innerHTML = '';

        promocoes.forEach(promocao => {
            const tr = document.createElement('tr');

            tr.innerHTML = `
                        <td>${promocao.id_promocao}</td>
                        <td>${promocao.id_produto}</td>
                        <td>${promocao.preco_promocao}</td>
                    `;

            tbody.appendChild(tr);
        });
    } catch (error) {
        alert(error.message);
    }
}


//Usuário 
async function carregarUsuarios() {
    try {
        const response = await fetch('http://localhost:5068/api/usuario');
        if (!response.ok) {
            throw new Error('Erro ao buscar: ' + response.statusText);
        }
        const usuarios = await response.json();

        const tbody = document.querySelector('#tabela-usuarios tbody');
        tbody.innerHTML = '';

        usuarios.forEach(usuario => {
            const tr = document.createElement('tr');

            tr.innerHTML = `
                        <td>${usuario.id_usuario}</td>
                        <td>${usuario.email}</td>
                        <td>${usuario.senha}</td>
                        <td>${usuario.papel}</td>
                        <td>${usuario.id_papel}</td>
                    `;

            tbody.appendChild(tr);
        });
    } catch (error) {
        alert(error.message);
    }
}

//Cupom
async function carregarCupons() {
    try {
        const response = await fetch('http://localhost:5068/api/cupom');
        if (!response.ok) {
            throw new Error('Erro ao buscar: ' + response.statusText);
        }
        const cupons = await response.json();

        const tbody = document.querySelector('#tabela-cupons tbody');
        tbody.innerHTML = '';

        cupons.forEach(cupom => {
            const tr = document.createElement('tr');

            tr.innerHTML = `
                        <td>${cupom.id_cupom}</td>
                        <td>${cupom.codigo}</td>
                        <td>${cupom.id_cliente}</td>
                    `;

            tbody.appendChild(tr);
        });
    } catch (error) {
        alert(error.message);
    }
}


//-------------------------------------------------

//METODOS DE FILTROS

//-------------------------------------------------



function buscarProdutos() {
    const categoria = document.getElementById('categoria').value;
    const precoMin = document.getElementById('precoMin').value;
    const precoMax = document.getElementById('precoMax').value;

    let url = `http://localhost:5068/api/produto/filtrar?`;

    if (categoria) url += `categoria=${encodeURIComponent(categoria)}&`;
    if (precoMin) url += `precoMin=${precoMin}&`;
    if (precoMax) url += `precoMax=${precoMax}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const resultado = document.getElementById('resultado');
            resultado.innerHTML = '';

            if (data.length === 0) {
                resultado.innerHTML = '<p>Nenhum produto encontrado.</p>';
                return;
            }

            data.forEach(p => {
                resultado.innerHTML += `<p><strong>${p.nome}</strong> - R$ ${p.preco.toFixed(2)} - Categoria: ${p.categoria}</p>`;
            });
        })
        .catch(error => console.error('Erro:', error));
}

function buscarPorFarmacia(idFarmacia) {
    fetch(`http://localhost:5068/api/produto/por-farmacia/${idFarmacia}`)
        .then(response => response.json())
        .then(data => {
            const produtosDiv = document.getElementById('produtos');
            produtosDiv.innerHTML = '';

            if (data.length === 0) {
                produtosDiv.innerHTML = '<p>Nenhum produto encontrado para esta farmácia.</p>';
                return;
            }

            data.forEach(p => {
                produtosDiv.innerHTML += `<p><strong>${p.nome}</strong> - R$ ${p.preco.toFixed(2)} - Estoque: ${p.estoque}</p>`;
            });
        })
        .catch(error => console.error('Erro:', error));
}

function mostrarDetalhes(idProduto) {
    fetch(`http://localhost:5068/api/produto/detalhes/${idProduto}`)
        .then(response => response.json())
        .then(data => {
            const detalhesDiv = document.getElementById('detalhes');
            detalhesDiv.innerHTML = `
                    <h2>${data.produto.nome}</h2>
                    <p>Categoria: ${data.produto.categoria}</p>
                    <p>Preço: R$ ${data.produto.preco.toFixed(2)}</p>
                    <p>Estoque: ${data.produto.estoque}</p>
                    <p>Descrição: ${data.produto.descricao}</p>
                    <hr/>
                    <h3>Avaliações:</h3>
                `;

            if (data.avaliacoes.length === 0) {
                detalhesDiv.innerHTML += '<p>Nenhuma avaliação disponível.</p>';
            } else {
                data.avaliacoes.forEach(av => {
                    detalhesDiv.innerHTML += `
                            <div style="margin-bottom:10px;">
                                <strong>${av.autor}</strong> - Nota: ${av.nota}<br/>
                                <p>${av.avaliacao}</p>
                            </div>
                        `;
                });
            }
        })
        .catch(error => {
            console.error("Erro ao carregar detalhes:", error);
        });
}


function verificarCupons() {
    const idCliente = 1; // Substitua pelo ID real do cliente logado

    fetch(`http://localhost:5068/api/cupom/cupons/${idCliente}`)
        .then(res => res.json())
        .then(data => {
            const cuponsDiv = document.getElementById('cupons');
            if (data.length === 0) {
                cuponsDiv.innerHTML = "<p>Você não possui cupons disponíveis.</p>";
            } else {
                cuponsDiv.innerHTML = "<h3>Seus Cupons:</h3>";
                data.forEach(c => {
                    cuponsDiv.innerHTML += `<p>Código: <strong>${c.codigo}</strong></p>`;
                });
            }
        })
        .catch(error => console.error("Erro ao buscar cupons:", error));
}


async function fazerLogin() {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    const senhaCriptografada = CryptoJS.AES.encrypt(senha, "chave_secreta").toString();

    const data = {
        email: email,
        senha: senhaCriptografada
    };

    try {
        const response = await fetch("http://localhost:5068/api/usuario/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            const usuario = await response.json();

            localStorage.setItem("usuarioLogado", JSON.stringify(usuario));

            // Redireciona de acordo com o papel
            switch (usuario.papel.toLowerCase()) {
                case "cliente":
                    window.location.href = "/cliente/home.html";
                    break;
                case "farmacia":
                    window.location.href = "/farmacia/home.html";
                    break;
                case "entregador":
                    window.location.href = "/entregador/home.html";
                    break;
                default:
                    alert("Papel não reconhecido.");
            }
        } else {
            const erro = await response.text();
            alert("Erro no login: " + erro);
        }
    } catch (e) {
        alert("Erro na conexão: " + e.message);
    }
}



