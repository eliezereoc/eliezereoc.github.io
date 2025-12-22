// Função para carregar experiências com loading state e tratamento de erro
async function carregarExperiencias() {
  const container = document.getElementById("experiencia-container");
  
  // Estado de loading
  container.innerHTML = '<div class="loading-state">Carregando experiências...</div>';
  
  try {
    const response = await fetch('assets/dados/experiencias.json');
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const experiencias = await response.json();
    
    // Limpar loading state
    container.innerHTML = '';
    
    // Criar accordion
    const accordion = document.createElement('div');
    accordion.className = 'accordion';
    accordion.id = 'accordionExperiencias';
    
    experiencias.forEach((exp, index) => {
      const descricaoHTML = exp.descricao
        .map(par => `<p>${par}</p>`)
        .join("");

      const linkHTML = exp.link 
        ? `<a href="${exp.link}" target="_blank" rel="noopener noreferrer">${exp.empresa}</a>`
        : exp.empresa;

      const isFirst = index === 0;
      const collapseId = `experiencia-${index}`;

      const accordionItem = document.createElement('div');
      accordionItem.className = 'accordion-item';
      accordionItem.style.animationDelay = `${index * 0.1}s`;
      accordionItem.innerHTML = `
        <h2 class="accordion-header">
          <button class="accordion-button ${!isFirst ? 'collapsed' : ''}" type="button" data-bs-toggle="collapse" data-bs-target="#${collapseId}" aria-expanded="${isFirst}" aria-controls="${collapseId}">
            <strong>${exp.cargo}</strong>
            <span style="margin-left: 0.5rem; opacity: 0.7;">— ${exp.resumo}</span>
          </button>
        </h2>
        <div id="${collapseId}" class="accordion-collapse collapse ${isFirst ? 'show' : ''}" data-bs-parent="#accordionExperiencias">
          <div class="accordion-body">
            <div class="sub-descricao" style="margin-bottom: 1rem;">
              ${linkHTML} | <strong>${exp.periodo}</strong>
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
    console.error("Erro ao carregar experiências:", error);
    container.innerHTML = `
      <div class="error-state">
        <p>Não foi possível carregar as experiências no momento.</p>
        <button onclick="carregarExperiencias()" class="retry-btn">Tentar novamente</button>
      </div>
    `;
  }
}

// Carregar experiências quando a página estiver pronta
document.addEventListener('DOMContentLoaded', carregarExperiencias);
