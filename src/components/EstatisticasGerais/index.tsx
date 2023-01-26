import { useEffect, useState } from "react";
import { capitaliza } from "../../assets/utils/capitaliza";
import style from "./estatisticas-gerais.module.scss";

interface Props {
  jogadores: any;
}

const tiposString = ["qualidade", "liga", "clube", "nacionalidade"];

export function calculaJogador(jogadores: any) {
  const jogadoresContados: any = {};
  for (let tipo of tiposString) {
    const tiposIsso: any[] = [];
    jogadores.forEach((jogador: any) => {
      if (
        tiposIsso.findIndex((nome: string) => nome === jogador[tipo].nome) ===
        -1
      ) {
        tiposIsso.push(jogador[tipo].nome);
      }
    });
    const tipos: any[] = [];
    tiposIsso.forEach((encontrado) => {
      const encontradoId = encontrado.replace(" ", "_").toLowerCase();
      const contadoNovo: any[] = [];
      let contado: any[] = jogadores.map((jogador: any) => {
        if (jogador[tipo].id === encontradoId) {
          return jogador[tipo].id;
        } else {
          return null;
        }
      });
      contado.forEach((item: string, index: number) => {
        if (item !== null) {
          contadoNovo.push(item);
        }
      });
      contado = contadoNovo;
      const objeto = {
        nome: encontrado,
        id: encontradoId,
        contador: contado.length,
      };
      tipos.push(objeto);
    });
    jogadoresContados[tipo] = tipos;
  }
  return jogadoresContados;
}

function calculaMaior(jogadores: any) {
  const objeto: any = {};
  const contados = calculaJogador(jogadores);
  for (let tipo of tiposString) {
    const lugar = contados[tipo];
    let maior = { contador: 0 };
    while (true) {
      const procuraMaior = lugar.find(
        (item: any) => item.contador > maior.contador
      );
      if (procuraMaior != undefined) {
        maior = procuraMaior;
      } else {
        break;
      }
    }
    objeto[tipo] = maior;
  }
  return objeto;
}

export default function EstatisticasGerais({ jogadores }: Props) {
  const [maisJogadores, setMaisJogadores] = useState(calculaMaior(jogadores));
  useEffect(() => {
    setMaisJogadores({...calculaMaior(jogadores)})
  }, [jogadores]);

  return (
    <div className={style.estatisticas}>
      <h1 onClick={() => calculaMaior(jogadores)}>Estatisticas Gerais</h1>
      {tiposString.map((tipo: any, index: number) => {
        if (jogadores[0].qualidade.nome !== "") {
          return (
            <p key={index}>
              {capitaliza(tipo)} com mais jogadores:{" "}
              <span>{maisJogadores[tipo].nome}</span>
            </p>
          );
        } else {
          return (
            <p key={index}>
              {capitaliza(tipo)} com mais jogadores:{" "}
              <span>Nenhuma por enquanto</span>
            </p>
          );
        }
      })}
      {/* <p>
        Qualidade com mais jogadores: <span>Ouro</span>
      </p>
      <p>
        Liga com mais jogadores: <span>BRA 1</span>
      </p>
      <p>
        Clube com mais jogadores: <span>Palmeiras</span>
      </p>
      <p>
        Nacionalidade com mais jogadores: <span>Brasileiro</span>
      </p> */}
    </div>
  );
}
