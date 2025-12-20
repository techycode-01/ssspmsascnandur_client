import axios from 'axios';
import { base_client_url } from '../../utils/base_url';

export const adminSignup = async(user) => {
    const response = await axios.post(`${base_client_url}/auth/register`, user);
    return response.data;
};

export const adminLogin = async(user) => {
    const response = await axios.post(`${base_client_url}/auth/login__user`, user);
    if(response.data){
        localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
}

export const allUsers = async() => {
    const response = await axios.get(`${base_client_url}/auth/all`);
    return response.data;
}

export const deleteUser = async(id) => {
    const response = await axios.delete(`${base_client_url}/auth/delete/${id}`);
    return response.data;
}

const authService = {
    adminSignup,
    adminLogin,
    allUsers,
    deleteUser
};

export default authService;