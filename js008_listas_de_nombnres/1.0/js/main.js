let nombres =["Enrique", "Alan", "Saul", "Nena", "Joel", "Uriel"] //definir arreglo
console.log(nombres.length) //3
console.log(nombres[2]); //saul
console.log(nombres[0],nombres[1],nombres[2]); //Enrique Alan Saul

for (let index = 0; //inicio de variable
    index < nombres.length; index++) { //Mientras que el index sea menor a nombres, se va a ejecutar:
    console.log(nombres[index]); //lo que se ejecuta mientras nombres sea menor a cont
    }

let tabla = document.getElementById("tabla_nombres");
tabla.innerHTML = ` <thead>
    <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
    </tr>
</thead>
<tbody>`;

for (let index = 0; //inicio de variable
    index < nombres.length; index++) { //Mientras que el index sea menor a nombres, se va a ejecutar:
    console.log(nombres[index]); //lo que se ejecuta mientras nombres sea menor a cont
    tabla.innerHTML += `<tr>
    <th scope="row">${index}</th>
    <td>${nombres[index]}</td>
    <td></td>
</tr>`;
}
tabla.innerHTML += `</tbody>`;




/*     <tr>
        <th scope="row">1</th>
        <td></td>
        <td></td>
    </tr> */