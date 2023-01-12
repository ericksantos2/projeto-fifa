const jaAdicionado: any[] = [];

export function cadastroHtml(valores: any, locais: any): void {
    const clubeCadastro: string = valores.clube.value;
    const ligaCadastro: string = valores.liga.value;
    const nacionalidadeCadastro: string = valores.nacionalidade.value;
    const tiposCadastro: any = {
        "clube": clubeCadastro,
        "liga": ligaCadastro,
        "nacionalidade": nacionalidadeCadastro
    };
    const tipos: any[] = ['clube', 'liga', 'nacionalidade'];
    for (let i = 0; i < tipos.length; i++) {
        if (tiposCadastro[tipos[i]] != '' && (jaAdicionado.findIndex((e: any) => e === tiposCadastro[tipos[i]])) < 0) {
            locais[tipos[i]].innerHTML += `
                <option value="${tiposCadastro[tipos[i]]}">${tiposCadastro[tipos[i]]}</option>
            `;
            jaAdicionado.push(tiposCadastro[tipos[i]]);
        }
    }
}