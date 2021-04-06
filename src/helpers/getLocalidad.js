import Axios from 'axios'; //Libreria para el manejo de Requests HTTP


export const getProvincias = () => {
    return Axios.get(`http://apisitelocal.indotel.net.do/api/FormularioSolicitudLocalidadesPropuestas/Provincias`)
                .then(function (response) {
                    // handle success
                    return response.data
                })
}


export const getMunicipios = (IdProvincia) => {
    return Axios.get(`http://apisitelocal.indotel.net.do/api/FormularioSolicitudLocalidadesPropuestas/Municipios?provinciaId=${IdProvincia}`)
                .then(function (response) {
                    // handle success
                    return response.data
                })
}

export const getSectores = (IdMunicipio) => {
    return Axios.get(`http://apisitelocal.indotel.net.do/api/FormularioSolicitudLocalidadesPropuestas/Sectores?municipioId=${IdMunicipio}`)
                .then(function (response) {
                    // handle success
                    return response.data
                })
}