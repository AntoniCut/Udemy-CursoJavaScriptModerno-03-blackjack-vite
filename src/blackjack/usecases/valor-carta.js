/*
    --------------------------------------------------------------------------------
    ----------  /udemy.antonydev.tech/  --------------------------------------------
    ----------  /curso-javascript-moderno-guia-para-dominar-el-lenguaje/  ----------
    ----------  /03-blackjack-vite/  -----------------------------------------------
    ----------  /src/blackjack/usecases/  -----------------------------------------
    ----------  /valor-carta.js  ---------------------------------------------------
    --------------------------------------------------------------------------------
*/



/**
 * @function valorCarta
 * @description Returns the value of a card
 * @param {String} carta - The card to evaluate, e.g., '2C'
 * @returns {Number} The value of the card
 */

export const valorCarta = 
    
    carta => isNaN(carta.substring(0, carta.length - 1)) 
        ? (carta === 'A') ? 11 : 10 
        : parseInt(carta.substring(0, carta.length - 1));


// const valorCarta = (carta) => {

//     const valor = carta.substring(0, carta.length - 1);
//     return (isNaN(valor)) ?
//         (valor === 'A') ? 11 : 10
//         : valor * 1;
// }