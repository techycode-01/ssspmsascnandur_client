import axios from "axios";
import { base_client_url } from "../../utils/base_url";
import { config } from "../../utils/axiosconfig";

export const addAddress = async(addressData) => {
    const response = await axios.post(`${base_client_url}/address/`, addressData,config);
    return response.data;
};

export const allAddress = async() => {
    const response = await axios.get(`${base_client_url}/address/all`);
    return response.data;
};

export const singleAddress = async(id) => {
    const response = await axios.get(`${base_client_url}/address/single/${id}`);
    return response.data;
};

export const putAddress = async(address) => {
    const response = await axios.put(`${base_client_url}/address/update/${address.id}`, 
    {
        title : address.addressData.title,
    },
    config);
    return response.data;
};

export const deleteAddress = async(id) => {
    const response = await axios.delete(`${base_client_url}/address/delete/${id}`,config);
    return response.data;
};


const addressService = {
    addAddress,
    allAddress,
    singleAddress,
    putAddress,
    deleteAddress
}

export default addressService;