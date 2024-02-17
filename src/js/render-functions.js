import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import "simplelightbox/dist/simple-lightbox.min.css";

const lightbox = new SimpleLightbox('.gallery a', { 
    captions: true,
    captionSelector: 'img',
    captionType: 'attr',
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250
 });

export const renderFunc = (data) => {
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

    imgCont.innerHTML = renderedHtml;
    lightbox.refresh();
}