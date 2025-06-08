async function fazerLogin() {
    const email = document.getElementById("login_email").value;
    const senha = document.getElementById("login_senha").value;

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

            localStorage.setItem("usuarioLogado", JSON.stringify(usuario));

            // Redireciona de acordo com o papel
            switch (usuario.papel.toLowerCase()) {
                case "cliente":
                    window.location.href = "/src/front/index.html";
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



async function salvarUsuario() {
    const data = {
        email: document.getElementById("usuario_email").value,
        senha: document.getElementById("usuario_senha").value,
        papel: "cliente",
        id_papel: 1
    };
console.log(data)
    try {

        const response = await fetch("http://localhost:5068/api/usuario", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
console.log(response)
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