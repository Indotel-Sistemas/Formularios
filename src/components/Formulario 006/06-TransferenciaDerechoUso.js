import React, { useState } from 'react'
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

import { insertarDatosForm006 } from '../../helpers/POSTform';

import { 
    CamposForm6, 
    CamposForm6InitialValues 
} from "./CamposForm6";

import { 
    datosGeneralesvalidations, 
    datosGeneralesInitialValues 
} from "../datosGenerales/DatosGenerales";

import { 
    representanteLegalValidations,
    representanteLegalInitialValues 
} from '../representanteLegal/RepresentanteLegal';
import { FormComponent } from '../estructuraFormFormik/FormComponent';


const Validations = Yup.object().shape({
    ...datosGeneralesvalidations,
    ...representanteLegalValidations
   });

export const TransferenciaDerechoUso = () => {

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
                          const data = {
                            ...datos,
                            Nombre, //
                            Apellido,
                            NombreRepresentante,
                            ApellidoRepresentante
                        }

                        console.log(JSON.stringify(data, null, 2));
                        // insertarDatosForm006(data);
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
                                CamposEspecificos={ CamposForm6 }
                            />
                        )}

                </Formik> 
            </div>
            
        </>
    )
}
