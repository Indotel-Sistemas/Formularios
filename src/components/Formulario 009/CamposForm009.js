import React, { useState } from 'react';
import { Field } from 'formik';
import * as Yup from 'yup';
import { Collapse } from 'react-bootstrap';
import { IoIosArrowDropdown, IoIosArrowDropup } from 'react-icons/io';

import { ButtonSubmitForm } from '../ui/ButtonSubmitForm';

export const CamposForm009 = ({ errors, touched }) => {

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
                <div className="px-3 mb-4">

                    <div className="form-group row">
                    
                        {/*Tipo de Solicitud----------------------------------------------------------------- */}
                        <div className='col-6'>
                            <Field as="select" name="TipoSolicitud" className="form-control">
                                <option value="" disabled>Tipo Solicitud...</option>
                                <option value={5}>Nueva Solicitud</option>
                                <option value={6}>Renovacion</option>
                                <option value={7}>Cambio de Categoría</option>
                                <option value={8}>Portables HI</option>
                            </Field>
                            {errors.TipoSolicitud && touched.TipoSolicitud ? (
                                <small className='text-danger'>{errors.TipoSolicitud}</small>
                            ) : null}
                        </div>

                            {/*Categoría de Inscripción----------------------------------------------------------------- */}
                            <div className='col-6 mb-3'>
                            <Field as="select" name="CategoriaInscripcion" className="form-control">
                                <option value="" disabled>Categoría de Inscripción...</option>
                                <option value={1}>Superior</option>
                                <option value={2}>Técnica</option>
                                <option value={3}>General</option>
                                <option value={4}>Novicio</option>
                            </Field>
                            {errors.CategoriaInscripcion && touched.CategoriaInscripcion ? (
                                <small className='text-danger'>{errors.CategoriaInscripcion}</small>
                            ) : null}
                        </div>

                            
                        {/*Servico a Operar--------------------------------------------------------------------------- */}
                        <div className='col-12 mb-3'>
                            {/* <label>Servico a Operar</label> */}
                            <Field name='ServicioAoperar' placeholder="Servico a Operar" as='textarea' className='form-control'  autoComplete="off"/>
                            {errors.ServicioAoperar && touched.ServicioAoperar ? (
                                <small className='text-danger'>{errors.ServicioAoperar}</small>
                                ) : null}
                        </div>
                            
                        {/*Área Geográfica de Operación--------------------------------------------------------------------------- */}
                        <div className='col-12 mb-3'>
                            {/* <label>Área Geográfica de Operación</label> */}
                            <Field name='Areageografica' placeholder="Área Geográfica de Operación" as='textarea' className='form-control'  autoComplete="off"/>
                            {errors.Areageografica && touched.Areageografica ? (
                                <small className='text-danger'>{errors.Areageografica}</small>
                                ) : null}
                        </div>

                        {/*Letras Distintivas--------------------------------------------------------------------------- */}
                        <div className='col-12 mb-3'>
                            {/* <label>Letras Distintivas</label> */}
                            <Field name='LetrasDistintivas' placeholder="Letras Distintivas" as='textarea' className='form-control'  autoComplete="off"/>
                            {errors.LetrasDistintivas && touched.LetrasDistintivas ? (
                                <small className='text-danger'>{errors.LetrasDistintivas}</small>
                                ) : null}
                        </div>
                        {/*Descripción del Equipo de Radio a Utilizar--------------------------------------------------------------------------- */}
                        <div className='col-12'>
                            {/* <label>Descripción del Equipo de Radio a Utilizar</label> */}
                            <Field name='DescripcionEquipoutilizar' placeholder="Descripción del Equipo de Radio a Utilizar" as='textarea' className='form-control'  autoComplete="off"/>
                            {errors.DescripcionEquipoutilizar && touched.DescripcionEquipoutilizar ? (
                                <small className='text-danger'>{errors.DescripcionEquipoutilizar}</small>
                                ) : null}
                        </div>
                        
                        {/* Boton de enviar */}
                        <ButtonSubmitForm />
                        
                    </div>
                
                </div>
            </Collapse>
            
        </>
    )
}

export const CampoForm9Validations = {
    TipoSolicitud: Yup.string().required('Campo requerido'),
    CategoriaInscripcion: Yup.string().required('Campo requerido'),
    ServicioAoperar: Yup.string().required('Campo requerido'),
    Areageografica: Yup.string().required('Campo requerido'),
    LetrasDistintivas: Yup.string().required('Campo requerido'),
    DescripcionEquipoutilizar: Yup.string().required('Campo requerido')
}

export const CampoForm9InitialValues = {
    TipoSolicitud: '',
    CategoriaInscripcion: '',
    ServicioAoperar: '',
    Areageografica: '',
    LetrasDistintivas: '',
    DescripcionEquipoutilizar: ''
}