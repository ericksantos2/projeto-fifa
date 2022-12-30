import { jogador } from './main.js';
import { contaMaior } from './contaMaior.js';
import { atualizaRank } from './ranking.js';

export const jogadores: Array<jogador> = [];
export const divCards: HTMLDivElement = document.querySelector('[data-div-cards]');

// export let maiorQualidade: Object;
// export let maiorClube: Object;
// export let maiorLiga: Object;
// export let maiorNacionalidade: Object;

export function criaCard(objeto: jogador) {
    jogadores.push(objeto);
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <p>Qualidade: <span>${objeto['qualidade']}</span></p>
        <p>Clube: <span>${objeto['clube']}</span></p>
        <p>Liga: <span>${objeto['liga']}</span></p>
        <p>Nacionalidade: <span>${objeto['nacionalidade']}</span></p>
    `;
    divCards.appendChild(card);

    const maiorQualidade: any = contaMaior(jogadores, 'qualidade');
    const maiorClube: any = contaMaior(jogadores, 'clube');
    const maiorLiga: any = contaMaior(jogadores, 'liga');
    const maiorNacionalidade: any = contaMaior(jogadores, 'nacionalidade');
    
    atualizaRank(maiorQualidade, maiorClube, maiorLiga, maiorNacionalidade);
}