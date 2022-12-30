import { clube, liga, nacionalidade } from './main.js';

const clubeCadastro: HTMLInputElement = document.querySelector('[data-cadastro-clube]');
const ligaCadastro: HTMLInputElement = document.querySelector('[data-cadastro-liga]');
const nacionalidadeCadastro: HTMLInputElement = document.querySelector('[data-cadastro-nacionalidade]');

const listaElementos: Array<HTMLInputElement> = [clubeCadastro, ligaCadastro, nacionalidadeCadastro];

const listaClubeAdicionado: Array<string> = [];
const listaLigaAdicionada: Array<string> = [];
const listaNacionalidadeAdicionada: Array<string> = [];

export function criaOpcao(): void {
    const clubeVerificado = verificacao('clube');
    const ligaVerificada = verificacao('liga');
    const nacionalidadeVerificada = verificacao('nacionalidade');
    adicionaHtml(clubeVerificado, 'clube');
    adicionaHtml(ligaVerificada, 'liga');
    adicionaHtml(nacionalidadeVerificada, 'nacionalidade');
    limpaTudo();
}

function verificacao(tipo: string): string {
    if (tipo === 'clube') {
        if (clubeCadastro.value != '') {
            return clubeCadastro.value;
        } else {
            return undefined;
        }
    } else if (tipo === 'liga') {
        if (ligaCadastro.value != '') {
            return ligaCadastro.value;
        } else {
            return undefined;
        }
    } else if (tipo === 'nacionalidade') {
        if (nacionalidadeCadastro.value != '') {
            return nacionalidadeCadastro.value;
        } else {
            return undefined;
        }
    } else {
        return undefined;
    }
}

function adicionaHtml(p: string, tipo: string): void {
    if (p != undefined) {
        const opcao = `
            <option>${p}</option>
        `
        if (tipo === 'clube') {
            if ((listaClubeAdicionado.findIndex(e => e == p)) <= -1) {
                listaClubeAdicionado.push(p);
                clube.innerHTML += opcao;
            }
        } else if (tipo === 'liga') {
            if ((listaLigaAdicionada.findIndex(e => e == p)) <= -1) {
                listaLigaAdicionada.push(p);
                liga.innerHTML += opcao;
            }
        } else if (tipo === 'nacionalidade') {
            if ((listaNacionalidadeAdicionada.findIndex(e => e == p)) <= -1) {
                listaNacionalidadeAdicionada.push(p);
                nacionalidade.innerHTML += opcao;
            }
        }
    }
}

function limpaTudo() {
    listaElementos.forEach((e: HTMLInputElement) => {
        e.value = '';
    })
}