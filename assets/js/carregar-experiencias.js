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
    
    experiencias.forEach((exp, index) => {
      const descricaoHTML = exp.descricao
        .map(par => `<p>${par}</p>`)
        .join("");

      const linkHTML = exp.link 
        ? `<a href="${exp.link}" target="_blank" rel="noopener noreferrer">${exp.empresa}</a>`
        : exp.empresa;

      const html = `
        <div class="experiencia-item" style="animation-delay: ${index * 0.1}s">
          <div class="descricao">
            <h3>${exp.cargo}</h3>
            <div class="sub-descricao">
              ${exp.resumo} | ${linkHTML}
            </div>
            <div class="descricao-texto">
              ${descricaoHTML}
            </div>
          </div>
          <div class="periodo">
            <span>${exp.periodo}</span>
          </div>
        </div>
      `;

      container.innerHTML += html;
    });

    // Ativar animações após um pequeno delay
    setTimeout(() => {
      document.querySelectorAll('.experiencia-item').forEach(item => {
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
