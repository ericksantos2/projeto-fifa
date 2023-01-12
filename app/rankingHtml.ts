import { contaMaior } from "./ranking.js";

export function estatisticasHtml(lista: any[]): void {
    const tipos: any[] = [
        "qualidade",
        "clube",
        "liga",
        "nacionalidade"
    ];
    for (let i = 0; i < tipos.length; i++) {
        const maior: any = contaMaior(lista, tipos[i]);
        const lugar: HTMLParagraphElement = document.querySelector(`[data-resultado-${tipos[i]}]`);
        const modificar: HTMLSpanElement = lugar.querySelector('span');
        modificar.innerHTML = maior.nome;
    }
}