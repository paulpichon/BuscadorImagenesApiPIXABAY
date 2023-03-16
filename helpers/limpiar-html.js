//funcion para limpiar el html anterior
export const limpiarHTML = ( selector ) =>{
    while ( selector.firstChild ) {
        selector.removeChild( selector.firstChild );
    }
};