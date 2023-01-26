import React from "react";
import style from "./cards.module.scss";

interface Props {
  jogadores: any;
}

export default function Cards({ jogadores }: Props) {
  function funcaoJogadores(jogador: any) {
    if (jogador.qualidade.nome != "") {
      return (
        <div className={style.jogador}>
          <p>
            Qualidade: <span>{jogador.qualidade.nome}</span>
          </p>
          <p>
            Liga: <span>{jogador.liga.nome}</span>
          </p>
          <p>
            Clube: <span>{jogador.clube.nome}</span>
          </p>
          <p>
            Nacionalidade: <span>{jogador.nacionalidade.nome}</span>
          </p>
        </div>
      );
    }
  }
  return (
    <>
      {jogadores.map((jogador: any, index: number) => (
        <React.Fragment key={index}>
          {funcaoJogadores(jogador)}
        </React.Fragment>
      ))}
    </>
  );
}
