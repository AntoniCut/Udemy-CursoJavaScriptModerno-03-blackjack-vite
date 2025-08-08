/*
    --------------------------------------------------------------------------------
    ----------  /udemy.antonydev.tech/  --------------------------------------------
    ----------  /curso-javascript-moderno-guia-para-dominar-el-lenguaje/  ----------
    ----------  /03-blackjack-vite/  -----------------------------------------------
    ----------  /src/blackjack/usecases/  ------------------------------------------
    ----------  /crear-deck.js  ----------------------------------------------------
    --------------------------------------------------------------------------------
*/


import _ from 'underscore';


/**
 * @function crearDeck
 * @description Creates a new deck of cards
 * @param {Array<String>} tiposDeCarta - Types of cards, e.g., ['C', 'D', 'H', 'S']
 * @param {Array<String>} tiposEspeciales - Special cards, e.g., ['A', 'J', 'Q', 'K']
 * @throws {Error} tiposDeCarta is required as a non-empty array of strings
 * @throws {Error} tiposEspeciales is required as a non-empty array of strings
 * @returns {Array<String>} A new shuffled deck of cards
 */

export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
    
    if (!tiposDeCarta || tiposDeCarta.length === 0)
        throw new Error('tiposDeCarta es obligatorio como un arreglo de string');

    if (!tiposEspeciales || tiposEspeciales.length === 0)
        throw new Error('tiposEspeciales es obligatorio como un arreglo de string');


    /** @type {Array<String>} */
    const deck = [];

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

};
