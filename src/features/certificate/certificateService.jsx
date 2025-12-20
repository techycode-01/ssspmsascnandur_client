import axios from 'axios';
import { base_client_url } from '../../utils/base_url';

export const addCertificate = async(certificateData) => {
    const response = await axios.post(`${base_client_url}/certificate/`, certificateData);
    return response.data;
}

export const putCertificate = async (certificate) => {
    const response = await axios.put(`${base_client_url}/certificate/update/${certificate.id}`, {
        images : certificate.certificateData.images,
    });
    return response.data;
}

export const getCertificate = async () => {
    const response = await axios.get(`${base_client_url}/certificate/all`);
    return response.data;
}

export const singleCertificate = async (id) => {
    const response = await axios.get(`${base_client_url}/certificate/single/${id}`);
    return response.data
};

export const removeCertificate = async(id) => {
    const response = await axios.delete(`${base_client_url}/certificate/delete/${id}`);
    return response.data;
}


const certificateService = {
    addCertificate,
    putCertificate,
    getCertificate,
    singleCertificate,
    removeCertificate
}

export default certificateService;