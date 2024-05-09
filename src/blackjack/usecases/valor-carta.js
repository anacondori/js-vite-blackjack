

/**
 * funcion obtener el valor de la carta
 * @param {String} carta carta es de tipo String
 * @returns {Number} retorna el valor de la carta
 */
  export const valorCarta = (carta) => {
    const valor = carta.substring(0,carta.length-1);
    // @ts-ignore
    return ( isNaN(valor) ) ?(valor === 'A') ?11 :10
                            // @ts-ignore
                            :(valor * 1);
    }