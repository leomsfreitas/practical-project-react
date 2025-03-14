import React, { useState } from "react";
import './Formulario.css';
import CampoTexto from "../CampoTexto/CampoTexto";
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa";
import Botao from "../Botao/Botao";
import EstadoProduto from "../EstadoProduto/EstadoProduto";

const Formulario = (props) => {

    const marcas = [
        'Hp',
        'Dell',
        'Positivo',
        'Asus',
        'Chinês (Genérico)'
    ]

    const [secao, setSecao] = useState('')
    const [marca, setMarca] = useState('')
    const [nome, setNome] = useState('')
    const [preco, setPreco] = useState('')
    const [estadoProduto, setEstadoProduto] = useState('')

    const aoAlterarEstadoProduto = (evento) => {
        setEstadoProduto(evento.target.value);
    }

    const aoSalvar = (evento) => {
        evento.preventDefault()
        if (secao && marca && nome && preco && estadoProduto) {
            props.aoProdutoCadastrado(
                {
                    "secao" : secao,
                    "marca" : marca,
                    "nome" : nome,
                    "preco" : preco,
                    "estadoProduto" : estadoProduto
                }
            )
        } else {
            alert("Por favor, preencha todos os campos.");
        }
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Dados do produto:</h2>
                <ListaSuspensa 
                    id="secao"
                    label="Seção:"
                    itens={props.secoes}
                    valor={secao}
                    aoAlterado={valor => setSecao(valor)}
                    required
                />
                <ListaSuspensa
                    id="marca"
                    label="Marcas:"
                    itens={marcas}
                    valor={marca}
                    aoAlterado={valor => setMarca(valor)}
                    required
                />
                <CampoTexto
                    id="nome"
                    label="Nome:"
                    placeholder="Digite o nome do produto"
                    aoAlterado={valor => setNome(valor)}
                    required
                />
                <CampoTexto
                    id="preco"
                    label="Preço:"
                    placeholder="Digite o preço do produto"
                    aoAlterado={valor => setPreco(valor)}
                    required
                    tipo="number"
                />
                <EstadoProduto
                    id="estadoProduto"
                    estadoProduto={estadoProduto}
                    aoAlterarEstadoProduto={aoAlterarEstadoProduto}
                    required
                />
                <div className="botao-container">
                    <Botao> Inserir Produto </Botao>
                </div>
            </form>
        </section>
    )
}

export default Formulario;