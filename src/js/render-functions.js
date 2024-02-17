import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const lightbox = new SimpleLightbox('.gallery a', { 
    captions: true,
    captionSelector: 'img',
    captionType: 'attr',
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250
 });

export const renderFunc = async (data, type) => {
    try {
        const imgCont = document.querySelector('.images__cont');
        let renderedHtml = '';
    
        data.hits.map(el => {
            renderedHtml += `<a href="${el.largeImageURL}" class="imagecont">
            <div class="imagephoto">
                <img src="${el.webformatURL}" alt="${el.tags}">
            </div>
            <span class="imageinfo">
                <span>
                    <span>Likes</span><span>${el.likes}</span>
                </span>
                <span>
                    <span>Views</span><span>${el.views}</span>
                </span>
                <span>
                    <span>Comments</span><span>${el.comments}</span>
                </span>
                <span>
                    <span>Downloads</span><span>${el.downloads}</span>
                </span>
            </span>
        </a>`
        });
    
        imgCont.insertAdjacentHTML('beforeend' , renderedHtml)
        lightbox.refresh();

        if(type === 'NewPage') {
            const item = document.querySelector('.gallery').firstElementChild;
            const itemHeight = item.getBoundingClientRect().height;

            window.scrollBy({
                top: itemHeight * 2,
                behavior: "smooth",
              });
        }
        

    } catch (error) {
        const imgCont = document.querySelector('.images__cont');
        imgCont.innerHTML = '';
        iziToast.show({
            message: error,
            position: 'topRight',
            backgroundColor: 'red',
            messageColor: 'white',
            theme: 'dark',
        });
    }
    
}