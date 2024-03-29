import axios from "axios";

const FIRST_API_URL = "https://jsonplaceholder.typicode.com"

export const getPosts = axios({ url: `${FIRST_API_URL}/posts`, method: "GET", params: {offset: 0, limit: 1}})