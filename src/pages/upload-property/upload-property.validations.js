import { Validators, createFormValidation } from '@lemoncode/fonk';
import { arrayRequired } from '@lemoncode/fonk-array-required-validator';
import { isUrl } from '@lemoncode/fonk-is-url-validator';

const validationSchema = {
    field: {
        title: [{ // validamos el campo título
                validator: Validators.required,
                message: 'Campo requerido',
            },
            {
                validator: Validators.pattern,
                customArgs: { pattern: /[A-Za-zÁÉÍÓÚñáéíóúÑ0-9]{2}?[A-Za-zÁÉÍÓÚñáéíóúÑ0-9\']/ },
                message: 'Introduzca un título válido',
            }
        ],
        notes: [{ // validamos el campo notes
                validator: Validators.required,
                message: 'Campo requerido',
            },
            {
                validator: Validators.pattern,
                customArgs: { pattern: /[A-Za-zÁÉÍÓÚñáéíóúÑ0-9]{2}?[A-Za-zÁÉÍÓÚñáéíóúÑ0-9\']/ },
                message: 'Introduzca un comentario más extenso',
            }
        ],
        email: [{ // validamos el campo email
                validator: Validators.required,
                message: 'Campo requerido',
            },
            {
                validator: Validators.email,
                message: 'Email no válido',
            }
        ],
        phone: [{ // validamos el campo phone
                validator: Validators.required,
                message: 'Campo requerido',
            },
            {
                validator: Validators.pattern,
                customArgs: { pattern: /^[0-9]{1,9}$/ },
                message: 'Introduzca sólo caracteres numéricos y un número correcto',
            }
        ],
        price: [{ // validamos el campo price
                validator: Validators.required,
                message: 'Campo requerido',
            },
            {
                validator: Validators.pattern,
                customArgs: { pattern: /^[0-9]{1,8}$/ },
                message: 'Introduzca sólo caracteres numéricos y un número correcto',
            }
        ],
        saleTypeIds: [{ // validamos el campo salesType
            validator: Validators.required,
            message: 'Campo requerido',
        }],
        address: [{ // validamos el campo address
                validator: Validators.required,
                message: 'Campo requerido',
            },
            {
                validator: Validators.pattern,
                customArgs: { pattern: /[A-Za-zÁÉÍÓÚñáéíóúÑ0-9]{2}?[A-Za-zÁÉÍÓÚñáéíóúÑ0-9\']/ },
                message: 'Introduzca un concepto correcto',
            }
        ],
        city: [{ // validamos el campo city
                validator: Validators.required,
                message: 'Campo requerido',
            },
            {
                validator: Validators.pattern,
                customArgs: { pattern: /[A-Za-zÁÉÍÓÚñáéíóúÑ]{2}?[A-Za-zÁÉÍÓÚñáéíóúÑ\']/ },
                message: 'Introduzca un concepto correcto',
            }
        ],
        provinceId: [{ // validamos el campo province
            validator: Validators.required,
            message: 'Campo requerido',
        }, ],
        squareMeter: [{ // validamos el campo squareMeter
                validator: Validators.required,
                message: 'Campo requerido',
            },
            {
                validator: Validators.pattern,
                customArgs: { pattern: /^[0-9]{1,6}$/ },
                message: 'Introduzca sólo caracteres numéricos y un número correcto',
            }
        ],
        rooms: [{ // validamos el campo rooms
                validator: Validators.required,
                message: 'Campo requerido',
            },
            {
                validator: Validators.pattern,
                customArgs: { pattern: /^[0-9]{1,2}$/ },
                message: 'Introduzca sólo caracteres numéricos y un número correcto',
            }
        ],
        bathrooms: [{ // validamos el campo bathrooms
                validator: Validators.required,
                message: 'Campo requerido',
            },
            {
                validator: Validators.pattern,
                customArgs: { pattern: /^[0-9]{1,2}$/ },
                message: 'Introduzca sólo caracteres numéricos y un número correcto',
            }
        ],
        locationUrl: [{ // validamos el campo locationUrl
                validator: Validators.required,
                message: 'Campo requerido',
            },
            {
                validator: isUrl.validator,
                message: 'Introduzca una URL válida',
            }
        ],
        newFeature: [{ // validamos el campo newFeatures
            validator: Validators.pattern,
            customArgs: { pattern: /[A-Za-zÁÉÍÓÚñáéíóúÑ0-9]{2}?[A-Za-zÁÉÍÓÚñáéíóúÑ0-9\']/ },
            message: 'Introduce un valor correcto',
        }],
        mainFeatures: [{ // validamos el campo mainFeatures
            validator: arrayRequired.validator,
            customArgs: { minLength: 1, maxLength: 10 },
            message: 'Introduzca al menos una característica',
        }],
        equipmentIds: [{ // validamos el campo equipments
                validator: Validators.required,
                message: 'Campo requerido',
            },
            {
                validator: arrayRequired.validator,
                customArgs: { minLength: 0 },
                message: 'Introduzca al menos una característica',
            }
        ],
        images: [{ // validamos el campo equipments
                validator: Validators.required,
                message: 'Campo requerido',
            },
            {
                validator: arrayRequired.validator,
                customArgs: { minLength: 1 },
                message: 'Introduzca al menos una imagen',
            }
        ],
    }
};

const validationEquipment = {
    newEquipment: [{ // validamos el campo equipments
            validator: Validators.required,
            message: 'Campo requerido',
        },
        {
            validator: Validators.pattern,
            customArgs: { pattern: /[0-9]/ },
            message: 'Introduce un valor correcto',
        }
    ],
}

// se exporta el resultado del metodo importado createFormValidation con los valores del objeto validationSchema
export const formValidation = createFormValidation(validationSchema);
export const equipmentValidation = createFormValidation(validationEquipment);