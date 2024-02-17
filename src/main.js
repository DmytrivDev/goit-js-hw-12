import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import {pixebayApi} from "./js/pixebay-api";


const form = document.querySelector('.form');

form.addEventListener('submit', e => {
    e.preventDefault();

    const target = e.target;
    const word = target.elements.field.value;

    if(!word) { 
        iziToast.show({
            message: 'Please, fill an input',
            position: 'topRight',
            backgroundColor: 'red',
            messageColor: 'white',
            theme: 'dark',
            iconUrl: '/goit-js-hw-11/assets/error.svg'
        });
    } else { 
        pixebayApi(word, iziToast);

        target.reset();
    }
});


