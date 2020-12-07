import { history } from '../../core/router/history';
import { onUpdateField, onSubmitForm, onSetError, onSetFormErrors } from '../../common/helpers';
import { setPropertyValues } from './property-detail.helpers';
import { getPropertyDetails, getEquipmentList, insertMessage } from './property-detail.api';
import { mapPropertyDetailsFromApiToVM } from './property-detail.mappers';
import { formValidation } from './property-detail.validations';

let propertyDetail = {
    id: '',
    title: '',
    notes: '',
    price: '',
    city: '',
    squareMeter: '',
    rooms: '',
    bathrooms: '',
    locationUrl: '',
    mainFeatures: '',
    equipmentIds: '',
    equipments: '',
    images: '',
    mainImage: '',
};

let contact = {
    email: '',
    message: '',
};

const params = history.getParams();
const isId = Boolean(params.id);

// mapeamos los datos de la vivienda
if (isId) { // si existe algún id
    Promise.all([ // recibe las promesas
        getEquipmentList(), // recuperamos los datos del objeto equiment de data.json
    ]).then(([equipmentList]) => { //almacenamos los valores recibidos de la promesa en la variable equipmentList
        getPropertyDetails(params.id).then(apiProperty => { // recibimos los datos de cada vivienda
            apiProperty.map(eachProperty => { // recorremos cada una de las viviendas recibidas
                if (params.id == eachProperty.id) { // buscamos el id seleccionado con el de esa vivienda
                    const myEquipmentsIds = eachProperty.equipmentIds;
                    eachProperty.equipments = getMyEquipments(equipmentList, myEquipmentsIds); // añadimos los datos de equipment según el array myEquipmentsId
                    propertyDetail = mapPropertyDetailsFromApiToVM(eachProperty); //mapeamos los datos
                    setPropertyValues(propertyDetail); //mostramos todos los datos por pantalla
                }
            });
        });
    });
} else {
    history.back(); // controlamos que si no hay un id, regrese a la web anterior
}

// Aquí contrastamos los ids del array equipmentIds con la lista de equipments y lo devolvemos en un array
const getMyEquipments = (equipmentList, equipmentIds) => {
    let myEquipments = Array();
    equipmentList.map(equipment => { // recorremos la lista de equipments y la lista de equipmentsId de nuestra vivienda
        equipmentIds.map(equipId => {
            if (equipment.id == equipId) myEquipments.push(equipment.name); // añadimos cada equipment a un array
        });
    });
    return myEquipments; // devolvemos el array creado
};


// VALIDACION DEL CUESTIONARIO DE ENVIO
onUpdateField('email', event => {
    const value = event.target.value; // recoge el contenido del id correspondiente en la constante value
    contact = {...contact, email: value }; // le damos toda la información que tiene actualmente y cambiamos su valor por el recogido en el value
    formValidation.validateField('email', contact.email).then(result => {
        onSetError('email', result);
    });
});

onUpdateField('message', event => {
    const value = event.target.value; // recoge el contenido del id correspondiente en la constante value
    contact = {...contact, message: value }; // le damos toda la información que tiene actualmente y cambiamos su valor por el recogido en el value
    formValidation.validateField('message', contact.message).then(result => {
        onSetError('message', result);
    });
});

onSubmitForm('contact-button', () => {
    formValidation.validateForm(contact).then(result => {
        onSetFormErrors(result);
        if (result.succeeded) {
            insertMessage(contact);
            alert("El mensaje ha sido enviado");
            history.back();
        }
    });
});