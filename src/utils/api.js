import axios from "axios";
import { BASE_URL, UNSPLASH_ACCESS_KEY } from "./constants";

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    "Content-type": "application/json",
  },
  params: {
    client_id: UNSPLASH_ACCESS_KEY,
  },
});

export const getPhotosList = async () => {
  const response = await api.get("/photos", {
    params: {
      per_page: 30,
    },
  });
  return response.data;
};

export const getPhotosCollections = async (searchQuery) => {
  const response = await api.get("/search/collections", {
    params: {
      query: searchQuery,
      per_page: 30,
    },
  });
  return response.data;
};

export const getPhotosById = async (id) => {
  const response = await api.get(`photos/${id}`);
  return response.data;
};
