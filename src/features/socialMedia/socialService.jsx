import axios from "axios";
import { base_client_url } from "../../utils/base_url";
import { config } from "../../utils/axiosconfig";

export const addSocMedia = async(socMediaData) => {
    const response = await axios.post(`${base_client_url}/socialLinks/`, socMediaData,config);
    return response.data;
};

export const allSocMedia = async() => {
    const response = await axios.get(`${base_client_url}/socialLinks/all`);
    return response.data;
};

export const singleSocMedia = async(id) => {
    const response = await axios.get(`${base_client_url}/socialLinks/single/${id}`);
    return response.data;
};

export const putSocMedia = async(social) => {
    const response = await axios.put(`${base_client_url}/socialLinks/update/${social.id}`, 
    {
        facebook : social.socMediaData.facebook,
        instagram : social.socMediaData.instagram,
        youtube : social.socMediaData.youtube,
        twitter : social.socMediaData.twitter,
    },
    config);
    return response.data;
};

export const deleteSocMedia = async(id) => {
    const response = await axios.delete(`${base_client_url}/socialLinks/delete/${id}`,config);
    return response.data;
};


const socialService = {
    addSocMedia,
    allSocMedia,
    singleSocMedia,
    putSocMedia,
    deleteSocMedia
}

export default socialService;