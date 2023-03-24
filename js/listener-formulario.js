//importar funcion para validar formulario
import { validarFormulario } from "./validar-formulario.js";

//listener
export const listener = () => {
    //variable que representa el html
    const formulario = document.querySelector('#formulario');
    //listener
    //llamamos la funcion validarFormulario 
    formulario.addEventListener('submit', validarFormulario);
}

