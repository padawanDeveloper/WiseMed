import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.org';

const api = axios.create({
	baseURL: BASE_URL,
});

const get = (param: string) => api.get(param);

export default { get };
