import React from 'react'
import { Field } from 'formik';
import * as Yup from 'yup';

// EL componente DatosGenarales contiene todos los campos que son consistentes en todos los formularios,
// usando Formik y Yup, con sus respectivas validaciones para Yup y sus valores iniciales, 
//que deben ser importados en el componenete donde sean requeridos 

//Implemtentacion de importación dentro del Form del formulario a utilizar: 
//                        < DatosGenerales errors={ errors } touched={ touched } />

//Spread las validaciones y valores iniciales en sus respectivos lugares de uso:
//                        initialValues={{ ...datosGeneralesInitialValues }}
//                        const Validations = Yup.object().shape({ ...datosGeneralesvalidations });

export const DatosGenerales = ({ errors, touched  }) => {
    
    return (
        <>
          
        <h5 className=" navbar navbar-light bg-light px-3 mt-2">Información General</h5>

        <div className="px-3 mb-4">

            <div className="form-group row">

                {/*ID FORMULARIO--------------------------------------------------------------------------- */}
                <div className='col-6'>
                    <Field hidden name='IdFormulario' type='text' className='form-control'  autoComplete="off"/>
                </div>

                <h6>Informacion Solicitante</h6>

                {/*CeduLa--------------------------------------------------------------------------- */}
                <div className='col-6'>
                    <label>Cedula</label>
                    <Field name='Cedula' type='text' className='form-control'  autoComplete="off"/>
                    {errors.Cedula && touched.Cedula ? (
                        <small className='text-danger'>{errors.Cedula}</small>
                        ) : null}
                </div>

                {/*Tipo Solicitante----------------------------------------------------------------- */}
                <div className='col-6'>
                    <label>Tipo Solicitante</label>
                    <Field as="select" name="TipoSolicitante" className="form-control">
                        <option value="" disabled>Elija tipo...</option>
                        <option value="Fisica">Física</option>
                        <option value="Moral">Moral</option>
                        <option value="Estatal">Estatal</option>
                    </Field>
                    {errors.TipoSolicitante && touched.TipoSolicitante ? (
                        <small className='text-danger'>{errors.TipoSolicitante}</small>
                    ) : null}
                </div>
            </div>

            <div className="row mt-3">
                {/*NOMBRE--------------------------------------------------------------------------- */}
                <div className='col-6'>
                    <label>Nombre</label>
                    <Field name='Nombre' type='text' className='form-control' autoComplete="off"/>
                    {errors.Nombre && touched.Nombre ? (
                        <small className='text-danger'>{errors.Nombre}</small>
                        ) : null}
                </div>

                {/*APELLIDO--------------------------------------------------------------------------- */}
                <div className='col-6'>
                    <label>Apellido</label>
                    <Field name='Apellido' type='text' className='form-control'  autoComplete="off"/>
                    {errors.Apellido && touched.Apellido ? (
                        <small className='text-danger'>{errors.Apellido}</small>
                    ) : null}
                </div>
                
            </div>
                        
            <div className="form-group row mt-4">
                <h6>Dirección</h6>
                {/*PROVINCIA--------------------------------------------------------------------------- */}
                <div className='col-4'>
                    <label>Provincia</label>
                    <Field name='Provincia' type='text' className='form-control'  autoComplete="off"/>
                    {errors.Provincia && touched.Provincia ? (
                        <small className='text-danger'>{errors.Provincia}</small>
                        ) : null}
                </div>

                {/*MUNICIPIO--------------------------------------------------------------------------- */}
                <div className='col-4'>
                    <label>Municipio</label>
                    <Field name='Municipio' type='text' className='form-control' autoComplete="off"/>
                    {errors.Municipio && touched.Municipio ? (
                        <small className='text-danger'>{errors.Municipio}</small>
                        ) : null}
                </div>

                {/*SECTOR--------------------------------------------------------------------------- */}
                <div className='col-4'>
                    <label>Sector</label>
                    <Field name='Sector' type='text' className='form-control'  autoComplete="off"/>
                    {errors.Sector && touched.Sector ? (
                        <small className='text-danger'>{errors.Sector}</small>
                    ) : null}
                </div>
            </div>

            <div className="mt-4">
                {/*Calle--------------------------------------------------------------------------- */}
                <div className='col-12'>
                    <label>Calle</label>
                    <Field name='Calle' as='textarea' className='form-control'  autoComplete="off"/>
                    {errors.Calle && touched.Calle ? (
                        <small className='text-danger'>{errors.Calle}</small>
                        ) : null}
                </div>
            </div>

            <div className="form-group row mt-4">

                {/*Numero--------------------------------------------------------------------------- */}
                <div className='col-4'>
                    <label>Numero</label>
                    <Field name='Numero' type='number' className='form-control' autoComplete="off"/>
                    {errors.Numero && touched.Numero ? (
                        <small className='text-danger'>{errors.Numero}</small>
                        ) : null}
                </div>

                {/*Apartamento--------------------------------------------------------------------------- */}
                <div className='col-4'>
                    <label>Apartamento</label>
                    <Field name='Apartamento' type='number' className='form-control'  autoComplete="off"/>
                    {errors.Apartamento && touched.Apartamento ? (
                        <small className='text-danger'>{errors.Apartamento}</small>
                    ) : null}
                </div>
                {/*CodigoPostal--------------------------------------------------------------------------- */}
                <div className='col-4'>
                    <label>Codigo Postal</label>
                    <Field name='CodigoPostal' type='number' placeholder="" className='form-control'  autoComplete="off"/>
                    {errors.CodigoPostal && touched.CodigoPostal ? (
                        <small className='text-danger'>{errors.CodigoPostal}</small>
                        ) : null}
                </div>
            </div>
            
            <div className="form-group row mt-4">
                <h6>Contacto</h6>
                {/*PROVINCIA--------------------------------------------------------------------------- */}
                <div className='col-4'>
                    <label>Correo</label>
                    <Field name='Correo' type='email' className='form-control'  autoComplete="off"/>
                    {errors.Correo && touched.Correo ? (
                        <small className='text-danger'>{errors.Correo}</small>
                        ) : null}
                </div>

                {/*MUNICIPIO--------------------------------------------------------------------------- */}
                <div className='col-4'>
                    <label>Url</label>
                    <Field name='Url' type='text' className='form-control' autoComplete="off"/>
                    {errors.Url && touched.Url ? (
                        <small className='text-danger'>{errors.Url}</small>
                        ) : null}
                </div>

                {/*Telefono--------------------------------------------------------------------------- */}
                <div className='col-4'>
                    <label>Telefono</label>
                    <Field name='Telefono' type='text' className='form-control'  autoComplete="off"/>
                    {errors.Telefono && touched.Telefono ? (
                        <small className='text-danger'>{errors.Telefono}</small>
                    ) : null}
                </div>
            </div>

        </div>
        </>
    )
}


export const datosGeneralesvalidations = {
    Cedula: Yup.string()
    .min(11, 'Debe contener 11 caracteres.')
    .max(11, 'Debe contener 11 caracteres.')
    .required('Cedula requerida'),
    Nombre: Yup.string().required('Nombre requerido'),
    Apellido: Yup.string().required('Apellido requerido'),
    TipoSolicitante: Yup.string().required('Tipo requerido'),
    Provincia: Yup.string().required('Campo requerido'),
    Municipio: Yup.string().required('Campo requerido'),
    Sector: Yup.string().required('Campo requerido'),
    Calle: Yup.string().required('Campo requerido'),
    Numero: Yup.number().required('Campo requerido'),
    Apartamento: Yup.number(),
    CodigoPostal: Yup.number().required('Campo requerido'),
    Correo: Yup.string().email('Debe ingresar un correo valido').required('Campo requerido'),
    Url: Yup.string(),
    Telefono: Yup.string()
    .min(10, 'Debe contener 11 caracteres.')
    .max(10, 'Debe contener 11 caracteres.')
    .required('Telefono requerido'),

}

export const datosGeneralesInitialValues = {
    Cedula: '',
    Nombre: '',
    Apellido: '',
    TipoSolicitante:'',
    Provincia: '',
    Municipio: '',
    Sector:'',
    Calle:'',
    Numero:'',
    Apartamento:'',
    CodigoPostal:'',
    Correo:'',
    Url:'',
    Telefono:'',

}
