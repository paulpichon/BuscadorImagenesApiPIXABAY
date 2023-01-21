//variables
//variable para resultados
const resultado = document.querySelector('#resultado');
//formulario
const formulario = document.querySelector('#formulario');

//similar a DOMContentLoaded CON listener -> window.onload
window.onload = () => {
    //agregar un listener al formulario
    formulario.addEventListener('submit', validarFormulario);



}
//funcion para validar el formulario
function validarFormulario( e ) {
    //prevenir la accion por defecto
    e.preventDefault();
    //valor del input de busqueda
    const terminoBusqueda = document.querySelector('#termino').value;    
    //verificar con un if si no viene vacio
    if (terminoBusqueda === '') {
        //funcion para mostrar mensaje de alerta
        mostrarAlerta('Agrega un termino de busqueda');
        //retornamos para que ya no siga ejecutando codigo
        return;
    }

}
//funcion para mostrar alerta
function mostrarAlerta( mensaje ) {

    //verificar que no haya otra alerta previa
    const existeAlerta = document.querySelector('.bg-red-100');
    //if 
    if (!existeAlerta) {
        ///html del mensaje a mostrar
        const alerta = document.createElement('P');
        //estilos
        alerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center');
        //innerhtml
        alerta.innerHTML = `
            <strong class="font-bold">¡Error!</strong>
            <span class="block sm:inline">${mensaje}</span>
        `;
        //renderizar
        resultado.appendChild( alerta );

        //quitar alerta despues de 3 segundos
        setTimeout(() => {
            //quitar alerta
            alerta.remove();
        }, 3000);
    }

    
}
