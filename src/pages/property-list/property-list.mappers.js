export const mapPropertyListFromApiToViewModel = (propertyList) => {
    return propertyList.map(property => mapPropertyFromApiToViewModel(property));
};

const mapPropertyFromApiToViewModel = (property) => {
    return {
        id: property.id,
        title: property.title,
        rooms: `${property.rooms} ${getRoomWord(property.rooms)}`,
        squareMeter: `${property.squareMeter}m2`,
        notes: `${property.notes.substring(0,240)}...`,
        price: `${property.price.toLocaleString()}€`,
        image: Array.isArray(property.images) ? property.images[0] : '', // de esta forma, protegemos el campo para obtener valores sólo si es un array. Si no es un array, rompe la carga de la web
    };
};

const getRoomWord = rooms => {
    return rooms > 1 ? 'habitaciones' : 'habitación';
};

export const mapFilterToQueryParams = filter => { // esto se usa para decirle a la barra de direcciones que filtre los resultados de busqueda
    let queryParams = '';

    if (filter.saleTypeId) { // like para que "sea como"
        queryParams = `${queryParams}saleTypeIds_like=${filter.saleTypeId}&`; // se añade & por si se quiere insertar otro filtro más
    }

    if (filter.provinceId) {
        queryParams = `${queryParams}provinceId=${filter.provinceId}&`; // se añade & por si se quiere insertar otro filtro más
    }

    if (filter.minRooms) { // gte para mayor o igual
        queryParams = `${queryParams}rooms_gte=${filter.minRooms}&`; // se añade & por si se quiere insertar otro filtro más
        console.log(queryParams);
    }

    if (filter.minBathRooms) {
        queryParams = `${queryParams}bathrooms_gte=${filter.minBathRooms}&`; // se añade & por si se quiere insertar otro filtro más
    }
    if (filter.minPrice) {
        queryParams = `${queryParams}minprice_gte=${filter.minprice}&`; // se añade & por si se quiere insertar otro filtro más
    }
    if (filter.maxPrice) { // lte para menor o igual
        queryParams = `${queryParams}maxprice_lte=${filter.maxPrice}&`; // se añade & por si se quiere insertar otro filtro más
    }

    return queryParams.slice(0, -1); //slice con estos valores elimina el ultimo valor, restando el ultimo simbolo &

};