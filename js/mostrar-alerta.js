//funcion para mostrar alertas
export const mostrarAlerta = ( mensaje ) => {

    const alertas = document.querySelector(".alertError");
    //si no existen las alertas
    if ( !alertas ) {
        
        //variable que representa html
        const resultado = document.querySelector('#resultado');
        //html
        //div alerta
        const divMensaje = document.createElement('DIV');
        divMensaje.classList.add('bg-red-100', 'border-l-4' ,'border-red-500', 'text-red-700', 'p-4', 'flex-auto', 'alertError');
        divMensaje.setAttribute('role', 'alert');
        //mensaje
        const pMensaje = document.createElement('P');
        pMensaje.classList.add('text-center');
        pMensaje.textContent = mensaje.toUpperCase();
        //RENDERIZAR
        divMensaje.appendChild( pMensaje )
        resultado.appendChild( divMensaje );

        //quitar la alerta
        setTimeout(() => {
            divMensaje.remove();
        }, 3000);        

    }

}