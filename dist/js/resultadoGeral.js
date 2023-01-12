import { atualizaRanking } from "./ranking.js";
const tipos = [
    "qualidade",
    "clube",
    "liga",
    "nacionalidade"
];
let primeira = {
    "qualidade": true,
    "clube": true,
    "liga": true,
    "nacionalidade": true
};
function resultadoGeral(lista) {
    const listaContados = atualizaRanking(lista);
    let listasContados = {
        "qualidade": undefined,
        "clube": undefined,
        "liga": undefined,
        "nacionalidade": undefined
    };
    for (let i = 0; i < tipos.length; i++) {
        const lugar = tipos[i];
        const lista = listaContados.filter((e) => e['tipo'] == lugar);
        listasContados[lugar] = lista;
    }
    return listasContados;
}
export function geralHtml(lista) {
    const objetoLista = resultadoGeral(lista);
    const objetoJaTem = {
        "qualidade": [],
        "clube": [],
        "liga": [],
        "nacionalidade": []
    };
    let objetoDois = {
        "qualidade": [],
        "clube": [],
        "liga": [],
        "nacionalidade": []
    };
    for (let i = 0; i < tipos.length; i++) {
        const lugar = tipos[i];
        const listaTipo = objetoLista[lugar];
        const tudo = document.querySelectorAll(`[data-estatistica-${lugar}] p span`);
        const tipoLugar = document.querySelector(`[data-estatistica-${lugar}]`);
        tudo.forEach((span) => {
            const objeto = {
                "local": span.parentElement,
                "nome": span.innerHTML
            };
            objetoJaTem[lugar].push(span.innerHTML);
            objetoDois[lugar].push(objeto);
        });
        listaTipo.forEach((e) => {
            if (verificacao(e, objetoJaTem, lugar)) {
                const filtro = objetoDois[lugar].find((obj) => obj['nome'] === e['nome']);
                filtro.local.innerHTML = `
                    <span>${filtro.nome}</span>: ${e.contador++}
                `;
            }
            else {
                if (primeira[lugar]) {
                    tipoLugar.innerHTML = '';
                    primeira[lugar] = false;
                }
                tipoLugar.innerHTML += `
                    <p><span>${e['nome']}</span>: ${e['contador']}</p>
                `;
            }
        });
    }
}
function verificacao(e, objeto, tipo) {
    const filtro = objeto[tipo];
    if ((filtro.findIndex((nome) => nome == e['nome'])) < 0) {
        return false;
    }
    else if ((filtro.findIndex((nome) => nome == e['nome'])) >= 0) {
        return true;
    }
}
