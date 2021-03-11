import React from 'react'

import { 
    ReglamentosVigentes,
    ReglamentosVigentesInitialValues 
} from '../regalmentosVigentes/ReglamentosVigentes';

export const CamposForm003 = () => {
    return (
        <>
          
            <h5 className=" navbar navbar-light bg-light px-3 mt-4">Formulario de Solicitud del Servicio</h5>

            <div className="px-3">

                <div className="form-group">
                    <h6>Modalidad del servicio de telecomunicaciones </h6>

                    <h6 className="mt-3">Regulaciones aplicables: </h6>
                    < ReglamentosVigentes IdFormulario='003'   />

                </div>
            </div>

        </>
    )
}


export const CamposForm3InitialValues = {
    ...ReglamentosVigentesInitialValues
}
