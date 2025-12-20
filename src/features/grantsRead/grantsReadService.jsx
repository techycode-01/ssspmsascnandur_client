import axios from "axios";
import { base_url } from "../../utils/base_url";
import { config } from "../../utils/axiosconfig";

export const allGrantRead = async() => {
    const response = await axios.get(`${base_url}/grantsRead/all`);
    return response.data;
};

export const singleGrantRead = async(id) => {
    const response = await axios.get(`${base_url}/grantsRead/single/${id}`);
    return response.data;
};



const grantsReadService = {
    allGrantRead,
    singleGrantRead,
}

export default grantsReadService;