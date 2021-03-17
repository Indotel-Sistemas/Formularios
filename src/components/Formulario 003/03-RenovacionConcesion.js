import React from 'react'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

import { insertarDatosForm003 } from '../../helpers/database';

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
import { ButtonSubmitForm } from '../ui/ButtonSubmitForm';



const Validations = Yup.object().shape({
    ...datosGeneralesvalidations,
    ...representanteLegalValidations
   });

export const RenovacionConcesion = () => {
    return (
        <>
            <div className="form__header">
                <Link to="./Home" className="form__ruta" >Formularios / </Link><small className="text-muted">FORMULARIO DE SOLICITUD DE RENOVACION DE CONCESION</small>
                <p className="form__formName">FORMULARIO DE SOLICITUD DE RENOVACION DE CONCESION</p>
            </div>

            <div className='divtainer'>
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
                        // alert(JSON.stringify(datos, null, 2));
                        insertarDatosForm003(datos)
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
                                
                                {/* Boton de enviar */}
                                <ButtonSubmitForm />
                                
                            </Form>
                        )}

                </Formik> 
            </div>
            
        </>
    )
}
