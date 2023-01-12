export const listaJogadores = [];
export function adicionaLista(jogador) {
    const tipos = [
        "qualidade",
        "clube",
        "liga",
        "nacionalidade"
    ];
    let jogadorNovo = {
        "qualidade": undefined,
        "clube": undefined,
        "liga": undefined,
        "nacionalidade": undefined
    };
    for (let i = 0; i < tipos.length; i++) {
        const valor = jogador[tipos[i]].value;
        jogadorNovo[tipos[i]] = valor;
    }
    listaJogadores.push(jogadorNovo);
}
