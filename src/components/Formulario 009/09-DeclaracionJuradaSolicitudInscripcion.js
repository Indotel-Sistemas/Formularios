import React from 'react'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

import { insertarDatosForm009 } from '../../helpers/database';

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
    CamposForm009,
    CampoForm9Validations,
    CampoForm9InitialValues
} from './CamposForm009'
import { ButtonSubmitForm } from '../ui/ButtonSubmitForm';

const Validations = Yup.object().shape({
    ...datosGeneralesvalidations,
    ...representanteLegalValidations,
    ...CampoForm9Validations
   });

export const DeclaracionJuradaSolicitudInscripcion = () => {
    return (
        <>
            <div className="form__header">
                <Link to="./Home" className="form__ruta" >Formularios / </Link><small className="text-muted">FORMULARIO DE DECLARACIÓN JURADA PARA LA SOLICITUD DE INSCRIPCIÓN EN EL REGISTRO ESPECIAL DE SERVICIOS DE RADIOAFICIONADOS</small>
                <p className="form__formName">FORMULARIO DE DECLARACIÓN JURADA PARA LA SOLICITUD DE INSCRIPCIÓN EN EL REGISTRO ESPECIAL DE SERVICIOS DE RADIOAFICIONADOS</p>
            </div>
            <div className='divtainer'>
        
                <Formik
                    initialValues={{
                        IdFormulario:"009",
                        ...datosGeneralesInitialValues,
                        ...representanteLegalInitialValues,
                        ...CampoForm9InitialValues
                    }}
                    validationSchema={Validations}
                    onSubmit={(datos) => {
                        // same shape as initial values
                        // alert(JSON.stringify(datos, null, 2));
                        insertarDatosForm009(datos)
                    }}
                    >

                        {({ errors, touched }) => (
                            <Form >   

                                {/* Campos de datos generales----------------------------------------- */}
                                <DatosGenerales errors={ errors } touched={ touched }  />

                                {/* Campos de datos representante legal----------------------------------------- */}
                                <RepresentanteLegal errors={ errors } touched={ touched }  />
                                
                                {/* Compos especificos del fomulario----------------------------------- */}
                                <CamposForm009 errors={ errors } touched={ touched } />
                                                 
                                {/* Boton de enviar */}
                                <ButtonSubmitForm />
                            </Form>
                        )}

                </Formik> 
            </div>
            
        </>
       
    )
}
