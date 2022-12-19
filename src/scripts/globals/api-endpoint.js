import CONFIG from './config';

const API_ENDPOINT = {
  RESTO_LIST: `${CONFIG.BASE_URL}list`,
  DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
  BAHAN_LIST: `${CONFIG.BASE_BAHAN_URL}`,
};

export default API_ENDPOINT;
