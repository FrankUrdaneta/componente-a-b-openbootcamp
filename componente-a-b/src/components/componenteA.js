import ContactoComponent from "./componenteBB";


class Contacto{
    nombre="";
    apellido="";
    email="";
    conectado=false;
    constructor(nombre, apellido,email,conectado){
        this.nombre=nombre;
        this.apellido=apellido;
        this.email=email;
        this.conectado=conectado;
    }
}

const ComponenteContacto=()=>{
    const defaultContacto= new Contacto("Frank","Urdaneta","urdanetafranklyn@gmail.com",true);
    return(
        <div>
            <ContactoComponent contacto={defaultContacto} />
        </div>
    )
}

export default ComponenteContacto;