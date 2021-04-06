import React, { useEffect, useState } from 'react'
import { LocalidadContext } from './context/LocalidadContext'
import { getProvincias } from './helpers/getLocalidad'
import { AppRouter } from './routers/AppRouter'

export const FormApp = () => {

    const [localidades, setLocalidades] = useState({
        Provincias: [],
        Municipios:[],
        Sectores: [],
        ProvinciasRepresentante: [],
        MunicipiosRepresentante:[],
        SectoresRepresentante: []
    })

    useEffect( () => {
        async function getData() {
            const provincias = await getProvincias();
            setLocalidades(localidades =>({...localidades, Provincias: provincias, ProvinciasRepresentante: provincias}))
        }
        getData();
    }, [setLocalidades])
    return (
        <LocalidadContext.Provider value={ {localidades, setLocalidades} } >
            <AppRouter />
        </LocalidadContext.Provider>
    )
}
