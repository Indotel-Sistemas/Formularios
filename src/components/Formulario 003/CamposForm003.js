import React from 'react'

import { 
    ReglamentosVigentes,
    ReglamentosVigentesInitialValues 
} from '../regalmentosVigentes/ReglamentosVigentes';

export const CamposForm003 = () => {
    return (
        <>
          
            <p className="form__title">Formulario de Solicitud</p>
            <div className="px-3">

                <div className="form-group">
                <p className="form__subtitle">Modalidad del servicio de telecomunicaciones </p>

                <p className="form__subtitle">Regulaciones aplicables: </p>
                    < ReglamentosVigentes IdFormulario='003'   />

                </div>
            </div>

        </>
    )
}


export const CamposForm3InitialValues = {
    ...ReglamentosVigentesInitialValues
}
