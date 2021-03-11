import React from 'react'
import { Field } from 'formik';

import { 
    ReglamentosVigentes,
    ReglamentosVigentesInitialValues 
} from '../regalmentosVigentes/ReglamentosVigentes';

export const CamposForm001 = () => {
    return (
        <>
          
            <h5 className=" navbar navbar-light bg-light px-3 mt-4">Formulario de Solicitud del Servicio</h5>

            <div className="px-3">

                <div className="form-group">
                     <h6>Modalidad de servicio de la empresa: </h6>

                    {/*Prestadora de Telecomunicaciones--------------------------------------------------------------------------- */}
                    <div className='col-12 mx-4 mb-2'>
                        <label>Prestadora de Telecomunicaciones</label>
                        <Field type="checkbox" name="PrestadoraTeleco" className="mx-2"/>
                    </div>

                    {/*Revendedores de servicios de Telecomunicaciones------------------------------------------------------------- */}
                    <div className='col-12 mx-4 mb-2'>
                        <label>Revendedores de servicios de Telecomunicaciones</label>
                        <Field type="checkbox" name="RevendedoresTeleco" className="mx-2"/>
                    </div>

                    <h6 className="mt-3">Reglamentaciones Vigentes: </h6>
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
