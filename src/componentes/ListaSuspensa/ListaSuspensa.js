import React from "react";
import './ListaSuspensa.css';

const ListaSuspensa = (props) => {
    const aoEscolhido = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="lista-suspensa">
            <label htmlFor={props.id}>{props.label}</label>
            <select id={props.id} onChange={aoEscolhido} value={props.valor} required={props.required}>
                <option value="" disabled>Selecione...</option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa;