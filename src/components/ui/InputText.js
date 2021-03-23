import { Field } from 'formik'
import React from 'react'

export const InputText = ({nombre, tipo, errors, touched}) => {
    return (
        <div className='col-6 form-floating'>
            {/* <label>Cedula</label> */}
            <Field name={nombre} type={tipo} id={nombre} placeholder={nombre} className='form-control'  autoComplete="off"/>
            <label htmlFor={nombre} className="px-4 text-muted">{nombre}</label>
            {errors[nombre] && touched[nombre]? (
                <small className='text-danger'>{errors[nombre]}</small>
                ) : null}
        </div>
    )
}
