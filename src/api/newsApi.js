const API_KEY = '9fc306007cfb48ebb9d926900b1df26a';

export const getTopNews = async () => {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
    );
    const data = await response.json();
    
    if (data.articles && data.articles.length > 0) {
      return data.articles;
    } else {
      return getFallbackNews();
    }
  } catch (error) {
    console.error("Network Error, using fallback data:", error);
    return getFallbackNews();
  }
};