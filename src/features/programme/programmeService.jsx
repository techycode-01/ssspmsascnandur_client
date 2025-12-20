import axios from "axios";
import { base_client_url } from "../../utils/base_url";

export const allProgrammes = async() => {
    const response = await axios.get(`${base_client_url}/progCont/all`);
    return response.data;
};

export const singleProgrammes = async(id) => {
    const response = await axios.get(`${base_client_url}/progCont/single/${id}`);
    return response.data;
};

const programmeService = {
    allProgrammes,
    singleProgrammes,
}

export default programmeService;