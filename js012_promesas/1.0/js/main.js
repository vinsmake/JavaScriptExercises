const getData = () => {

    let promesa = fetch("http://127.0.0.1:5500/data.json", // de donde voy a traer la info
    {
        method : "GET"
    });//fetch

    
    //con promesa.then se regresa la respuesta, dentro del parentesis se dice que hacer.
    promesa.then( (Response)=> {
        //si la promesa es tipo json, entonces
        Response.json().then ( (data) => {
            console.log(data); //leer los datos
            console.log(typeof(data)); //muestrame el tipo de dato
            console.log(data.id, data.title); //muestrame esos datos
            //catch: si acaso hay un error, entonces ejecuta
        }).catch( (error) => {
            console.error(error); //avisa que hay un error
        });//catch
    }).catch((error) =>{
        console.log("Error en la solicitud" + error);
    }); //error
} //get data

//EN LA CONSOLA PUEDES VER LOS DATOS CON getData();