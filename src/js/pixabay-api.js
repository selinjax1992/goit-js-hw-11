import axios from 'axios';

export const getImageByQuery = query => {
  const fetchOptions = {
    params: {
      key: '51376871-d210e7f13e39905b8a62b8cdf',
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
    },
  };
  return axios
    .get(`https://pixabay.com/api/`, fetchOptions)
    .then(response => response.data);
};
