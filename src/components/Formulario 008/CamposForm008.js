import React from 'react'
import { Field } from 'formik'
import * as Yup from 'yup';

import { 
    ReglamentosVigentes, 
    ReglamentosVigentesInitialValues 
} from '../regalmentosVigentes/ReglamentosVigentes';

export const CamposForm008 = ({ errors, touched }) => {
    return (
        <>
          
            <p className="form__title">Formulario de Solicitud</p>
            <div className="px-3">

                <div className="form-group">
                <p className="form__subtitle">Origen del servicio compartido que produjo la controversia o diferendo2 que afecta el mercado de las Telecomunicaciones: </p>

                    {/*Tipo Solicitante----------------------------------------------------------------- */}
                    <div className='col-4 mb-2'>
                        <Field as="select" name="OrigenServicioControversia" className="form-control">
                            <option value="" disabled>Tipo Solicitante...</option>
                            <option value={1}>Contractual</option>
                            <option value={2}>No Contractual</option>
                        </Field>
                        {errors.OrigenServicioControversia && touched.OrigenServicioControversia ? (
                            <small className='text-danger'>{errors.OrigenServicioControversia}</small>
                        ) : null}
                    </div>
  
                
                    <p className="form__subtitle">Modalidad de servicio de la empresa: </p>

                    {/*Prestadora de Telecomunicaciones--------------------------------------------------------------------------- */}
                    <div className='col-12 mx-4 mb-2 d-flex align-items-center'>
                        <Field type="checkbox" name="PrestadoraTeleco" className="mx-2"/>
                        <label>Prestadora de Telecomunicaciones</label>
                    </div>

                    {/*Revendedores de servicios de Telecomunicaciones------------------------------------------------------------- */}
                    <div className='col-12 mx-4 mb-2 d-flex align-items-center'>
                        <Field type="checkbox" name="RevendedoresTeleco" className="mx-2"/>
                        <label>Revendedores de servicios de Telecomunicaciones</label>
                    </div>

                    <p className="form__subtitle">Señalar disposiciones están siendo violadas:: </p>
                    < ReglamentosVigentes IdFormulario='008'   />

                </div>
            </div>

         </>
    )
}


export const CamposForm8InitialValues = {
    OrigenServicioControversia: '',
    PrestadoraTeleco: false,
    RevendedoresTeleco: false,
   ...ReglamentosVigentesInitialValues
}


export const CamposForm8Validations = {
    
    OrigenServicioControversia: Yup.number().required('Campo requerido'),
}