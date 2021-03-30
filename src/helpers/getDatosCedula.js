import Axios from 'axios'; //Libreria para el manejo de Requests HTTP

export const getDatosCedula = (cedula) => {
    return Axios.get(`http://apisitelocal.indotel.net.do/api/Padron/${cedula}`)
                .then(function (response) {
                    // handle success
                    // console.log(response.data)
                    return response.data
                });
}

