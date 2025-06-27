document.addEventListener("DOMContentLoaded", async () => {
  // === Dados do usuário ===
  const API_URL = "https://ecofarma-f4ake0gkhwapfmh3.canadacentral-01.azurewebsites.net/api/farmacia";
  const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
  const idFarmacia = usuarioLogado?.dadosPapel?.id_farmacia;

  if (!usuarioLogado || !usuarioLogado.dadosPapel) return;

  const dados = usuarioLogado.dadosPapel;


  // Atualizar senha
  document.querySelector("#change-password form")?.addEventListener("submit", async (e) => {
    e.preventDefault();
    const senhaAtual = e.target[0].value;
    const novaSenha = e.target[1].value;
    const confirmar = e.target[2].value;

    if (novaSenha !== confirmar) return alert("As senhas não coincidem");

    const farmacia = await fetch(`${API_URL}/${idFarmacia}`).then(res => res.json());
    if (farmacia.senha !== senhaAtual) return alert("Senha atual incorreta!");

    farmacia.senha = novaSenha;
    const response = await fetch(`${API_URL}/${idFarmacia}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(farmacia),
    });
    if (response.ok) alert("Senha atualizada com sucesso!");
  });

   // Cupom
  carregarCupons();

  // Tabs
  const tabs = document.querySelectorAll(".account__tab");
  const contents = document.querySelectorAll(".tab__content");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active-tab"));
      contents.forEach(c => c.style.display = "none");

      tab.classList.add("active-tab");
      const targetId = tab.getAttribute("data-target");
      const targetContent = document.querySelector(targetId);
      if (targetContent) targetContent.style.display = "block";
    });
  });

  const activeTab = document.querySelector(".account__tab.active-tab");
  if (activeTab) {
    const targetId = activeTab.getAttribute("data-target");
    contents.forEach(c => c.style.display = "none");
    const activeContent = document.querySelector(targetId);
    if (activeContent) activeContent.style.display = "block";
  }

});

// ====================== CUPOM ========================
function cadastrarCupom() {
  const codigo = document.getElementById("codigoCupom").value.trim();
  const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));
  if (!codigo || !usuario?.id_usuario) return alert("Preencha o código do cupom.");

  const data = { codigo: codigo, id_cliente: usuario.id_usuario };

  fetch("https://ecofarma-f4ake0gkhwapfmh3.canadacentral-01.azurewebsites.net/api/cupom", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  })
    .then(resp => {
      if (!resp.ok) throw new Error("Erro ao cadastrar cupom");
      return resp.json();
    })
    .then(() => {
      document.getElementById("codigoCupom").value = "";
      carregarCupons();
    })
    .catch(erro => alert(erro.message));
}

function carregarCupons() {
  const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));
  if (!usuario?.id_usuario) return;

  fetch(`https://ecofarma-f4ake0gkhwapfmh3.canadacentral-01.azurewebsites.net/api/cupom/cliente/${usuario.id_usuario}`)
    .then(resp => resp.json())
    .then(cupons => {
      const lista = document.getElementById("lista-cupom");
      lista.innerHTML = "";

      if (cupons.length === 0) {
        lista.innerHTML = "<li>Nenhum cupom cadastrado.</li>";
      } else {
        cupons.forEach(c => {
          const li = document.createElement("li");
          li.textContent = c.codigo;
          lista.appendChild(li);
        });
      }
    });
}