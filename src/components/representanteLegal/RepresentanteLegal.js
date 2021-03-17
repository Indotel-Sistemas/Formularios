import React from 'react'
import { Field } from 'formik';
import * as Yup from 'yup';


// EL componente RepresentanteLegal contiene todos los campos que son consistentes en todos los formularios,
// usando Formik y Yup, con sus respectivas validaciones para Yup y sus valores iniciales, 
//que deben ser importados en el componenete donde sean requeridos 

//Implemtentacion de importación dentro del Form del formulario a utilizar: 
//                        < RepresentanteLegal errors={ errors } touched={ touched } />

//Spread las validaciones y valores iniciales en sus respectivos lugares de uso:
//                        initialValues={{ ...representanteLegalInitialValues }}
//                        const Validations = Yup.object().shape({ ...representanteLegalValidations });

export const RepresentanteLegal = ({ errors, touched  }) => {
    return (

        <>
          
          <p className="form__title">Representante Legal</p>
          <div className="form__formtainer">
  
              <div className="form-group row">
  
                  {/*ID FORMULARIO--------------------------------------------------------------------------- */}
                  <div className='col-6'>
                      <Field hidden name='IdFormulario' type='text' className='form-control'  autoComplete="off"/>
                  </div>
  
                  <p className="form__subtitle">Datos persona jurídica que representa a la empresa u organización solicitante</p>
                  {/*CeduLa--------------------------------------------------------------------------- */}
                  <div className='col-6'>
                      {/* <label>Cedula</label> */}
                      <Field name='CedulaRepresentante' placeholder="Cedula" type='text' className='form-control'  autoComplete="off"/>
                      {errors.CedulaRepresentante && touched.CedulaRepresentante ? (
                          <small className='text-danger'>{errors.CedulaRepresentante}</small>
                          ) : null}
                  </div>
  
                  {/*RNC----------------------------------------------------------------- */}
                  <div className='col-6'>
                      {/* <label>RNC</label> */}
                      <Field name='RNCRepresentante' placeholder="RNC" type='text' className='form-control'  autoComplete="off"/>
                      {errors.RNCRepresentante && touched.RCNRepresentante ? (
                          <small className='text-danger'>{errors.RNCRepresentante}</small>
                          ) : null}
                  </div>
              </div>
  
              <div className="row mt-3">
                  {/*NOMBRE--------------------------------------------------------------------------- */}
                  <div className='col-6'>
                      {/* <label>Nombre</label> */}
                      <Field name='NombreRepresentante' placeholder="Nombre" type='text' className='form-control' autoComplete="off"/>
                      {errors.NombreRepresentante && touched.NombreRepresentante ? (
                          <small className='text-danger'>{errors.NombreRepresentante}</small>
                          ) : null}
                  </div>
  
                  {/*APELLIDO--------------------------------------------------------------------------- */}
                  <div className='col-6'>
                      {/* <label>Apellido</label> */}
                      <Field name='ApellidoRepresentante' placeholder="Apellido" type='text' className='form-control'  autoComplete="off"/>
                      {errors.ApellidoRepresentante && touched.ApellidoRepresentante ? (
                          <small className='text-danger'>{errors.ApellidoRepresentante}</small>
                      ) : null}
                  </div>
                  
              </div>
                          
              <div className="form-group row mt-4">
                  <p className="form__subtitle">Dirección</p>
                  {/*PROVINCIA--------------------------------------------------------------------------- */}
                  <div className='col-4'>
                      {/* <label>Provincia</label> */}
                      <Field name='ProvinciaRepresentante' placeholder="Provincia" type='text' className='form-control'  autoComplete="off"/>
                      {errors.ProvinciaRepresentante && touched.ProvinciaRepresentante ? (
                          <small className='text-danger'>{errors.ProvinciaRepresentante}</small>
                          ) : null}
                  </div>
  
                  {/*MUNICIPIO--------------------------------------------------------------------------- */}
                  <div className='col-4'>
                      {/* <label>Municipio</label> */}
                      <Field name='MunicipioRepresentante' placeholder="Municipio" type='text' className='form-control' autoComplete="off"/>
                      {errors.MunicipioRepresentante && touched.MunicipioRepresentante ? (
                          <small className='text-danger'>{errors.MunicipioRepresentante}</small>
                          ) : null}
                  </div>
  
                  {/*SECTOR--------------------------------------------------------------------------- */}
                  <div className='col-4'>
                      {/* <label>Sector</label> */}
                      <Field name='SectorRepresentante' placeholder="Sector" type='text' className='form-control'  autoComplete="off"/>
                      {errors.SectorRepresentante && touched.SectorRepresentante ? (
                          <small className='text-danger'>{errors.SectorRepresentante}</small>
                      ) : null}
                  </div>
              </div>
  
              <div className="mt-4">
                  {/*Calle--------------------------------------------------------------------------- */}
                  <div className='col-12'>
                      {/* <label>Calle</label> */}
                      <Field name='CalleRepresentante' placeholder="Calle" as='textarea' className='form-control'  autoComplete="off"/>
                      {errors.CalleRepresentante && touched.CalleRepresentante ? (
                          <small className='text-danger'>{errors.CalleRepresentante}</small>
                          ) : null}
                  </div>
              </div>
  
              <div className="form-group row mt-4">
  
                  {/*Numero--------------------------------------------------------------------------- */}
                  <div className='col-4'>
                      {/* <label>Numero</label> */}
                      <Field name='NumeroRepresentante' placeholder="Número" type='number' className='form-control' autoComplete="off"/>
                      {errors.NumeroRepresentante && touched.NumeroRepresentante ? (
                          <small className='text-danger'>{errors.NumeroRepresentante}</small>
                          ) : null}
                  </div>
  
                  {/*Apartamento--------------------------------------------------------------------------- */}
                  <div className='col-4'>
                      {/* <label>Apartamento</label> */}
                      <Field name='ApartamentoRepresentante' placeholder="Apartamento" type='number' className='form-control'  autoComplete="off"/>
                      {errors.ApartamentoRepresentante && touched.ApartamentoRepresentante ? (
                          <small className='text-danger'>{errors.ApartamentoRepresentante}</small>
                      ) : null}
                  </div>
                  {/*CodigoPostal--------------------------------------------------------------------------- */}
                  <div className='col-4'>
                      {/* <label>Codigo Postal</label> */}
                      <Field name='CodigoPostalRepresentante' type='number' placeholder="Código postal" className='form-control'  autoComplete="off"/>
                      {errors.CodigoPostalRepresentante && touched.CodigoPostalRepresentante ? (
                          <small className='text-danger'>{errors.CodigoPostalRepresentante}</small>
                          ) : null}
                  </div>
              </div>
              
              <div className="form-group row mt-4">
                  <p className="form__subtitle">Contacto</p>
                  {/*CORREO--------------------------------------------------------------------------- */}
                  <div className='col-4'>
                      {/* <label>Correo</label> */}
                      <Field name='CorreoElectronicoRepresentante' placeholder="Correo" type='email' className='form-control'  autoComplete="off"/>
                      {errors.CorreoElectronicoRepresentante && touched.CorreoElectronicoRepresentante ? (
                          <small className='text-danger'>{errors.CorreoElectronicoRepresentante}</small>
                          ) : null}
                  </div>
  
                  {/*URL--------------------------------------------------------------------------- */}
                  <div className='col-4'>
                      {/* <label>Url</label> */}
                      <Field name='UrlRepresentante' placeholder="Url" type='text' className='form-control' autoComplete="off"/>
                      {errors.UrlRepresentante && touched.UrlRepresentante ? (
                          <small className='text-danger'>{errors.UrlRepresentante}</small>
                          ) : null}
                  </div>
  
                  {/*TELEFONO--------------------------------------------------------------------------- */}
                  <div className='col-4'>
                      {/* <label>Telefono</label> */}
                      <Field name='TelefonoRepresentante' placeholder="Teléfono" type='text' className='form-control'  autoComplete="off"/>
                      {errors.TelefonoRepresentante && touched.TelefonoRepresentante ? (
                          <small className='text-danger'>{errors.TelefonoRepresentante}</small>
                      ) : null}
                  </div>
              </div>
  
          </div>
        </>
    )
}

export const representanteLegalValidations = {
    CedulaRepresentante: Yup.string()
    .min(11, 'Debe contener 11 caracteres.')
    .max(11, 'Debe contener 11 caracteres.')
    .required('Cedula requerida'),
    NombreRepresentante: Yup.string().required('Nombre requerido'),
    ApellidoRepresentante: Yup.string().required('Apellido requerido'),
    RNCRepresentante: Yup.string()
    .min(9, 'Debe contener 11 caracteres.')
    .max(9, 'Debe contener 11 caracteres.')
    .required('Tipo requerido'),
    ProvinciaRepresentante: Yup.string().required('Campo requerido'),
    MunicipioRepresentante: Yup.string().required('Campo requerido'),
    SectorRepresentante: Yup.string().required('Campo requerido'),
    CalleRepresentante: Yup.string().required('Campo requerido'),
    NumeroRepresentante: Yup.number().required('Campo requerido'),
    ApartamentoRepresentante: Yup.number(),
    CodigoPostalRepresentante: Yup.number().required('Campo requerido'),
    CorreoElectronicoRepresentante: Yup.string().email('Debe ingresar un correo valido').required('Campo requerido'),
    UrlRepresentante: Yup.string(),
    TelefonoRepresentante: Yup.string()
    .min(10, 'Debe contener 11 caracteres.')
    .max(10, 'Debe contener 11 caracteres.')
    .required('Telefono requerido'),

}

export const representanteLegalInitialValues = {
    CedulaRepresentante: '',
    NombreRepresentante: '',
    ApellidoRepresentante: '',
    RNCRepresentante:'',
    ProvinciaRepresentante: '',
    MunicipioRepresentante: '',
    SectorRepresentante:'',
    CalleRepresentante:'',
    NumeroRepresentante:'',
    ApartamentoRepresentante:'',
    CodigoPostalRepresentante:'',
    CorreoElectronicoRepresentante:'',
    UrlRepresentante:'',
    TelefonoRepresentante:'',

}

// export const representanteLegalInitialValues = {
//     CedulaRepresentante: '40222954869',
//     NombreRepresentante: 'Juan',
//     ApellidoRepresentante: 'Mota',
//     RNCRepresentante:'',
//     ProvinciaRepresentante: 'La Romana',
//     MunicipioRepresentante: 'Villa Hermosa',
//     SectorRepresentante:'Carrete',
//     CalleRepresentante:'Arribita',
//     NumeroRepresentante:'56',
//     ApartamentoRepresentante:'101',
//     CodigoPostalRepresentante:'20000',
//     CorreoElectronicoRepresentante:'juan@gmail.com',
//     UrlRepresentante:'',
//     TelefonoRepresentante:'8095298813',

// }


