import React from 'react'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

import { insertarDatosForm006 } from '../../helpers/database';

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
            <div className="form__header">
                <Link to="./Home" className="form__ruta" >Formularios / </Link><small className="text-muted">FORMULARIO DE SOLICITUD DE TRANSFERENCIA, CESION, ARRENDAMIENTO, OTORGAMIENTO DEL DERECHO DE USO, CONSTITUCION DE UN GRAVAMEN O TRANSFERENCIA DE CONTROL</small>
                <p className="form__formName">FORMULARIO DE SOLICITUD DE TRANSFERENCIA, CESION, ARRENDAMIENTO, OTORGAMIENTO DEL DERECHO DE USO, CONSTITUCION DE UN GRAVAMEN O TRANSFERENCIA DE CONTROL</p>
            </div>
            <div className='divtainer'>
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
                        // alert(JSON.stringify(datos, null, 2));
                        insertarDatosForm006(datos)
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
                                
                            </Form>
                        )}

                </Formik> 
            </div>
            
        </>
    )
}
