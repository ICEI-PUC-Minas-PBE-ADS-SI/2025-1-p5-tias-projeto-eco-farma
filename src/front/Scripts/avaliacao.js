//Essa função é para fazer cópia para outros scripts
//
//Função POST (para salvar os dados no banco)
async function enviarAvaliacao() {
    const data = {
        autor: document.getElementById("autor").value,
        avaliacao: document.getElementById("avaliacao").value,
        nota: parseFloat(document.getElementById("nota").value),
        //id_cliente: parseInt(document.getElementById("id_cliente").value)
    };

    try {
        //Toda a API tem um link, para avaliações - http://localhost:5068 usa para todas as APIs do projeto
        //o final deve ser de acordo com o /api/(nome da classe)
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