import React from 'react'
import { Formik, Form  } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

import { insertarDatosForm004 } from '../../helpers/database';

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
    CamposForm004,
    CamposForm4Validations, 
    CamposForm4InitialValues
} from './CamposForm004'
import { ButtonSubmitForm } from '../ui/ButtonSubmitForm';


const Validations = Yup.object().shape({
    ...datosGeneralesvalidations,
    ...representanteLegalValidations,
    ...CamposForm4Validations
   });
export const AsignacionOficinaCentral = () => {
    return (
        <>
    
            <div className="form__header">
                <Link to="./Home" className="form__ruta" >Formularios / </Link><small className="text-muted">FORMULARIO SOLICITUD DE ASIGANCION DE OFICINA CENTRAL O NXX</small>
                <p className="form__formName">FORMULARIO SOLICITUD DE ASIGANCION DE OFICINA CENTRAL O NXX</p>
            </div>
            <div className='divtainer'>
        
                <Formik
                    initialValues={{
                        IdFormulario:"004",
                        ...datosGeneralesInitialValues,
                        ...representanteLegalInitialValues,
                        ...CamposForm4InitialValues
                    }}
                    validationSchema={Validations}
                    onSubmit={(datos) => {
                        // same shape as initial values
                        // alert(JSON.stringify(datos, null, 2));
                        insertarDatosForm004(datos)
                    }}
                    >

                        {({ errors, touched }) => (
                            <Form >   
                                
                                {/* Campos de datos generales----------------------------------------- */}
                                <DatosGenerales errors={ errors } touched={ touched }  />

                                {/* Campos de datos representante legal----------------------------------------- */}
                                <RepresentanteLegal errors={ errors } touched={ touched }  />
                                
                                {/* Compos especificos del fomulario----------------------------------- */}
                                <CamposForm004  errors={ errors } touched={ touched }  />
                                {/* Boton de enviar */}
                                <ButtonSubmitForm />
                            </Form>
                        )}

                </Formik> 
            </div>
            
        </>
    )
}
