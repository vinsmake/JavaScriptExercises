
//ME QUEDE EN LA PARTE EN LA QUE LLORO PORQUE NO SE COMO HACER UN ELEMENTO CON 2 LI POR SEPARADO QUE AL FINAL CIERRE EL UL Y AGREGUE OTRO/////////////
let botonAgregar = document.getElementById("boton_agregar"); //Boton principal y unico.
let producto = document.getElementById("producto"); //campo producto
let cantidad = document.getElementById("cantidad"); //campo cantidad
let tabla = document.getElementsByClassName("tabla"); //Tabla de compras.
let key = "info";
let id = 1; //contador id de paquete
let arreglo = []; //variable nuevo arreglo (array) 

//Inicio boton///////////////////////
botonAgregar.addEventListener ("click", function(e) {
    e.preventDefault();
    let valorProducto = (producto.value); //variable valor producto
    let cantidadProducto = (cantidad.value); //variable valor cantidad 
    let valorPrecio = Math.floor(Math.random() * 100) + 1; //numero random, que cambiara cada ves que se pique el boton
//JSON/////////////////////////////
let paquete = {"id": id, "producto": valorProducto, "cantidad": cantidadProducto, "precio": valorPrecio}; //creacion de elemento json
id++; //Se agrega un contador al id
arreglo.push(paquete); //agregar elemento json a arreglo
localStorage.setItem(key, JSON.stringify(arreglo)); //traducir json
//fin json////////////////////////
//Inicio if ////////////////////////////////
tabla[0].innerHTML = "";

if (localStorage.getItem(key)){
    let tmp = JSON.parse(localStorage.getItem(key));
/*     arreglo = tmp */ ///la verdad no se por que estaba eso

//Inicio a ver si jala///
    tmp.forEach(element => {
        tabla[0].innerHTML +=
            ` 
     <tr>
        <th scope="row">${element.id}</th>
        <td>${element.producto}</td>
        <td>${element.cantidad}</td>
        <td>${element.precio}</td>
     </tr>
       `;
    } //tabla
    // funcion
    ); ///forEach
} //if
//final if ////////////////////////////////

}); //boton


/////insertar tabla///////////////
//     tabla[0].insertAdjacentHTML("beforeend",
//    ` 
// <tr>
//    <th scope="row">${id}</th>
//    <td>${valorProducto}</td>
//    <td>${precioProducto}</td>
//    <td>{valorPrecio}</td>
// </tr>
//   `

 //    `<ul class="list-group list-group-horizontal"> <li class="list-group-item"> ${valorProducto} </li>` +  `<li class="list-group-item"> ${precioProducto} </li>` +  `<li class="list-group-item"> funcionPrecioRandom </li> </ul>` + "<br>")




//// intento de validacion
    //  let producto = document.getElementById("producto");
    // let productoH = document.getElementById("productoH");

    // if (
    //     (isNaN(producto.value))
    // ) {
    //     productoH.classList.remove("is-valid");
    //     productoH.classList.add("is-invalid");
    // } else {
    //     productoH.classList.remove("is-invalid");
    //     productoH.classList.add("is-valid");
    // } 