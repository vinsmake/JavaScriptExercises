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
                                <p class="card-text" max-le>${producto.description.slice(0, 100)}...</p>
                                <p class="card-text text-right"><strong>$ ${producto.price} MXN<strong></p>
                                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modal_${producto.id}">
                                Ver mas
                              </button>
                    </div>
                </div>
                <!-- Modal -->
<div class="modal fade" id="modal_${producto.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">${producto.title}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      ${producto.description}
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
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