import React, { useRef } from "react";

const ContactForm = ({ onAddContact }) => {
  const nameRef = useRef("");
  const apellidoRef = useRef("");

  function addContact(e) {
    e.preventDefault();
    const newContact = {
      nombre: nameRef.current.value,
      apellido: apellidoRef.current.value,
      conectado: true,
    };

    onAddContact(newContact);
    nameRef.current.value = "";
    apellidoRef.current.value = "";
  }

  return (
    <div>
      <form onSubmit={addContact}>
        <h1>Añadir Contacto</h1>
        <input ref={nameRef} name="name" />
        <input ref={apellidoRef} name="apellido" />
        <button type="submit" onClick={addContact}>Agregar contacto</button>
      </form>
    </div>
  );
};

export default ContactForm;
