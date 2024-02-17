import Axios from "axios";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import {pixebayApi} from "./js/pixebay-api";


const form = document.querySelector('.form');
const loadMoreBtn = document.querySelector('.loadMore');
let word;

form.addEventListener('submit', e => {
    e.preventDefault();

    const target = e.target;
    word = target.elements.field.value;

    if(!word) { 
        iziToast.show({
            message: 'Please, fill an input',
            position: 'topRight',
            backgroundColor: 'red',
            messageColor: 'white',
            theme: 'dark',
        });
    } else { 
        pixebayApi(word, iziToast, Axios, 'loadFirst', loadMoreBtn);

        target.reset();
    }
});

loadMoreBtn.addEventListener('click', e => {
    e.preventDefault();

    pixebayApi(word, iziToast, Axios, 'NewPage', loadMoreBtn);
});


