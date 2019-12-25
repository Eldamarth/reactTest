const APIKEY = process.env.REACT_APP_BACKEND_API;

export const getCats = async () => {
    const URL = `https://api.thecatapi.com/v1/images/search?limit=10&page=10&order=Desc`;
    const options = {
        headers:{"x-api-key" : APIKEY}
    }
    const response = await fetch(URL);
    if (!response.ok){
        throw new Error("We couldn't find your cat images");
    }
    return response.json();
}
