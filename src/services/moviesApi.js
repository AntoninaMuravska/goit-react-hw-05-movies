import axios from 'axios';

const API_KEY = '16793a08fc468099c942dee45d510578';
const BASE_URL = 'https://api.themoviedb.org/3/';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: API_KEY,
};

export async function fetchTrendingMovies() {
  const { data } = await axios.get('trending/movie/day');
  return data.results;
}

export async function searchMovies(query) {
  const { data } = await axios.get(`/search/movie?query=${query}`);
  return data.results;
}

export async function getMovieDetails(id) {
  const { data } = await axios.get(`movie/${id}`);
  return data;
}

export async function movieCast(id) {
  const { data } = await axios.get(`movie/${id}/credits`);
  return data.cast;
}

export async function movieReviews(id) {
  const { data } = await axios.get(`movie/${id}/reviews`);
  return data.results;
}
