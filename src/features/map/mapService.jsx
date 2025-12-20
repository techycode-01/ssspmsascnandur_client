import axios from "axios";
import { base_client_url } from "../../utils/base_url";
import { config } from "../../utils/axiosconfig";

export const addMap = async(mapData) => {
    const response = await axios.post(`${base_client_url}/map/`, mapData,config);
    return response.data;
};

export const allMap = async() => {
    const response = await axios.get(`${base_client_url}/map/all`);
    return response.data;
};

export const singleMap = async(id) => {
    const response = await axios.get(`${base_client_url}/map/single/${id}`);
    return response.data;
};

export const putMap = async(map) => {
    const response = await axios.put(`${base_client_url}/map/update/${map.id}`, 
    {
        link : map.mapData.link,
    },
    config
);
    return response.data;
};

export const deleteMap = async(id) => {
    const response = await axios.delete(`${base_client_url}/map/delete/${id}`,config);
    return response.data;
};


const mapService = {
    addMap,
    allMap,
    singleMap,
    putMap,
    deleteMap
}

export default mapService;