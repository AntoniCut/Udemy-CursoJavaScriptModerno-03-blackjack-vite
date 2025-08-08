/*
    --------------------------------------------------------------------------------
    ----------  /udemy.antonydev.tech/  --------------------------------------------
    ----------  /curso-javascript-moderno-guia-para-dominar-el-lenguaje/  ----------
    ----------  /03-blackjack-vite/  -----------------------------------------------
    ----------  /src/blackjack/usecases/  ------------------------------------------
    ----------  /turno-computadora.js  ---------------------------------------------
    --------------------------------------------------------------------------------
*/


import { pedirCarta } from "@/blackjack/usecases/pedir-carta";
import { valorCarta } from "@/blackjack/usecases/valor-carta";
import { crearCartaHTML } from "@/blackjack/usecases/crear-carta-html";
import { determinarGanador } from "@/blackjack/usecases/determinar-ganador";



/**
 * @function turnoComputadora
 * @description Executes the computer's turn in the Blackjack game.
 * @param {Number} puntosMinimos puntos mínimos que la computadora debe alcanzar.
 * @param {Array<HTMLElement>} puntosHTML - HTML elements to display the points of the computer.
 * @param {HTMLElement} divCartasComputadora - HTML element to display the computer's cards.
 * @param {Array<String>} deck - The deck of cards to draw from.
 * @throws {Error} puntosMinimos is required.
 * @throws {Error} puntosHTML is required and must be an array of HTML elements.
 * @throws {Error} deck is required and must contain cards.
 * @throws {Error} divCartasComputadora is required.
 */

export const turnoComputadora = (puntosMinimos, puntosHTML, divCartasComputadora, deck = []) => {


    if (!puntosMinimos)
        throw new Error('puntosMinimos son necesarios');

    if (!puntosHTML || puntosHTML.length === 0)
        throw new Error('puntosHTML es obligatorio como un arreglo de elementos HTML');

    if (!deck || deck.length === 0)
        throw new Error('Deck es obligatorio y debe tener cartas');

    if (!divCartasComputadora)
        throw new Error('divCartasComputadora es obligatorio');

    /** @type {Number} */
    let puntosComputadora = 0;


    btnPedir.disabled = true;
    btnDetener.disabled = true;


    do {

        /** @type {String} */
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta(carta);
        puntosHTML.innerText = puntosComputadora;

        const imgCarta = crearCartaHTML(carta);
        divCartasComputadora.append(imgCarta);

        if (puntosMinimos > 21)
            break;
        

    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));


    determinarGanador(puntosMinimos, puntosComputadora);
    
}

