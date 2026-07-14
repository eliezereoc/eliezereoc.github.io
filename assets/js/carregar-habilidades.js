// Função para carregar habilidades com loading state e tratamento de erro
async function carregarHabilidades() {
  const container = document.getElementById("habilidade-container");
  
  // Estado de loading
  container.innerHTML = '<div class="loading-state">Carregando habilidades...</div>';
  
  try {
    const response = await fetch('assets/dados/habilidades.json?v=2.1.0', { cache: 'no-store' });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const habilidades = await response.json();
    
    // Limpar loading state
    container.innerHTML = '';

    // Criar accordion
    const accordion = document.createElement('div');
    accordion.className = 'accordion';
    accordion.id = 'accordionHabilidades';

    habilidades.forEach((habilidade, index) => {
      const itensHTML = habilidade.itens
        .map(item => `
          <li>
            <span class="fa-li"><i class="fas fa-check-circle"></i></span>
            <strong>${item.titulo}</strong> — ${item.descricao}
          </li>
        `)
        .join("");

      const isFirst = index === 0;
      const collapseId = `habilidade-${index}`;

      const accordionItem = document.createElement('div');
      accordionItem.className = 'accordion-item';
      accordionItem.style.animationDelay = `${index * 0.1}s`;
      accordionItem.innerHTML = `
        <h2 class="accordion-header">
          <button class="accordion-button ${!isFirst ? 'collapsed' : ''}" type="button" data-bs-toggle="collapse" data-bs-target="#${collapseId}" aria-expanded="${isFirst}" aria-controls="${collapseId}">
            <i class="${habilidade.icone}"></i>
            <span>${habilidade.categoria}</span>
          </button>
        </h2>
        <div id="${collapseId}" class="accordion-collapse collapse ${isFirst ? 'show' : ''}" data-bs-parent="#accordionHabilidades">
          <div class="accordion-body">
            <ul class="fa-ul mb-0">
              ${itensHTML}
            </ul>
          </div>
        </div>
      `;

      accordion.appendChild(accordionItem);
    });

    container.appendChild(accordion);

    // Ativar animações após um pequeno delay
    setTimeout(() => {
      document.querySelectorAll('.accordion-item').forEach(item => {
        item.classList.add('animate-in');
      });
    }, 100);
    
  } catch (error) {
    console.error("Erro ao carregar habilidades:", error);
    container.innerHTML = `
      <div class="error-state">
        <p>Não foi possível carregar as habilidades no momento.</p>
        <button onclick="carregarHabilidades()" class="retry-btn">Tentar novamente</button>
      </div>
    `;
  }
}

// Carregar habilidades quando a página estiver pronta
document.addEventListener('DOMContentLoaded', carregarHabilidades);
