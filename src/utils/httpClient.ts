import axios from 'axios';

import { TONFURA_API_BASE_URL } from '../constants';

axios.defaults.baseURL = TONFURA_API_BASE_URL;

export const httpClient = axios;
