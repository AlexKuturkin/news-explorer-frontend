import dateRequest from "../utils/dateRequest";

export default class NewsApi {
  getNews(keyword) {
    return fetch(
      `https://newsapi.org/v2/everything/?q=${keyword}${dateRequest()}&pageSize=100&apiKey=4efe7932809d4f688579972bc220bc86`,
      {
        method: "GET",
      }
    ).then((res) => res.json());
  }
}
