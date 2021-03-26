import React from 'react'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

import { insertarDatosForm007 } from '../../helpers/database';

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
    CamposForm007,
    CamposForm7InitialValues
} from './CamposForm007'
import { ButtonSubmitForm } from '../ui/ButtonSubmitForm';

const Validations = Yup.object().shape({
    ...datosGeneralesvalidations,
    ...representanteLegalValidations
   });

export const AutorizacionPrestarServicioCertificacionConfianza = () => {
    return (
        <>
            <div className="form__header">
                <Link to="./Home" className="form__ruta" >Formularios / </Link><small className="text-muted">FORMULARIO DE SOLICITUD DE AUTORIZACIÓN PARA PRESTAR SERVICIOS CERTIFICACIÓN Y DE CONFIANZA</small>
                <p className="form__formName">FORMULARIO DE SOLICITUD DE AUTORIZACIÓN PARA PRESTAR SERVICIOS CERTIFICACIÓN Y DE CONFIANZA</p>
            </div>
            <div className='divtainer'>
        
                <Formik
                    initialValues={{
                        IdFormulario:"007",
                        ...datosGeneralesInitialValues,
                        ...representanteLegalInitialValues,
                        ...CamposForm7InitialValues
                    }}
                    validationSchema={Validations}
                    onSubmit={(datos) => {
                        // same shape as initial values
                        // alert(JSON.stringify(datos, null, 2));
                        insertarDatosForm007(datos)
                    }}
                    >

                        {({ errors, touched }) => (
                            <Form >   

                                {/* Campos de datos generales----------------------------------------- */}
                                <DatosGenerales errors={ errors } touched={ touched }  />

                                {/* Campos de datos representante legal----------------------------------------- */}
                                <RepresentanteLegal errors={ errors } touched={ touched }  />
                                
                                {/* Compos especificos del fomulario----------------------------------- */}
                                <CamposForm007 />
                                {/* Boton de enviar */}
                                <ButtonSubmitForm />
                            </Form>
                        )}

                </Formik> 
            </div>
            
        </>
    )
}
