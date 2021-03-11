import React, { useState } from 'react'
import { Formik, Form, Field } from 'formik';
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


const Validations = Yup.object().shape({
    ...datosGeneralesvalidations,
    ...representanteLegalValidations
   });

export const TransferenciaDerechoUso = () => {

    const [paginacion, setPaginacion] = useState(1);

    const handleSiguiente = () => {
        setPaginacion(p => p+=1)
    }
   
    const handleVolver = () => {
        setPaginacion(p => p-=1)
    }
    
    return (
        <>
            <div className='divtainer p-5'>
                <h5 className="text-center mb-3">FORMULARIO DE SOLICITUD DE TRANSFERENCIA, CESION, ARRENDAMIENTO, OTORGAMIENTO DEL DERECHO DE USO, CONSTITUCION DE UN GRAVAMEN O TRANSFERENCIA DE CONTROL</h5>
                <Formik
                    initialValues={{
                        IdFormulario:"006",
                        ...datosGeneralesInitialValues,
                        ...representanteLegalInitialValues
                    }}
                    validationSchema={Validations}
                    onSubmit={(datos) => {
                        // same shape as initial values
                        alert(JSON.stringify(datos, null, 2));
                    }}
                    >

                        {({ errors, touched }) => (
                            <Form >   
                                {
                                    paginacion === 1 
                                    ?
                                        // Campos de datos generales----------------------------------------- 
                                        <DatosGenerales errors={ errors } touched={ touched }  />
                                    :
                                    (
                                        paginacion === 2 
                                        ?
                                            // Campos de datos representante legal-----------------------------------------
                                            <RepresentanteLegal errors={ errors } touched={ touched }  />
                                        :
                                            null // Compos especificos del fomulario-----------------------------------
                                    )
                                }
                               
                                {/* Botones de atras y finalizar formulario al llegar a la última parte del formualrio */}  
                                {
                                    paginacion === 3 &&

                                    <div className="px-3  mt-4 d-flex justify-content-between">
                                        {
                                            paginacion > 1 &&
                                                <button className='btn btn-primary  btn-block' onClick={ handleVolver }>
                                                Volver
                                                </button>
                                        }
                                            <button className='btn btn-primary  btn-block' type='submit'>
                                            Ingresar
                                            </button>
                                    </div>
                                    
                                }
                            </Form>
                        )}

                </Formik> 
                        {/* Botones de atras y siguiente en la primera y segunda parte del formualrio */}
                        {
                            paginacion < 3 &&
                            
                                <div className="px-3  mt-4 d-flex justify-content-between">
                                    {
                                        paginacion > 1 &&
                                            <button className='btn btn-primary btn-block' onClick={ handleVolver }>
                                            Volver
                                            </button>
                                    }
                                    <button className='btn btn-primary  btn-block' onClick={ handleSiguiente }>
                                    Siguiente
                                    </button>
            
                                </div>
                        }
            </div>
            
        </>
    )
}
