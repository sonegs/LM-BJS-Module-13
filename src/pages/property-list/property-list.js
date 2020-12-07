import { getPropertyList, getSalesTypeList, getProvincesList } from './property-list.api';
import { mapPropertyListFromApiToViewModel, mapFilterToQueryParams } from './property-list.mappers';
import { addPropertyRows, setOptions, clearPropertyRows } from './property-list.helpers';
import { roomOptions, bathroomOptions, minPriceOptions, maxPriceOptions } from './property-list.constants';
import { onUpdateField, onSubmitForm } from '../../common/helpers';

Promise.all([
    getPropertyList(),
    getSalesTypeList(),
    getProvincesList(),
]).then(([propertyList, salesTypeList, provinceList]) => { // aquí se usa destructuring para dar a esas variables el valor de cada posición del array ([0, 1, 2]). Es lo mismo que la línea de abajo:
    // const [propertyList, salesTypeList, provinceList] = resultList;
    loadPropertyList(propertyList);
    setOptions(salesTypeList, 'select-sale-type', '¿Qué venta?'); // pinta los datos en cada select
    setOptions(provinceList, 'select-province', '¿Dónde?'); // pinta los datos en cada select
    setOptions(roomOptions, 'select-room', '¿Habitaciones?');
    setOptions(bathroomOptions, 'select-bathroom', '¿Cuartos de baño?');
    setOptions(minPriceOptions, 'select-min-price', 'Min (EUR)');
    setOptions(maxPriceOptions, 'select-max-price', 'Max (EUR)');
});


const loadPropertyList = propertyList => {

    const viewModelPropertyList = mapPropertyListFromApiToViewModel(propertyList);
    //a continuacion, pintamos el array que nos ha devuelto
    addPropertyRows(viewModelPropertyList);
};

let filter = {
    saleTypeId: '',
    provinceId: '',
    minRooms: '',
    minBathRooms: '',
    minPrice: '',
    maxPrice: ''
};


onUpdateField('select-sale-type', (event) => {
    const value = event.target.value;
    filter = {
        ...filter,
        saleTypeId: value,
    };
});

onUpdateField('select-province', (event) => {
    const value = event.target.value;
    filter = {
        ...filter,
        provinceId: value,
    };
});

onUpdateField('select-room', (event) => {
    const value = event.target.value;
    filter = {
        ...filter,
        minRooms: value,
    };
});

onUpdateField('select-bathroom', (event) => {
    const value = event.target.value;
    filter = {
        ...filter,
        minBathRooms: value,
    };
});

onUpdateField('select-min-price', (event) => {
    const value = event.target.value;
    filter = {
        ...filter,
        minPrice: value,
    };
});

onUpdateField('select-max-price', (event) => {
    const value = event.target.value;
    filter = {
        ...filter,
        maxPrice: value,
    };
});


onSubmitForm('search-button', () => {
    const queryParams = mapFilterToQueryParams(filter);
    clearPropertyRows();
    getPropertyList(queryParams).then(propertyList => {
        loadPropertyList(propertyList);
    });
    console.log({ filter });
});