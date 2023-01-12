const localCards = document.querySelector('[data-div-cards]');

export function criaCard(jogador: any) {
    localCards.innerHTML += `
        <div class="card">
            <p>Qualidade: <span>${jogador.qualidade.value}</span></p>
            <p>Clube: <span>${jogador.clube.value}</span></p>
            <p>Liga: <span>${jogador.liga.value}</span></p>
            <p>Nacionalidade: <span>${jogador.nacionalidade.value}</span></p>
        </div>
    `;
}