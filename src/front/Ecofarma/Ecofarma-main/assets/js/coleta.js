document.addEventListener("DOMContentLoaded", function () {
    // Inicializa o mapa
    const mapa = L.map("mapaFarmacias").setView([-19.9634, -44.1989], 14); // Betim

    // Adiciona camada do OpenStreetMap
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(mapa);

    // Lista de farmácias
    const farmacias = [
        {
            nome: "Drogaria Mais Saúde",
            endereco: "R. do Rosário, 682 - Angola, Betim - MG, 32604-215",
            lat: -19.959145645088462,
            lng: -44.20101328229638,
        },
        {
            nome: "Drogaria Araujo",
            endereco: "Av. Artur da Silva Bernardes, 446 - Loja 01 - Angola, Betim - MG, 32300-050",
            lat: -19.954254329236303,
            lng: -44.196066085925885,
        },
        {
            nome: "Droga Raia",
            endereco: "R. Idalina Damásia, 27 - Jardim da Cidade, Betim - MG, 32604-280",
            lat: -19.958406161497727,
            lng: -44.1968990811489, 
        },
        {
            nome: "Drogaria Pague Menos",
            endereco: "Condomínio Cidade Jardim Eldorado - Av. João César de Oliveira, 1144 - Eldorado, Contagem - MG, 32310-000",
            lat: -19.942504519597673, 
            lng: -44.03904455889797, 
        },
        {
            nome: "Drogasil",
            endereco: "AVENIDA GETÚLIO VARGAS, 504, 500 Loja 2, 504, 3 508 - Loja 1 - Centro, Belo Horizonte - MG, 35680-037",
            lat: -19.91334362659825, 
            lng: -43.93634858977011, 
        },
        {
            nome: "Drogaria Pacheco",
            endereco: "Av. Juiz Marco Túlio Isaac, 50 - Jardim da Cidade, Betim - MG, 32604-245",
            lat: -19.964347451720005, 
            lng: -44.19892536373215, 
        },
        {
            nome: "Drogaria Souza Aguiar",
            endereco: "R. Dr. Antônio Gravata, 39 - Centro, Betim - MG, 32600-016",
            lat: -19.967321185916465, 
            lng: -44.20278887005421, 
        },

    ];

    // Adiciona os marcadores
    farmacias.forEach((farmacia) => {
        const marker = L.marker([farmacia.lat, farmacia.lng]).addTo(mapa);
        marker.bindPopup(
            `<strong>${farmacia.nome}</strong><br>${farmacia.endereco}`
        );
        marker.on("mouseover", function () {
            this.openPopup();
        });
        marker.on("mouseout", function () {
            this.closePopup();
        });
    });
});