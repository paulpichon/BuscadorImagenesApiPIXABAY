//
import { calcularPaginas } from "./calcular-paginas.js";
import { mostrarImagenes } from "./mostrar-imagenes.js";

//total de resultados por pagina
//se poner por fuera para poder ser exportada
const resultadosPorPagina = 40;
//variable para total paginas
//se define esta variable por fuera para que pueda ser usada por el archivo crear-paginador= generador
let totalPaginas;

//funcion para hacer la peticion a la API
//desetructuramos desde los parametros
const consultarBusquedaApi = async( { termino } ) => {
    //apikey
    const key = '30907566-3221c4d1c76ae349991022cae';
    //url
    const url = `https://pixabay.com/api/?key=${key}&q=${ termino }&image_type=photo&per_page=${ resultadosPorPagina }`;

    //fetch
    await fetch( url )
        .then( response => response.json() )
            .then( resultado => {
                console.log( resultado, "cantidad" );
                //funcion para calcular las paginas, para hacer el paginador
                totalPaginas = calcularPaginas( resultado.totalHits, resultadosPorPagina);

                //mostrar las imagenes
                mostrarImagenes(  resultado.hits );
            });
}

export {
    consultarBusquedaApi,
    totalPaginas
    // resultadosPorPagina
}
