import React from 'react';
import { Field } from 'formik';
import * as Yup from 'yup';

export const CamposForm009 = ({ errors, touched }) => {
    return (
        <>
             <h5 className=" navbar navbar-light bg-light px-3 mt-2">Información General</h5>

            <div className="px-3 mb-4">

                <div className="form-group row">
                
                    {/*Tipo de Solicitud----------------------------------------------------------------- */}
                    <div className='col-6'>
                        <label>Tipo de Solicitud</label>
                        <Field as="select" name="TipoSolicitud" className="form-control">
                            <option value="" disabled>Elija tipo...</option>
                            <option value="nuevaSolicitud">Nueva Solicitud</option>
                            <option value="renovacion">Renovacion</option>
                            <option value="cambioCategoria">Cambio de Categoría</option>
                            <option value="portablesHI">Portables HI</option>
                        </Field>
                        {errors.TipoSolicitud && touched.TipoSolicitud ? (
                            <small className='text-danger'>{errors.TipoSolicitud}</small>
                        ) : null}
                    </div>

                        {/*Categoría de Inscripción----------------------------------------------------------------- */}
                        <div className='col-6 mb-3'>
                        <label>Categoría de Inscripción</label>
                        <Field as="select" name="CategoriaInscripcion" className="form-control">
                            <option value="" disabled>Elija tipo...</option>
                            <option value="superior">Superior</option>
                            <option value="tecnica">Técnica</option>
                            <option value="general">General</option>
                            <option value="novicio">Novicio</option>
                        </Field>
                        {errors.CategoriaInscripcion && touched.CategoriaInscripcion ? (
                            <small className='text-danger'>{errors.CategoriaInscripcion}</small>
                        ) : null}
                    </div>

                        
                    {/*Servico a Operar--------------------------------------------------------------------------- */}
                    <div className='col-12 mb-3'>
                        <label>Servico a Operar</label>
                        <Field name='ServicioAoperar' as='textarea' className='form-control'  autoComplete="off"/>
                        {errors.ServicioAoperar && touched.ServicioAoperar ? (
                            <small className='text-danger'>{errors.ServicioAoperar}</small>
                            ) : null}
                    </div>
                        
                    {/*Área Geográfica de Operación--------------------------------------------------------------------------- */}
                    <div className='col-12 mb-3'>
                        <label>Área Geográfica de Operación</label>
                        <Field name='Areageografica' as='textarea' className='form-control'  autoComplete="off"/>
                        {errors.Areageografica && touched.Areageografica ? (
                            <small className='text-danger'>{errors.Areageografica}</small>
                            ) : null}
                    </div>

                    {/*Letras Distintivas--------------------------------------------------------------------------- */}
                    <div className='col-12 mb-3'>
                        <label>Letras Distintivas</label>
                        <Field name='LetrasDistintivas' as='textarea' className='form-control'  autoComplete="off"/>
                        {errors.LetrasDistintivas && touched.LetrasDistintivas ? (
                            <small className='text-danger'>{errors.LetrasDistintivas}</small>
                            ) : null}
                    </div>
                    {/*Descripción del Equipo de Radio a Utilizar--------------------------------------------------------------------------- */}
                    <div className='col-12'>
                        <label>Descripción del Equipo de Radio a Utilizar</label>
                        <Field name='DescripcionEquipoutilizar' as='textarea' className='form-control'  autoComplete="off"/>
                        {errors.DescripcionEquipoutilizar && touched.DescripcionEquipoutilizar ? (
                            <small className='text-danger'>{errors.DescripcionEquipoutilizar}</small>
                            ) : null}
                    </div>
                    
                    
                </div>
            
            </div>
            
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