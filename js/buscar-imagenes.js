import { mostrarImagenes } from "./mostrar-imagenes.js";

//funcion para hacer la consulta a la API de PIXABAY
export const buscarImagenes = async( termino ) => {
    //key api
    const key = '30907566-3221c4d1c76ae349991022cae';
    //url
    const url = `https://pixabay.com/api/?key=${ key }&q=${ termino }&image_type=photo`;

    //fetch
    await fetch( url )
        .then( response => response.json() )
            .then( imagenes => mostrarImagenes( imagenes.hits ) )

}