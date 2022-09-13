let div = document.getElementById("divData");
let mainProductos = document.getElementById("mainProductos");
window.addEventListener("load", function(){ //terminar de cargarse la ventana, se ejecutara
    getData();
});
const getData = () => {

    let promesa = fetch("https://fakestoreapi.com/products/", // de donde voy a traer la info
    {
        method : "GET" //lo que hace GET es "leer" la informacion. POST por ejemplo, crea informacion. Tambien hay PUT y DELETE.
    });//fetch

    
    //con promesa.then se regresa la respuesta, dentro del parentesis se dice que hacer.
    promesa.then( (Response)=> {
        //si la promesa es tipo json, entonces
        Response.json().then ( (data) => {
            console.log(data); //leer los datos
            console.log(typeof(data)); //muestrame el tipo de dato
            data.forEach(producto => { //por cada uno de los productos...
                mainProductos.innerHTML+=
                `
                <div class="card col-3 m-3 auto" style="width: 18rem;">
                    <img src="${producto.image}" class="card-img-top" alt="${producto.title}">
                        <div class="card-body">
                            <h5 class="card-title">${producto.title}</h5>
                                <p class="card-text">${producto.category}</p>
                                <p class="card-text" max-le>${producto.description.slice(0, 200)}...</p>
                                <p class="card-text text-right"><strong>$ ${producto.price} MXN<strong></p>
                        <a href="#" class="btn btn-primary">Ver mas</a>
                    </div>
                </div>
                `
//Con slice cortamos el texto desde el inicio (0) hasta el caracter 150 (150)
//                console.log(producto.id, producto.title); //muestrame el id y titulo de ellos.
            });
//            console.log(data.id, data.title); //muestrame esos datos
            div.innerHTML = producto.title;
            //catch: si acaso hay un error, entonces ejecuta
        }).catch( (error) => {
            console.error(error); //avisa que hay un error
        });//catch
    }).catch((error) =>{
        console.log("Error en la solicitud" + error);
    }); //error
} //get data
//console.log(getData());
//EN LA CONSOLA PUEDES VER LOS DATOS CON getData();