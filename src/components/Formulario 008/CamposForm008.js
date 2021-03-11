import React from 'react'
import { Field } from 'formik'

import { 
    ReglamentosVigentes, 
    ReglamentosVigentesInitialValues 
} from '../regalmentosVigentes/ReglamentosVigentes';

export const CamposForm008 = () => {
    return (
        <>
          
            <h5 className=" navbar navbar-light bg-light px-3 mt-4">Formulario de Solicitud del Servicio</h5>

            <div className="px-3">

                <div className="form-group">
                    <h6>Modalidad de servicio de la empresa: </h6>

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

                    <h6 className="mt-3">Señalar disposiciones están siendo violadas:: </h6>
                    < ReglamentosVigentes IdFormulario='008'   />

                </div>
            </div>

         </>
    )
}


export const CamposForm8InitialValues = {
    PrestadoraTeleco: false,
    RevendedoresTeleco: false,
   ...ReglamentosVigentesInitialValues
}