import axios from 'axios';
import { base_client_url } from '../../utils/base_url';
import { config } from '../../utils/axiosconfig';

export const addContact = async(contactData) => {
    const response = await axios.post(`${base_client_url}/contactQuery/`, contactData);
    return response.data;
}

const contactFormService = {
    addContact,
}

export default contactFormService;