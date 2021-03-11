import React from 'react'
import { Field } from 'formik';
import * as Yup from 'yup';
import { 
    ReglamentosVigentes,
    ReglamentosVigentesInitialValues 
} from '../regalmentosVigentes/ReglamentosVigentes';

export const CamposForm004 = ({ errors, touched }) => {
    return (
        <>
          
            <h5 className=" navbar navbar-light bg-light px-3 mt-4">Formulario de Solicitud del Servicio</h5>

            <div className="px-3">

                <div className="form-group">
                    {/*Números de NXX solicitados--------------------------------------------------------------------------- */}
                    <div className='col-6'>
                        <label>Números de NXX solicitados</label>
                        <Field name='NumNxxSolicitados' type='text' className='form-control'  autoComplete="off"/>
                        {errors.NumNxxSolicitados && touched.NumNxxSolicitados ? (
                            <small className='text-danger'>{errors.NumNxxSolicitados}</small>
                        ) : null}
                    </div>
                    {/*Números de NXX asignados--------------------------------------------------------------------------- */}
                    <div className='col-6'>
                        <label>Números de NXX asigandos</label>
                        <Field name='NumNxxAsignados' type='text' className='form-control'  autoComplete="off"/>
                        {errors.NumNxxAsignados && touched.NumNxxAsignados ? (
                            <small className='text-danger'>{errors.NumNxxAsignados}</small>
                        ) : null}
                    </div>
                    {/*Números de NXX disponibles--------------------------------------------------------------------------- */}
                    <div className='col-6'>
                        <label>Números de NXX disponibles</label>
                        <Field name='NumNxxDisponibles' type='text' className='form-control'  autoComplete="off"/>
                        {errors.NumNxxDisponibles && touched.NumNxxDisponibles ? (
                            <small className='text-danger'>{errors.NumNxxDisponibles}</small>
                        ) : null}
                    </div>
                
                    <h6 className="mt-3">Señalar disposiciones están siendo consideradas: </h6>
                    < ReglamentosVigentes IdFormulario='004'   />

                </div>
            </div>

        </>
    )
}


export const CamposForm4Validations = {
    NumNxxSolicitados: Yup.string().required('Campo requerido'),
    NumNxxAsignados: Yup.string().required('Campo requerido'),
    NumNxxDisponibles: Yup.string().required('Campo requerido'),
}


export const CamposForm4InitialValues = {
    NumNxxSolicitados: '',
    NumNxxAsignados: '',
    NumNxxDisponibles: '',
    ...ReglamentosVigentesInitialValues
}


