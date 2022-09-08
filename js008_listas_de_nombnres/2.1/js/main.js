let nombres =[ "Enrique Plascencia", "Martín Nuñez", "Alexander Delgado", "Miguel Nuñez", "Mafer Hernández",
                "Mario Zarate", "juan Manuel Valadez", "akari Gutiérrez", "Nohemí Castañeda",
                "Gadi Medero", "Gustavo González", "Luis Enrique Medina"];
console.log(nombres.push("Enrique Plascencia", "Uriel Plascencia") );
console.log(nombres.pop("Uriel Plascencia"));
console.log(nombres.unshift("Enrique Plascencia", "Uriel Plascencia"));
console.log(nombres.shift());
console.log(nombres.reverse());

/* let lista = "";
nombres.forEach(n => {
    console.log(n.toLowerCase());
    lista += n + "<br>";
});
console.log(lista); */

let lista = "";
nombres.forEach(function (elemento, indice, arreglo){
    console.log(indice + ".-" + elemento.toLowerCase());
    lista += elemento + "<br>";
});
console.log(lista);



//mayusculas/////////////////
//for (let i = 0; i < nombres.length; i++) {
//     console.log(nombres[i].toUpperCase());
//     nombres[i] = nombres[i].toUpperCase();
//} 
//En este caso solo cambia los de la consola//

/* for (let n of nombres) {
    console.log(n.toUpperCase());
}
 */

let nu = nombres.map(function(n){
    return n.toUpperCase();
});
nombres=nu;

//fin mayusculas/////////////



console.log(nombres.sort());
console.log(nombres.indexOf("ENRIQUE PLASCENCIA"));
console.log(nombres.lastIndexOf("ENRIQUE PLASCENCIA"));
//console.log(nombres.);
                console.log(nombres.length);
console.log(nombres[4]); //Mario
let tabla = document.getElementById("tabla_nombres");
tabla.innerHTML = `<thead><tr><th scope="col">#</th><th scope="col">Nombre</th>
        <th scope="col">Apellido</th></tr></thead><tbody>`;
let a = "";    let n = "";
for (let cont = 0; cont < nombres.length; cont++)  {
    console.log(nombres[cont].split(" ").length);
    if (nombres[cont].split(" ").length==2) {
        n = nombres[cont].split(" ")[0];
        a = nombres[cont].split(" ")[1];
    } else {
        n = nombres[cont].split(" ")[0] + " " + nombres[cont].split(" ")[1];
        a = nombres[cont].split(" ")[2];
    }//else
    tabla.innerHTML+= `<tr> <th scope="row">${cont}</th>
            <td>${n}</td>
            <td>${a}</td></tr>`;
}//for cont
tabla.innerHTML += `</tbody>`; 