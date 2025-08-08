/*
    --------------------------------------------------------------------------------
    ----------  /udemy.antonydev.tech/  --------------------------------------------
    ----------  /curso-javascript-moderno-guia-para-dominar-el-lenguaje/  ----------
    ----------  /03-blackjack-vite/  -----------------------------------------------
    ----------  /src/blackjack/  ---------------------------------------------------
    ----------  /index.js  ---------------------------------------------------------
    --------------------------------------------------------------------------------
*/


import { crearDeck } from "@/blackjack/usecases/crear-deck";
import { pedirCarta } from "@/blackjack/usecases/pedir-carta";
import { valorCarta } from "@/blackjack/usecases/valor-carta";
import { crearCartaHTML } from "@/blackjack/usecases/crear-carta-html";
import { turnoComputadora } from "@/blackjack/usecases/turno-computadora";


/*
    2C = Two of Clubs (Treboles)
    2D = Two of Diamonds (Diamantes)
    2H = Two of Hearts (Corazones)
    2S = Two of Spades (Picas)
    A = As
    J = Jack (Sota)
    Q = Queen (Reina)
    K = King (Rey)
    C = Clubs (Treboles)
    D = Diamonds (Diamantes)
    H = Hearts (Corazones)
    S = Spades (Picas)
    Tipos: ['C', 'D', 'H', 'S']
    Especiales: ['A', 'J', 'Q', 'K']
    Baraja: ['2C', '2D', '2H', '2S', ..., 'AC', 'AD', 'AH', 'AS', 'JC', 'JD', 'JH', 'JS', 'QC', 'QD', 'QH', 'QS', 'KC', 'KD', 'KH', 'KS']
    Baraja Completa: ['2C', '2D', '2H', '2S', '3C', '3D', '3H', '3S', ..., '10C', '10D', '10H', '10S', 'AC', 'AD', 'AH', 'AS', 'JC', 'JD', 'JH', 'JS', 'QC', 'QD', 'QH', 'QS', 'KC', 'KD', 'KH', 'KS']
    Baraja Completa con Baraja: ['2C', '2D', '2H', '2S', '3C', '3D', '3H', '3S', ..., '10C', '10D', '10H', '10S', 'AC', 'AD', 'AH', 'AS', 'JC', 'JD', 'JH', 'JS', 'QC', 'QD', 'QH', 'QS', 'KC', 'KD', 'KH', 'KS']
    Baraja Completa con Baraja y Baraja: ['2C', '2D', '2H', '2S', '3C', '3D', '3H', '3S', ..., '10C', '10D', '10H', '10S', 'AC', 'AD', 'AH', 'AS', 'JC', 'JD', 'JH', 'JS', 'QC', 'QD', 'QH', 'QS', 'KC', 'KD', 'KH', 'KS']
*/


/*  --------------------------------------------------  */
/** @description -----  Variables Globales  ----------  */
/*  --------------------------------------------------  */

/** @type {Array<String>} */
let deck = [];

/** @type {Array<String>} */
const tipos = ['C', 'D', 'H', 'S'];

/** @type {Array<String>} */
const especiales = ['A', 'J', 'Q', 'K'];

/** @type {Number} */
let puntosJugador = 0;



/*  -----------------------------------------------------  */
/**  @description  -----  Referencias al HTML  ----------  */
/*  -----------------------------------------------------  */

/** @type {HTMLButtonElement} */
const btnPedir = document.querySelector('#btnPedir');

/** @type {HTMLButtonElement} */
const btnDetener = document.querySelector('#btnDetener');

/** @type {HTMLButtonElement} */
const btnNuevo = document.querySelector('#btnNuevo');

/** @type {HTMLDivElement} */
const divCartasJugador = document.querySelector('#jugador-cartas');

/** @type {HTMLDivElement} */
const divCartasComputadora = document.querySelector('#computadora-cartas');

/** @type {NodeListOf<HTMLElement>} */
const puntosHTML = document.querySelectorAll('small');


btnPedir.disabled = true;
btnDetener.disabled = true;



/**
 * @function manejadorJuegoNuevo
 * @description Reinicia el juego
*/

const manejadorJuegoNuevo = () => {

    console.clear();
    deck = [];
    deck = crearDeck(tipos, especiales);

    puntosJugador = 0;
    
    puntosHTML[0].innerText = 0;
    puntosHTML[1].innerText = 0;

    divCartasComputadora.innerHTML = '';
    divCartasJugador.innerHTML = '';

    btnNuevo.disabled = true;
    btnPedir.disabled = false;
    
}



/**
 * @function manejadorPedirCarta
 * @description Pide una carta al jugador
*/
    
const manejadorPedirCarta = () => {

    /** @type {String} */
    const carta = pedirCarta(deck);

    btnDetener.disabled = false;

    puntosJugador = puntosJugador + valorCarta(carta);
    puntosHTML[0].innerText = puntosJugador;

    const imgCarta = crearCartaHTML(carta);
    divCartasJugador.append(imgCarta);

    if (puntosJugador > 21) {
        console.warn('Lo siento mucho, perdiste');
        btnNuevo.disabled = false;
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador, puntosHTML[1], divCartasComputadora, deck);

    } else if (puntosJugador === 21) {
        console.warn('21, genial!');
        btnNuevo.disabled = false;
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador, puntosHTML[1], divCartasComputadora, deck);
    }
};



/*  ---------------------------------------------------------------------  */
/** @description -----  Listener Reiniciar e Inicio del Juego  ----------  */
/*  ---------------------------------------------------------------------  */

btnNuevo.addEventListener('click', manejadorJuegoNuevo);


/*  ----------------------------------------------------  */
/** @description -----  Listener Pedir Carta  ----------  */
/*  ----------------------------------------------------  */

btnPedir.addEventListener('click', manejadorPedirCarta);


/*  ---------------------------------------------------------  */
/** @description -----  Listener Detener el Juego  ----------  */
/*  ---------------------------------------------------------  */

btnDetener.addEventListener('click', () => turnoComputadora(puntosJugador, puntosHTML[1], divCartasComputadora, deck));
