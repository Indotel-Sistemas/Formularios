import React, { useState } from 'react'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

import { insertarDatosForm005} from '../../helpers/POSTform';

import { 
    DatosGenerales, 
    datosGeneralesvalidations, 
    datosGeneralesInitialValues 
} from "../datosGenerales/DatosGenerales";

import { 
    representanteLegalValidations,
    representanteLegalInitialValues 
} from '../representanteLegal/RepresentanteLegal';

import {
    CamposForm005,
    CamposForm5InitialValues
} from './CamposForm005'
import { FormComponent } from '../estructuraFormFormik/FormComponent';

const Validations = Yup.object().shape({
    ...datosGeneralesvalidations,
    ...representanteLegalValidations,
   });
export const ExpansionGeografica = () => {

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
                <Link to="./Home" className="form__ruta" >Formularios / </Link><small className="text-muted">FORMULARIO DE SOLICITUD DE EXPANSION GEOGRAFICA</small>
                <p className="form__formName">FORMULARIO DE SOLICITUD DE EXPANSION GEOGRAFICA</p>
            </div>
            <div className='divtainer'>
        
                <Formik
                    initialValues={{
                        IdFormulario:"005",
                        ...datosGeneralesInitialValues,
                        ...representanteLegalInitialValues,
                        ...CamposForm5InitialValues
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
                        // insertarDatosForm005(data);
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
                                CamposEspecificos={ CamposForm005 }
                            />
                        )}

                </Formik> 
            </div>
            
        </>
    )
}
