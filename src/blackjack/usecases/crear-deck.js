import _ from 'underscore';

export const exportIndividual = 'Prueba de exportIndividual';

/**
 * Funcion q crea nueva baraja
 * @param {Array<String>} tiposDeCarta, ejemplo: ['C','D','H','S']
 * @param {Array<String>} tiposEspeciales, ejemplo: ['A','J','Q','K']
 * @returns {Array<String>} retorna un nuevo deck de cartas
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {//lo q va dentro de las llaves se llama SCOPE

    if (!tiposDeCarta || tiposDeCarta.length === 0) throw new Error('tiposDeCarta es obligatorio como un arreglo de string');
    if (!tiposEspeciales || tiposEspeciales.length === 0) throw new Error('tiposEspeciales es obligatorio como un arreglo de string');

    let deck = [];
    for (let i = 2; i <= 10; i++) {
        for (let tipo of tiposDeCarta) {
            deck.push(i + tipo);            
        }       
    }

    for (let tipo of tiposDeCarta) {
        for (let especial of tiposEspeciales) {
            deck.push(especial + tipo);   
        }
    }
    return _.shuffle(deck);
}

//export default crearDeck;