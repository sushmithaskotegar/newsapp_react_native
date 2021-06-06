import { GET_NEWS } from "./types";

export const newsPosts = () => dispatch=>{
    console.log("fetching...");
    fetch("https://newsapi.org/v2/sources?apiKey=d29d58aab88d4ea0b04ddb245a230068")
      .then((res) => res.json())
      // .then((posts) =>console.log(posts.sources))
      .then((posts) => dispatch({
        type: GET_NEWS,
        payload: posts,
      }));
      
  };