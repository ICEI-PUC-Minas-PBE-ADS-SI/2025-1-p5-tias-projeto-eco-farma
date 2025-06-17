/* import api from '../services/Api.js';


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
}; */

async function fazerLogin() {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    //const senhaCriptografada = CryptoJS.AES.encrypt(senha, "chave_secreta").toString();

    const data = {
        email: email,
        senha: senha
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

            // Cria um objeto com os dados que você quer salvar
            const usuarioParaSalvar = {
                id_usuario: usuario.id_usuario,
                email: usuario.email,
                papel: usuario.papel,
                id_papel: usuario.id_papel,
                dadosPapel: usuario.dadosPapel
            };

            // Salva o objeto no localStorage como uma string JSON
            localStorage.setItem("usuarioLogado", JSON.stringify(usuarioParaSalvar));
            console.log("Usuário logado:", usuarioParaSalvar);
            mostrarMensagem();
            // Redireciona de acordo com o papel
            switch (usuario.papel.toLowerCase()) {
                case "cliente":
                    window.location.href = "/src/front/Ecofarma/Ecofarma-main/index.html";
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
        }
        else {
            const erro = await response.text();
            alert("Erro no login: " + erro);
        }
    } catch (e) {
        alert("Erro na conexão: " + e.message);
    }
}

function mostrarMensagem() {
    const msg = document.getElementById("mensagemSucesso");
    msg.style.display = "block";
    setTimeout(() => msg.style.display = "none", 3000); // desaparece após 3 segundos
}


// Abrir o modal
const btnCadastrar = document.getElementById("btnCadastrar");
const modal = document.getElementById("modalCadastro");
const closeBtn = document.getElementById("closeModal");

btnCadastrar.onclick = function () {
    modal.style.display = "block";
}

// Fechar o modal clicando no x
closeBtn.onclick = function () {
    modal.style.display = "none";
}

// Fechar clicando fora do conteúdo
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Função ao clicar em cada botão de cadastro
function abrirCadastro(tipo) {
    // Aqui você pode redirecionar ou abrir o formulário de cadastro correspondente
    switch (tipo) {
        case "cliente":
            window.location.href = "/src/front/Ecofarma/Ecofarma-main/cadastro-cliente.html";
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
    // Fechar o modal após clicar
    modal.style.display = "none";
}
