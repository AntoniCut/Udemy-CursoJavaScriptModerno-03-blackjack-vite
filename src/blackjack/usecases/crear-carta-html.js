/*
    --------------------------------------------------------------------------------
    ----------  /udemy.antonydev.tech/  --------------------------------------------
    ----------  /curso-javascript-moderno-guia-para-dominar-el-lenguaje/  ----------
    ----------  /03-blackjack-vite/  -----------------------------------------------
    ----------  /src/blackjack/usescases/  -----------------------------------------
    ----------  /crear-carta.js  ---------------------------------------------------
    --------------------------------------------------------------------------------
*/


/**
 * @function crearCarta
 * @description Crea una carta y la agrega al div correspondiente.
 * @param {String} carta - La carta a crear.
 * @param {HTMLDivElement} divCartasJugadorActual - El div donde se agregará la carta.
 * @throws {Error} carta es obligatorio.
 * @returns {HTMLImageElement} La carta creada o Imagen de retorno.
 */

export const crearCartaHTML = (carta) =>  {

    if(!carta)
        throw new Error('carta es obligatorio');
    
    const imgCarta = document.createElement('img');
    
    imgCarta.src = `${import.meta.env.BASE_URL}cartas/${carta}.avif`;
    imgCarta.classList.add('carta');
    imgCarta.loading = 'lazy';
    
    return imgCarta;


}