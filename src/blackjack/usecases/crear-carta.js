/**
 * funcion que muestra la carta
 * @param {NodeListOf<Element>} divCartasJugadores elemento HTML para mostrar las cartas
 * @param {String} carta 
 * @param {Number} turno turno del jugador
 */
export const crearCarta = (divCartasJugadores, carta, turno) => {

    if (!divCartasJugadores) throw new Error('divCartasJugadores es un argumento obligatorio');
    if (!carta) throw new Error('La carta es un argumento obligatorio');
   // if (!turno) throw new Error('El turno es un argumento obligatorio');

    //MOSTRAR CARTA JUGADOR / COMPUTADORA
    //<img class="carta" src="assets/cartas/10C.png" >             
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    divCartasJugadores[turno].append(imgCarta);
}