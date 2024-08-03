import axios from "axios";

const apiKey = "34afe6db454cd5e04ddd03b2ca5562a5";
// const apiKey = "314adaee222d8455dc38a24ff81994a1";

const apiBaseUrl = "https://api.themoviedb.org/3";

const requestPopular = `${apiBaseUrl}/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
const requestTopRated = `${apiBaseUrl}/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`;
const requestUpcoming = `${apiBaseUrl}/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`;
const requestNowPlaying = `${apiBaseUrl}/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`;
const requestRecommended = `${apiBaseUrl}/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`;
const requestHorror = `${apiBaseUrl}/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=27`;
const requestComedy = `${apiBaseUrl}/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=35`;
const requestAction = `${apiBaseUrl}/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28`;
const requestDrama = `${apiBaseUrl}/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=18`;
const requestSciFi = `${apiBaseUrl}/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=878`;
const requestTrailer = `${apiBaseUrl}/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=878`;
// export const useFetchData = async () => {
//   try {
//     const response = await axios.get("");
//     return response.data;
//   } catch (error) {
//     console.error("Fetch error: ", error);
//     throw error;
//   }
// };

export const image = (path) =>
  path ? `https://image.tmdb.org/t/p/w500${path}` : null;

const apiCall = async (endpoint, params) => {
  const options = {
    method: "GET",
    url: endpoint,
    params: params ? params : {}
  };
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error("Error: ", error);
    throw error;
  }
};

export const fetchRequestPopular = () => {
  return apiCall(requestPopular);
};

export const fetchRequestTopRated = () => {
  return apiCall(requestTopRated);
};

export const fetchRequestUpcoming = () => {
  return apiCall(requestUpcoming);
};

export const fetchRequestNowPlaying = () => {
  return apiCall(requestNowPlaying);
};

export const fetchRequestHorror = () => {
  return apiCall(requestHorror);
};

export const fetchRequestComedy = () => {
  return apiCall(requestComedy);
};

export const fetchRequestAction = () => {
  return apiCall(requestAction);
};

export const fetchRequestDrama = () => {
  return apiCall(requestDrama);
};

export const fetchRequestSciFi = () => {
  return apiCall(requestSciFi);
};

export const fetchRequestTrailer = () => {
  return apiCall(requestTrailer);
};

export const fetchRequestRecommended = () => {
  return apiCall(requestRecommended);
};
