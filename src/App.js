import React, { useState } from "react";
import "./App.css";
import ContactForm from "./components/contact.Form";
import ContactoComponent from "./components/contactComponent";

function App() {
  const defaultContact = [
    { nombre: "Jonatan", apellido: "Ochoa", conectado: true },
    { nombre: "Eleonora", apellido: "Barros", conectado: false },
  ];

  const [nuevoContacto, setNuevoContacto] = useState(defaultContact);

  function changeState(contacto) {
    const index = nuevoContacto.indexOf(contacto);
    const tempContact = [...nuevoContacto];
    tempContact[index].estado = !tempContact[index].estado;
    setNuevoContacto(tempContact);
  }
  function remove(contacto) {
    const index = nuevoContacto.indexOf(contacto);
    const tempContact = [...nuevoContacto];
    tempContact.splice(index, 1);
    setNuevoContacto(tempContact);
  }
  function addContact(contacto) {
    const tempContact = [...nuevoContacto];
    tempContact.push(contacto);
    setNuevoContacto(tempContact);
  }

  return (
    <div className="App">
      <h1>Contactos</h1>
      <div>
        {nuevoContacto.map((contacto, index) => {
          return (
            <ContactoComponent
              key={index}
              contacto={contacto}
              changeState={changeState}
              remove={remove}
            />
          );
        })}
      </div>
      <ContactForm onAddContact={addContact} />
    </div>
  );
}

export default App;
