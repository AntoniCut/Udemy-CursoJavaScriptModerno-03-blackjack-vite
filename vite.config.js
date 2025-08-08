// vite.config.js
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({

    //  -----  para xampp-udemy.antonydev.tech  -----  
    //base: '/curso-javascript-moderno-guia-para-dominar-el-lenguaje/03-blackjack-vite/',

    //  -----  para vps-pruebas.antonydev.tech  -----
    //base: '/blackjack-vite/',

    //  -----  para netlify  -----
    //base: ''

    //  -----  github Pages  -----
    base: 'Udemy-CursoJavaScriptModerno-03-blackjack-vite',

  resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },


})

