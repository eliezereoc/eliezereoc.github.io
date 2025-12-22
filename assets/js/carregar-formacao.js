// Função para carregar formação com loading state e tratamento de erro
async function carregarFormacao() {
  const container = document.getElementById("formacao-container");
  
  // Estado de loading
  container.innerHTML = '<div class="loading-state">Carregando formação...</div>';
  
  try {
    const response = await fetch('assets/dados/formacao.json');
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const formacao = await response.json();
    
    // Limpar loading state
    container.innerHTML = '';

    // Criar accordion
    const accordion = document.createElement('div');
    accordion.className = 'accordion';
    accordion.id = 'accordionFormacao';

    formacao.forEach((form, index) => {
      const descricaoHTML = form.descricao
        .map(par => `<p>${par}</p>`)
        .join("");

      const isFirst = index === 0;
      const collapseId = `formacao-${index}`;

      const accordionItem = document.createElement('div');
      accordionItem.className = 'accordion-item';
      accordionItem.style.animationDelay = `${index * 0.1}s`;
      accordionItem.innerHTML = `
        <h2 class="accordion-header">
          <button class="accordion-button ${!isFirst ? 'collapsed' : ''}" type="button" data-bs-toggle="collapse" data-bs-target="#${collapseId}" aria-expanded="${isFirst}" aria-controls="${collapseId}">
            <strong>${form.instituicao}</strong>
            <span style="margin-left: 0.5rem; opacity: 0.7;">— ${form.tipoCurso}</span>
          </button>
        </h2>
        <div id="${collapseId}" class="accordion-collapse collapse ${isFirst ? 'show' : ''}" data-bs-parent="#accordionFormacao">
          <div class="accordion-body">
            <div class="sub-descricao" style="margin-bottom: 1rem;">
              <strong>${form.periodo}</strong>
            </div>
            <div class="descricao-texto">
              ${descricaoHTML}
            </div>
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
    console.error("Erro ao carregar formação:", error);
    container.innerHTML = `
      <div class="error-state">
        <p>Não foi possível carregar a formação no momento.</p>
        <button onclick="carregarFormacao()" class="retry-btn">Tentar novamente</button>
      </div>
    `;
  }
}

// Carregar formação quando a página estiver pronta
document.addEventListener('DOMContentLoaded', carregarFormacao);
