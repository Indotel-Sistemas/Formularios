import React, { useState } from 'react'
import { Collapse } from 'react-bootstrap';
import { IoIosArrowDropdown, IoIosArrowDropup } from 'react-icons/io';

import { 
    ReglamentosVigentes,
    ReglamentosVigentesInitialValues 
} from '../regalmentosVigentes/ReglamentosVigentes';

export const CamposForm005 = () => {

    const [open, setOpen] = useState(false); //Despliega y oculta la seccion del formulario
    return (
        <>
          
          <p className="form__title">
                Formulario de Solicitud

                <button  
                    className="btn btn-primary btn-sm" 
                    type="button" 
                    onClick={() => setOpen(!open)} 
                    aria-controls="example-collapse-text" 
                    aria-expanded={open}
                    style={{backgroundColor:"#002954", border:"none"}}
                >   
                {
                    open 
                    ? <h4><IoIosArrowDropup /></h4>
                    : <h4><IoIosArrowDropdown /></h4>
                }
                </button>
            </p>
            <Collapse in={open}>
                <div className="px-3">

                    <div className="form-group">
                        <p className="form__subtitle">Modalidad del servicio de telecomunicaciones </p>

                        <p className="form__subtitle">Regulaciones aplicables: </p>
                        < ReglamentosVigentes IdFormulario='005'   />

                    </div>
                </div>
            </Collapse>

        </>
    )
}



export const CamposForm5InitialValues = {
    ...ReglamentosVigentesInitialValues
}
