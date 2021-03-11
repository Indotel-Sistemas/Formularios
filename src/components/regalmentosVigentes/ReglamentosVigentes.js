import React from 'react'
import { Field } from 'formik';

// EL componente ReglamentosVigentes contiene campos que son consistentes en multiples los formularios,
// usando Formik, con sus respectivos valores iniciales, que deben ser importados en el componenete 
// donde sean requeridos. 

//Implemtentacion de importación dentro del Form del formulario a utilizar: 
//                        < ReglamentosVigentes IdFormulario={ '001' }  />
//El IdFormulario representa el id del formulario donde es implementado, lo que desplegará unicamente los
// reglamentos que necesita dicho formulario

//Spread los valores iniciales en sus respectivos lugares de uso:
//                        initialValues={{ ...ReglamentosVigentesInitialValues  }}


export const ReglamentosVigentes = ({ IdFormulario }) => {
    
    return (
        <> 
            {/*Ley de Telecomunicaciones (No. 153-98)--------------------------------------------------------------------------- */}
            {/* Se muestra en todos los formularios */}
            <div className='col-12 mx-4  d-flex align-items-center justy-content-centermb-2'>
                <Field type="checkbox" name="LeyTeleco" className="mx-2"/>
                <label>Ley de Telecomunicaciones (No. 153-98)</label>
            </div>
       
            {/*Reglamento de Autorizaciones (No.036-19)------------------------------------------------------------------------- */}
            {
                ['001','002','003', '005', '006'].includes(IdFormulario) && //establece en cuales formularios se muestra
                <div className='col-12 mx-4 mb-2 d-flex align-items-center justy-content-center'>
                    <Field type="checkbox" name="ReglamentoAutorizaciones" className="mx-2"/>
                    <label>Reglamento de Autorizaciones (No.036-19)</label>
                </div>
            }
            
            {/*Reglamento del Plan Nacional de Atribución de Frecuencias (No. 064-11)------------------------------------------------------------------------- */}
            {
                ['001','006'].includes(IdFormulario) && //establece en cuales formularios se muestra
                <div className='col-12 mx-4 mb-2 d-flex align-items-center justy-content-center'>
                    <Field type="checkbox" name="Reglamentofrecuencias" className="mx-2"/>
                    <label>Reglamento del Plan Nacional de Atribución de Frecuencias (No. 064-11)</label>
                </div>
            }

            {/*Reglamento de Televisión por Suscripción (No. 160-05)------------------------------------------------------------------------- */}
            {
                ['002','003','005'].includes(IdFormulario) && //establece en cuales formularios se muestra
                <div className='col-12 mx-4 mb-2 d-flex align-items-center justy-content-center'>
                    <Field type="checkbox" name="ReglamentoTvSubscripcion" className="mx-2"/>
                    <label>Reglamento de Televisión por Suscripción (No. 160-05)</label>
                </div>
            }

            {/*Reglamento de Numeración (PTFN No. 121-04)------------------------------------------------------------------------- */}
            {
                ['004'].includes(IdFormulario) && //establece en cuales formularios se muestra
                <div className='col-12 mx-4 mb-2 d-flex align-items-center justy-content-center'>
                    <Field type="checkbox" name="ReglamentoNumeracion" className="mx-2"/>
                    <label>Reglamento de Numeración (PTFN No. 121-04)</label>
                </div>
            }
       
            {/*Reglamento de Libre y Leal Competencia (No. 022-05)*------------------------------------------------------------------------- */}
            {
                ['008'].includes(IdFormulario) && //establece en cuales formularios se muestra
                <div className='col-12 mx-4 mb-2 d-flex align-items-center justy-content-center'>
                    <Field type="checkbox" name="ReglamentoLeyLibreCOmpetencia" className="mx-2"/>
                    <label>Reglamento de Libre y Leal Competencia (No. 022-05)</label>
                </div>
            }

            {/*Reglamento General de Interconexión (No. 038-11)------------------------------------------------------------------------- */}
            {
                ['004','008'].includes(IdFormulario) && //establece en cuales formularios se muestra
                <div className='col-12 mx-4 mb-2 d-flex align-items-center justy-content-center'>
                    <Field type="checkbox" name="ReglamentoGeneralInterconexion" className="mx-2"/>
                    <label>Reglamento General de Interconexión (No. 038-11)</label>
                </div>
            }
            
            {/*Reglamento General del Uso del Espectro (No.128-04)------------------------------------------------------------------------- */}
            {
                ['001','006'].includes(IdFormulario) && //establece en cuales formularios se muestra
                <div className='col-12 mx-4 mb-2 d-flex align-items-center justy-content-center'>
                    <Field type="checkbox" name="ReglamentoGeneralEspectro" className="mx-2"/>
                    <label>Reglamento General del Uso del Espectro (No.128-04)</label>
                </div>
            }
            
            {/*Reglamento para la Reventa de Servicios Públicos de Telecomunicaciones (No. 029-07)*------------------------------------------------------------------------- */}
            {
                ['001','002','003','004','005','006','008'].includes(IdFormulario) && //establece en cuales formularios se muestra
                <div className='col-12 mx-4 mb-2 d-flex align-items-center justy-content-center'>
                    <Field type="checkbox" name="ReglamentoReventaPublicos" className="mx-2"/>
                    <label>Reglamento para la Reventa de Servicios Públicos de Telecomunicaciones (No. 029-07)</label>
                </div>
            }

            {/*OTRAS--------------------------------------------------------------------------- */}
            {/* Se muestra en todos los formularios */}
            <div className='col-12'> 
                <h6>Otros Reglamentos:</h6> 
                <Field name='OtroReglamento' as='textarea' className='form-control'  autoComplete="off"/>
            </div>
            
        </>
    )
}


export const ReglamentosVigentesInitialValues = {
    LeyTeleco: false,
    ReglamentoAutorizaciones: false,
    Reglamentofrecuencias: false,
    ReglamentoGeneralEspectro: false,
    ReglamentoReventaPublicos: false,
    ReglamentoTvSubscripcion: false,
    ReglamentoGeneralInterconexion:false,
    ReglamentoNumeracion:false,
    ReglamentoLeyLibreCOmpetencia:false,
    OtroReglamento: ""
}
