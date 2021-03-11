import React from 'react'
import { 
    BrowserRouter as Router,  
    Redirect, 
    Route,  
    Switch 
} from 'react-router-dom' //Permite el manejo de rutas en la aplicacion

// Importacion de componentes para el renderizado según las rutas
import { Home } from '../components/Home'
import { LicenciaTitularConcesion } from '../components/Fomulario 001/01-LicenciaTitularConcesion'
import { Concesion } from '../components/Formulario 002/02-Concesion'
import { RenovacionConcesion } from '../components/Formulario 003/03-RenovacionConcesion'
import { AsignacionOficinaCentral } from '../components/Formulario 004/04-AsignacionOficinaCentral'
import { ExpansionGeografica } from '../components/Formulario 005/05-ExpansionGeografica'
import { TransferenciaDerechoUso } from '../components/Formulario 006/06-TransferenciaDerechoUso'
import { AutorizacionPrestarServicioCertificacionConfianza } from '../components/Formulario 007/07-AutorizacionPrestarServicioCertificacionConfianza'
import { SolucionControversias } from '../components/Formulario 008/08-SolucionControversias'
import { DeclaracionJuradaSolicitudInscripcion } from '../components/Formulario 009/09-DeclaracionJuradaSolicitudInscripcion'

export const AppRouter = () => {
    return (
        
        <Router>   {/* Contenedor de rutas  */}
             
            <Switch> {/* Selector de ruta segun path  */}

                <Route 
                    exact  //el path necesita ser exacto al establecido
                    path="/Home"  //path establecido
                    component={ Home }  //componente a renderizar
                />

                <Route 
                    exact 
                    path="/LicenciaTitularConcesion" 
                    component={ LicenciaTitularConcesion } 
                />

                <Route 
                    exact 
                    path="/Concesion" 
                    component={ Concesion } 
                />

                <Route 
                    exact 
                    path="/RenovacionConcesion" 
                    component={ RenovacionConcesion } 
                />

                <Route 
                    exact 
                    path="/AsignacionOficinaCentral" 
                    component={ AsignacionOficinaCentral } 
                />

                <Route 
                    exact 
                    path="/ExpansionGeografica" 
                    component={ ExpansionGeografica } 
                />

                <Route 
                    exact 
                    path="/TransferenciaDerechoUso" 
                    component={ TransferenciaDerechoUso } 
                />

                <Route 
                    exact 
                    path="/AutorizacionPrestarServicioCertificacionConfianza" 
                    component={ AutorizacionPrestarServicioCertificacionConfianza } 
                />

                <Route 
                    exact 
                    path="/SolucionControversias" 
                    component={ SolucionControversias } 
                />

                <Route 
                    exact 
                    path="/DeclaracionJuradaSolicitudInscripcion" 
                    component={ DeclaracionJuradaSolicitudInscripcion } 
                />

                <Redirect to="/Home" /> {/* Ruta default */}
                
            </Switch>

        </Router>
    )
}
