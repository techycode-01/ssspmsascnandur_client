import axios from "axios";
import { base_client_url } from "../../utils/base_url";
import { config } from "../../utils/axiosconfig";

export const addPhones = async(phonesData) => {
    const response = await axios.post(`${base_client_url}/phone/`, phonesData,config);
    return response.data;
};

export const allPhones = async() => {
    const response = await axios.get(`${base_client_url}/phone/all`);
    return response.data;
};

export const singlePhones = async(id) => {
    const response = await axios.get(`${base_client_url}/phone/single/${id}`);
    return response.data;
};

export const putPhones = async(phones) => {
    const response = await axios.put(`${base_client_url}/phone/update/${phones.id}`, 
    {
        title : phones.phonesData.title,
    },
    config);
    return response.data;
};

export const deletePhones = async(id) => {
    const response = await axios.delete(`${base_client_url}/phone/delete/${id}`,config);
    return response.data;
};


const phoneService = {
    addPhones,
    allPhones,
    singlePhones,
    putPhones,
    deletePhones
}

export default phoneService;