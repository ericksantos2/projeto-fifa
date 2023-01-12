import { criaCard } from "./criaCard.js";
import { adicionaLista, listaJogadores } from "./adicionaLista.js";
import { cadastroHtml } from "./cadastroHtml.js";
import { estatisticasHtml } from "./rankingHtml.js";
import { geralHtml } from "./resultadoGeral.js";

const formulario: HTMLFormElement = document.querySelector('[data-formulario]');
const cadastro: HTMLFormElement = document.querySelector('[data-cadastro]');

type jogador = {
    "qualidade": HTMLSelectElement,
    "clube": HTMLSelectElement,
    "liga": HTMLSelectElement,
    "nacionalidade": HTMLSelectElement
}

const objetoJogador: jogador = {
    "qualidade": document.querySelector('[data-qualidade]'),
    "clube": document.querySelector('[data-clube]'),
    "liga": document.querySelector('[data-liga]'),
    "nacionalidade": document.querySelector('[data-nacionalidade]')
};

formulario.addEventListener('submit', (e: SubmitEvent) => {
    e.preventDefault();
    adicionaLista(objetoJogador);
    estatisticasHtml(listaJogadores);
    geralHtml(listaJogadores);
    criaCard(objetoJogador);
})

cadastro.addEventListener('submit', (e: SubmitEvent) => {
    e.preventDefault();
    const objetosCadastro: any = {
        "clube": document.querySelector('[data-cadastro-clube]'),
        "liga": document.querySelector('[data-cadastro-liga]'),
        "nacionalidade": document.querySelector('[data-cadastro-nacionalidade]')
    }
    cadastroHtml(objetosCadastro, objetoJogador);
})