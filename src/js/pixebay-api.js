import {renderFunc} from "./render-functions";

export const pixebayApi = (word, iziToast) => {
    const imgCont = document.querySelector('.images__cont');

    imgCont.innerHTML = '<span class="loader"></span>';


    const URL = 'https://pixabay.com/api/';

    const options = {
        method: "GET"
    };
    
    const searchParams = new URLSearchParams({
        key: '42320940-042fd388efe736bb4087979b1',
        q: word,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
    });

    const paramsUrl = `${URL}?${searchParams}`;
    
    fetch(paramsUrl, options)
    .then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then(data => {
        if(data.total === 0) {
            imgCont.innerHTML = '';
            iziToast.show({
                message: 'Sorry, there are no images matching your search query. Please try again!',
                position: 'topRight',
                backgroundColor: 'red',
                messageColor: 'white',
                theme: 'dark',
                iconUrl: '/goit-js-hw-11/assets/error.svg'
            });
        } else {
            renderFunc(data);
        } 
      })
      .catch(error => {
        imgCont.innerHTML = '';
        iziToast.show({
            message: error,
            position: 'topRight',
            backgroundColor: 'red',
            messageColor: 'white',
            theme: 'dark',
            iconUrl: '/goit-js-hw-11/assets/error.svg'
        });
    });
};