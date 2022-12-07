export default async () => {
    const response = await fetch("https://api-pizza-client.netlify.app/.netlify/functions/server/product") 
    const json = await response.json()
    return json
}