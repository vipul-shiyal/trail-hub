import axios from "axios";
import {
  URL_LIST,
  API_KEY,
  URL_SEARCH,
  API_KEY_ALT,
  URL_TRENDING,
  URL_DETAIL
} from "../utils/const";

export const fetchShowsList = (showType: string, page: number): Promise<any> => {
  const apiURL = `${URL_LIST}${showType}${API_KEY}&page=${page}`;
  const res = axios.get(apiURL);
  return res;
};

interface ISearchParam {
  searchQuery: string;
}
export const searchMovie = ({ searchQuery }: ISearchParam): Promise<any> => {
  const apiURL = `${URL_SEARCH}${searchQuery}${API_KEY_ALT}`;
  const res = axios.get(apiURL);
  return res;
};

export const fetchTrendingShows = (mediaType: string): Promise<any> => {
  const apiURL = `${URL_TRENDING}${mediaType}/day${API_KEY}`;
  const res = axios.get(apiURL);
  return res;
};

export const fetchShowDetails = (id: number): Promise<any> => {
  const apiURL = `${URL_DETAIL}${id}${API_KEY}`;
  const res = axios.get(apiURL);
  return res;
}