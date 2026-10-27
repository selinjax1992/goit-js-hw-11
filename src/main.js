import iziToast from 'izitoast';
import { getImageByQuery } from './js/pixabay-api';
import { createGallery, clearGallery } from './js/render-functions';

const refs = {
  form: document.querySelector('.js-form'),
};

const onFormSubmit = event => {
  event.preventDefault();
  const query = event.currentTarget.elements['search-text'].value.trim();

  if (query === '') {
    iziToast.warning({
      message: 'Будьласка, введіть слово для пошуку!',
      position: 'topRight',
    });
    return;
  }

  clearGallery();

  getImageByQuery(query)
    .then(data => {
      console.log(data);
      if (data.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      }

      createGallery(data.hits);
    })
    .catch(err => {
      console.log(err);
      iziToast.error({
        title: 'Ошибка',
        message: 'The images could not be loaded. Please try again later.',
        position: 'topRight',
      });
    })
    .finally(() => {
      refs.form.reset();
    });
};
refs.form.addEventListener('submit', onFormSubmit);
