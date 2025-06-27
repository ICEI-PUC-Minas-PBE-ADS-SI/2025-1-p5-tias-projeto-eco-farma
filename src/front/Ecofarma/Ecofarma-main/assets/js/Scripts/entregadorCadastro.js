async function salvarEntregador() {
    const data = {
        nome: document.getElementById("entregador_nome").value,
        sexo: document.getElementById("entregador_sexo").value,
        data_nasc: document.getElementById("entregador_data_nasc").value,
        email: document.getElementById("entregador_email").value,
        telefone: document.getElementById("entregador_telefone").value,
        cpf: document.getElementById("entregador_cpf").value,
        senha: document.getElementById("entregador_senha").value,
        cep: document.getElementById("entregador_cep").value,
        numero: parseInt(document.getElementById("entregador_numero").value),
        senha: document.getElementById("entregador_senha").value
    };

    try {
        const response = await fetch("https://ecofarma-f4ake0gkhwapfmh3.canadacentral-01.azurewebsites.net/api/entregador", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            alert("Entregador cadastrado com sucesso! Acesse a página de login para entrar no site");
            window.location.href = "https://eco-farma.vercel.app/login-register.html";
        } else {
            const erro = await response.text();
            alert("Erro ao cadastrar entregador:\n" + erro);
        }
    } catch (e) {
        alert("Erro de conexão com a API:\n" + e.message);
    }
}
