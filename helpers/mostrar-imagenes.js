import { imprimirPaginador } from "./imprimir-paginador.js";
import { limpiarHTML } from "./limpiar-html.js";

//funcion para mostrar las imagenes
export const mostrarImagenes = (  imagenes ) => {
    //referencia al html
    const resultados = document.querySelector('#resultado');
    //limpiar el HTML
    limpiarHTML(resultados);

    //iteramos
    imagenes.forEach( resultado => {
        //destructuring
        const { views, likes, previewURL, largeImageURL } = resultado;

        //html
        //contenedor
        const divContenedor = document.createElement('DIV');
        divContenedor.classList.add('w-full', 'md:w-1/2', 'lg:w-1/3', 'xl:w-1/4', 'mb-4',  'px-2');

        //card
        const divCard = document.createElement('DIV');
        divCard.classList.add('max-w-sm', 'rounded', 'bg-white');

        //img
        const imagen = document.createElement('IMG');
        imagen.classList.add('w-full');
        imagen.alt = 'Sunset';
        imagen.src = previewURL;

        //div parrafos
        const divParrafos = document.createElement('DIV');
        divParrafos.classList.add('px-6', 'py-4');

        //pARRAFOS
        //parrafo 1
        const parrafo1 = document.createElement('P');
        parrafo1.classList.add('text-gray-700', 'text-base', 'font-bold');
        parrafo1.textContent = `${likes} me gusta`;
        //parrafo 2
        const parrafo2 = document.createElement('P');
        parrafo2.classList.add('text-gray-700', 'text-base', 'font-bold');
        parrafo2.textContent = `${views} veces vista`;

        //contenedor button
        const divButton = document.createElement('DIV');
        divButton.classList.add('px-6', 'pt-4', 'pb-2', 'text-center');

        //button
        const link = document.createElement('A');
        link.classList.add('bg-transparent', 'hover:bg-blue-500', 'text-blue-700', 'font-semibold', 'hover:text-white', 'py-2', 'px-4', 'border', 'border-blue-500', 'hover:border-transparent', 'rounded');
        link.setAttribute('target', '_blank');
        link.setAttribute('href', largeImageURL);
        link.textContent = 'Ver Imagen';

        //insertar
        //imagen
        divCard.appendChild( imagen );
        //div parrafos
        divCard.appendChild( divParrafos );
        //parrafos a divParrafos
        divParrafos.appendChild(parrafo1);
        divParrafos.appendChild(parrafo2);
        //div del button a div del card
        divCard.appendChild( divButton );
        //button al div del button
        divButton.appendChild( link );
        //div card al contenedor
        divContenedor.appendChild( divCard );

        //divContenedor a resultados
        resultados.appendChild( divContenedor );
        // console.log(divContenedor);


    });

    //imprimir el paginador
    imprimirPaginador();

}
