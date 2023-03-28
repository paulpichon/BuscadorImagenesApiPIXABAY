//PAGINADOR
export const crearPaginador = function*( total )  {
    for( let i = 1; i <= total; i++ ) {
        //para registrar el valor
        yield i;
    }
}