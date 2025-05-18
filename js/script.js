// Swiper JS
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    loop: true,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
});

// Nav abrir e fechar
const body = document.querySelector('body'),
    navMenu = body.querySelector('.nav-center'),
    navOpenBtn = body.querySelector('.navOpen-btn'),
    navCloseBtn = navMenu.querySelector('.navClose-btn');

if(navMenu && navOpenBtn){
    navOpenBtn.addEventListener("click", () =>{
        navMenu.classList.add("open");
        body.style.overflowY = "hidden";
    });
}

if(navMenu && navCloseBtn){
    navCloseBtn.addEventListener("click", () =>{
        navMenu.classList.remove("open");
        body.style.overflowY = "scroll";
    });
}

// Formulário de contato
document.getElementById("form-contato").addEventListener("submit", async function (e) {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    // Campos extras do FormSubmit
    data.append("_autoresponse", "Olá! Recebemos sua mensagem. Em breve entraremos em contato.");
    data.append("_captcha", "false");

    try {
      const response = await fetch("https://formsubmit.co/kamiseara14@gmail.com", {
        method: "POST",
        body: data
      });

      if (response.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Mensagem enviada!',
          text: 'Obrigado por entrar em contato. Em breve retornaremos :)',
          confirmButtonText: 'Fechar',
        });
        form.reset();
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Erro ao enviar',
          text: 'Tente novamente mais tarde.',
          confirmButtonText: 'Ok',
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Erro de conexão',
        text: 'Verifique sua internet e tente novamente.',
        confirmButtonText: 'Ok',
    });
  }
});
  
// Header muda de cor ao scroll
window.addEventListener("scroll", () => {
  const scrollY = window.pageYOffset;
  const header = document.querySelector("header");
  if (!header) return;

  if (scrollY > 5) {
    header.classList.add("header-active");
  } else {
    header.classList.remove("header-active");
  }
});

// Botão scrollUp 
window.addEventListener("scroll", () => {
  const scrollY = window.pageYOffset;
  const scrollUpBtn = document.querySelector(".scrollUp-btn");
  if (!scrollUpBtn) return;

  if (scrollY > 250) {
    scrollUpBtn.classList.add("scrollUpBtn-active");
  } else {
    scrollUpBtn.classList.remove("scrollUpBtn-active");
  }
});

// Função para subir ao topo ao clicar no botão
const scrollUpBtn = document.querySelector(".scrollUp-btn");
if (scrollUpBtn) {
  scrollUpBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

// Scroll spy: ativa o link do nav 
window.addEventListener("scroll", () => {
  const scrollY = window.pageYOffset;
  const sections = document.querySelectorAll("section[id]");

  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 70;
    const sectionId = section.getAttribute("id");
    const navLink = document.querySelector(`.nav a[href="#${sectionId}"]`);

    if (navLink) {
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLink.classList.add("active-nav-link");
      } else {
        navLink.classList.remove("active-nav-link");
      }
    }
  });
});
  
// Scroll Reveal Animação
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 1500,
  delay: 200,
});

// Anima o container da brand inteira
sr.reveal('.brand-container', {
  interval: 100,
  opacity: true,
  reset: false
});

// Mantém as outras animações
sr.reveal('.menu-subtitle, .menu-title, .menu-description, .review-container, .newsletter-container, .contact-content, .footer-links, .footer .logo-text, .content-description, .footer-location, .footer .logo-icon', {
  interval: 50
});

sr.reveal('.about-imageContent, .menu-item', {
  origin: 'left',
});

sr.reveal('.about-details, .table', {
  origin: 'right',
});