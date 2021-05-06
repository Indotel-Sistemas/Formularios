import React, { useState } from 'react'
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

import { insertarDatosForm004 } from '../../helpers/POSTform';

import { 
    datosGeneralesvalidations, 
    datosGeneralesInitialValues 
} from "../datosGenerales/DatosGenerales";

import { 
    representanteLegalValidations,
    representanteLegalInitialValues 
} from '../representanteLegal/RepresentanteLegal';

import {
    CamposForm004,
    CamposForm4Validations, 
    CamposForm4InitialValues
} from './CamposForm004'
import { FormComponent } from '../estructuraFormFormik/FormComponent';


const Validations = Yup.object().shape({
    ...datosGeneralesvalidations,
    ...representanteLegalValidations,
    ...CamposForm4Validations
   });
export const AsignacionOficinaCentral = () => {

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
                        const data = {
                            ...datos,
                            Nombre, //
                            Apellido,
                            NombreRepresentante,
                            ApellidoRepresentante
                        }

                        console.log(JSON.stringify(data, null, 2));
                        // insertarDatosForm004(data);
                    }}
                    >

                        {({ errors, touched }) => (
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
                                CamposEspecificos={ CamposForm004 }
                            />
                        )}

                </Formik> 
            </div>
            
        </>
    )
}
