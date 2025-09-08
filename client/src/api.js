import { apiURL } from "../configs/environement";
import axios from "axios";

const API = axios.create({
    baseURL: apiURL,
    withCredentials: true,
});

export default API;
