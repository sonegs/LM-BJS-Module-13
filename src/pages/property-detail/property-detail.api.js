import Axios from 'axios';

const url = `${process.env.BASE_API_URL}/properties`;

export const getPropertyDetails = (queryParams) =>
    Axios.get(`${url}?${queryParams}`).then(response => {
        return response.data;
    });

const equipmentListUrl = `${process.env.BASE_API_URL}/equipments`;

export const getEquipmentList = () =>
    Axios.get(equipmentListUrl).then(response => {
        return response.data;
    });


const messageUrl = `${process.env.BASE_API_URL}/contact`;

export const insertMessage = message => Axios.post(`${messageUrl}`, message).then(({ data }) => data);