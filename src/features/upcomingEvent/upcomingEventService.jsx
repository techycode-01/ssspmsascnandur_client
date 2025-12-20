import axios from "axios";
import { base_client_url } from "../../utils/base_url";

export const addUpcoming = async(eventData) => {
    const response = await axios.post(`${base_client_url}/upcoming/`, eventData);
    return response.data;
};

export const allUpcoming = async() => {
    const response = await axios.get(`${base_client_url}/upcoming/all`);
    return response.data;
};

export const singleUpcoming = async(id) => {
    const response = await axios.get(`${base_client_url}/upcoming/single/${id}`);
    return response.data;
};

export const deleteUpcoming = async(id) => {
    const response = await axios.delete(`${base_client_url}/upcoming/delete/${id}`);
    return response.data;
};

const upcomingEventService = {
    addUpcoming,
    allUpcoming,
    singleUpcoming,
    deleteUpcoming
}

export default upcomingEventService;