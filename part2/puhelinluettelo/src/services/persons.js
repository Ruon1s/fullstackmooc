import axios from 'axios';
const baseUrl = 'http://localhost:3001/persons'

const getAll = async () => {
    try {
        const request = axios.get(baseUrl);
        const response = await request;
        console.log('success');
        return response.data;
    } catch (error) {
        console.log('fail');
    }

}

const create = async newObject => {
    try {
        const request = axios.post(baseUrl, newObject)
        const response = await request;
        return response.data;
    } catch (error) {
        console.log(error);
    };
}

const updatePerson = async (id, newObject) => {
    try {
        const request = axios.put(`${baseUrl}/${id}`, newObject)
        const response = await request;
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

const del = async (id) => {
    try {
        const request = axios.delete(`${baseUrl}/${id}`)
        const response = await request;
        console.log('deleted');
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

const personsService = {getAll, create, del, updatePerson};

export default personsService;