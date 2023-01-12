import { contaMaior } from "./ranking.js";
export function estatisticasHtml(lista) {
    const tipos = [
        "qualidade",
        "clube",
        "liga",
        "nacionalidade"
    ];
    for (let i = 0; i < tipos.length; i++) {
        const maior = contaMaior(lista, tipos[i]);
        const lugar = document.querySelector(`[data-resultado-${tipos[i]}]`);
        const modificar = lugar.querySelector('span');
        modificar.innerHTML = maior.nome;
    }
}
