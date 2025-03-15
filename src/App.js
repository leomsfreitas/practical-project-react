import React, { useState } from "react";
import Header from "./componentes/Header/Header";
import Formulario from "./componentes/Formulario/Formulario";
import Area from "./componentes/Secao/Secao";

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
        corPrimaria: '#DD7631'
    },
    {
        nome: 'Acessórios',
        corPrimaria: '#DD7631'
    },
    {
        nome: 'Impressoras',
        corPrimaria: '#DD7631'
    },
    {
        nome: 'Games',
        corPrimaria: '#DD7631'
    },
    {
        nome: 'Gadgets',
        corPrimaria: '#DD7631'
    }
  ];

  const listaSecoes = secoes.map(secao => secao.nome);
  const [produtos, setProdutos] = useState([]);

  const addProduto = (produto) => {
    const listaNova = produtos.slice();
    listaNova.push(produto);
    setProdutos(listaNova);
  };

  return (
    <div >
      <Header />
      <Formulario secoes={listaSecoes} aoProdutoCadastrado={produto => addProduto(produto)} />

      {secoes.map(secao => {
        const filteredProducts = produtos.filter(produto => produto.secao === secao.nome);
        return <Area
          key={secao.nome}
          nome={secao.nome}
          corPrimaria={secao.corPrimaria}
          produtos={filteredProducts}
          marcas={marcas}
        />;
      })}

    </div>
  );
}

export default App;