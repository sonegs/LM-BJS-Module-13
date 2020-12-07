import Axios from 'axios';
// Con esto, obtenemos las viviendas que aparecen por defecto en la landing
const url = `${process.env.BASE_API_URL}/properties`;
// process.env.BASE_API_URL --> esto apunta al localhost:3000/API, como podemos ver en el fichero .env Esto es una variable de entorno para que cuando se suba a un servidor, solo se cambia esa variable de .env para que funcione en todos los archivos js
export const getPropertyList = (queryParams) =>
    Axios.get(`${url}?${queryParams}`).then(response => {
        return response.data;
    });


// Aquí rellenamos los datos de cada uno de los select de la pantalla principal

const salesTypeUrl = `${process.env.BASE_API_URL}/saleTypes`;

export const getSalesTypeList = () =>
    Axios.get(salesTypeUrl).then(response => {
        return response.data;
    });


const provinceListUrl = `${process.env.BASE_API_URL}/provinces`;

export const getProvincesList = () =>
    Axios.get(provinceListUrl).then(response => {
        return response.data;
    });