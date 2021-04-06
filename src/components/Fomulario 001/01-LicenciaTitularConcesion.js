import React, { useState } from 'react'
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

import { insertarDatosForm001 } from '../../helpers/POSTform';

import { FormComponent } from "../estructuraFormFormik/FormComponent";

import { 
    datosGeneralesvalidations, 
    datosGeneralesInitialValues 
} from "../datosGenerales/DatosGenerales";


import { 
    representanteLegalValidations,
    representanteLegalInitialValues 
} from '../representanteLegal/RepresentanteLegal';

import {
    CamposForm001,
    CamposForm1InitialValues
} from './CamposForm001'

const Validations = Yup.object().shape({
    ...datosGeneralesvalidations,
    ...representanteLegalValidations
   });


export const LicenciaTitularConcesion = () => {
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
                <Link to="./Home" className="form__ruta" >Formularios / </Link><small className="text-muted">FORMULARIO DE SOLICITUD DE LICENCIA TITULAR DE UNA CONCESION</small>
                <p className="form__formName">FORMULARIO DE SOLICITUD DE LICENCIA TITULAR DE UNA CONCESION</p>
            </div>

            <div className='divtainer'>
                <Formik
                    initialValues={{ //Valores iniciales del fomrmulario
                        IdFormulario:"001",
                        ...datosGeneralesInitialValues,
                        ...representanteLegalInitialValues,
                        ...CamposForm1InitialValues,
                    }}
                    validationSchema={Validations}
                    onSubmit={(datos) => { //Valores de los campos en el formulario
         
                        const data = {
                            ...datos,
                            Nombre, //
                            Apellido,
                            NombreRepresentante,
                            ApellidoRepresentante
                        }
                        console.log(JSON.stringify(data, null, 2));
                        insertarDatosForm001(data);
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
                                CamposEspecificos={ CamposForm001 }
                            />
                        )}

                </Formik> 
            </div>
            
        </>
    )
}
