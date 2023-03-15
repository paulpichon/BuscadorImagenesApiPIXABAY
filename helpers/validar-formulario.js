import { mostrarMensaje } from "./mostrar-mensaje.js";
import { consultarBusquedaApi } from "./buscar-termino-api.js";

const validarFormulario = ( e ) => {
    e.preventDefault();
    //convertimos en objeto el termino que viene del input
    const termino = document.querySelector('#termino').value;
    //verificar si esta vacio
    if ( termino === '' ) {
        mostrarMensaje('El input no puede estar vacio.');
        return;
    }
    //creamos un objeto con el termino del input
    const terminoObj = {
        termino
    }
    //llamamos la funcion para hacer la consulta a la API
    consultarBusquedaApi( terminoObj );

}


export {
    validarFormulario
}