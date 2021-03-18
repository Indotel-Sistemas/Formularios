import React, { useState } from 'react'
import { Field } from 'formik';
import { Collapse } from 'react-bootstrap';
import { IoIosArrowDropdown, IoIosArrowDropup } from 'react-icons/io';

import { ButtonSubmitForm } from '../ui/ButtonSubmitForm';

export const CamposForm007 = () => {

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
                        <p className="form__subtitle">Seleccionar todas las autorizaciones solicitadas: </p>

                        {/*Solicitud de Autorización para constituirse como Entidad de Certificación--------------------------------------------------------------------------- */}
                        <div className='col-12 mx-4 mb-2 d-flex align-items-center'>
                            <Field type="checkbox" name="EntidadDeCertificacion" className="mx-2"/>
                            <label>Solicitud de Autorización para constituirse como Entidad de Certificación</label>
                        </div>
                        
                        {/*Solicitud de Autorización para constituirse como Unidad de Registro--------------------------------------------------------------------------- */}
                        <div className='col-12 mx-4 mb-2 d-flex align-items-center'>
                            <Field type="checkbox" name="UnidadDeRegistro" className="mx-2"/>
                            <label>Solicitud de Autorización para constituirse como Unidad de Registro</label>
                        </div>
                        
                        {/*Solicitud de Registro como Proveedor de Firmas Electrónicas--------------------------------------------------------------------------- */}
                        <div className='col-12 mx-4 mb-2 d-flex align-items-center'>
                            <Field type="checkbox" name="ProveedorFirmasElectrónicas" className="mx-2"/>
                            <label>Solicitud de Registro como Proveedor de Firmas Electrónicas</label>
                        </div>
                        
                        {/*Solicitud para prestación de servicios de Generación y Emisión de Certificados Digitales Cualificados--------------------------------------------------------------------------- */}
                        <div className='col-12 mx-4 mb-2 d-flex align-items-center'>
                            <Field type="checkbox" name="CertificadosDigitalesCualificados" className="mx-2"/>
                            <label>Solicitud para prestación de servicios de Generación y Emisión de Certificados Digitales Cualificados</label>
                        </div>
                        
                        {/*Solicitud para prestación de servicios de Generación y Emisión de Sellos Electrónicos Cualificados--------------------------------------------------------------------------- */}
                        <div className='col-12 mx-4 mb-2 d-flex align-items-center'>
                            <Field type="checkbox" name="SellosElectronicosCualificados" className="mx-2"/>
                            <label>Solicitud para prestación de servicios de Generación y Emisión de Sellos Electrónicos Cualificados</label>
                        </div>
                        
                        {/*Solicitud para prestación de servicios de Gestión de Datos de Creación de Firmas y Sellado Cualificado--------------------------------------------------------------------------- */}
                        <div className='col-12 mx-4 mb-2 d-flex align-items-center'>
                            <Field type="checkbox" name="firmasSelladoCualificado" className="mx-2"/>
                            <label>Solicitud para prestación de servicios de Gestión de Datos de Creación de Firmas y Sellado Cualificado</label>
                        </div>
                        
                        {/*Solicitud para Prestación de servicios de validación de Firmas Electrónicas, Firmas Electrónicas Avanzada y Firmas Electrónicas Cualificadas--------------------------------------------------------------------------- */}
                        <div className='col-12 mx-4 mb-2 d-flex align-items-center'>
                            <Field type="checkbox" name="ValFirmasElectronicasCualificadas" className="mx-2"/>
                            <label>Solicitud para Prestación de servicios de validación de Firmas Electrónicas, Firmas Electrónicas Avanzada y Firmas Electrónicas Cualificadas</label>
                        </div>
                        
                        {/*Solicitud para prestación de servicios de conservación de Firmas Electrónicas, Firmas Electrónicas Avanzada y Firmas Electrónicas Cualificadas--------------------------------------------------------------------------- */}
                        <div className='col-12 mx-4 mb-2 d-flex align-items-center'>
                            <Field type="checkbox" name="ConFirmasElectronicasCualificadas" className="mx-2"/>
                            <label>Solicitud para prestación de servicios de conservación de Firmas Electrónicas, Firmas Electrónicas Avanzada y Firmas Electrónicas Cualificadas</label>
                        </div>
                        
                        {/*Solicitud para prestación de servicios de Generación y Emisión de Certificados Cualificados de Sitios Web--------------------------------------------------------------------------- */}
                        <div className='col-12 mx-4 mb-2 d-flex align-items-center'>
                            <Field type="checkbox" name="CualificadosSitiosWeb" className="mx-2"/>
                            <label>Solicitud para prestación de servicios de Generación y Emisión de Certificados Cualificados de Sitios Web</label>
                        </div>
                        
                        {/*Solicitud para prestación de servicios de Sellado de Tiempo y Estampado Cronológico--------------------------------------------------------------------------- */}
                        <div className='col-12 mx-4 mb-2 d-flex align-items-center'>
                            <Field type="checkbox" name="EstampadoCronologico" className="mx-2"/>
                            <label>Solicitud para prestación de servicios de Sellado de Tiempo y Estampado Cronológico</label>
                        </div>
                        
                        {/*Solicitud para prestación de servicios de Entrega Electrónica Certificada--------------------------------------------------------------------------- */}
                        <div className='col-12 mx-4 mb-2 d-flex align-items-center'>
                            <Field type="checkbox" name="EntregaElectronicaCertificada" className="mx-2"/>
                            <label>Solicitud para prestación de servicios de Entrega Electrónica Certificada</label>
                        </div>
                        
                        {/*Solicitud de autorización para transferencia, cesión, arrendamiento, otorgamiento del derecho de uso, constitución de gravámenes o transferencia de control para sujetos regulados--------------------------------------------------------------------------- */}
                        <div className='col-12 mx-4 mb-2 d-flex align-items-center'>
                            <Field type="checkbox" name="ControlSujetosRegulados" className="mx-2"/>
                            <label>Solicitud de autorización para transferencia, cesión, arrendamiento, otorgamiento del derecho de uso, constitución de gravámenes o transferencia de control para sujetos regulados</label>
                        </div>
                        
                        {/* Boton de enviar */}
                        <ButtonSubmitForm />

                    </div>
                </div>
            </Collapse>
        </>
    )
}



export const CamposForm7InitialValues = {
    EntidadDeCertificacion: false,
    UnidadDeRegistro: false,
    ProveedorFirmasElectrónicas: false,
    CertificadosDigitalesCualificados: false,
    SellosElectronicosCualificados: false,
    firmasSelladoCualificado: false,
    ValFirmasElectronicasCualificadas: false,
    ConFirmasElectronicasCualificadas: false,
    CualificadosSitiosWeb: false,
    EstampadoCronologico: false,
    EntregaElectronicaCertificada: false,
    ControlSujetosRegulados: false,

}