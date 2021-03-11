import React from 'react'
import { Link } from 'react-router-dom'
import { LicenciaTitularConcesion } from './Fomulario 001/01-LicenciaTitularConcesion'

export const Home = () => {
    return (
        <div className='divtainer p-5'>
            <h1>Formularios INDOTEL</h1>
            <hr/>

            <div>
                <Link to="/LicenciaTitularConcesion">1. LicenciaTitularConcesion</Link> 
            </div>

            <div>
            <Link to="/Concesion" >2. Concesion</Link>
            </div>
                
             <div>
                <Link to="/RenovacionConcesion" >3. RenovacionConcesion</Link>
            </div> 

             <div>
                <Link to="/AsignacionOficinaCentral" >4. AsignacionOficinaCentral</Link>
            </div> 
            
             <div>
                <Link to="/ExpansionGeografica" >5. ExpansionGeografica</Link>
            </div> 
            
             <div>
                <Link to="/TransferenciaDerechoUso" >6. TransferenciaDerechoUso</Link>
            </div> 

             <div>
                <Link to="/AutorizacionPrestarServicioCertificacionConfianza" >7. AutorizacionPrestarServicioCertificacionConfianza</Link>
            </div> 

             <div>
                <Link to="/SolucionControversias" >8. SolucionControversias</Link>
            </div> 
            
             <div>
                <Link to="/DeclaracionJuradaSolicitudInscripcion" >9. DeclaracionJuradaSolicitudInscripcion</Link>
            </div> 
        </div>
    )
}
