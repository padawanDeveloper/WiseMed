import api from '../axios';

const getUsers = () => api.get('users');

export default { getUsers };
