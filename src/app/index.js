import Comentario from './comentario'

let micomentario = new Comentario()
async function llamadoComentariosAsync() {
    let data = await micomentario.asyncAxiosObtenerComentarios()
    console.log(data)
}
llamadoComentariosAsync()
async function llamarComentarios() {
    try {
        console.log("Se llamó la promesa")
        //let promesa = micomentario.promesaObtenerComentarios()
        let respuesta = await micomentario.promesaObtenerComentarios()
        console.log(respuesta)
        console.log("Terminó la promesa")
    } catch (error) {
        console.log(error)
    } finally {
        console.log("Terminó el programa")
    }
}
//llamarComentarios()
/*promesa
    .then(r => {
        console.log(JSON.parse(r))
        return "mensaje para la siguiente promesa"
    })
    .then((r => {
        console.log(r)
    }))
    .catch(r => {
        console.log(JSON.parse(r))
    })
    .finally(() => {
        console.log("Finaly")
    })*/