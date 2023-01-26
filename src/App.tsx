import Cadastro from "./components/Cadastro";
import Cards from "./components/Cards";
import Estatisticas from "./components/Estatisticas";
import EstatisticasGerais from "./components/EstatisticasGerais";
import Formulario from "./components/Formulario";
import style from "./assets/styles/App.module.scss";
import "./assets/styles/style.css";
import objetoFormulario from "./components/Formulario/formulario-objeto";
import { useState } from "react";
import objetoCards from "./components/Cards/cards-objetos";

function requisicao(item: string, retorno: any) {
  const local = localStorage.getItem(item);
  if (local) {
    return JSON.parse(local);
  } else {
    return retorno;
  }
}

const formularioLocalStorage = requisicao("formulario", objetoFormulario);

const jogadoresLocalStorage = requisicao("jogadores", objetoCards);

function App() {
  const [formularioState, setFormularioState] = useState(
    formularioLocalStorage
  );
  function handleFormulario(evento: any, inputs: any) {
    evento.preventDefault();
    let formulario = { ...formularioState };
    const tipos = ["liga", "clube", "nacionalidade"];
    for (let tipo of tipos) {
      const input = inputs[tipo];
      const lugar = formulario.cadaSelecao.find(
        (nome: any) => nome.id === `formulario__${tipo}`
      );
      if (lugar) {
        const jaTem = lugar.opcoes.map((nome: any) => nome.id);
        if (
          jaTem.findIndex((nome: any) => nome === input.id) === -1 &&
          input.id !== ""
        ) {
          lugar.opcoes.push({ ...input });
        }
      } else {
        throw Error("Não foi possível encontrar o lugar no formulário.");
      }
    }
    setFormularioState(() => ({
      ...formulario,
    }));
    localStorage.setItem("formulario", JSON.stringify({ ...formularioState }));
  }

  const [jogadores, setJogadores] = useState<any[]>(jogadoresLocalStorage);
  function handleSubmit(evento: any) {
    let jogador: any = {};
    evento.preventDefault();
    const lista = Array(...evento.target.children);
    lista.pop();
    lista.forEach((seletorB: any) => {
      const seletor = seletorB.children[1];
      let item: any = {};
      item.id = seletor.value;
      const childrenSeletor = Array(...seletor.children);
      const opcao = childrenSeletor.find(
        (item: any) => item.value === seletor.value
      );
      if (opcao) {
        item.nome = opcao.innerHTML;
      } else {
        item.nome = "";
      }
      item.tipo = seletor.name;
      jogador[seletor.name.toLowerCase()] = { ...item };
    });
    if (jogadores[0].qualidade.nome === "") {
      setJogadores(() => [jogador]);
      localStorage.setItem("jogadores", JSON.stringify([jogador]));
    } else {
      setJogadores(() => [...jogadores, jogador]);
      localStorage.setItem(
        "jogadores",
        JSON.stringify([...jogadores, jogador])
      );
    }
  }
  return (
    <>
      <div id={style.formulario}>
        <Formulario formulario={formularioState} handleSubmit={handleSubmit} />
      </div>
      <div id={style.cadastro}>
        <Cadastro handleFormulario={handleFormulario} />
      </div>
      <div id={style.estatisticas}>
        <EstatisticasGerais jogadores={jogadores} />
        <Estatisticas jogadores={jogadores} />
      </div>
      <div id={style.cards}>
        <Cards jogadores={jogadores} />
      </div>
    </>
  );
}

export default App;
