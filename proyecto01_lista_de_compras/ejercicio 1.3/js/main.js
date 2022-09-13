
//ME QUEDE EN LA PARTE EN LA QUE LLORO PORQUE NO SE COMO HACER UN ELEMENTO CON 2 LI POR SEPARADO QUE AL FINAL CIERRE EL UL Y AGREGUE OTRO/////////////

let botonAgregar = document.getElementById("boton_agregar");

let cantidad = document.getElementById("cantidad");

botonAgregar.addEventListener ("click", function(e) {
    e.preventDefault();
    let lista = document.getElementsByClassName("lista");
/*     let li = document.createElement("li");
    let li2 = document.createElement("li"); */

    let producto = document.getElementById("producto");
    let valorProducto = (producto.value);
    console.log(valorProducto)

    let cantidad = document.getElementById("cantidad");
    let precioProducto = (cantidad.value);
    console.log(precioProducto)

/*     li.innerText = valorProducto;
    li2.innerText = precioProducto;
    li.className = "list-group-item";
    li2.className = "list-group-item";
    lista[0].append(li);
    lista[0].append(li2); */
    lista[0].insertAdjacentHTML("beforeend",
   ` 
   <tr>
   <th scope="row">1</th>
   <td>Mark</td>
   <td>Otto</td>
   <td>@mdo</td>
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