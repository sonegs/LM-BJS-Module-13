export const mapPropertyDetailsFromApiToVM = (propertyDetails) => {
    return mapPropertyFromApiToViewModel(propertyDetails);
};

const mapPropertyFromApiToViewModel = (property) => {
    return {
        id: property.id,
        title: property.title,
        notes: property.notes,
        price: `${property.price.toLocaleString()}€`,
        city: property.city,
        squareMeter: `${property.squareMeter}m2`,
        rooms: `${property.rooms} ${getRoomWord(property.rooms)}`,
        bathrooms: `${property.bathrooms} ${getBathRoomWord(property.bathrooms)}`,
        locationUrl: property.locationUrl,
        mainFeatures: Array.isArray(property.mainFeatures) ? property.mainFeatures : '',
        equipmentIds: Array.isArray(property.equipmentIds) ? property.equipmentIds : '',
        equipments: property.equipments,
        images: Array.isArray(property.images) ? property.images : '',
        mainImage: Array.isArray(property.images) ? property.images[0] : '',
    };
};

const getRoomWord = rooms => {
    return rooms > 1 ? 'habitaciones' : 'habitación';
};

const getBathRoomWord = bathrooms => {
    return bathrooms > 1 ? 'baño' : 'baños';
};