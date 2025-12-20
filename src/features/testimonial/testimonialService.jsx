import axios from 'axios';
import { base_client_url } from '../../utils/base_url';
import { config } from '../../utils/axiosconfig';

export const addTestimonial = async(clientData) => {
    const response = await axios.post(`${base_client_url}/testimonial/`, clientData,config);
    return response.data;
}

export const putTestimonial = async (donImg) => {
    const response = await axios.put(`${base_client_url}/testimonial/update/${donImg.id}`, {
        images : donImg.clientData.images,
        name : donImg.clientData.name,
        comment : donImg.clientData.comment,
    },config);
    return response.data;
}

export const getTestimonial = async () => {
    const response = await axios.get(`${base_client_url}/testimonial/all`);
    return response.data;
}

export const singleTestimonial = async (id) => {
    const response = await axios.get(`${base_client_url}/testimonial/single/${id}`);
    return response.data
};

export const removeTestimonial = async(id) => {
    const response = await axios.delete(`${base_client_url}/testimonial/delete/${id}`, config);
    return response.data;
}


const testimonialService = {
    addTestimonial,
    putTestimonial,
    getTestimonial,
    singleTestimonial,
    removeTestimonial
}

export default testimonialService;