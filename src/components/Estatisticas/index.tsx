import { capitaliza } from "../../assets/utils/capitaliza";
import { calculaJogador } from "../EstatisticasGerais";
import style from "./estatisticas.module.scss";

interface Props {
  jogadores: any;
}

const tiposString = ["qualidade", "liga", "clube", "nacionalidade"];

export default function Estatisticas({ jogadores }: Props) {
  const contados = calculaJogador(jogadores);
  return (
    <div className={style.estatisticas}>
      {tiposString.map((tipo: string, index: number) => (
        <div key={index} className={style.tipoEstatistica}>
          <h1>{capitaliza(tipo)}s</h1>
          <div>
            {contados[tipo].map((item: any, indexB: number) => {
              if (jogadores[0].qualidade.nome !== "") {
                return (
                  <p key={indexB}>
                    {item.nome}: {item.contador}
                  </p>
                );
              } else {
                return <p key={indexB}>Nenhuma por enquanto.</p>;
              }
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
