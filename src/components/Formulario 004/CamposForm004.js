import React,{ useState } from 'react'
import { Field } from 'formik';
import * as Yup from 'yup';
import { Collapse } from 'react-bootstrap';
import { IoIosArrowDropdown, IoIosArrowDropup } from 'react-icons/io';

import { ButtonSubmitForm } from '../ui/ButtonSubmitForm';
import { 
    ReglamentosVigentes,
    ReglamentosVigentesInitialValues 
} from '../regalmentosVigentes/ReglamentosVigentes';

export const CamposForm004 = ({ errors, touched }) => {

    const [open, setOpen] = useState(false); //Despliega y oculta la seccion del formulario
    return (
        <>
          
          <p className="form__title">
                Formulario de Solicitud

                <button  
                    className="btn btn-primary btn-sm" 
                    type="button" 
                    onClick={() => setOpen(!open)} 
                    aria-controls="example-collapse-text" 
                    aria-expanded={open}
                    style={{backgroundColor:"#002954", border:"none"}}
                >   
                {
                    open 
                    ? <h4><IoIosArrowDropup /></h4>
                    : <h4><IoIosArrowDropdown /></h4>
                }
                </button>
            </p>

            <Collapse in={open}>
                <div className="px-3">

                    <div className="form-group">
                        <p className="form__subtitle">Números NXX</p>
                        {/*Números de NXX solicitados--------------------------------------------------------------------------- */}
                        <div className='col-6'>
                            {/* <label>Números de NXX solicitados</label> */}
                            <Field name='NumNxxSolicitados' placeholder="Número de NXX solicitado" type='number' className='form-control'  autoComplete="off"/>
                            {errors.NumNxxSolicitados && touched.NumNxxSolicitados ? (
                                <small className='text-danger'>{errors.NumNxxSolicitados}</small>
                            ) : null}
                        </div>
                        {/*Números de NXX asignados--------------------------------------------------------------------------- */}
                        <div className='col-6 mt-3'>
                            {/* <label>Números de NXX asigandos</label> */}
                            <Field name='NumNxxAsignados' placeholder="Número de NXX asigando" type='number' className='form-control'  autoComplete="off"/>
                            {errors.NumNxxAsignados && touched.NumNxxAsignados ? (
                                <small className='text-danger'>{errors.NumNxxAsignados}</small>
                            ) : null}
                        </div>
                        {/*Números de NXX disponible--------------------------------------------------------------------------- */}
                        <div className='col-6 my-3 '>
                            {/* <label>Números de NXX disponible</label> */}
                            <Field name='NumNxxDisponible' placeholder="Número de NXX disponible" type='number' className='form-control'  autoComplete="off"/>
                            {errors.NumNxxDisponible && touched.NumNxxDisponible ? (
                                <small className='text-danger'>{errors.NumNxxDisponible}</small>
                            ) : null}
                        </div>
                    
                        <p className="form__subtitle">Señalar disposiciones están siendo consideradas: </p>
                        < ReglamentosVigentes IdFormulario='004'   />

                    </div>
                    
                                    
                    {/* Boton de enviar */}
                    <ButtonSubmitForm />
                </div>
            </Collapse>

        </>
    )
}


export const CamposForm4Validations = {
    NumNxxSolicitados: Yup.string().required('Campo requerido'),
    NumNxxAsignados: Yup.string().required('Campo requerido'),
    NumNxxDisponible: Yup.string().required('Campo requerido'),
}


export const CamposForm4InitialValues = {
    NumNxxSolicitados: '',
    NumNxxAsignados: '',
    NumNxxDisponible: '',
    ...ReglamentosVigentesInitialValues
}


