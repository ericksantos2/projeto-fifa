import { criaCard } from "./criaCard.js";
import { adicionaLista, listaJogadores } from "./adicionaLista.js";
import { cadastroHtml } from "./cadastroHtml.js";
import { estatisticasHtml } from "./rankingHtml.js";
import { geralHtml } from "./resultadoGeral.js";
const formulario = document.querySelector('[data-formulario]');
const cadastro = document.querySelector('[data-cadastro]');
const objetoJogador = {
    "qualidade": document.querySelector('[data-qualidade]'),
    "clube": document.querySelector('[data-clube]'),
    "liga": document.querySelector('[data-liga]'),
    "nacionalidade": document.querySelector('[data-nacionalidade]')
};
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    adicionaLista(objetoJogador);
    estatisticasHtml(listaJogadores);
    geralHtml(listaJogadores);
    criaCard(objetoJogador);
});
cadastro.addEventListener('submit', (e) => {
    e.preventDefault();
    const objetosCadastro = {
        "clube": document.querySelector('[data-cadastro-clube]'),
        "liga": document.querySelector('[data-cadastro-liga]'),
        "nacionalidade": document.querySelector('[data-cadastro-nacionalidade]')
    };
    cadastroHtml(objetosCadastro, objetoJogador);
});
