//funcion para limpiar el html
export const limpiarHTML = ( selector ) => {
    while( selector.firstChild ) {
        selector.removeChild( selector.firstChild );
    }
}