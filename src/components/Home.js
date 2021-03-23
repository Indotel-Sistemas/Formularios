import React from 'react'
import { Link } from 'react-router-dom'
import { ImFileText2 } from "react-icons/im";

export const Home = () => {
    return (
        <>
        
            <div className="form__header">
                <p className="form__formName"> <ImFileText2 /> Formularios INDOTEL</p>
            </div>
    
            
            <div className='divtainer px-3'>

                <div className="my-2 mt-3">
                    <Link 
                        className="ui__Link"
                        to="/LicenciaTitularConcesion"
                    >
                        <b>1.</b> Formulario de solicitud de licencia titular de una conseción.
                    </Link> 
                </div>

                <div className="my-2">
                    <Link 
                        className="ui__Link"
                        to="/Concesion" 
                    >
                        <b>2.</b> Formulario de solicitud de conseción.
                    </Link>
                </div>
                    
                <div  className="my-2">
                    <Link 
                        className="ui__Link"
                        to="/RenovacionConcesion" 
                    >
                            <b>3.</b> Formulario de solicitud de renovación de conseciones.
                    </Link>
                </div> 

                <div className="my-2">
                    <Link 
                        className="ui__Link"
                        to="/AsignacionOficinaCentral" 
                    >
                            <b>4.</b> Formulario de solicitud de asignación de oficina central o NXX.
                    </Link>
                </div> 
                
                <div className="my-2">
                    <Link 
                        className="ui__Link"
                        to="/ExpansionGeografica" 
                    >
                            <b>5.</b> Formulario de solicitud de expansión geográfica.
                    </Link>
                </div> 
                
                <div className="my-2">
                    <Link 
                        className="ui__Link"
                        to="/TransferenciaDerechoUso" 
                    >
                            <b>6.</b> Formulario de solicitud de transferencia del derecho de uso.
                    </Link>
                </div> 

                <div className="my-2">
                    <Link 
                        className="ui__Link"
                        to="/AutorizacionPrestarServicioCertificacionConfianza" 
                    >
                            <b>7.</b> Formulario de solicitud de autorización para prestar servicios.
                    </Link>
                </div> 

                <div className="my-2">
                    <Link 
                        className="ui__Link"
                        to="/SolucionControversias" 
                    >
                            <b>8.</b> Formulario para intervención  del INDOTEL para la solución  de controversias.
                    </Link>
                </div> 
                
                <div className="mt-2">
                    <Link 
                        className="ui__Link"
                        to="/DeclaracionJuradaSolicitudInscripcion" 
                    >
                            <b>9.</b> Formulario de declaración jurada para la solicitud de inscripción de servicios radioaficionados.
                    </Link>
                </div> 
            </div>
        </>
    )
}
