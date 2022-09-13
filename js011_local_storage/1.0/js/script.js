let btn_guardar = document.getElementById("btn-guardar");
let btn_ver = document.getElementById("btn-ver");
let btn_borrar = document.getElementById("btn-borrar");
let campo_data = document.getElementById("data");
let key = "info";

////json//////////////////////////////
let cont = 1;
let participantes = []; //nuevo arreglo
btn_guardar.addEventListener ("click", function(e) {
    e.preventDefault();
    console.log(participantes.length);
    let nombre = {"id": cont, "firstName": campo_data.value};
    console.log("nombre.firstName: ", nombre.firstName);
    console.log("id: ", nombre.id);
    cont++;
    participantes.push(nombre); //agregar elemento al arreglo
    console.log(participantes); //escribir el arreglo
 //   JSON.stringify(participantes) //parsear, traducir, reescribir participantes
    localStorage.setItem(key, JSON.stringify(participantes));
/*     sessionStorage.setItem("variableData", campo_data.value); */
/* localStorage.setItem("variableData", campo_data.value); */
});
////fin-json//////////////////////////////


btn_ver.addEventListener ("click", function(e) {
    e.preventDefault();
    let alert1 = document.getElementsByClassName("alert-success")[0];

 /*    if (sessionStorage.getItem("variableData") */
    if (localStorage.getItem(campo_data)){
        let tmp = JSON.parse(localStorage.getItem(key));
        alert1.innerHTML = "";
        tmp.forEach(element => {
            alert1.innerHTML += `${element.id}.- ${element.firstName} <br>`;
        });
        alert1.style.display = "block";
        setTimeout( ()=>{alert1.style.display = "none"} , 10000);
    } //if null
});
//            alert1.innerText = localStorage.getItem("variableData");
//             alert1.innerText = sessionStorage.getItem("variableData");

            //timer que // ejecute => cambiar estilo      // cuando pasen 3000 milisegundos


btn_borrar.addEventListener ("click", function(e) {
    e.preventDefault();
    localStorage.removeItem(key);
/*     sessionStorage.removeItem("variableData"); */
});