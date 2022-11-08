import Axios from "axios";

export default {
  //Get
  get(region, name) {
    const options = {
      method: "GET",
      url: "https://yh-finance.p.rapidapi.com/auto-complete",
      params: { q: name, region: region },
      headers: {
        "X-RapidAPI-Key": "5513f4da55msha9a9eb727bae897p1dc802jsn85660e1bcb5c",
        "X-RapidAPI-Host": "yh-finance.p.rapidapi.com"
      }
    };

    return Axios.request(options)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  //post

  post() {
    const optionsPost = {
      method: "POST",
      url: "https://yh-finance.p.rapidapi.com/news/v2/list",
      params: { region: "US", snippetCount: "28" },
      headers: {
        "content-type": "text/plain",
        "X-RapidAPI-Key": "5513f4da55msha9a9eb727bae897p1dc802jsn85660e1bcb5c",
        "X-RapidAPI-Host": "yh-finance.p.rapidapi.com"
      },
      data:
        '"Pass in the value of uuids field returned right in this endpoint to load the next page, or leave empty to load first page"'
    };

    Axios.request(optionsPost)
      .then(function (response) {
        console.log(response.data);
        return response.data;
      })
      .catch(function (error) {
        console.error(error);
      });
  }
};
