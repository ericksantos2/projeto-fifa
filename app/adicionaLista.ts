export const listaJogadores: Object[] = [];

export function adicionaLista(jogador: any): void {
    const tipos: any[] = [
        "qualidade",
        "clube",
        "liga",
        "nacionalidade"
    ];
    let jogadorNovo: any = {
        "qualidade": undefined,
        "clube": undefined,
        "liga": undefined,
        "nacionalidade": undefined
    }
    for (let i = 0; i < tipos.length; i++) {
        const valor = jogador[tipos[i]].value;
        jogadorNovo[tipos[i]] = valor;
    }
    listaJogadores.push(jogadorNovo);
}