import { Form } from 'formik';
import React, { useContext } from 'react'
import { LocalidadContext } from '../../context/LocalidadContext';
import { getDatosCedula } from '../../helpers/getDatosCedula';
import { getMunicipios, getSectores } from '../../helpers/getLocalidad';
import { getRNC } from '../../helpers/getRNCCedula';
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

        const {setLocalidades} = useContext(LocalidadContext);

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
                }else if(e.target.name === 'Provincia'){
                    const municipios =  await getMunicipios(e.target.value);
                    setLocalidades(localidades =>({...localidades, Sectores: []}));
                    setLocalidades(localidades =>({...localidades, Municipios: municipios}));

                }else if(e.target.name === 'Municipio'){
                  const sectores =  await getSectores(e.target.value);
                  setLocalidades(localidades =>({...localidades, Sectores: sectores}));

                }else if(e.target.name === 'CedulaRepresentante'){
                    if (e.target.value.length === 11){ //Si el campo Cedula es correcto
                        const datos = await getDatosCedula(e.target.value); //Obtener datos de API
        
                        setNombreRepresentante(datos.Nombre) //Se asinan el valor obtenido a la variable correspondiente
                        setApellidoRepresentante(datos.Nombre2) //Se asinan el valor obtenido a la variable correspondiente
                    }else{//Si el campo Cedula es correcto se borran los campos
                        setNombreRepresentante('')
                        setApellidoRepresentante('')
                    }
                }else if(e.target.name === 'RNCRepresentante'){
                    if (e.target.value.length === 11 || (e.target.value.length === 9)){ //Si el campo Cedula es correcto
                        const datos = await getRNC(e.target.value); //Obtener datos de API
                        setNombreRepresentante(datos.Nombre) //Se asinan el valor obtenido a la variable correspondiente
                    }else{//Si el campo Cedula es correcto se borran los campos
                        setNombreRepresentante('')
                    }
                } else if(e.target.name === 'ProvinciaRepresentante'){
                    const municipios =  await getMunicipios(e.target.value);
                    setLocalidades(localidades =>({...localidades, SectoresRepresentante: []}));
                    setLocalidades(localidades =>({...localidades, MunicipiosRepresentante: municipios}));

                }else if(e.target.name === 'MunicipioRepresentante'){
                  const sectores =  await getSectores(e.target.value);
                  console.log(sectores)
                  setLocalidades(localidades =>({...localidades, SectoresRepresentante: sectores}));

                }
            }}
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
