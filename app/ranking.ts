export function atualizaRanking(lista: any[]): any[] {
    let listaContados: any[] = [];
    lista.forEach((jogador: Object) => {
        rankingEstatisticas(listaContados, jogador, 'qualidade');
        rankingEstatisticas(listaContados, jogador, 'clube');
        rankingEstatisticas(listaContados, jogador, 'liga');
        rankingEstatisticas(listaContados, jogador, 'nacionalidade');
    });
    return listaContados;
}

function rankingEstatisticas(lista: any[], jogador: any, tipo: string): void {
    if (lista.length == 0) {
        const objeto: any = {
            "nome": jogador[tipo],
            "tipo": tipo,
            "contador": 1
        };
        lista.push(objeto);
    } else {
        if (verificacao(lista, jogador, tipo) == true) {
            const objeto: any = {
                "nome": jogador[tipo],
                "tipo": tipo,
                "contador": 1
            };
            lista.push(objeto);
        } else if (verificacao(lista, jogador, tipo) == false) {
            const objeto = lista.filter((e: any) => e['nome'] == jogador[tipo]);
            const lugar = objeto.find((e: any) => e['tipo'] == tipo);
            lugar.contador++;
        }
    }
}

export function contaMaior(lista: any[], tipo: string): Object {
    const listaContados = atualizaRanking(lista);
    const listaMaior: any[] = listaContados.filter((e: any) => e['tipo'] == tipo);
    let maior: any = {
        "nome": "nenhum",
        "tipo": "nenhum",
        "contador": 0
    }
    listaMaior.forEach((objeto) => {
        if (objeto.contador > maior.contador) {
            maior = objeto;
        }
    })
    return maior;
}

function verificacao(lista: any[], jogador: any, tipo: string): boolean {
    const filtro: any[] = lista.filter((e: any) => e['nome'] == jogador[tipo]);
    if ((filtro.findIndex((e: any) => e['tipo'] == tipo)) < 0) {
        return true;
    } else if ((filtro.findIndex((e: any) => e['tipo'] == tipo)) >= 0) {
        return false;
    }
}