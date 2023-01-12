export function atualizaRanking(lista) {
    let listaContados = [];
    lista.forEach((jogador) => {
        rankingEstatisticas(listaContados, jogador, 'qualidade');
        rankingEstatisticas(listaContados, jogador, 'clube');
        rankingEstatisticas(listaContados, jogador, 'liga');
        rankingEstatisticas(listaContados, jogador, 'nacionalidade');
    });
    return listaContados;
}
function rankingEstatisticas(lista, jogador, tipo) {
    if (lista.length == 0) {
        const objeto = {
            "nome": jogador[tipo],
            "tipo": tipo,
            "contador": 1
        };
        lista.push(objeto);
    }
    else {
        if (verificacao(lista, jogador, tipo) == true) {
            const objeto = {
                "nome": jogador[tipo],
                "tipo": tipo,
                "contador": 1
            };
            lista.push(objeto);
        }
        else if (verificacao(lista, jogador, tipo) == false) {
            const objeto = lista.filter((e) => e['nome'] == jogador[tipo]);
            const lugar = objeto.find((e) => e['tipo'] == tipo);
            lugar.contador++;
        }
    }
}
export function contaMaior(lista, tipo) {
    const listaContados = atualizaRanking(lista);
    const listaMaior = listaContados.filter((e) => e['tipo'] == tipo);
    let maior = {
        "nome": "nenhum",
        "tipo": "nenhum",
        "contador": 0
    };
    listaMaior.forEach((objeto) => {
        if (objeto.contador > maior.contador) {
            maior = objeto;
        }
    });
    return maior;
}
function verificacao(lista, jogador, tipo) {
    const filtro = lista.filter((e) => e['nome'] == jogador[tipo]);
    if ((filtro.findIndex((e) => e['tipo'] == tipo)) < 0) {
        return true;
    }
    else if ((filtro.findIndex((e) => e['tipo'] == tipo)) >= 0) {
        return false;
    }
}
