import { criaCard } from './criaCard.js';
import { criaOpcao } from './cadastro.js';

export { clube, liga, nacionalidade };

const formulario: HTMLFormElement = document.querySelector('[data-formulario]');
const qualidade: HTMLSelectElement = document.querySelector('[data-qualidade]');
const clube: HTMLInputElement = document.querySelector('[data-clube]');
const liga: HTMLInputElement = document.querySelector('[data-liga]');
const nacionalidade: HTMLInputElement = document.querySelector('[data-nacionalidade]');

const formCadastro: HTMLFormElement = document.querySelector('[data-cadastro]');

export type jogador = {
    "qualidade": string;
    "clube": string;
    "liga": string;
    "nacionalidade": string;
}

formulario.addEventListener("submit", (evento: Event) => {
    evento.preventDefault();
    const objeto: jogador = {
        "qualidade": qualidade.value,
        "clube": clube.value,
        "liga": liga.value,
        "nacionalidade": nacionalidade.value
    }
    criaCard(objeto);
})

formCadastro.addEventListener("submit", (evento: Event) => {
    evento.preventDefault();
    criaOpcao();
})
