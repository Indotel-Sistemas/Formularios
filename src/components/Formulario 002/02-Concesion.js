import React from 'react'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

import { insertarDatosForm002 } from '../../helpers/POSTform';

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
    CamposForm002,
    CamposForm2InitialValues
} from './CamposForm002'
import { ButtonSubmitForm } from '../ui/ButtonSubmitForm';


const Validations = Yup.object().shape({
    ...datosGeneralesvalidations,
    ...representanteLegalValidations
   });

export const Concesion = () => {
    return (
         <>
    
            <div className="form__header">
                <Link to="./Home" className="form__ruta" >Formularios / </Link><small className="text-muted">FORMULARIO SOLICITUD DE CONCESION</small>
                <p className="form__formName">FORMULARIO SOLICITUD DE CONCESION</p>
            </div>
            <div className='divtainer'>
        
                <Formik
                    initialValues={{
                        IdFormulario:"002",
                        ...datosGeneralesInitialValues,
                        ...representanteLegalInitialValues,
                        ...CamposForm2InitialValues
                    }}
                    validationSchema={Validations}
                    onSubmit={(datos) => {
                        // same shape as initial values
                        insertarDatosForm002(datos);
                    }}
                    >

                        {({ errors, touched }) => (
                            <Form >   

                                {/* Campos de datos generales----------------------------------------- */}
                                <DatosGenerales errors={ errors } touched={ touched }  />

                                {/* Campos de datos representante legal----------------------------------------- */}
                                <RepresentanteLegal errors={ errors } touched={ touched }  />
                               
                                {/* Compos especificos del fomulario----------------------------------- */}
                                <CamposForm002 />

                                {/* Boton de enviar */}
                                <ButtonSubmitForm />
                            </Form>
                        )}

                </Formik> 
            </div>
            
        </>
    )
}
