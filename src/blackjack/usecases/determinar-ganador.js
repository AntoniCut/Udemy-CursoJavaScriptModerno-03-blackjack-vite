/*
    --------------------------------------------------------------------------------
    ----------  /udemy.antonydev.tech/  --------------------------------------------
    ----------  /curso-javascript-moderno-guia-para-dominar-el-lenguaje/  ----------
    ----------  /03-blackjack-vite/  -----------------------------------------------
    ----------  /src/blackjack/usecases/  ------------------------------------------
    ----------  /crear-deck.js  ----------------------------------------------------
    --------------------------------------------------------------------------------
*/


/**
 * @function determinarGanador
 * @description Determines the winner of the Blackjack game.    
 * @param {Number} puntosMinimos 
 * @param {Number} puntosComputadora 
 */

export const determinarGanador = (puntosMinimos, puntosComputadora) => {


    setTimeout(() => {

        if (puntosComputadora === puntosMinimos) {
            alert('Nadie gana :(');
        } else if (puntosMinimos > 21) {
            alert('Computadora gana')
        } else if (puntosComputadora > 21) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }

        btnNuevo.disabled = false;

    }, 100);

}
