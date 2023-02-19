

function ContactoComponent ({contacto}) {
    return (
      <div>
        <h2>
          Nombre: {contacto.nombre}
        </h2>
        <h3>
          Apellido: {contacto.apellido}
        </h3>
        <h4>
          Email: {contacto.email}
        </h4>
        <h5>
           {contacto.conectado?'Contacto En Linea':'Contacto No Disponible'}
        </h5>
      </div>
    )
  }

  export default ContactoComponent;