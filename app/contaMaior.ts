import { jogador } from "./main.js";

type objeto = {
    'tipo': string,
    'nome': string,
    'contador': number
}

function contaTipo(jogadores: Array<jogador>, tipo: string) {
    const listaJaLido: Array<objeto> = [];
    jogadores.forEach((jogador: any) => {
        if (listaJaLido.length === 0 || (listaJaLido.findIndex((e: any) => e['nome'] === jogador[tipo])) < 0) {
            const objeto: objeto = {
                'tipo': tipo,
                'nome': jogador[tipo],
                'contador': 1
            }
            listaJaLido.push(objeto);
        } else {
            const objeto: any = listaJaLido.find((e: any) => e['nome'] == jogador[tipo]);
            objeto.contador++;
        }
    })
    return listaJaLido;
}

export function contaMaior(jogadores: Array<jogador>, tipo: string): Object {
    const listaContada = contaTipo(jogadores, tipo);
    let maior: objeto = {
        'tipo': 'qualquer',
        'nome': 'qualquer',
        'contador': 0
    }
    listaContada.forEach((item: objeto) => {
        if (item['tipo'] === tipo) {
            if (item['contador'] > maior['contador']) {
                maior = item;
            }
        }
    })
    return maior;
}