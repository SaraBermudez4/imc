const axios = require('axios')
export default class Comentario {
    obtenerComentarios() {
        return []
    }

    async asyncAxiosObtenerComentarios(){
        let respuesta = await axios.get('https://eonet.sci.gsfc.nasa.gov/api/v3/categories')
        return respuesta.data
    }

    axiosObtenerComentarios(){
        let peticion = axios.get('https://eonet.sci.gsfc.nasa.gov/api/v3/categories')
        peticion
            .then(r => {
                console.log(r.data)
            })
            .catch()
            .finally()
    }

    fetchObtenerComentarios() {
        let promesa = fetch('https://eonet.sci.gsfc.nasa.gov/api/v3/categories')

        promesa
            .then(r => {
                return r.json()
            })
            .then(r => {
                console.log(r)
            })
            .catch()
            .finally(() => console.log("Finalizó la promesa"))
    }
    promesaObtenerComentarios() {
        //resolve:cumplida reject:rechazada
        let mipromesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                /*resolve(
                    JSON.stringify({ "response": "La petición se ejecutó satisfactoriamente" }))
                    }, 600
                )*/
                reject(
                    JSON.stringify({ "response": "La petición no se ejecutó" }))
            }, 600
            )
        })
        return mipromesa
    }
}