/*
    --------------------------------------------------------------------------------
    ----------  /udemy.antonydev.tech/  --------------------------------------------
    ----------  /curso-javascript-moderno-guia-para-dominar-el-lenguaje/  ----------
    ----------  /03-blackjack-vite/  -----------------------------------------------
    ----------  /src/blackjack/usecases/  -----------------------------------------
    ----------  /pedir-carta.js  ---------------------------------------------------
    --------------------------------------------------------------------------------
*/


/**
 * @function pedirCarta
 * @description Function to request a card from the deck
 * @param {Array<String>} deck - The deck of cards
 * @throws {String} 'No hay cartas en el deck o el deck no existe'
 * @returns {String} carta
*/

export const pedirCarta = (deck) => {

    if (!deck || deck.length === 0) {
        alert('No hay cartas en el deck o el deck no existe');
        throw 'No hay cartas en el deck o el deck no existe';
    }

    return deck.pop();

}
