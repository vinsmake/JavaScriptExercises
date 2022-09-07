//is-valid
//is-invalid
let btn_submit = document.getElementById("btn_submit");

btn_submit.addEventListener("click", function(e){
    e.preventDefault();
    let campo1 = document.getElementById("validationServer01");
    let campo2 = document.getElementById("validationServer02");
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
/* validaciones:
    1. Que exista el dato
    2. Longitud de la informacion de minimo 3 y maximo de 20 */



});




/*     campo1.classList.remove("is-valid");
    let campo2 = document.getElementById("validationServer02");
    campo2.classList.add("is-invalid"); */



