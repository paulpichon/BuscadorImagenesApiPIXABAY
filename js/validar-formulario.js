//importar funcion para mostrar una alerta
import { mostrarAlerta } from "./mostrar-alerta.js";
//importar funcion buscar imagenes
import { buscarImagenes } from "./buscar-imagenes.js";

//funcion para validar el formulario
export const validarFormulario = ( e ) => {
    e.preventDefault();
    //variable que representa el input
    const termino = document.querySelector('#termino').value;
    //objeto 
    const terminoObj = {
        termino
    };

    //verificar que no este vacio el objeto
    if ( Object.keys( terminoObj.termino ).length === 0 ) {
        //mostrar alerta
        return mostrarAlerta('¡El campo esta vacio!');
    }

    //funcion hacer la consulta a la api
    buscarImagenes( terminoObj.termino );

}