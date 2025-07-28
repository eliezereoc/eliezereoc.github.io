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

    formacao.forEach((form, index) => {
      const descricaoHTML = form.descricao
        .map(par => `<p>${par}</p>`)
        .join("");

      const html = `
        <div class="formacao-item" style="animation-delay: ${index * 0.1}s">
          <div class="descricao">
            <h3>${form.instituicao}</h3>
            <div class="sub-descricao">
              ${form.tipoCurso} 
            </div>
            <div class="descricao-texto">
              ${descricaoHTML}
            </div>
          </div>
          <div class="periodo">
            <span>${form.periodo}</span>
          </div>
        </div>
      `;

      container.innerHTML += html;
    });

    // Ativar animações após um pequeno delay
    setTimeout(() => {
      document.querySelectorAll('.formacao-item').forEach(item => {
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
