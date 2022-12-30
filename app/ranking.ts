const qualidadeB: HTMLParagraphElement = document.querySelector('[data-resultado-qualidade]');
const clubeB: HTMLParagraphElement = document.querySelector('[data-resultado-clube]');
const ligaB: HTMLParagraphElement = document.querySelector('[data-resultado-liga]');
const nacionalidadeB: HTMLParagraphElement = document.querySelector('[data-resultado-nacionalidade]');

export function atualizaRank(a: any, b: any, c: any, d: any): void {
    qualidadeB.innerHTML = `
        Qualidade com mais jogadores: <span>${a['nome']}</span>
    `;
    clubeB.innerHTML = `
        Clube com mais jogadores: <span>${b['nome']}</span>
    `;
    ligaB.innerHTML = `
        Liga com mais jogadores: <span>${c['nome']}</span>
    `;
    nacionalidadeB.innerHTML = `
        Nacionalidade com mais jogadores: <span>${d['nome']}</span>
    `
}
