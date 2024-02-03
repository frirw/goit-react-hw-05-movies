import axios from 'axios';
import Notiflix from 'notiflix';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '57ef172056d208aed05821847bf78b08';

export async function getFilmByName(q) {
  const params = new URLSearchParams({
    api_key: API_KEY,
    query: q,
  });

  try {
    const response = await axios.get(`search/movie?${params}`);
    if (!response.data.results.length) {
      Notiflix.Notify.failure('No results found');
      return null;
    }
    return response.data;
  } catch (error) {
    Notiflix.Notify.failure(error.message);
    return null;
  }
}

export async function getFilmById(id) {
  try {
    const response = await axios.get(`movie/${id}?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    Notiflix.Notify.failure('Failed to fetch film details');
    return null;
  }
}

export async function getTrendingFilms() {
  try {
    const response = await axios.get(`trending/movie/week?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    Notiflix.Notify.failure('Failed to fetch trending films');
    return null;
  }
}

export async function getCast(id) {
  try {
    const response = await axios.get(
      `movie/${id}/credits?language=en-US&api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    Notiflix.Notify.failure('Failed to fetch cast details');
    return null;
  }
}

export async function getReviews(id) {
  try {
    const response = await axios.get(
      `movie/${id}/reviews?language=en-US&page=1&api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    Notiflix.Notify.failure('Failed to fetch reviews');
    return null;
  }
}

export async function getFilmByQuery(query) {
  try {
    const response = await axios.get(
      `search/movie?query=${query}&include_adult=true&page=1&api_key=${API_KEY}`
    );
    if (!response.data.results.length) {
      Notiflix.Notify.failure('No results found');
      return null;
    }
    return response.data;
  } catch (error) {
    Notiflix.Notify.failure(error.message);
    return null;
  }
}
