import React, { useState } from 'react'
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

import { insertarDatosForm008 } from '../../helpers/POSTform';

import { 
    datosGeneralesvalidations, 
    datosGeneralesInitialValues 
} from "../datosGenerales/DatosGenerales";

import { 
    representanteLegalValidations,
    representanteLegalInitialValues 
} from '../representanteLegal/RepresentanteLegal';

import {
    CamposForm008,
    CamposForm8InitialValues,
    CamposForm8Validations
} from './CamposForm008'
import { FormComponent } from '../estructuraFormFormik/FormComponent';

const Validations = Yup.object().shape({
    ...datosGeneralesvalidations,
    ...representanteLegalValidations,
    ...CamposForm8Validations
   });
   
export const SolucionControversias = () => {

     //Variables para popular campos aon Api cedula y RNC
    //Datos generales
    const [Nombre, setNombre] = useState('');
    const [Apellido, setApellido] = useState('');

    //Representante Legal
    const [NombreRepresentante, setNombreRepresentante] = useState('');
    const [RNCRepresentante, setRNCRepresentante] = useState('');
    const [ApellidoRepresentante, setApellidoRepresentante] = useState('');

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
                        const data = {
                            ...datos,
                            Nombre, //
                            Apellido,
                            NombreRepresentante,
                            ApellidoRepresentante
                        }
                        console.log(JSON.stringify(data, null, 2));
                        // insertarDatosForm008(data);
                    }}
                    >

                        {({ errors, touched }) => (
                             //Componente de formulario Formik modular para autopopular los campos
                            //Nombre y Apellido de informacion generel, Nombre y Apellido de
                            //Representante Legal.
                            <FormComponent
                                errors={ errors } 
                                touched={ touched } 
                                Nombre={ Nombre } 
                                Apellido={ Apellido } 
                                setNombre={ setNombre } 
                                setApellido={ setApellido } 
                                NombreRepresentante={ NombreRepresentante } 
                                ApellidoRepresentante={ ApellidoRepresentante }
                                RNCRepresentante={ RNCRepresentante }
                                setNombreRepresentante={ setNombreRepresentante } 
                                setApellidoRepresentante={ setApellidoRepresentante } 
                                setRNCRepresentante={ setRNCRepresentante }
                                CamposEspecificos={ CamposForm008 }
                            />
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


