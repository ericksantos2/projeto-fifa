import { clube, liga, nacionalidade } from './main.js';
const clubeCadastro = document.querySelector('[data-cadastro-clube]');
const ligaCadastro = document.querySelector('[data-cadastro-liga]');
const nacionalidadeCadastro = document.querySelector('[data-cadastro-nacionalidade]');
const listaElementos = [clubeCadastro, ligaCadastro, nacionalidadeCadastro];
const listaClubeAdicionado = [];
const listaLigaAdicionada = [];
const listaNacionalidadeAdicionada = [];
export function criaOpcao() {
    const clubeVerificado = verificacao('clube');
    const ligaVerificada = verificacao('liga');
    const nacionalidadeVerificada = verificacao('nacionalidade');
    adicionaHtml(clubeVerificado, 'clube');
    adicionaHtml(ligaVerificada, 'liga');
    adicionaHtml(nacionalidadeVerificada, 'nacionalidade');
    limpaTudo();
}
function verificacao(tipo) {
    if (tipo === 'clube') {
        if (clubeCadastro.value != '') {
            return clubeCadastro.value;
        }
        else {
            return undefined;
        }
    }
    else if (tipo === 'liga') {
        if (ligaCadastro.value != '') {
            return ligaCadastro.value;
        }
        else {
            return undefined;
        }
    }
    else if (tipo === 'nacionalidade') {
        if (nacionalidadeCadastro.value != '') {
            return nacionalidadeCadastro.value;
        }
        else {
            return undefined;
        }
    }
    else {
        return undefined;
    }
}
function adicionaHtml(p, tipo) {
    if (p != undefined) {
        const opcao = `
            <option>${p}</option>
        `;
        if (tipo === 'clube') {
            if ((listaClubeAdicionado.findIndex(e => e == p)) <= -1) {
                listaClubeAdicionado.push(p);
                clube.innerHTML += opcao;
            }
        }
        else if (tipo === 'liga') {
            if ((listaLigaAdicionada.findIndex(e => e == p)) <= -1) {
                listaLigaAdicionada.push(p);
                liga.innerHTML += opcao;
            }
        }
        else if (tipo === 'nacionalidade') {
            if ((listaNacionalidadeAdicionada.findIndex(e => e == p)) <= -1) {
                listaNacionalidadeAdicionada.push(p);
                nacionalidade.innerHTML += opcao;
            }
        }
    }
}
function limpaTudo() {
    listaElementos.forEach((e) => {
        e.value = '';
    });
}
