import Axios from 'axios';

const equipmentListUrl = `${process.env.BASE_API_URL}/equipments`;

const salesTypeUrl = `${process.env.BASE_API_URL}/saleTypes`;

export const getSalesTypeList = () => // obtiene el listado del tipo de ventas
    Axios.get(salesTypeUrl).then(response => {
        return response.data;
    });


export const getEquipmentList = () => // obteine el listado de equipamientos
    Axios.get(equipmentListUrl).then(response => {
        return response.data;
    });

const provinceListUrl = `${process.env.BASE_API_URL}/provinces`;

export const getProvinceList = () => // obtiene el listado de provincias
    Axios.get(provinceListUrl).then(response => {
        return response.data;
    });

const insertPropertyUrl = `${process.env.BASE_API_URL}/properties`;

export const insertProperty = property => Axios.post(`${insertPropertyUrl}`, property).then(({ data }) => data); // inserta la vivienda