import { Form } from 'formik';
import React from 'react'
import { getDatosCedula } from '../../helpers/getDatosCedula';
import { DatosGenerales } from '../datosGenerales/DatosGenerales';
import { RepresentanteLegal } from '../representanteLegal/RepresentanteLegal';
import { ButtonSubmitForm } from '../ui/ButtonSubmitForm';

export const FormComponent = (
    {
        errors, 
        touched, 
        Nombre, 
        Apellido, 
        setNombre, 
        setApellido, 
        NombreRepresentante, 
        ApellidoRepresentante,
        setNombreRepresentante, 
        setApellidoRepresentante, 
        CamposEspecificos
    }) => {
    return (
        <>
            <Form 
                onChange={ async (e)=>{ if (e.target.name === 'Cedula' ){ //Captura el valor de los campos
                    if (e.target.value.length === 11){ //Si el campo Cedula es correcto

                        const datos = await getDatosCedula(e.target.value); //Obtener datos de API
                        setNombre(datos.Nombre) //Se asinan el valor obtenido a la variable correspondiente
                        setApellido(datos.Nombre2) //Se asinan el valor obtenido a la variable correspondiente

                    }else{//Si el campo Cedula es correcto se borran los campos
                        setNombre('')
                        setApellido('')
                    }
                }else if(e.target.name === 'CedulaRepresentante'){
                    if (e.target.value.length === 11){ //Si el campo Cedula es correcto

                        const datos = await getDatosCedula(e.target.value); //Obtener datos de API
        
                        setNombreRepresentante(datos.Nombre) //Se asinan el valor obtenido a la variable correspondiente
                        setApellidoRepresentante(datos.Nombre2) //Se asinan el valor obtenido a la variable correspondiente

                    }else{//Si el campo Cedula es correcto se borran los campos
                        setNombreRepresentante('')
                        setApellidoRepresentante('')
                    }
                }}}
            >   

                {/* Campos de datos generales----------------------------------------- */}
                <DatosGenerales
                    errors={ errors } 
                    touched={ touched } 
                    Nombre={ Nombre } 
                    Apellido ={ Apellido }  
                />

                {/* Campos de datos representante legal----------------------------------------- */}
                <RepresentanteLegal 
                    errors={ errors } 
                    touched={ touched } 
                    NombreRepresentante={ NombreRepresentante } 
                    ApellidoRepresentante ={ ApellidoRepresentante }  
                    setNombreRepresentante={ setNombreRepresentante }
                    setApellidoRepresentante={ setApellidoRepresentante }
                />
                    
                
                {/* Compos especificos del fomulario----------------------------------- */}
                <CamposEspecificos />

                {/* Boton de enviar */}
                <ButtonSubmitForm />
            </Form>
            
        </>
    )
}
