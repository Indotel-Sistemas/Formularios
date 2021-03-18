import React, { useState } from 'react'
import { Field } from 'formik';
import { Collapse } from 'react-bootstrap';
import { IoIosArrowDropdown, IoIosArrowDropup } from 'react-icons/io';

import { 
    ReglamentosVigentes,
    ReglamentosVigentesInitialValues 
} from '../regalmentosVigentes/ReglamentosVigentes';

import { ButtonSubmitForm } from '../ui/ButtonSubmitForm';


export const CamposForm001 = () => {

    const [open, setOpen] = useState(false); //Despliega y oculta la seccion del fomrulario

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
                        <p className="form__subtitle">Modalidad de servicio de la empresa:</p>
                        {/*Prestadora de Telecomunicaciones--------------------------------------------------------------------------- */}
                        <div className='col-11 mx-4 mb-2 d-flex align-items-center'>
                            <Field type="checkbox" name="PrestadoraTeleco" className="mx-2"/>
                            <label>Prestadora de Telecomunicaciones</label>
                        </div>

                        {/*Revendedores de servicios de Telecomunicaciones------------------------------------------------------------- */}
                        <div className='col-11 mx-4 mb-2 d-flex align-items-center'>
                            <Field type="checkbox" name="RevendedoresTeleco" className="mx-2"/>
                            <label>Revendedores de servicios de Telecomunicaciones</label>
                        </div>

                        <p className="form__subtitle">Reglamentaciones Vigentes:</p>
                        < ReglamentosVigentes IdFormulario='001'  />



                    </div>
                    
                    {/* Boton de enviar */}
                    <ButtonSubmitForm />
                </div>
            </Collapse>
        </>
    )
}

export const CamposForm1InitialValues = {
    PrestadoraTeleco: false,
    RevendedoresTeleco: false,
    ...ReglamentosVigentesInitialValues
}
