import { atualizaRanking } from "./ranking.js";

const tipos: string[] = [
    "qualidade",
    "clube",
    "liga",
    "nacionalidade"
];

let primeira: any = {
    "qualidade": true,
    "clube": true,
    "liga": true,
    "nacionalidade": true
};

function resultadoGeral(lista: any[]): any[] {
    const listaContados: any[] = atualizaRanking(lista);

    let listasContados: any = {
        "qualidade": undefined,
        "clube": undefined,
        "liga": undefined,
        "nacionalidade": undefined
    }
    for (let i = 0; i < tipos.length; i++) {
        const lugar = tipos[i];
        const lista = listaContados.filter((e: any) => e['tipo'] == lugar);
        listasContados[lugar] = lista;
    }
    return listasContados;
}

export function geralHtml(lista: any[]): void {
    const objetoLista: any = resultadoGeral(lista);
    const objetoJaTem: any = {
        "qualidade": [],
        "clube": [],
        "liga": [],
        "nacionalidade": []
    };
    let objetoDois: any = {
        "qualidade": [],
        "clube": [],
        "liga": [],
        "nacionalidade": []
    };
    for (let i = 0; i < tipos.length; i++) {
        const lugar: string = tipos[i];
        const listaTipo: any[] = objetoLista[lugar];
        const tudo: any = document.querySelectorAll(`[data-estatistica-${lugar}] p span`);
        const tipoLugar: HTMLDivElement = document.querySelector(`[data-estatistica-${lugar}]`);
        tudo.forEach((span: HTMLSpanElement) => {
            const objeto: any = {
                "local": span.parentElement,
                "nome": span.innerHTML
            }
            objetoJaTem[lugar].push(span.innerHTML);
            objetoDois[lugar].push(objeto);
        })
        listaTipo.forEach((e: any) => {
            if (verificacao(e, objetoJaTem, lugar)) {
                const filtro: any = objetoDois[lugar].find((obj: any) => obj['nome'] === e['nome']);
                filtro.local.innerHTML = `
                    <span>${filtro.nome}</span>: ${e.contador++}
                `
                // aqui é pra ver se vai adicionar um novo treco nas estatisticas gerais ou se vai alterar o número
            } else {
                if (primeira[lugar]) {
                    tipoLugar.innerHTML = '';
                    primeira[lugar] = false;
                }
                tipoLugar.innerHTML += `
                    <p><span>${e['nome']}</span>: ${e['contador']}</p>
                `
            }
        }) // cada negocio contado
    }
}

function verificacao(e: any, objeto: any, tipo: string): boolean {
    const filtro: any[] = objeto[tipo];
    if ((filtro.findIndex((nome: string) => nome == e['nome'])) < 0) {
        return false;
    } else if ((filtro.findIndex((nome: string) => nome == e['nome'])) >= 0) {
        return true;
    }
}