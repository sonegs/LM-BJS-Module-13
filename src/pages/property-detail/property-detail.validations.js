import { Validators, createFormValidation } from '@lemoncode/fonk';

const validationSchema = {
    field: {
        email: [{ // validamos el campo email
                validator: Validators.required,
                message: 'Campo requerido',
            },
            {
                validator: Validators.email,
                message: 'Email no válido',
            }
        ],
        message: [{ // validamos el campo Comentarios
                validator: Validators.required,
                message: 'Campo requerido',
            },
            {
                validator: Validators.pattern,
                customArgs: { pattern: /[A-Za-zÁÉÍÓÚñáéíóúÑ]{2}?[A-Za-zÁÉÍÓÚñáéíóúÑ\']/ },
                message: 'Introduzca un mensaje para el propietario',
            }
        ],
    },
};
// se exporta el resultado del metodo importado createFormValidation con los valores del objeto validationSchema
export const formValidation = createFormValidation(validationSchema);