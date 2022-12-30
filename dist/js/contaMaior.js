function contaTipo(jogadores, tipo) {
    const listaJaLido = [];
    jogadores.forEach((jogador) => {
        if (listaJaLido.length === 0 || (listaJaLido.findIndex((e) => e['nome'] === jogador[tipo])) < 0) {
            const objeto = {
                'tipo': tipo,
                'nome': jogador[tipo],
                'contador': 1
            };
            listaJaLido.push(objeto);
        }
        else {
            const objeto = listaJaLido.find((e) => e['nome'] == jogador[tipo]);
            objeto.contador++;
        }
    });
    return listaJaLido;
}
export function contaMaior(jogadores, tipo) {
    const listaContada = contaTipo(jogadores, tipo);
    let maior = {
        'tipo': 'qualquer',
        'nome': 'qualquer',
        'contador': 0
    };
    listaContada.forEach((item) => {
        if (item['tipo'] === tipo) {
            if (item['contador'] > maior['contador']) {
                maior = item;
            }
        }
    });
    return maior;
}
