import Input from "./Input";
import style from "./cadastro.module.scss";
import objetoCadastro from "./cadastro-objetos";
import { cadastroTipo, cadastroInputsTipo } from "../../types/cadastro-objeto";
import { useState } from "react";

export interface valoresInputTipo {
  liga: { nome: string; id: string };
  clube: { nome: string; id: string };
  nacionalidade: { nome: string; id: string };
}

interface argumentos {
  cadastro: cadastroTipo;
  value: valoresInputTipo;
  onChange: Function;
}

interface Props {
  handleFormulario: (evento: any, inputs: any) => void;
}

export default function Cadastro({handleFormulario}: Props) {
  const [valoresInput, setValoresInput] = useState<valoresInputTipo>({
    liga: {
      nome: "",
      id: "",
    },
    clube: {
      nome: "",
      id: "",
    },
    nacionalidade: {
      nome: "",
      id: "",
    },
  });
  const handleInputCadastro = (evento: any) => {
    let valoresInputAntes: any = valoresInput;
    valoresInputAntes[evento.target.id.replace("cadastro__", "")].nome =
      evento.target.value;
    let id = evento.target.value.toLowerCase();
    id = id.replace(" ", "_");
    valoresInputAntes[evento.target.id.replace("cadastro__", "")].id = id;
    setValoresInput((antes) => ({
      ...valoresInputAntes,
    }));
  };
  const argumentos: argumentos = {
    cadastro: objetoCadastro,
    value: valoresInput,
    onChange: handleInputCadastro,
  };
  return (
    <form
      className={style.cadastro}
      onSubmit={(evento: any): any => {
        handleFormulario(evento, valoresInput);
      }}
    >
      <div className={style.selects}>
        {argumentos.cadastro.cadaInput.map(
          (input: cadastroInputsTipo, index: number) => (
            <Input
              argumentos={{
                input: input,
                value: argumentos.value,
                onChange: argumentos.onChange,
              }}
              key={index}
            />
          )
        )}
      </div>
      <div className={style.botoes}>
        <button type="submit">Enviar</button>
        <button type="button" onClick={() => {localStorage.removeItem('formulario'); window.location.reload()}}>Resetar</button>
      </div>
    </form>
  );
}
