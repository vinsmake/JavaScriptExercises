//is-valid
//is-invalid
let btn_submit = document.getElementById("btn_submit");

btn_submit.addEventListener("click", function(e){
    e.preventDefault();
    let campo1 = document.getElementById("validationServer01");
    let campo2 = document.getElementById("validationServer02");
    let campocity = document.getElementById("validationServer03");
    let campoestados = document.getElementById("validationServer04");
    let campocp = document.getElementById("validationServer05");
    let campotc = document.getElementById("invalidCheck3");
    console.log(campo1.value, campo2.value);
    console.log(typeof(campo1.value), typeof(campo2.value));
    console.log(campo1.value.length, campo2.value.length);

    if (campo1.value.length >= 3) {
        campo1.classList.remove("is-invalid");
        campo1.classList.add("is-valid");

    } else {
        campo1.classList.remove("is-valid");
        campo1.classList.add("is-invalid");
    }

    if (campo2.value.length >= 3) {
        campo2.classList.remove("is-invalid");
        campo2.classList.add("is-valid");

    } else {
        campo2.classList.remove("is-valid");
        campo2.classList.add("is-invalid");
    }

let cp = (campocp.value);
console.log(campocp.value.length);
console.log(! isNaN(cp));


    if ( 
        (campocp.value.length==5) 
        && 
        (! isNaN(cp)) 
        ) {
        campocp.classList.remove("is-invalid");
        campocp.classList.add("is-valid");

    } else {
        campocp.classList.remove("is-valid");
        campocp.classList.add("is-invalid");
    }

    console.log("Se ha seleccionado el estado numero: " + campoestados.selectedIndex);

    if (campoestados.selectedIndex==0) {
        campoestados.classList.remove("is-valid");
        campoestados.classList.add("is-invalid");
    } else {
        campoestados.classList.remove("is-invalid");
        campoestados.classList.add("is-valid");
    }

    if (campotc.checked) {
        campotc.classList.remove("is-invalid");
        campotc.classList.add("is-valid");
    } else {
        campotc.classList.remove("is-valid");
        campotc.classList.add("is-invalid");

    }


    campocity.classList.remove("is-invalid");
    campocity.classList.add("is-valid");
    for (let index = 0; index <  campocity.value.length; index++) {
        console.log(campocity.value.charAt(index));
        if (
            (! isNaN(campocity.value.charAt(index)))
            &&
            (campocity.value.charAt(index)!=" ")

            ) {
            campocity.classList.remove("is-valid");
            campocity.classList.add("is-invalid");
            break;
        }
        
    }




/* validaciones:
    1. Que exista el dato
    2. Longitud de la informacion de minimo 3 y maximo de 20 */



});




/*     campo1.classList.remove("is-valid");
    let campo2 = document.getElementById("validationServer02");
    campo2.classList.add("is-invalid"); */



