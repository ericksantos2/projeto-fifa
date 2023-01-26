import style from "./selecao.module.scss";

interface Props {
  argumentos: any;
}

export default function Selecao({ argumentos, ...props }: Props) {
  const objeto: any = argumentos.cadaSelect;
  return (
    <div className={style.selecao}>
      <label htmlFor={objeto.id}>{objeto.nome}: </label>
      <select name={objeto.nome} id={objeto.id} required>
        {objeto.opcoes.map((opcao: any, index: number) => (
          <option key={index} value={opcao.id}>
            {opcao.nome}
          </option>
        ))}
      </select>
    </div>
  );
}
