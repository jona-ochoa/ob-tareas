import React from 'react';

const ContactComponent = ({contacto, changeState, remove}) => {
    return (
        <div>
            <h2>{contacto.nombre}</h2>
            <h3>{contacto.apellido}</h3>
            <button onClick={() => changeState(contacto)}>
                {contacto.estado ? 'Conectado' : 'Desconectado'}
            </button>
            <button onClick={() => remove(contacto)}>
                Borrar
            </button>
        </div>
    );
}

export default ContactComponent;