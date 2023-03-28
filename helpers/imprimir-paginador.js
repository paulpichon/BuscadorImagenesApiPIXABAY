//se importa la variable con el valor que tenga
import { totalPaginas } from "./buscar-termino-api.js";
//iterador
import { crearPaginador } from "./crear-paginador.js";

//variable iterador
let iterador;

export const imprimirPaginador = () => {
    //iterador
    iterador = crearPaginador( totalPaginas );
    console.log( iterador.next().value );

}