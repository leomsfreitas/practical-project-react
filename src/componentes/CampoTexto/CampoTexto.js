import React from "react";
import './CampoTexto.css';

const CampoTexto = ({ label, placeholder, aoAlterado, required, tipo = "text", id }) => {
    return (
        <div className="campo-texto">
            <label htmlFor={id}>{label}</label>
            <input 
                id={id}
                type={tipo} 
                placeholder={placeholder} 
                onChange={evento => aoAlterado(evento.target.value)} 
                required={required} 
            />
        </div>
    )
}

export default CampoTexto;