import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
    return (
        <>
        
            <div className="form__header">
                <p className="form__formName">Formularios INDOTEL</p>
            </div>
    
            
            <div className='divtainer'>

                <div>
                    <Link 
                        className="ui__Link"
                        to="/LicenciaTitularConcesion"
                    >
                            1. LicenciaTitularConcesion
                    </Link> 
                </div>

                <div>
                    <Link 
                        className="ui__Link"
                        to="/Concesion" 
                    >
                            2. Concesion
                    </Link>
                </div>
                    
                <div>
                    <Link 
                        className="ui__Link"
                        to="/RenovacionConcesion" 
                    >
                            3. RenovacionConcesion
                    </Link>
                </div> 

                <div>
                    <Link 
                        className="ui__Link"
                        to="/AsignacionOficinaCentral" 
                    >
                            4. AsignacionOficinaCentral
                    </Link>
                </div> 
                
                <div>
                    <Link 
                        className="ui__Link"
                        to="/ExpansionGeografica" 
                    >
                            5. ExpansionGeografica
                    </Link>
                </div> 
                
                <div>
                    <Link 
                        className="ui__Link"
                        to="/TransferenciaDerechoUso" 
                    >
                            6. TransferenciaDerechoUso
                    </Link>
                </div> 

                <div>
                    <Link 
                        className="ui__Link"
                        to="/AutorizacionPrestarServicioCertificacionConfianza" 
                    >
                            7. AutorizacionPrestarServicioCertificacionConfianza
                    </Link>
                </div> 

                <div>
                    <Link 
                        className="ui__Link"
                        to="/SolucionControversias" 
                    >
                            8. SolucionControversias
                    </Link>
                </div> 
                
                <div>
                    <Link 
                        className="ui__Link"
                        to="/DeclaracionJuradaSolicitudInscripcion" 
                    >
                            9. DeclaracionJuradaSolicitudInscripcion
                    </Link>
                </div> 
            </div>
        </>
    )
}
