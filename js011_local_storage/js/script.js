let btn_guardar = document.getElementById("btn-guardar");
let btn_ver = document.getElementById("btn-ver");
let campo_data = document.getElementById("data");

btn_guardar.addEventListener ("click", function(e) {
    e.preventDefault();
    sessionStorage.setItem("variableData", campo_data.value);
});