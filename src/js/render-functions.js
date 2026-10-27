import SimpleLightbox from 'simplelightbox';

const refs = {
  galleryContainer: document.querySelector('.gallery'),
};

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
const createGalleryCard = ({
  webformatURL,
  largeImageURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) => {
  return `<li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
          <img class="gallery-image" src="${webformatURL}" alt="${tags}" />
        </a>
        <div class="info">
          <p class="info-item"><b>Likes</b><br>${likes}</p>
          <p class="info-item"><b>Views</b><br>${views}</p>
          <p class="info-item"><b>Comments</b><br>${comments}</p>
          <p class="info-item"><b>Downloads</b><br>${downloads}</p>
        </div>
      </li>`;
};

export const createGallery = images => {
  const markup = images.map(image => createGalleryCard(image)).join('');
  refs.galleryContainer.innerHTML = markup;

  lightbox.refresh();
};

export const clearGallery = () => {
  refs.galleryContainer.innerHTML = '';
};
const showLoader = () => {};
const hideLoader = () => {};
