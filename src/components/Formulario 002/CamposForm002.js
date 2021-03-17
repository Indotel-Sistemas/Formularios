import React from 'react'

import { 
    ReglamentosVigentes,
    ReglamentosVigentesInitialValues 
} from '../regalmentosVigentes/ReglamentosVigentes';

export const CamposForm002 = () => {
    return (
        <>
          
            <p className="form__title">Formulario de Solicitud</p>
            <div className="px-3">

                <div className="form-group">
                    <p className="form__subtitle">Modalidad del servicio de telecomunicaciones</p>

                    <p className="form__subtitle">Regulaciones aplicables: </p>
                    < ReglamentosVigentes IdFormulario='002'   />


                
                </div>
            </div>

        </>
    )
}


export const CamposForm2InitialValues = {
    ...ReglamentosVigentesInitialValues
}
