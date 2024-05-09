import { pedirCarta, crearCarta, valorCarta } from "./";

/**
 * turno de la computadora
 * @param {Number} puntosMinimos puntos minimos q la computadora necesita para ganar
 * @param {Array<Number>} puntosJugadores puntos del jugador
 * @param {NodeListOf<Element>} divCartasJugadores elemento HTML para mostrar las cartas
 * @param {Array<String>} deck 
 */
export const turnoComputadora = (puntosMinimos, puntosJugadores, divCartasJugadores, deck = []) => {

    if (!puntosMinimos) throw new Error('puntosMinimos son necesarios');
    if (!puntosJugadores) throw new Error('puntosJugadores son necesarios');
    if (!deck || deck.length === 0 ) throw new Error('No hay cartas en el deck');  

    let puntosComputadora = 0;
    // se ejecuta por lo menos 1 vez
    do {
        const carta = pedirCarta(deck);                
        puntosComputadora = acumularPuntos(puntosJugadores, carta, puntosJugadores.length-1);                            
        crearCarta(divCartasJugadores, carta, puntosJugadores.length-1);
    } while ( (puntosComputadora < puntosMinimos) && (puntosMinimos <= 21) );
    
    determinarGanador(puntosJugadores);                
}

//funcion que muestra mensaje del ganador
const determinarGanador = (puntosJugadores) => {
    const [puntosMinimos, puntosComputadora] = puntosJugadores;

    setTimeout( () => {
        if (puntosMinimos === puntosComputadora) {
            alert('Nadie gana');
        } else if (puntosMinimos > 21 ) {
                    alert('Ha ganado la Computadora');
        } else if (puntosComputadora > 21  ){
            alert('Ha ganado el Jugador 1');
        } else {
            alert('Ha ganado la Computadora');
        } 
    }, 50);             
}

//Turno: 0 = primer jugador y el ultimo sera la computadora
const acumularPuntos = (puntosJugadores, carta, turno) => {
    const puntosHTML = document.querySelectorAll('small');
    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
    puntosHTML[turno].innerText = puntosJugadores[turno].toString();
    return puntosJugadores[turno];
}