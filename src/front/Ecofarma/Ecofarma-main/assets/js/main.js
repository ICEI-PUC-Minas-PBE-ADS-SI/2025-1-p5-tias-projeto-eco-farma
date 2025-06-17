/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== Menu Show =====*/
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== Hide Show =====*/
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== IMAGE GALLERY ===============*/
function imgGallery() {
  const mainImg = document.querySelector(".details__img"),
    smallImg = document.querySelectorAll(".details__small-img");

  smallImg.forEach((img) => {
    img.addEventListener("click", function () {
      mainImg.src = this.src;
    });
  });
}

imgGallery();

/*=============== SWIPER CATEGORIES ===============*/
let swiperCategories = new Swiper(".categories__container", {
  spaceBetween: 24,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    350: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 24,
    },
    1400: {
      slidesPerView: 6,
      spaceBetween: 24,
    },
  },
});

/*=============== SWIPER PRODUCTS ===============*/
let swiperProducts = new Swiper(".new__container", {
  spaceBetween: 24,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },
});

/*=============== PRODUCTS TABS ===============*/
const tabs = document.querySelectorAll("[data-target]"),
  tabsContents = document.querySelectorAll("[content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabsContents.forEach((tabsContent) => {
      tabsContent.classList.remove("active-tab");
    });

    target.classList.add("active-tab");

    tabs.forEach((tab) => {
      tab.classList.remove("active-tab");
    });

    tab.classList.add("active-tab");
  });
});

// função para limpar o localStorage
function limparLocalStorage() {
  localStorage.clear();
  console.log("Local Storage limpo com sucesso.");

  // Opcional: redirecionar para login após limpar
  window.location.href = "login-register.html";
}

// Verifica se há usuário logado
const usuarioStr = localStorage.getItem("usuarioLogado");
if (usuarioStr) {
  const usuario = JSON.parse(usuarioStr);  // converte de string para objeto
  const idUsuario = usuario.id_usuario;

  if (idUsuario) {
    // Exibe o item "Minha conta" (exemplo)
    document.getElementById("minhaContaItem").style.display = "block";

    // Configura o link de "Sair"
    const authLink = document.getElementById("authLink");
    authLink.textContent = "Sair";
    authLink.href = "login-register.html"; // ou '#' se preferir
    authLink.onclick = function() {
      limparLocalStorage();
    };
  } else {
    // Se não tiver id_usuario, mostra "Entrar"
    const authLink = document.getElementById("authLink");
    authLink.textContent = "Entrar";
    authLink.href = "login-register.html";
    authLink.onclick = null;
  }
} else {
  // Se não tiver usuário logado, mostrar "Entrar"
  const authLink = document.getElementById("authLink");
  authLink.textContent = "Entrar";
  authLink.href = "login-register.html";
  authLink.onclick = null;
}




