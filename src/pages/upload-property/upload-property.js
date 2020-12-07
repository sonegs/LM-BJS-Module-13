import { history } from '../../core/router/history';
import { onUpdateField, onSubmitForm, onSetError, onSetFormErrors, onAddFile } from '../../common/helpers';
import { setCheckboxList, setOptionList, formatDeleteFeatureButtonId, onAddFeature, onRemoveFeature, onAddImage } from './upload-property.helpers';
import { formValidation, equipmentValidation } from './upload-property.validations';
import { getSalesTypeList, getProvinceList, getEquipmentList, insertProperty } from './upload-property.api';
import { mapUploadPropertyFromApiToVM } from './upload-property.mappers';

let uploadProperty = {
    id: '',
    title: '',
    notes: '',
    email: '',
    phone: '',
    price: '',
    newSaleType: '',
    saleTypeIds: [],
    address: '',
    city: '',
    provinceId: '',
    squareMeter: '',
    rooms: '',
    bathrooms: '',
    locationUrl: '',
    newFeature: '',
    mainFeatures: [],
    newEquipment: '',
    equipmentIds: [],
    newImage: '',
    images: [],
};


Promise.all([ // recibe las promesas
    getSalesTypeList(),
    getProvinceList(),
    getEquipmentList(), // recuperamos los datos del objeto equiment de data.json
]).then(([salesTypeList, provinceList, equipmentList]) => {
    setCheckboxList(salesTypeList, 'saleTypes');
    setOptionList(provinceList, 'province');
    setCheckboxList(equipmentList, 'equipments');
});

// Recogemos el valor del título
onUpdateField('title', event => {
    const value = event.target.value; // recoge el contenido del id correspondiente en la constante value
    uploadProperty = {...uploadProperty, title: value }; // le damos toda la información que tiene actualmente y cambiamos su valor por el recogido en el value
    formValidation.validateField('title', uploadProperty.title).then(result => {
        onSetError('title', result);
    });
});
// Recogemos el valor de los comentarios
onUpdateField('notes', event => {
    const value = event.target.value; // recoge el contenido del id correspondiente en la constante value
    uploadProperty = {...uploadProperty, notes: value }; // le damos toda la información que tiene actualmente y cambiamos su valor por el recogido en el value
    formValidation.validateField('notes', uploadProperty.notes).then(result => {
        onSetError('notes', result);
    });
});
//Recogemos el valor del email
onUpdateField('email', event => {
    const value = event.target.value; // recoge el contenido del id correspondiente en la constante value
    uploadProperty = {...uploadProperty, email: value }; // le damos toda la información que tiene actualmente y cambiamos su valor por el recogido en el value
    formValidation.validateField('email', uploadProperty.email).then(result => {
        onSetError('email', result);
    });
});
//Recogemos el valor del telefono
onUpdateField('phone', event => {
    const value = event.target.value; // recoge el contenido del id correspondiente en la constante value
    uploadProperty = {...uploadProperty, phone: value }; // le damos toda la información que tiene actualmente y cambiamos su valor por el recogido en el value
    formValidation.validateField('phone', uploadProperty.phone).then(result => {
        onSetError('phone', result);
    });
});
//Recogemos el valor del precio
onUpdateField('price', event => {
    const value = event.target.value; // recoge el contenido del id correspondiente en la constante value
    uploadProperty = {...uploadProperty, price: value }; // le damos toda la información que tiene actualmente y cambiamos su valor por el recogido en el value
    formValidation.validateField('price', uploadProperty.price).then(result => {
        onSetError('price', result);
    });
});
//Recogemos el valor del tipo de venta
onUpdateField('saleTypes', event => {
    const value = event.target.value; // recoge el contenido del id correspondiente en la constante value
    uploadProperty = {...uploadProperty, newSaleType: value }; // le damos toda la información que tiene actualmente y cambiamos su valor por el recogido en el value
    formValidation.validateField('saleTypes', uploadProperty.newSaleType).then(result => {
        onSetError('saleTypes', result);
        uploadProperty.saleTypeIds.push(uploadProperty.newSaleType); // añade la caracteristica al final del array saleTypeIds
    });
});
//Recogemos el valor de la dirección
onUpdateField('address', event => {
    const value = event.target.value; // recoge el contenido del id correspondiente en la constante value
    uploadProperty = {...uploadProperty, address: value }; // le damos toda la información que tiene actualmente y cambiamos su valor por el recogido en el value
    formValidation.validateField('address', uploadProperty.address).then(result => {
        onSetError('address', result);
    });
});
//Recogemos el valor de la ciudad
onUpdateField('city', event => {
    const value = event.target.value; // recoge el contenido del id correspondiente en la constante value
    uploadProperty = {...uploadProperty, city: value }; // le damos toda la información que tiene actualmente y cambiamos su valor por el recogido en el value
    formValidation.validateField('city', uploadProperty.city).then(result => {
        onSetError('city', result);
    });
});
//Recogemos el valor de la provincia
onUpdateField('province', event => {
    const value = event.target.value; // recoge el contenido del id correspondiente en la constante value
    uploadProperty = {...uploadProperty, provinceId: value }; // le damos toda la información que tiene actualmente y cambiamos su valor por el recogido en el value
    formValidation.validateField('province', uploadProperty.provinceId).then(result => {
        onSetError('province', result);
    });
});
//Recogemos el valor de los metros cuadrados
onUpdateField('squareMeter', event => {
    const value = event.target.value; // recoge el contenido del id correspondiente en la constante value
    uploadProperty = {...uploadProperty, squareMeter: value }; // le damos toda la información que tiene actualmente y cambiamos su valor por el recogido en el value
    formValidation.validateField('squareMeter', uploadProperty.squareMeter).then(result => {
        onSetError('squareMeter', result);
    });
});
//Recogemos el valor de las habitaciones
onUpdateField('rooms', event => {
    const value = event.target.value; // recoge el contenido del id correspondiente en la constante value
    uploadProperty = {...uploadProperty, rooms: value }; // le damos toda la información que tiene actualmente y cambiamos su valor por el recogido en el value
    formValidation.validateField('rooms', uploadProperty.rooms).then(result => {
        onSetError('rooms', result);
    });
});
//Recogemos el valor de los cuartos de baño
onUpdateField('bathrooms', event => {
    const value = event.target.value; // recoge el contenido del id correspondiente en la constante value
    uploadProperty = {...uploadProperty, bathrooms: value }; // le damos toda la información que tiene actualmente y cambiamos su valor por el recogido en el value
    formValidation.validateField('bathrooms', uploadProperty.bathrooms).then(result => {
        onSetError('bathrooms', result);
    });
});
//Recogemos el valor de la URL de localización
onUpdateField('locationUrl', event => {
    const value = event.target.value; // recoge el contenido del id correspondiente en la constante value
    uploadProperty = {...uploadProperty, locationUrl: value }; // le damos toda la información que tiene actualmente y cambiamos su valor por el recogido en el value
    formValidation.validateField('locationUrl', uploadProperty.locationUrl).then(result => {
        onSetError('locationUrl', result);
    });
});
//Recogemos el valor de las características de la vivienda
onUpdateField('newFeature', event => {
    const value = event.target.value; // recoge el contenido del id correspondiente en la constante value
    uploadProperty = {...uploadProperty, newFeature: value }; // le damos toda la información que tiene actualmente y cambiamos su valor por el recogido en el value
    formValidation.validateField('newFeature', uploadProperty.newFeature).then(result => {
        onSetError('newFeature', result);
    });
});

// al insertar cada caracteristica
onSubmitForm('insert-feature-button', () => {
    formValidation.validateField('newFeature', uploadProperty.newFeature).then(result => { // la valida
        onSetError('newFeature', result);
        if (result.succeeded) {
            onAddFeature(uploadProperty.newFeature); // añade la etiqueta html al formulario
            uploadProperty.mainFeatures.push(uploadProperty.newFeature); // añade la caracteristica al final del array mainFeatures
            formValidation.validateField('mainFeatures', uploadProperty.mainFeatures).then(result => {
                onSetError('mainFeatures', result);
                // este map se encarga de borrar una caracteristica al hacer clic en el icono de la papelera
                uploadProperty.mainFeatures.map(myFeature => {
                    onSubmitForm(formatDeleteFeatureButtonId(myFeature), () => { // da formato al id con la etiqueta html
                        onRemoveFeature(myFeature); // elimina la etiqueta html correspondiente
                        let index = uploadProperty.mainFeatures.indexOf(myFeature); //busca la posicion a eliminar en el array mainFeatures
                        uploadProperty.mainFeatures.splice(index, 1); //elimina la caracteristica del array mainFeatures
                    });
                });
            });
        }
    });
});


//Recogemos el valor del equipamiento
onUpdateField('equipments', event => {
    const value = event.target.value; // recoge el contenido del id correspondiente en la constante value
    uploadProperty = {...uploadProperty, newEquipment: value }; // le damos toda la información que tiene actualmente y cambiamos su valor por el recogido en el value
    equipmentValidation.validateField('equipments', uploadProperty.newEquipment).then(result => {
        onSetError('equipments', result);
        uploadProperty.equipmentIds.push(uploadProperty.newEquipment); // añade la caracteristica al final del array EquipmentsIds
    });
});

//Recogemos las imágenes
onUpdateField('images', event => {
    const value = event.target.value; // recoge el contenido del id correspondiente en la constante value
    uploadProperty = {...uploadProperty, newImage: value }; // le damos toda la información que tiene actualmente y cambiamos su valor por el recogido en el value

    onAddFile('add-image', value => { //al añadir un archivo, pasalo a BASE64
        onAddImage(value); // añade una miniatura del archivo en el HTML
        uploadProperty.images.push(value); // añade la imagen al final del array images
    });

    formValidation.validateField('images', uploadProperty.images).then(result => { // valida que es un array de imagenes
        onSetError('images', result);
    });
});


const onSave = () => { // mapea los datos al guardarlos
    return insertProperty(uploadProperty);
};

onSubmitForm('save-button', () => {
    // eliminamos las propiedades que no necesitamos almacenar
    delete uploadProperty.newSaleType;
    delete uploadProperty.newFeature;
    delete uploadProperty.newEquipment;
    delete uploadProperty.newImage;

    uploadProperty = mapUploadPropertyFromApiToVM(uploadProperty);

    formValidation.validateForm(uploadProperty).then(result => {
        if (result.succeeded) {
            onSave().then(() => {
                alert("La vivienda se ha guardado");
                history.back();
            });
        }
    });
});