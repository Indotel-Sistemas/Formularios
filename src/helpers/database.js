import Axios from 'axios'; //Libreria para el manejo de Requests HTTP

// FORMULARIO 001-------------------------------------------------------------------------------
export const insertarDatosForm001 = async (datos) => {
    
    //Reorganizacion de datos de formulario
    const data = {
        "Datosgenerales":{
           "DatosFormulario":{
              "IdFormulario":"001"
           },
           "DatosSolicitante":{
              "Nombre":datos.Nombre,
              "Apellido":datos.Apellido,
              "RNC":"",
              "Cedula":datos.Cedula,
              "TipoSolicitante":datos.TipoSolicitante,
              "Direccion":{
                 "Provincia":datos.Provincia,
                 "Municipio":datos.Municipio,
                 "Sector":datos.Sector,
                 "Calle":datos.Calle,
                 "Numero":datos.Numero,
                 "Apartamento":datos.Apartamento,
                 "CodigoPostal":datos.CodigoPostal
              },
              "Contacto":{
                 "CorreoElectronico":datos.CorreoElectronico,
                 "Url":datos.Url,
                 "Telefono":datos.Telefono
              }
           },
           "DatosRepresentanteLegal":{
              "Nombre":datos.NombreRepresentante,
              "Apellido":datos.ApellidoRepresentante,
              "RNC":datos.RNCRepresentante,
              "Cedula":datos.CedulaRepresentante,
              "Direccion":{
                 "Provincia":datos.ProvinciaRepresentante,
                 "Municipio":datos.MunicipioRepresentante,
                 "Sector":datos.SectorRepresentante,
                 "Calle":datos.CalleRepresentante,
                 "Numero":datos.NumeroRepresentante,
                 "Apartamento":datos.ApartamentoRepresentante,
                 "CodigoPostal":datos.CodigoPostalRepresentante
              },
              "Contacto":{
                 "Telefono":datos.TelefonoRepresentante,
                 "CorreoElectronico":datos.CorreoElectronicoRepresentante,
                 "Url":datos.UrlRepresentante
              }
           }
        },
        "ModalidadServicio":{
           "PrestadoraTeleco":datos.PrestadoraTeleco,
           "RevendedoresTeleco":datos.RevendedoresTeleco
        },
        "ReglamentosVigentes":{
           "LeyTeleco":datos.LeyTeleco,
           "ReglamentoAutorizaciones":datos.ReglamentoAutorizaciones,
           "Reglamentofrecuencias":datos.Reglamentofrecuencias,
           "ReglamentoGeneralEspectro":datos.ReglamentoGeneralEspectro,
           "ReglamentoReventaPublicos":datos.ReglamentoReventaPublicos,
           "ReglamentoTvSubscripcion":datos.ReglamentoTvSubscripcion,
           "ReglamentoGeneralInterconexion":datos.ReglamentoGeneralInterconexion,
           "ReglamentoNumeracion":datos.ReglamentoNumeracion,
           "ReglamentoLeyLibreCompetencia":datos.ReglamentoLeyLibreCOmpetencia,
           "OtroReglamento":datos.OtroReglamento
        }
    }

    //Ingresando los datos del solicitante-------------------------------------------

    Axios.post(`http://localhost:5000/usuarios/Solicitante/add`,{
        ...data.Datosgenerales.DatosSolicitante
    }).then(response=>{

        const { SolicitanteID } = response.data; //Se obtiene ID del Solicitante
        

        
        //Ingresando los datos del representante Legal-------------------------------------------

        Axios.post(`http://localhost:5000/usuarios/Representante/add`,{
            ...data.Datosgenerales.DatosRepresentanteLegal
        }).then(response=>{

            const { RepresentanteID } = response.data; //Se obtiene ID del Solicitante
            

                    
            //REGISTRANDO FORMULARIO------------------------------------------
            Axios.post(`http://localhost:5000/usuarios/Formulario/add`,{
                ...data.Datosgenerales.DatosFormulario,
                SolicitanteID,
                RepresentanteID

            }).then(response=>{

                const { FormularioID } = response.data; //Se obtiene ID del Formulario

                

                //REGISTRANDO REGLAMENTOS VIGENTES------------------------------------------
                Axios.post(`http://localhost:5000/usuarios/Reglamentos/add`,{
                    ...data.ReglamentosVigentes,
                    FormularioID
                }).then(response=>{
                    // const { IdRegistro } = response.data; //Se obtiene ID del Formulario
                })


                //REGISTRANDO Modalidada Servicio------------------------------------------
                Axios.post(`http://localhost:5000/usuarios/ModalidadServicio/add`,{
                    ...data.ModalidadServicio,
                    FormularioID
                }).then(response=>{
                    // const { IdRegistro } = response.data; //Se obtiene ID del Formulario
                })
            })
        })

    })

 

}

// FORMULARIO 002-------------------------------------------------------------------------------
export const insertarDatosForm002 = async (datos) => {
    //Reorganizacion de datos de formulario
    const data = {
        "Datosgenerales":{
           "DatosFormulario":{
              "IdFormulario":"002"
           },
           "DatosSolicitante":{
              "Nombre":datos.Nombre,
              "Apellido":datos.Apellido,
              "RNC":"",
              "Cedula":datos.Cedula,
              "TipoSolicitante":datos.TipoSolicitante,
              "Direccion":{
                 "Provincia":datos.Provincia,
                 "Municipio":datos.Municipio,
                 "Sector":datos.Sector,
                 "Calle":datos.Calle,
                 "Numero":datos.Numero,
                 "Apartamento":datos.Apartamento,
                 "CodigoPostal":datos.CodigoPostal
              },
              "Contacto":{
                 "CorreoElectronico":datos.CorreoElectronico,
                 "Url":datos.Url,
                 "Telefono":datos.Telefono
              }
           },
           "DatosRepresentanteLegal":{
              "Nombre":datos.NombreRepresentante,
              "Apellido":datos.ApellidoRepresentante,
              "RNC":datos.RNCRepresentante,
              "Cedula":datos.CedulaRepresentante,
              "Direccion":{
                 "Provincia":datos.ProvinciaRepresentante,
                 "Municipio":datos.MunicipioRepresentante,
                 "Sector":datos.SectorRepresentante,
                 "Calle":datos.CalleRepresentante,
                 "Numero":datos.NumeroRepresentante,
                 "Apartamento":datos.ApartamentoRepresentante,
                 "CodigoPostal":datos.CodigoPostalRepresentante
              },
              "Contacto":{
                 "Telefono":datos.TelefonoRepresentante,
                 "CorreoElectronico":datos.CorreoElectronicoRepresentante,
                 "Url":datos.UrlRepresentante
              }
           }
        },
        "ModalidadServicio":{
           "PrestadoraTeleco":datos.PrestadoraTeleco,
           "RevendedoresTeleco":datos.RevendedoresTeleco
        },
        "ReglamentosVigentes":{
           "LeyTeleco":datos.LeyTeleco,
           "ReglamentoAutorizaciones":datos.ReglamentoAutorizaciones,
           "Reglamentofrecuencias":datos.Reglamentofrecuencias,
           "ReglamentoGeneralEspectro":datos.ReglamentoGeneralEspectro,
           "ReglamentoReventaPublicos":datos.ReglamentoReventaPublicos,
           "ReglamentoTvSubscripcion":datos.ReglamentoTvSubscripcion,
           "ReglamentoGeneralInterconexion":datos.ReglamentoGeneralInterconexion,
           "ReglamentoNumeracion":datos.ReglamentoNumeracion,
           "ReglamentoLeyLibreCompetencia":datos.ReglamentoLeyLibreCOmpetencia,
           "OtroReglamento":datos.OtroReglamento
        }
    }


    //Ingresando los datos del solicitante-------------------------------------------

    Axios.post(`http://localhost:5000/usuarios/Solicitante/add`,{
        ...data.Datosgenerales.DatosSolicitante
    }).then(response=>{

        const { SolicitanteID } = response.data; //Se obtiene ID del Solicitante
        
        //Ingresando los datos del representante Legal-------------------------------------------

        Axios.post(`http://localhost:5000/usuarios/Representante/add`,{
            ...data.Datosgenerales.DatosRepresentanteLegal
        }).then(response=>{

            const { RepresentanteID } = response.data; //Se obtiene ID del Solicitante
            

                    
            //REGISTRANDO FORMULARIO------------------------------------------
            Axios.post(`http://localhost:5000/usuarios/Formulario/add`,{
                ...data.Datosgenerales.DatosFormulario,
                SolicitanteID,
                RepresentanteID

            }).then(response=>{

                const { FormularioID } = response.data; //Se obtiene ID del Formulario

                

                //REGISTRANDO REGLAMENTOS VIGENTES------------------------------------------
                Axios.post(`http://localhost:5000/usuarios/Reglamentos/add`,{
                    ...data.ReglamentosVigentes,
                    FormularioID
                }).then(response=>{
                    // const { IdRegistro } = response.data; //Se obtiene ID del Formulario
                })
            })
        })

    })

 

}

// FORMULARIO 003-------------------------------------------------------------------------------
export const insertarDatosForm003 = async (datos) => {
    //Reorganizacion de datos de formulario
    const data = {
        "Datosgenerales":{
           "DatosFormulario":{
              "IdFormulario":"003"
           },
           "DatosSolicitante":{
              "Nombre":datos.Nombre,
              "Apellido":datos.Apellido,
              "RNC":"",
              "Cedula":datos.Cedula,
              "TipoSolicitante":datos.TipoSolicitante,
              "Direccion":{
                 "Provincia":datos.Provincia,
                 "Municipio":datos.Municipio,
                 "Sector":datos.Sector,
                 "Calle":datos.Calle,
                 "Numero":datos.Numero,
                 "Apartamento":datos.Apartamento,
                 "CodigoPostal":datos.CodigoPostal
              },
              "Contacto":{
                 "CorreoElectronico":datos.CorreoElectronico,
                 "Url":datos.Url,
                 "Telefono":datos.Telefono
              }
           },
           "DatosRepresentanteLegal":{
              "Nombre":datos.NombreRepresentante,
              "Apellido":datos.ApellidoRepresentante,
              "RNC":datos.RNCRepresentante,
              "Cedula":datos.CedulaRepresentante,
              "Direccion":{
                 "Provincia":datos.ProvinciaRepresentante,
                 "Municipio":datos.MunicipioRepresentante,
                 "Sector":datos.SectorRepresentante,
                 "Calle":datos.CalleRepresentante,
                 "Numero":datos.NumeroRepresentante,
                 "Apartamento":datos.ApartamentoRepresentante,
                 "CodigoPostal":datos.CodigoPostalRepresentante
              },
              "Contacto":{
                 "Telefono":datos.TelefonoRepresentante,
                 "CorreoElectronico":datos.CorreoElectronicoRepresentante,
                 "Url":datos.UrlRepresentante
              }
           }
        },
        "ModalidadServicio":{
           "PrestadoraTeleco":datos.PrestadoraTeleco,
           "RevendedoresTeleco":datos.RevendedoresTeleco
        },
        "ReglamentosVigentes":{
           "LeyTeleco":datos.LeyTeleco,
           "ReglamentoAutorizaciones":datos.ReglamentoAutorizaciones,
           "Reglamentofrecuencias":datos.Reglamentofrecuencias,
           "ReglamentoGeneralEspectro":datos.ReglamentoGeneralEspectro,
           "ReglamentoReventaPublicos":datos.ReglamentoReventaPublicos,
           "ReglamentoTvSubscripcion":datos.ReglamentoTvSubscripcion,
           "ReglamentoGeneralInterconexion":datos.ReglamentoGeneralInterconexion,
           "ReglamentoNumeracion":datos.ReglamentoNumeracion,
           "ReglamentoLeyLibreCompetencia":datos.ReglamentoLeyLibreCOmpetencia,
           "OtroReglamento":datos.OtroReglamento
        }
    }


    //Ingresando los datos del solicitante-------------------------------------------

    Axios.post(`http://localhost:5000/usuarios/Solicitante/add`,{
        ...data.Datosgenerales.DatosSolicitante
    }).then(response=>{

        const { SolicitanteID } = response.data; //Se obtiene ID del Solicitante
        
        //Ingresando los datos del representante Legal-------------------------------------------

        Axios.post(`http://localhost:5000/usuarios/Representante/add`,{
            ...data.Datosgenerales.DatosRepresentanteLegal
        }).then(response=>{

            const { RepresentanteID } = response.data; //Se obtiene ID del Solicitante
            

                    
            //REGISTRANDO FORMULARIO------------------------------------------
            Axios.post(`http://localhost:5000/usuarios/Formulario/add`,{
                ...data.Datosgenerales.DatosFormulario,
                SolicitanteID,
                RepresentanteID

            }).then(response=>{

                const { FormularioID } = response.data; //Se obtiene ID del Formulario

                

                //REGISTRANDO REGLAMENTOS VIGENTES------------------------------------------
                Axios.post(`http://localhost:5000/usuarios/Reglamentos/add`,{
                    ...data.ReglamentosVigentes,
                    FormularioID
                }).then(response=>{
                    // const { IdRegistro } = response.data; //Se obtiene ID del Formulario
                })
            })
        })

    })

 

}

// FORMULARIO 004-------------------------------------------------------------------------------
export const insertarDatosForm004 = async (datos) => {
    //Reorganizacion de datos de formulario
    const data = {
        "Datosgenerales":{
           "DatosFormulario":{
              "IdFormulario":"004"
           },
           "DatosSolicitante":{
              "Nombre":datos.Nombre,
              "Apellido":datos.Apellido,
              "RNC":"",
              "Cedula":datos.Cedula,
              "TipoSolicitante":datos.TipoSolicitante,
              "Direccion":{
                 "Provincia":datos.Provincia,
                 "Municipio":datos.Municipio,
                 "Sector":datos.Sector,
                 "Calle":datos.Calle,
                 "Numero":datos.Numero,
                 "Apartamento":datos.Apartamento,
                 "CodigoPostal":datos.CodigoPostal
              },
              "Contacto":{
                 "CorreoElectronico":datos.CorreoElectronico,
                 "Url":datos.Url,
                 "Telefono":datos.Telefono
              }
           },
           "DatosRepresentanteLegal":{
              "Nombre":datos.NombreRepresentante,
              "Apellido":datos.ApellidoRepresentante,
              "RNC":datos.RNCRepresentante,
              "Cedula":datos.CedulaRepresentante,
              "Direccion":{
                 "Provincia":datos.ProvinciaRepresentante,
                 "Municipio":datos.MunicipioRepresentante,
                 "Sector":datos.SectorRepresentante,
                 "Calle":datos.CalleRepresentante,
                 "Numero":datos.NumeroRepresentante,
                 "Apartamento":datos.ApartamentoRepresentante,
                 "CodigoPostal":datos.CodigoPostalRepresentante
              },
              "Contacto":{
                 "Telefono":datos.TelefonoRepresentante,
                 "CorreoElectronico":datos.CorreoElectronicoRepresentante,
                 "Url":datos.UrlRepresentante
              }
           }
        },
        "NumeroNXX":{
            "NumNxxAsignados":datos.NumNxxAsignados,
            "NumNxxDisponible":datos.NumNxxDisponible,
            "NumNxxSolicitados":datos.NumNxxSolicitados
         },
        "ReglamentosVigentes":{
           "LeyTeleco":datos.LeyTeleco,
           "ReglamentoAutorizaciones":datos.ReglamentoAutorizaciones,
           "Reglamentofrecuencias":datos.Reglamentofrecuencias,
           "ReglamentoGeneralEspectro":datos.ReglamentoGeneralEspectro,
           "ReglamentoReventaPublicos":datos.ReglamentoReventaPublicos,
           "ReglamentoTvSubscripcion":datos.ReglamentoTvSubscripcion,
           "ReglamentoGeneralInterconexion":datos.ReglamentoGeneralInterconexion,
           "ReglamentoNumeracion":datos.ReglamentoNumeracion,
           "ReglamentoLeyLibreCompetencia":datos.ReglamentoLeyLibreCOmpetencia,
           "OtroReglamento":datos.OtroReglamento
        }
    }


    //Ingresando los datos del solicitante-------------------------------------------

    Axios.post(`http://localhost:5000/usuarios/Solicitante/add`,{
        ...data.Datosgenerales.DatosSolicitante
    }).then(response=>{

        const { SolicitanteID } = response.data; //Se obtiene ID del Solicitante
        
        //Ingresando los datos del representante Legal-------------------------------------------

        Axios.post(`http://localhost:5000/usuarios/Representante/add`,{
            ...data.Datosgenerales.DatosRepresentanteLegal
        }).then(response=>{

            const { RepresentanteID } = response.data; //Se obtiene ID del Solicitante
            

                    
            //REGISTRANDO FORMULARIO------------------------------------------
            Axios.post(`http://localhost:5000/usuarios/Formulario/add`,{
                ...data.Datosgenerales.DatosFormulario,
                SolicitanteID,
                RepresentanteID

            }).then(response=>{

                const { FormularioID } = response.data; //Se obtiene ID del Formulario


                //REGISTRANDO REGLAMENTOS VIGENTES------------------------------------------
                Axios.post(`http://localhost:5000/usuarios/Reglamentos/add`,{
                    ...data.ReglamentosVigentes,
                    FormularioID
                }).then(response=>{
                    // const { IdRegistro } = response.data; //Se obtiene ID del Formulario
                })


                //REGISTRANDO FormularioNXX------------------------------------------
                Axios.post(`http://localhost:5000/usuarios/FormularioNXX/add`,{
                    ...data.NumeroNXX,
                    FormularioID
                }).then(response=>{
                    // const { IdRegistro } = response.data; //Se obtiene ID del Formulario
                })
            })
        })

    })

 

}

// FORMULARIO 005-------------------------------------------------------------------------------
export const insertarDatosForm005 = async (datos) => {
    //Reorganizacion de datos de formulario
    const data = {
        "Datosgenerales":{
           "DatosFormulario":{
              "IdFormulario":"005"
           },
           "DatosSolicitante":{
              "Nombre":datos.Nombre,
              "Apellido":datos.Apellido,
              "RNC":"",
              "Cedula":datos.Cedula,
              "TipoSolicitante":datos.TipoSolicitante,
              "Direccion":{
                 "Provincia":datos.Provincia,
                 "Municipio":datos.Municipio,
                 "Sector":datos.Sector,
                 "Calle":datos.Calle,
                 "Numero":datos.Numero,
                 "Apartamento":datos.Apartamento,
                 "CodigoPostal":datos.CodigoPostal
              },
              "Contacto":{
                 "CorreoElectronico":datos.CorreoElectronico,
                 "Url":datos.Url,
                 "Telefono":datos.Telefono
              }
           },
           "DatosRepresentanteLegal":{
              "Nombre":datos.NombreRepresentante,
              "Apellido":datos.ApellidoRepresentante,
              "RNC":datos.RNCRepresentante,
              "Cedula":datos.CedulaRepresentante,
              "Direccion":{
                 "Provincia":datos.ProvinciaRepresentante,
                 "Municipio":datos.MunicipioRepresentante,
                 "Sector":datos.SectorRepresentante,
                 "Calle":datos.CalleRepresentante,
                 "Numero":datos.NumeroRepresentante,
                 "Apartamento":datos.ApartamentoRepresentante,
                 "CodigoPostal":datos.CodigoPostalRepresentante
              },
              "Contacto":{
                 "Telefono":datos.TelefonoRepresentante,
                 "CorreoElectronico":datos.CorreoElectronicoRepresentante,
                 "Url":datos.UrlRepresentante
              }
           }
        },
        "ModalidadServicio":{
           "PrestadoraTeleco":datos.PrestadoraTeleco,
           "RevendedoresTeleco":datos.RevendedoresTeleco
        },
        "ReglamentosVigentes":{
           "LeyTeleco":datos.LeyTeleco,
           "ReglamentoAutorizaciones":datos.ReglamentoAutorizaciones,
           "Reglamentofrecuencias":datos.Reglamentofrecuencias,
           "ReglamentoGeneralEspectro":datos.ReglamentoGeneralEspectro,
           "ReglamentoReventaPublicos":datos.ReglamentoReventaPublicos,
           "ReglamentoTvSubscripcion":datos.ReglamentoTvSubscripcion,
           "ReglamentoGeneralInterconexion":datos.ReglamentoGeneralInterconexion,
           "ReglamentoNumeracion":datos.ReglamentoNumeracion,
           "ReglamentoLeyLibreCompetencia":datos.ReglamentoLeyLibreCOmpetencia,
           "OtroReglamento":datos.OtroReglamento
        }
    }


    //Ingresando los datos del solicitante-------------------------------------------

    Axios.post(`http://localhost:5000/usuarios/Solicitante/add`,{
        ...data.Datosgenerales.DatosSolicitante
    }).then(response=>{

        const { SolicitanteID } = response.data; //Se obtiene ID del Solicitante
        
        //Ingresando los datos del representante Legal-------------------------------------------

        Axios.post(`http://localhost:5000/usuarios/Representante/add`,{
            ...data.Datosgenerales.DatosRepresentanteLegal
        }).then(response=>{

            const { RepresentanteID } = response.data; //Se obtiene ID del Solicitante
            

                    
            //REGISTRANDO FORMULARIO------------------------------------------
            Axios.post(`http://localhost:5000/usuarios/Formulario/add`,{
                ...data.Datosgenerales.DatosFormulario,
                SolicitanteID,
                RepresentanteID

            }).then(response=>{

                const { FormularioID } = response.data; //Se obtiene ID del Formulario

                

                //REGISTRANDO REGLAMENTOS VIGENTES------------------------------------------
                Axios.post(`http://localhost:5000/usuarios/Reglamentos/add`,{
                    ...data.ReglamentosVigentes,
                    FormularioID
                }).then(response=>{
                    // const { IdRegistro } = response.data; //Se obtiene ID del Formulario
                })
            })
        })

    })

 

}

// FORMULARIO 006-------------------------------------------------------------------------------
export const insertarDatosForm006 = async (datos) => {
    //Reorganizacion de datos de formulario
    const data = {
        "Datosgenerales":{
           "DatosFormulario":{
              "IdFormulario":"006"
           },
           "DatosSolicitante":{
              "Nombre":datos.Nombre,
              "Apellido":datos.Apellido,
              "RNC":"",
              "Cedula":datos.Cedula,
              "TipoSolicitante":datos.TipoSolicitante,
              "Direccion":{
                 "Provincia":datos.Provincia,
                 "Municipio":datos.Municipio,
                 "Sector":datos.Sector,
                 "Calle":datos.Calle,
                 "Numero":datos.Numero,
                 "Apartamento":datos.Apartamento,
                 "CodigoPostal":datos.CodigoPostal
              },
              "Contacto":{
                 "CorreoElectronico":datos.CorreoElectronico,
                 "Url":datos.Url,
                 "Telefono":datos.Telefono
              }
           },
           "DatosRepresentanteLegal":{
              "Nombre":datos.NombreRepresentante,
              "Apellido":datos.ApellidoRepresentante,
              "RNC":datos.RNCRepresentante,
              "Cedula":datos.CedulaRepresentante,
              "Direccion":{
                 "Provincia":datos.ProvinciaRepresentante,
                 "Municipio":datos.MunicipioRepresentante,
                 "Sector":datos.SectorRepresentante,
                 "Calle":datos.CalleRepresentante,
                 "Numero":datos.NumeroRepresentante,
                 "Apartamento":datos.ApartamentoRepresentante,
                 "CodigoPostal":datos.CodigoPostalRepresentante
              },
              "Contacto":{
                 "Telefono":datos.TelefonoRepresentante,
                 "CorreoElectronico":datos.CorreoElectronicoRepresentante,
                 "Url":datos.UrlRepresentante
              }
           }
        },
        "ModalidadServicio":{
           "PrestadoraTeleco":datos.PrestadoraTeleco,
           "RevendedoresTeleco":datos.RevendedoresTeleco
        },
        "ReglamentosVigentes":{
           "LeyTeleco":datos.LeyTeleco,
           "ReglamentoAutorizaciones":datos.ReglamentoAutorizaciones,
           "Reglamentofrecuencias":datos.Reglamentofrecuencias,
           "ReglamentoGeneralEspectro":datos.ReglamentoGeneralEspectro,
           "ReglamentoReventaPublicos":datos.ReglamentoReventaPublicos,
           "ReglamentoTvSubscripcion":datos.ReglamentoTvSubscripcion,
           "ReglamentoGeneralInterconexion":datos.ReglamentoGeneralInterconexion,
           "ReglamentoNumeracion":datos.ReglamentoNumeracion,
           "ReglamentoLeyLibreCompetencia":datos.ReglamentoLeyLibreCOmpetencia,
           "OtroReglamento":datos.OtroReglamento
        }
    }


    //Ingresando los datos del solicitante-------------------------------------------

    Axios.post(`http://localhost:5000/usuarios/Solicitante/add`,{
        ...data.Datosgenerales.DatosSolicitante
    }).then(response=>{

        const { SolicitanteID } = response.data; //Se obtiene ID del Solicitante
        

        
        //Ingresando los datos del representante Legal-------------------------------------------

        Axios.post(`http://localhost:5000/usuarios/Representante/add`,{
            ...data.Datosgenerales.DatosRepresentanteLegal
        }).then(response=>{

            const { RepresentanteID } = response.data; //Se obtiene ID del Solicitante
            

                    
            //REGISTRANDO FORMULARIO------------------------------------------
            Axios.post(`http://localhost:5000/usuarios/Formulario/add`,{
                ...data.Datosgenerales.DatosFormulario,
                SolicitanteID,
                RepresentanteID

            }).then(response=>{

                const { FormularioID } = response.data; //Se obtiene ID del Formulario

                

                //REGISTRANDO REGLAMENTOS VIGENTES------------------------------------------
                Axios.post(`http://localhost:5000/usuarios/Reglamentos/add`,{
                    ...data.ReglamentosVigentes,
                    FormularioID
                }).then(response=>{
                    // const { IdRegistro } = response.data; //Se obtiene ID del Formulario
                })


                //REGISTRANDO Modalidada Servicio------------------------------------------
                Axios.post(`http://localhost:5000/usuarios/ModalidadServicio/add`,{
                    ...data.ModalidadServicio,
                    FormularioID
                }).then(response=>{
                    // const { IdRegistro } = response.data; //Se obtiene ID del Formulario
                })
            })
        })

    })

 

}


// FORMULARIO 007-------------------------------------------------------------------------------
export const insertarDatosForm007 = async (datos) => {
    //Reorganizacion de datos de formulario
    const data = {
        "Datosgenerales":{
           "DatosFormulario":{
              "IdFormulario":"007"
           },
           "DatosSolicitante":{
              "Nombre":datos.Nombre,
              "Apellido":datos.Apellido,
              "RNC":"",
              "Cedula":datos.Cedula,
              "TipoSolicitante":datos.TipoSolicitante,
              "Direccion":{
                 "Provincia":datos.Provincia,
                 "Municipio":datos.Municipio,
                 "Sector":datos.Sector,
                 "Calle":datos.Calle,
                 "Numero":datos.Numero,
                 "Apartamento":datos.Apartamento,
                 "CodigoPostal":datos.CodigoPostal
              },
              "Contacto":{
                 "CorreoElectronico":datos.CorreoElectronico,
                 "Url":datos.Url,
                 "Telefono":datos.Telefono
              }
           },
           "DatosRepresentanteLegal":{
              "Nombre":datos.NombreRepresentante,
              "Apellido":datos.ApellidoRepresentante,
              "RNC":datos.RNCRepresentante,
              "Cedula":datos.CedulaRepresentante,
              "Direccion":{
                 "Provincia":datos.ProvinciaRepresentante,
                 "Municipio":datos.MunicipioRepresentante,
                 "Sector":datos.SectorRepresentante,
                 "Calle":datos.CalleRepresentante,
                 "Numero":datos.NumeroRepresentante,
                 "Apartamento":datos.ApartamentoRepresentante,
                 "CodigoPostal":datos.CodigoPostalRepresentante
              },
              "Contacto":{
                 "Telefono":datos.TelefonoRepresentante,
                 "CorreoElectronico":datos.CorreoElectronicoRepresentante,
                 "Url":datos.UrlRepresentante
              }
           }
        },
        "AutorizacionesSolicitadas":{
           "EntidadDeCertificacion":datos.EntidadDeCertificacion,
           "UnidadDeRegistro":datos.UnidadDeRegistro,
           "ProveedorFirmasElectrónicas":datos.ProveedorFirmasElectrónicas,
           "CertificadosDigitalesCualificados":datos.CertificadosDigitalesCualificados,
           "SellosElectronicosCualificados":datos.SellosElectronicosCualificados,
           "firmasSelladoCualificado":datos.firmasSelladoCualificado,
           "ValFirmasElectronicasCualificadas":datos.ValFirmasElectronicasCualificadas,
           "ConFirmasElectronicasCualificadas":datos.ConFirmasElectronicasCualificadas,
           "CualificadosSitiosWeb":datos.CualificadosSitiosWeb,
           "EstampadoCronologico":datos.EstampadoCronologico,
           "EntregaElectronicaCertificada":datos.EntregaElectronicaCertificada,
           "ControlSujetosRegulados":datos.ControlSujetosRegulados
        }
        
    }


    //Ingresando los datos del solicitante-------------------------------------------

    Axios.post(`http://localhost:5000/usuarios/Solicitante/add`,{
        ...data.Datosgenerales.DatosSolicitante
    }).then(response=>{

        const { SolicitanteID } = response.data; //Se obtiene ID del Solicitante
        

        
        //Ingresando los datos del representante Legal-------------------------------------------

        Axios.post(`http://localhost:5000/usuarios/Representante/add`,{
            ...data.Datosgenerales.DatosRepresentanteLegal
        }).then(response=>{

            const { RepresentanteID } = response.data; //Se obtiene ID del Solicitante
            

                    
            //REGISTRANDO FORMULARIO------------------------------------------
            Axios.post(`http://localhost:5000/usuarios/Formulario/add`,{
                ...data.Datosgenerales.DatosFormulario,
                SolicitanteID,
                RepresentanteID

            }).then(response=>{

                const { FormularioID } = response.data; //Se obtiene ID del Formulario

                

                //REGISTRANDO FORMULARIO AUTORIZACIONES CONFIANZA------------------------------------------
                Axios.post(`http://localhost:5000/usuarios/FormularioAutorizacionConfianza/add`,{
                    ...data.AutorizacionesSolicitadas,
                    FormularioID
                }).then(response=>{
                    // const { FormularioID } = response.data; //Se obtiene ID del Formulario
                    
                })

            })
        })

    })

}


// FORMULARIO 008-------------------------------------------------------------------------------
export const insertarDatosForm008 = async (datos) => {
    //Reorganizacion de datos de formulario
    const data = {
        "Datosgenerales":{
           "DatosFormulario":{
              "IdFormulario":"008"
           },
           "DatosSolicitante":{
              "Nombre":datos.Nombre,
              "Apellido":datos.Apellido,
              "RNC":"",
              "Cedula":datos.Cedula,
              "TipoSolicitante":datos.TipoSolicitante,
              "Direccion":{
                 "Provincia":datos.Provincia,
                 "Municipio":datos.Municipio,
                 "Sector":datos.Sector,
                 "Calle":datos.Calle,
                 "Numero":datos.Numero,
                 "Apartamento":datos.Apartamento,
                 "CodigoPostal":datos.CodigoPostal
              },
              "Contacto":{
                 "CorreoElectronico":datos.CorreoElectronico,
                 "Url":datos.Url,
                 "Telefono":datos.Telefono
              }
           },
           "DatosRepresentanteLegal":{
              "Nombre":datos.NombreRepresentante,
              "Apellido":datos.ApellidoRepresentante,
              "RNC":datos.RNCRepresentante,
              "Cedula":datos.CedulaRepresentante,
              "Direccion":{
                 "Provincia":datos.ProvinciaRepresentante,
                 "Municipio":datos.MunicipioRepresentante,
                 "Sector":datos.SectorRepresentante,
                 "Calle":datos.CalleRepresentante,
                 "Numero":datos.NumeroRepresentante,
                 "Apartamento":datos.ApartamentoRepresentante,
                 "CodigoPostal":datos.CodigoPostalRepresentante
              },
              "Contacto":{
                 "Telefono":datos.TelefonoRepresentante,
                 "CorreoElectronico":datos.CorreoElectronicoRepresentante,
                 "Url":datos.UrlRepresentante
              }
           }
        },
        "ModalidadServicio":{
           "PrestadoraTeleco":datos.PrestadoraTeleco,
           "RevendedoresTeleco":datos.RevendedoresTeleco
        },
        "OrigenServicioControversia":{
           "OrigenServicioControversia":datos.OrigenServicioControversia
        },
        "ReglamentosVigentes":{
           "LeyTeleco":datos.LeyTeleco,
           "ReglamentoAutorizaciones":datos.ReglamentoAutorizaciones,
           "Reglamentofrecuencias":datos.Reglamentofrecuencias,
           "ReglamentoGeneralEspectro":datos.ReglamentoGeneralEspectro,
           "ReglamentoReventaPublicos":datos.ReglamentoReventaPublicos,
           "ReglamentoTvSubscripcion":datos.ReglamentoTvSubscripcion,
           "ReglamentoGeneralInterconexion":datos.ReglamentoGeneralInterconexion,
           "ReglamentoNumeracion":datos.ReglamentoNumeracion,
           "ReglamentoLeyLibreCompetencia":datos.ReglamentoLeyLibreCOmpetencia,
           "OtroReglamento":datos.OtroReglamento
        }
    }


    //Ingresando los datos del solicitante-------------------------------------------

    Axios.post(`http://localhost:5000/usuarios/Solicitante/add`,{
        ...data.Datosgenerales.DatosSolicitante
    }).then(response=>{

        const { SolicitanteID } = response.data; //Se obtiene ID del Solicitante
        

        
        //Ingresando los datos del representante Legal-------------------------------------------

        Axios.post(`http://localhost:5000/usuarios/Representante/add`,{
            ...data.Datosgenerales.DatosRepresentanteLegal
        }).then(response=>{

            const { RepresentanteID } = response.data; //Se obtiene ID del Solicitante
            

                    
            //REGISTRANDO FORMULARIO------------------------------------------
            Axios.post(`http://localhost:5000/usuarios/Formulario/add`,{
                ...data.Datosgenerales.DatosFormulario,
                SolicitanteID,
                RepresentanteID

            }).then(response=>{

                const { FormularioID } = response.data; //Se obtiene ID del Formulario

                

                //REGISTRANDO REGLAMENTOS VIGENTES------------------------------------------
                Axios.post(`http://localhost:5000/usuarios/Reglamentos/add`,{
                    ...data.ReglamentosVigentes,
                    FormularioID
                }).then(response=>{
                    // const { IdRegistro } = response.data; //Se obtiene ID del Formulario
                })


                //REGISTRANDO Modalidada Servicio------------------------------------------
                Axios.post(`http://localhost:5000/usuarios/ModalidadServicio/add`,{
                    ...data.ModalidadServicio,
                    FormularioID
                }).then(response=>{
                    // const { IdRegistro } = response.data; //Se obtiene ID del Formulario
                })
               
                //REGISTRANDO Formulario Controversia------------------------------------------
                Axios.post(`http://localhost:5000/usuarios/FormularioControversia/add`,{
                    ...data.OrigenServicioControversia,
                    FormularioID
                }).then(response=>{
                    // const { IdRegistro } = response.data; //Se obtiene ID del Formulario
                })
            })
        })

    })

}


// FORMULARIO 009-------------------------------------------------------------------------------
export const insertarDatosForm009 = async (datos) => {
    //Reorganizacion de datos de formulario
    const data = {
        "Datosgenerales":{
           "DatosFormulario":{
              "IdFormulario":"009"
           },
           "DatosSolicitante":{
              "Nombre":datos.Nombre,
              "Apellido":datos.Apellido,
              "RNC":"",
              "Cedula":datos.Cedula,
              "TipoSolicitante":datos.TipoSolicitante,
              "Direccion":{
                 "Provincia":datos.Provincia,
                 "Municipio":datos.Municipio,
                 "Sector":datos.Sector,
                 "Calle":datos.Calle,
                 "Numero":datos.Numero,
                 "Apartamento":datos.Apartamento,
                 "CodigoPostal":datos.CodigoPostal
              },
              "Contacto":{
                 "CorreoElectronico":datos.CorreoElectronico,
                 "Url":datos.Url,
                 "Telefono":datos.Telefono
              }
           },
           "DatosRepresentanteLegal":{
              "Nombre":datos.NombreRepresentante,
              "Apellido":datos.ApellidoRepresentante,
              "RNC":datos.RNCRepresentante,
              "Cedula":datos.CedulaRepresentante,
              "Direccion":{
                 "Provincia":datos.ProvinciaRepresentante,
                 "Municipio":datos.MunicipioRepresentante,
                 "Sector":datos.SectorRepresentante,
                 "Calle":datos.CalleRepresentante,
                 "Numero":datos.NumeroRepresentante,
                 "Apartamento":datos.ApartamentoRepresentante,
                 "CodigoPostal":datos.CodigoPostalRepresentante
              },
              "Contacto":{
                 "Telefono":datos.TelefonoRepresentante,
                 "CorreoElectronico":datos.CorreoElectronicoRepresentante,
                 "Url":datos.UrlRepresentante
              }
           }
        },
        "RadioAficionado":{
           "TipoSolicitud":datos.TipoSolicitud,
           "ServicioAoperar":datos.ServicioAoperar,
           "Areageografica":datos.Areageografica,
           "CategoriaInscripcion":datos.CategoriaInscripcion,
           "LetrasDistintivas":datos.LetrasDistintivas,
           "DescripcionEquipoutilizar":datos.DescripcionEquipoutilizar
        }
        
    }


    //Ingresando los datos del solicitante-------------------------------------------

    Axios.post(`http://localhost:5000/usuarios/Solicitante/add`,{
        ...data.Datosgenerales.DatosSolicitante
    }).then(response=>{

        const { SolicitanteID } = response.data; //Se obtiene ID del Solicitante
        

        
        //Ingresando los datos del representante Legal-------------------------------------------

        Axios.post(`http://localhost:5000/usuarios/Representante/add`,{
            ...data.Datosgenerales.DatosRepresentanteLegal
        }).then(response=>{

            const { RepresentanteID } = response.data; //Se obtiene ID del Solicitante
            

                    
            //REGISTRANDO FORMULARIO------------------------------------------
            Axios.post(`http://localhost:5000/usuarios/Formulario/add`,{
                ...data.Datosgenerales.DatosFormulario,
                SolicitanteID,
                RepresentanteID

            }).then(response=>{

                const { FormularioID } = response.data; //Se obtiene ID del Formulario

                

                //REGISTRANDO FORMULARIO RADIO AFICIONADO------------------------------------------
                Axios.post(`http://localhost:5000/usuarios/FormularioRadioAficionado/add`,{
                    ...data.RadioAficionado,
                    FormularioID
                }).then(response=>{
                    // const { FormularioID } = response.data; //Se obtiene ID del Formulario
                    
                })

            })
        })

    })

}