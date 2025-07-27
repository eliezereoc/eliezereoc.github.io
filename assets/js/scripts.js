window.addEventListener("DOMContentLoaded", (event) => {
  //suavisa rolagem para links internos
  document.querySelectorAll('a.nav-link[href^="#"]').forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }

      // Muda o título com base no data-title ou no texto do link
      const novoTitulo = this.dataset.title || this.textContent.trim();
      mudarTitulo(novoTitulo);
    });
  });

  //controlar o menu lateral com o botão toggler que criamos
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = sideNav ? sideNav.querySelectorAll(".nav-link") : [];

  if (menuToggle && sideNav) {
    // Abre/fecha menu no clique do botão
    menuToggle.addEventListener("click", () => {
      sideNav.classList.toggle("active");
    });

    // Fecha menu ao clicar em link (no mobile)
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        if (window.innerWidth <= 768) {
          sideNav.classList.remove("active");
        }
      });
    });
  }

  function mudarTitulo(titulo) {
    document.title = titulo;
  }
});





/*window.addEventListener("DOMContentLoaded", (event) => {
  // Activate Bootstrap scrollspy on the main nav element
  const sideNav = document.body.querySelector("#sideNav");
  if (sideNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#sideNav",
      offset: 74,
    });
  }

//controlar o menu lateral com o botão toggler que criamos
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = sideNav ? sideNav.querySelectorAll(".nav-link") : [];

  if (menuToggle && sideNav) {
    // Abre/fecha menu no clique do botão
    menuToggle.addEventListener("click", () => {
      sideNav.classList.toggle("active");
    });

    // Fecha menu ao clicar em link (no mobile)
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        if (window.innerWidth <= 768) {
          sideNav.classList.remove("active");
        }
      });
    });
  }
});*/
