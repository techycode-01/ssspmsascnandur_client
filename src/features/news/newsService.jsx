import axios from "axios";
import { config } from "../../utils/axiosconfig";
import { base_url } from "../../utils/base_url";

export const allNews = async() => {
    const response = await axios.get(`${base_url}/news/all`);
    return response.data;
};

export const singleNews = async(id) => {
    try {
        const response = await axios.get(`${base_url}/news/single/${id}`);
        return response.data;
    } catch (error) {
        throw new Error(error);
    }
};


const newsService = {
    allNews,
    singleNews,
}

export default newsService;
