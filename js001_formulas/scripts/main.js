console.log("salaverga un mensaje");

//encabezado
/* |document| es la referencia al <body> 
|getElementById| hace referencia a un elemento por su id
|innerHTML| es una propiedad de cualquier etiqueta en el interior del HTML, hace referencia a lo que encierra*/
let e = document.getElementById("encabezado");
e.innerHTML="Hola uwu";
//operaciones
let x=25;
let y=5;
let msg = document.getElementById("operaciones");
msg.innerHTML = "el resultado de la suma es: " + (x+y);
msg.innerHTML += "<br>el resultado de la multiplicacion es: " + (x*y);
msg.innerHTML += "<br>el resultado de la resta es: " + (x-y);
msg.innerHTML += "<br>el resultado de la division es: " + (x/y);
msg.innerHTML += "<br>el residuo de la division es: " + (x%y);
msg.innerHTML += "<br>el cuadrado de y es: " + (y**2);
msg.innerHTML += "<br>el cubo de y es: " + (y**3);
