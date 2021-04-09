const BASE_URL = "https://api.giphy.com/v1/gifs";
const API_KEY = "5Muqe6HOngq40S9xI6ZQJ7jDfvZUoS5f";

export const getTrendingGifsUrl = () => {
  return `${BASE_URL}/trending?api_key=${API_KEY}`;
};

export const getGifDetailsUrl = (gifId: string) => {
  return `${BASE_URL}/${gifId}?api_key=${API_KEY}`;
};

export const getSearchGifsUrl = (query: string) => {
  return `${BASE_URL}/search?api_key=${API_KEY}&q=${query}`;
};
