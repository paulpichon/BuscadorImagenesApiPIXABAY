//importamos la variable resultadosPorPagina para poder utilizarla aqui
// import { resultadosPorPagina } from "./buscar-termino-api.js";

//funcion para calcular paginas
export const calcularPaginas = ( totalResultado, resultadosPorPagina ) => {
    //operacion para retornar = totalResultados / resultadosPorPagina = ?
    return parseInt( Math.ceil(totalResultado / resultadosPorPagina) );


}