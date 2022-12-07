// eslint-disable-next-line
export let api = axios.create({
  baseURL: 'https://pizza-cms-api.netlify.app/.netlify/functions/server',
  headers: {
    common: {
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    },
  },
});
