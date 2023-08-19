import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZWI1ODc0OTFhZDNjYTg1ZWFmOTkyYWYyY2E4MDFhZCIsInN1YiI6IjY0ZGY5MjkxYWFlYzcxMDNmYTQ4MTY0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.i23We5DjcOYOe62II5mTVly6bvF64j2tmQOpdXzFC50";

const headers = {
  Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
