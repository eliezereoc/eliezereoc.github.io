fetch('assets/dados/experiencias.json')
  .then(response => response.json())
  .then(experiencias => {
    const container = document.getElementById("experiencia-container");

    experiencias.forEach(exp => {
      const descricaoHTML = exp.descricao
        .map(par => `<p>${par}</p>`)
        .join("");

      const html = `
        <div class="experiencia-item">
          <div class="descricao">
            <h3>${exp.cargo}</h3>
            <div class="sub-descricao">
              ${exp.resumo} |
              <a href="${exp.link}" target="_blank" rel="noopener noreferrer">
                ${exp.empresa}
              </a>
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
  })
  .catch(error => {
    console.error("Erro ao carregar experiências:", error);
  });
