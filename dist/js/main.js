import { criaCard } from './criaCard.js';
import { criaOpcao } from './cadastro.js';
export { clube, liga, nacionalidade };
const formulario = document.querySelector('[data-formulario]');
const qualidade = document.querySelector('[data-qualidade]');
const clube = document.querySelector('[data-clube]');
const liga = document.querySelector('[data-liga]');
const nacionalidade = document.querySelector('[data-nacionalidade]');
const formCadastro = document.querySelector('[data-cadastro]');
formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const objeto = {
        "qualidade": qualidade.value,
        "clube": clube.value,
        "liga": liga.value,
        "nacionalidade": nacionalidade.value
    };
    criaCard(objeto);
});
formCadastro.addEventListener("submit", (evento) => {
    evento.preventDefault();
    criaOpcao();
});
