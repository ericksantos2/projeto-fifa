import Selecao from "./Selecao";
import style from "./formulario.module.scss";

interface Props {
  formulario: any;
  handleSubmit: any;
}

export default function Formulario({ formulario, handleSubmit }: Props) {
  return (
    <form className={style.formulario} onSubmit={handleSubmit}>
      {formulario.cadaSelecao.map((cadaSelect: any, index: number) => (
        <Selecao
          key={index}
          argumentos={{
            cadaSelect: cadaSelect,
          }}
        ></Selecao>
      ))}
      <div className={style.botoes}>
        <button type="submit">Enviar</button>
        <button
          type="button"
          onClick={() => {
            localStorage.removeItem("jogadores");
            window.location.reload();
          }}
        >
          Resetar
        </button>
      </div>
    </form>
  );
}
