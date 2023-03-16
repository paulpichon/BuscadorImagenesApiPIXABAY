//funcion para calcular las paginas, para hacer el paginador
export const calcularPaginas = ( totalResultados ) => {
    const registroPorPagina = 40;
    //Math.ceil ---> redonde siempre hacia a arriba un numero asi sea p.e: 2.1 = 3
    return parseInt( Math.ceil( totalResultados /  registroPorPagina) );
}