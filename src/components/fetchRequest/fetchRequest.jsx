import axios from 'axios';

axios.defaults.baseURL = `https://api.themoviedb.org/3/`;
axios.defaults.params = {
  language: 'en-US',
  page: 1,
  api_key: 'c2d5ae1916124f8e18d2a212d8e4ab11',
};
export const fetch = async url => {
  try {
    const { data } = await axios.get(url || url.pathname, {
      params: axios.defaults.params,
    });
    return data;
  } catch (error) {
    throw new Error('Ошибка при загрузке данных:', error);
  }
};
