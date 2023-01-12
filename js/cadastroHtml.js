const jaAdicionado = [];
export function cadastroHtml(valores, locais) {
    const clubeCadastro = valores.clube.value;
    const ligaCadastro = valores.liga.value;
    const nacionalidadeCadastro = valores.nacionalidade.value;
    const tiposCadastro = {
        "clube": clubeCadastro,
        "liga": ligaCadastro,
        "nacionalidade": nacionalidadeCadastro
    };
    const tipos = ['clube', 'liga', 'nacionalidade'];
    for (let i = 0; i < tipos.length; i++) {
        if (tiposCadastro[tipos[i]] != '' && (jaAdicionado.findIndex((e) => e === tiposCadastro[tipos[i]])) < 0) {
            locais[tipos[i]].innerHTML += `
                <option value="${tiposCadastro[tipos[i]]}">${tiposCadastro[tipos[i]]}</option>
            `;
            jaAdicionado.push(tiposCadastro[tipos[i]]);
        }
    }
}
