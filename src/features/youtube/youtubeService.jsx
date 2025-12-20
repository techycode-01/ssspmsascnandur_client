import axios from 'axios';
import { base_client_url } from '../../utils/base_url';

export const addYoutube = async(ytData) => {
    const response = await axios.post(`${base_client_url}/youtube/`, ytData);
    return response.data;
}

export const getYoutube = async () => {
    const response = await axios.get(`${base_client_url}/youtube/all`);
    return response.data;
}

export const singleYoutube = async (id) => {
    const response = await axios.get(`${base_client_url}/youtube/single/${id}`);
    return response.data
};

export const removeYoutube = async(id) => {
    const response = await axios.delete(`${base_client_url}/youtube/delete/${id}`);
    return response.data;
}


const youtubeService = {
    addYoutube,
    getYoutube,
    singleYoutube,
    removeYoutube
}

export default youtubeService;