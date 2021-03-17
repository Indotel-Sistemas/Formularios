import React from 'react'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

import { insertarDatosForm008 } from '../../helpers/database';

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
    CamposForm008,
    CamposForm8InitialValues,
    CamposForm8Validations
} from './CamposForm008'

const Validations = Yup.object().shape({
    ...datosGeneralesvalidations,
    ...representanteLegalValidations,
    ...CamposForm8Validations
   });
   
export const SolucionControversias = () => {
    return (
        <>
            <div className="form__header">
                <Link to="./Home" className="form__ruta" >Formularios / </Link><small className="text-muted">FORMULARIO PARA INTERVENCION DEL INDOTEL PARA LA SOLUCION DE CONTROVERSIAS ENTRE PRESTADORAS DE SERVICIOS PUBLICOS DE TELECOMUNICACIONES</small>
                <p className="form__formName">FORMULARIO PARA INTERVENCION DEL INDOTEL PARA LA SOLUCION DE CONTROVERSIAS ENTRE PRESTADORAS DE SERVICIOS PUBLICOS DE TELECOMUNICACIONES</p>
            </div>
            <div className='divtainer'>
                <Formik
                    initialValues={{
                        IdFormulario:"008",
                        ...datosGeneralesInitialValues,
                        ...representanteLegalInitialValues,
                        ...CamposForm8InitialValues
                    }}
                    validationSchema={Validations}
                    onSubmit={(datos) => {
                        // same shape as initial values
                        // alert(JSON.stringify(datos, null, 2));
                        insertarDatosForm008(datos)
                    }}
                    >

                        {({ errors, touched }) => (
                            <Form >   

                                {/* Campos de datos generales----------------------------------------- */}
                                <DatosGenerales errors={ errors } touched={ touched }  />

                                {/* Campos de datos representante legal----------------------------------------- */}
                                <RepresentanteLegal errors={ errors } touched={ touched }  />
                                
                                {/* Compos especificos del fomulario----------------------------------- */}
                                <CamposForm008 errors={ errors } touched={ touched } />
                                
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




// <h6>Origen del servicio compartido que produjo la controversia o diferendo que afecta el mercado de las Telecomunicaciones:</h6>

// {/*Contractual--------------------------------------------------------------------------- */}
// <div className='col-6 mx-4 mb-2'>
//     <label>Contractual</label>
//     <Field type="checkbox" name="Contractual" className="mx-2"/>
// </div>

// {/*No Contractual------------------------------------------------------------------------- */}
// <div className='col-6 mx-4 mb-2'>
//     <label>No Contractual</label>
//     <Field type="checkbox" name="NoContractual" className="mx-2"/>
// </div>


// <h6> Señalar disposiciones están siendo violadas:</h6>

// {/*Ley de Telecomunicaciones (No. 153-98)--------------------------------------------------------------------------- */}
// <div className='col-6 mx-4 mb-2'>
//     <label>Ley de Telecomunicaciones (No. 153-98)</label>
//     <Field type="checkbox" name="LeyTeleco" className="mx-2"/>
// </div>

// {/*Reglamento de Libre y Leal Competencia (No. 022-05)------------------------------------------------------------------------- */}
// <div className='col-6 mx-4 mb-2'>
//     <label>Reglamento de Libre y Leal Competencia (No. 022-05)</label>
//     <Field type="checkbox" name="ReglamentoLeyLibreCompetencia" className="mx-2"/>
// </div>

// {/*Reglamento General de Interconexión (No. 038-11)------------------------------------------------------------------------- */}
// <div className='col-6 mx-4 mb-2'>
//     <label>Reglamento General de Interconexión (No. 038-11)</label>
//     <Field type="checkbox" name="ReglamentoGeneralInterconexion" className="mx-2"/>
// </div>

// {/*Reglamento General de Interconexión (No. 038-11)------------------------------------------------------------------------- */}
// <div className='col-6 mx-4 mb-2'>
//     <label>Reglamento General de Interconexión (No. 038-11)</label>
//     <Field type="checkbox" name="ReglamentoGeneralInterconexion" className="mx-2"/>
// </div>


