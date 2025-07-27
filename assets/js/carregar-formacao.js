fetch('assets/dados/formacao.json')
  .then(response => response.json())
  .then(formacao => {
    const container = document.getElementById("formacao-container");

    formacao.forEach(formacao => {
      const descricaoHTML = formacao.descricao
        .map(par => `<p>${par}</p>`)
        .join("");

      const html = `
        <div class="formacao-item">
          <div class="descricao">
            <h3>${formacao.instituicao}</h3>
            <div class="sub-descricao">
              ${formacao.tipoCurso} 
            </div>
            <div class="descricao-texto">
              ${descricaoHTML}
            </div>
          </div>
          <div class="periodo">
            <span>${formacao.periodo}</span>
          </div>
        </div>
      `;

      container.innerHTML += html;
    });
  })
  .catch(error => {
    console.error("Erro ao carregar formação:", error);
  });
