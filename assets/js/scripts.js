window.addEventListener("DOMContentLoaded", (event) => {
  // Inicializar ScrollSpy do Bootstrap
  const sideNav = document.body.querySelector("#sideNav");
  if (sideNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#sideNav",
      offset: 100,
    });
  }

  // Inicializar tema
  initTheme();

  // Suavizar rolagem para links internos
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

  // Controlar o menu lateral com o botão toggler
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

    // Fecha menu ao clicar fora dele (no mobile)
    document.addEventListener("click", (e) => {
      if (window.innerWidth <= 768 && 
          !sideNav.contains(e.target) && 
          !menuToggle.contains(e.target) && 
          sideNav.classList.contains("active")) {
        sideNav.classList.remove("active");
      }
    });
  }

  // Controlar alternância de tema
  const themeToggle = document.getElementById("themeToggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", toggleTheme);
  }

  // Função para mudar o título da página
  function mudarTitulo(titulo) {
    document.title = `${titulo} - Eliézer de Oliveira`;
  }

  // Animação de entrada dos elementos
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, observerOptions);

  // Observar elementos para animação
  document.querySelectorAll('.experiencia-item, .formacao-item, .projeto-card').forEach(el => {
    observer.observe(el);
  });

  // Efeito de digitação no nome (typewriter)
  const nomeElement = document.querySelector('.nome');
  if (nomeElement) {
    const texto = nomeElement.textContent;
    nomeElement.textContent = '';
    nomeElement.style.opacity = '1';
    
    let i = 0;
    const typeWriter = () => {
      if (i < texto.length) {
        nomeElement.textContent += texto.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      }
    };
    
    setTimeout(typeWriter, 500);
  }
});

// Funções de tema
function initTheme() {
  const savedTheme = localStorage.getItem('theme') || 
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
  const themeToggle = document.getElementById("themeToggle");
  if (themeToggle) {
    themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
    themeToggle.setAttribute('aria-label', 
      theme === 'dark' ? 'Mudar para tema claro' : 'Mudar para tema escuro');
  }
}

// Detectar mudanças no tema do sistema
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  if (!localStorage.getItem('theme')) {
    const newTheme = e.matches ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    updateThemeIcon(newTheme);
  }
});
