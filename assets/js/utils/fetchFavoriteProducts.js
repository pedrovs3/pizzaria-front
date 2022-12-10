export default async () => {
  const { data } = await axios(
    "https://api-pizza-client.netlify.app/.netlify/functions/server/product?like=true"
  );
  return data;
};
