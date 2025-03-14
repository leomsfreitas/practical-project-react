import React, { useState } from "react";
import Header from "./componentes/Header/Header";
import Formulario from "./componentes/Formulario/Formulario";
import Area from "./componentes/Area/Area";

function App() {

  const marcas = {
    Hp: "/imagens/hp.png",
    Dell: "/imagens/dell.png",
    Positivo: "/imagens/positivo.png",
    Asus: "/imagens/asus.png",
    "Chinês (Genérico)": "/imagens/china.png"
  };
  const secoes = [
    {
        nome: 'Computadores',
        corPrimaria: '#DD7631',
        corSecundaria: '#191627'
    },
    {
        nome: 'Acessórios',
        corPrimaria: '#DD7631',
        corSecundaria: '#2A2A3B'
    },
    {
        nome: 'Impressoras',
        corPrimaria: '#DD7631',
        corSecundaria: '#3B3B4F'
    },
    {
        nome: 'Games',
        corPrimaria: '#DD7631',
        corSecundaria: '#4C4C63'
    },
    {
        nome: 'Gadgets',
        corPrimaria: '#DD7631',
        corSecundaria: '#5D5D77'
    }
  ];

  const listaSecoes = secoes.map(secao => secao.nome)
  const [produtos, setProdutos] = useState([])

  const adicionaProduto = (produto) => {
    const listaNova = produtos.slice();
    listaNova.push(produto);
    setProdutos(listaNova);
  };

  return (
    <div >
      <Header />
      <Formulario secoes={listaSecoes} aoProdutoCadastrado={produto => adicionaProduto(produto)} />

      {secoes.map(secao => {
        const filteredProducts = produtos.filter(produto => produto.secao === secao.nome);
        return <Area
          key={secao.nome}
          nome={secao.nome}
          corPrimaria={secao.corPrimaria}
          corSecundaria={secao.corSecundaria}
          produtos={filteredProducts}
          marcas={marcas}
        />;
      })}

    </div>
  );
}

export default App;
