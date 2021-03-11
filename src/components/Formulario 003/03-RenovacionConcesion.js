import React from 'react'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { 
    DatosGenerales, 
    datosGeneralesvalidations, 
    datosGeneralesInitialValues 
} from "../datosGenerales/DatosGenerales";


import { 
    RepresentanteLegal,
    representanteLegalValidations,
    representanteLegalInitialValues 
} from '../representanteLegal/RepresentanteLegal';

import {
    CamposForm003,
    CamposForm3InitialValues
} from './CamposForm003'


const Validations = Yup.object().shape({
    ...datosGeneralesvalidations,
    ...representanteLegalValidations
   });

export const RenovacionConcesion = () => {
    return (
        <>
            <div className='divtainer p-5'>
                <h5 className="text-center mb-3">FORMULARIO DE SOLICITUD DE RENOVACION DE CONCESION</h5>
                <Formik
                    initialValues={{
                        IdFormulario:"003",
                        ...datosGeneralesInitialValues,
                        ...representanteLegalInitialValues,
                        ...CamposForm3InitialValues
                    }}
                    validationSchema={Validations}
                    onSubmit={(datos) => {
                        // same shape as initial values
                        alert(JSON.stringify(datos, null, 2));
                    }}
                    >

                        {({ errors, touched }) => (
                            <Form >   
                                
                                {/* Campos de datos generales----------------------------------------- */}
                                <DatosGenerales errors={ errors } touched={ touched }  />

                                {/* Campos de datos representante legal----------------------------------------- */}
                                <RepresentanteLegal errors={ errors } touched={ touched }  />
                                
                                {/* Compos especificos del fomulario----------------------------------- */}
                                <CamposForm003 />
                                
                                
                                
                                <div className="px-3  mt-4">
                                    <button className='btn btn-primary  btn-block' type='submit'>
                                    Ingresar
                                    </button>
                                </div>
                            </Form>
                        )}

                </Formik> 
            </div>
            
        </>
    )
}
