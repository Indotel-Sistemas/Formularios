import React from 'react'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { 
    CamposForm6, 
    CamposForm6InitialValues 
} from "./CamposForm6";

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


const Validations = Yup.object().shape({
    ...datosGeneralesvalidations,
    ...representanteLegalValidations
   });

export const TransferenciaDerechoUso = () => {
    return (
        <>
            <div className='divtainer p-5'>
                <h5 className="text-center mb-3">FORMULARIO DE SOLICITUD DE TRANSFERENCIA, CESION, ARRENDAMIENTO, OTORGAMIENTO DEL DERECHO DE USO, CONSTITUCION DE UN GRAVAMEN O TRANSFERENCIA DE CONTROL</h5>
                <Formik
                    initialValues={{
                        IdFormulario:"006",
                        ...datosGeneralesInitialValues,
                        ...representanteLegalInitialValues,
                        ...CamposForm6InitialValues
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
                                <br/>
                                {/* Campos de datos representante legal----------------------------------------- */}
                                <RepresentanteLegal errors={ errors } touched={ touched }  />

                                {/* Compos especificos del fomulario----------------------------------- */}
                                
                                <CamposForm6 />
                                
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
