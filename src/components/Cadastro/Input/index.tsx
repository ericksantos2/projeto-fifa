import { cadastroInputsTipo } from "../../../types/cadastro-objeto";
import style from "./input.module.scss";

interface argumentosInput {
  input: cadastroInputsTipo;
  value: any;
  onChange: any;
}

interface Props {
  argumentos: argumentosInput;
}

export default function Input({ argumentos }: Props) {
  const local = argumentos.input.id.replace('cadastro__', '');
  return (
    <div className={style.inputDiv}>
      <label htmlFor={argumentos.input.id}>{argumentos.input.nome}: </label>
      <input
        type="text"
        id={argumentos.input.id}
        value={argumentos.value[local].nome}
        onChange={argumentos.onChange}
        required
      />
    </div>
  );
}

