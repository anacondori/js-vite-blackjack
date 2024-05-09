import _ from 'underscore';
import {crearDeck, pedirCarta, valorCarta, turnoComputadora, crearCarta} from './usecases';

// import crearDeck, {exportIndividual} from './usecases/crear-deck';
// import { pedirCarta } from './usecases/pedir-carta';
// import { valorCarta } from './usecases/valor-carta';
//para importar una Exportacion Individual: {exportIndividual}
//import {crearDeck as crearNuevoDeck} from './usecases/crear-deck';

//console.log(exportIndividual);
/**
 * 2C = Two of Clubs (treboles)
 * 2D = Two of Diamonds (diamantes)
 * 2H = Two of Heart (corazones)
 * 2S = Two of Spades (espada)
 */
  let deck = [];
  const tipos = ['C','D','H','S'],
        especiales = ['A','J','Q','K'];

  let puntosJugadores = [];

  //Referencia del HTML
  const btnPedir   = document.querySelector('#btnPedir'),
        btnNuevo   = document.querySelector('#btnNuevo'),
        btnDetener = document.querySelector('#btnDetener');

  const divCartasJugadores  = document.querySelectorAll('.divCartas'),
        puntosHTML = document.querySelectorAll('small')

  //Esta funcion inicializa el juego
  const inicializarJuego = ( numJugadores = 2 ) => {
     // deck = crearNuevoDeck(tipos,especiales);//nuevo nombre definido en el import
      deck = crearDeck(tipos,especiales);
      
      puntosJugadores = [];
      for (let i = 0; i < numJugadores; i++) {
          puntosJugadores.push(0);                
      }

      puntosHTML.forEach( elem => elem.innerText = "0");
      divCartasJugadores.forEach( elem => elem.innerHTML = "");

      // @ts-ignore
      btnPedir.disabled = false;
      // @ts-ignore
      btnDetener.disabled = false;            
  }

  //Turno: 0 = primer jugador y el ultimo sera la computadora
  const acumularPuntos = (carta, turno) => {
      puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
      puntosHTML[turno].innerText = puntosJugadores[turno].toString();
      return puntosJugadores[turno];
  }


  
  //Eventos
  btnPedir.addEventListener('click', () => {

      const carta = pedirCarta(deck);
      const puntosJugador = acumularPuntos(carta, 0);
      crearCarta(divCartasJugadores, carta, 0);

      //CONTROLAR PUNTOS DEL JUGADOR
      if (puntosJugador > 21){
          // @ts-ignore
          btnPedir.disabled = true;
          // @ts-ignore
          btnDetener.disabled = true;
          turnoComputadora(puntosJugador, puntosJugadores, divCartasJugadores, deck);

      } else if ( puntosJugador === 21){
              // @ts-ignore
              btnPedir.disabled = true;
              // @ts-ignore
              btnDetener.disabled = true;
              turnoComputadora(puntosJugador, puntosJugadores, divCartasJugadores, deck);
      }
      //CONTROLAR PUNTOS DEL JUGADOR
  });

  btnDetener.addEventListener('click', () => {            
      // @ts-ignore
      btnPedir.disabled = true;
      // @ts-ignore
      btnDetener.disabled = true;
      turnoComputadora(puntosJugadores[0], puntosJugadores, divCartasJugadores, deck);
  
  });

  btnNuevo.addEventListener('click', () => {  
           inicializarJuego();
  });