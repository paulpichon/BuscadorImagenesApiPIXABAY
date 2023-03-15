//funcion para hacer la peticion a la API
//desetructuramos desde los parametros
const consultarBusquedaApi = async( { termino } ) => {
    //apikey
    const key = '30907566-3221c4d1c76ae349991022cae';
    //url
    const url = `https://pixabay.com/api/?key=${key}&q=${ termino }&image_type=photo`;

    //fetch
    await fetch( url )
        .then( response => response.json() )
            .then( resultado => console.log( resultado ) )
}

export {
    consultarBusquedaApi
}
