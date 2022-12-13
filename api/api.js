// eslint-disable-next-line
export const api = axios.create({
  baseURL: 'http://localhost:3333/.netlify/functions/server', // 'https://pizza-cms-api.netlify.app/.netlify/functions/server'
  headers: {
    common: {
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    },
  },
});
