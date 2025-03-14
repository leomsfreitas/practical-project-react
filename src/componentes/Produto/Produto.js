import React from "react";
import "./Produto.css";

const Produto = ({ nome, preco, marca, marcas, estadoProduto }) => {
    const imagem = marcas[marca];
    return (
        <div className="produto">
            <div className="cabecalho">
                <div className="imagem-container">
                    <img src={imagem} alt={nome} />
                </div>
            </div>

            <div className="rodape">
                <h2>{nome}</h2>
                <h2>R$ {preco}</h2>
                <h5>{estadoProduto || "Estado não especificado"}</h5> 
            </div>
        </div>
    );
};

export default Produto;