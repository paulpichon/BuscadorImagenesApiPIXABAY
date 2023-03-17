//funcion para calcular paginas
export const calcularPaginas = ( totalResultado ) => {
    //total de resultados por pagina
    const resultadosPorPagina = 20;
    //operacion para retornar = totalResultados / resultadosPorPagina = ?
    return parseInt( Math.ceil(totalResultado / resultadosPorPagina) );


}