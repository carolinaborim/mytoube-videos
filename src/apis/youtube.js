//go to console.developers.google.com and generate your API key for Youtube API v3.
import axios from "axios";

const API_KEY = "api_key_goes_here";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: API_KEY
  }
});
