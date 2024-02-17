import {renderFunc} from "./render-functions";

let page = 1;
const preloader = document.querySelector('.loader');

export const pixebayApi = async (word, iziToast, Axios, type, loadMoreBtn) => {
    const imgCont = document.querySelector('.images__cont');

    preloader.classList.remove('hidden');

    if(type === 'loadFirst') {
        imgCont.innerHTML = '';
        page = 1;
        loadMoreBtn.classList.add('hidden');
    }

    const URL = 'https://pixabay.com/api/';
    const PAGESIZE = 15;
    const searchParams = new URLSearchParams({
        key: '42320940-042fd388efe736bb4087979b1',
        q: word,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: PAGESIZE,
        page: page,
    });

    const paramsUrl = `${URL}?${searchParams}`;

    const response = await Axios.get(paramsUrl);
    const totalItems = response.data.totalHits;

    if(totalItems === 0) {
        imgCont.innerHTML = '';
        loadMoreBtn.classList.add('hidden');
        iziToast.show({
            message: 'Sorry, there are no images matching your search query. Please try again!',
            position: 'topRight',
            backgroundColor: 'red',
            messageColor: 'white',
            theme: 'dark',
        });
    } else {
        const allPages = Math.ceil(totalItems / PAGESIZE);

        if(page >= allPages) {
            loadMoreBtn.classList.add('hidden');
            iziToast.show({
                message: "We're sorry, but you've reached the end of search results.",
                position: 'topRight',
                backgroundColor: 'blue',
                messageColor: 'white',
                theme: 'dark',
            });
        } else {
            loadMoreBtn.classList.remove('hidden');
            page += 1;
        }
        
        renderFunc(response.data, type);
    }

    preloader.classList.add('hidden');
};