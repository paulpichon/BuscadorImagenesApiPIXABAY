//variables
const formulario = document.querySelector('#formulario');
//variable respuesta
const resultado = document.querySelector('#resultado');

//listener
window.onload = () => {
    
    //listener al formulario
    formulario.addEventListener('submit', validarFormulario);

}

//funciones
//funcion para validar el formulario
function validarFormulario( e ) {
    //prevenir la accion por defecto
    e.preventDefault();
    //obtener el value del input
    const terminoBusqueda = document.querySelector('#termino').value;

    //validar si terminoBusqueda esta vacio
    if ( terminoBusqueda === '') {
        //llamar funcion para mostrar un mensaje de error
        mostrarMesaje("El input no puede estar vacio");
        //return para que ya no siga ejecutando codigo
        return;
    }
    //llamar la funcion para hacer la busqueda con la API
    buscarImagenes( terminoBusqueda );
    
}

//funcion para mostrar mensaje en la pantalla
function mostrarMesaje( mensaje ) {

    //verificar si hay una alerta previa
    const existeAlerta = document.querySelector('.alerta');
    //si existe la alerta no se muestra otra vez
    if ( !existeAlerta ) {//true o false
        //construir el html
        const alerta = document.createElement('P');
        //estilos
        alerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center', 'alerta');
        //innerhtml
        alerta.innerHTML = `
            <strong class='font-bold''>¡ERROR!</strong>
            <span class='block sm:inline'>${ mensaje }</span>
        `;

        //renderizar el mensaje
        resultado.appendChild( alerta );
        //quitar el mensaje despues de 3 segundos
        setTimeout(() => {
            //quitar alerta
            alerta.remove();
        }, 3000);    
    }

}
//funcion para crear la busqueda de imagenes con la API PIXABAY
function buscarImagenes( termino ) {
    //key
    const key = '30907566-3221c4d1c76ae349991022cae';
    //url 
    const url = `https://pixabay.com/api/?key=${ key }&q=${ termino }&image_type=photo`;
    //fetch
    fetch( url )
        .then( respuesta => respuesta.json() )
            .then( resultado => mostrarImagenes( resultado.hits ) )

}
//funcion para mostrar las imagenes en pantalla
function mostrarImagenes( imagenes ) {
    console.log(imagenes, "imagenes");
}