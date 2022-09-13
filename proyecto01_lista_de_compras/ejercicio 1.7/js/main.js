
//ME QUEDE EN LA PARTE EN LA QUE LLORO PORQUE NO SE COMO HACER UN ELEMENTO CON 2 LI POR SEPARADO QUE AL FINAL CIERRE EL UL Y AGREGUE OTRO/////////////
let botonAgregar = document.getElementById("boton_agregar"); //Boton principal y unico.
let producto = document.getElementById("producto"); //campo producto
let cantidad = document.getElementById("cantidad"); //campo cantidad
let tabla = document.getElementsByClassName("tabla"); //Tabla de compras.


//Inicio boton///////////////////////
botonAgregar.addEventListener ("click", function(e) {
    e.preventDefault();
    let valorProducto = (producto.value);
    console.log(valorProducto)
    let precioProducto = (cantidad.value);
    console.log(precioProducto)

/////insertar tabla///////////////
    tabla[0].insertAdjacentHTML("beforeend",
   ` 
<tr>
   <th scope="row">{id}</th>
   <td>${valorProducto}</td>
   <td>${precioProducto}</td>
   <td>{valorPrecio}</td>
</tr>
  `
)});
 //    `<ul class="list-group list-group-horizontal"> <li class="list-group-item"> ${valorProducto} </li>` +  `<li class="list-group-item"> ${precioProducto} </li>` +  `<li class="list-group-item"> funcionPrecioRandom </li> </ul>` + "<br>")




//// intento de validacion
    /* let producto = document.getElementById("producto");
    let productoH = document.getElementById("productoH");

    if (
        (isNaN(producto.value))
    ) {
        productoH.classList.remove("is-valid");
        productoH.classList.add("is-invalid");
    } else {
        productoH.classList.remove("is-invalid");
        productoH.classList.add("is-valid");
    } */