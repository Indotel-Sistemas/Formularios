import React from 'react'
import { Field } from 'formik';

import { 
    ReglamentosVigentes,
    ReglamentosVigentesInitialValues 
} from '../regalmentosVigentes/ReglamentosVigentes';

export const CamposForm001 = () => {
    return (
        <>
          
            <p className="form__title">Formulario de Solicitud</p>
            <div className="px-3">

                <div className="form-group">
                     <p className="form__subtitle">Modalidad de servicio de la empresa:</p>
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

                    <p className="form__subtitle">Reglamentaciones Vigentes:</p>
                    < ReglamentosVigentes IdFormulario='001'  />


                
                </div>
            </div>

        </>
    )
}

export const CamposForm1InitialValues = {
    PrestadoraTeleco: false,
    RevendedoresTeleco: false,
    ...ReglamentosVigentesInitialValues
}
