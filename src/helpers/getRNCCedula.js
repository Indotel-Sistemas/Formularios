import Axios from 'axios'; //Libreria para el manejo de Requests HTTP

export const getRNC = (RNCCedula) => {

    const data = { RNCCedula }
    return Axios.post(`http://localhost:5000/RNC`, data)
                .then(function (response) {
                    // handle success
                    return response.data[0]
                })
}
