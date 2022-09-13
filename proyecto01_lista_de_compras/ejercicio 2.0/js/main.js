
//ME QUEDE EN LA PARTE EN LA QUE LLORO PORQUE NO SE COMO HACER UN ELEMENTO CON 2 LI POR SEPARADO QUE AL FINAL CIERRE EL UL Y AGREGUE OTRO/////////////
let botonAgregar = document.getElementById("boton_agregar"); //Boton principal y unico.
let producto = document.getElementById("producto"); //campo producto
let cantidad = document.getElementById("cantidad"); //campo cantidad
let tabla = document.getElementsByClassName("tabla"); //Tabla de compras.
let key = "info";

//Inicio boton///////////////////////
botonAgregar.addEventListener ("click", function(e) {
    e.preventDefault();
    let valorProducto = (producto.value); //variable valor producto
    let cantidadProducto = (cantidad.value); //variable valor cantidad 
//JSON/////////////////////////////
let id = 1;
let arreglo = []; //variable nuevo arreglo (array) 
let paquete = {"id": id, "producto": valorProducto, "cantidad": cantidadProducto}; //creacion de elemento json
id++; //Se agrega un contador al id
arreglo.push(paquete); //agregar elemento json a arreglo
localStorage.setItem(key, JSON.stringify(arreglo)); //traducir json
//fin json////////////////////////
if (localStorage.getItem(key)){
    let tmp = JSON.parse(localStorage.getItem(key));
    arreglo = tmp
//Inicio a ver si jala///
    tmp.forEach(element => {
        tabla[0].innerHTML +=
            ` 
     <tr>
        <th scope="row">${element.id}</th>
        <td>${element.producto}</td>
        <td>${element.cantidad}</td>
        <td>{valorPrecio}</td>
     </tr>
       `;
    } //tabla
    // funcion
    ); ///forEach
} //if
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