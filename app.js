import { validarFormulario } from "./helpers/validar-formulario.js";

const iniciarApp = () => {
    //definir variable html
    const formulario = document.querySelector("#formulario");
    //listener
    formulario.addEventListener('submit', validarFormulario); 
    
}


//iniciar app
iniciarApp();