import axios from 'axios';
const URL = 'http://localhost:8000';
axios.defaults.withCredentials = true;

const loginUser = async (data) => {
    try {
        return await axios.post(`${URL}/login`, data);
    } catch (error) {
        console.log('failed to run loginUser', error);
    };
};

const registerUser = async (data) => {
    try {
        return await axios.post(`${URL}/register`, data);
    } catch (error) {
        console.log('failed to run registerUser', error);
    };
};

const getData = async (id) => {
    try {
        return await axios.get(`${URL}/home/${id}`);
    } catch (error) {
        console.log('failed to run registerUser', error);
    };
};

const logoutUser = async () => {
    try {
        return await axios.get(`${URL}/logout`);
    } catch (error) {
        console.log('failed to logout user', error);
    }
}

export { loginUser, registerUser, getData, logoutUser };