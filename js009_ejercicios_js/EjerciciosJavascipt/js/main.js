let numero1 = parseInt(document.getElementById("campo_a").value);
let numero2 = parseInt(document.getElementById("campo_b").value);
let numero3 = parseInt(document.getElementById("campo_c").value);
let numero4 = parseInt(document.getElementById("campo_d").value);
let numero5 = parseInt(document.getElementById("campo_e").value);

/* 
let res1 = document.getElementById("resultado1");
res1.innerHTML = 0;
 */
let boton1 = document.getElementById("boton_1");

boton1.addEventListener("click", function (e) {
    e.preventDefault();
    let numero1 = parseInt(document.getElementById("campo_a").value);
    let numero2 = parseInt(document.getElementById("campo_b").value);
    let numero3 = parseInt(document.getElementById("campo_c").value);
    let numero4 = parseInt(document.getElementById("campo_d").value);
    let numero5 = parseInt(document.getElementById("campo_e").value);

    if(numero1 >= numero2 
        && numero1 >= numero3
        && numero1 >= numero4
        && numero1 >= numero5
        ) { document.write("el numero mayor es: " + numero1);
            /* document.getElementById("resultado1").value = ("El numero mayor es: " + numero1); */
        } else if ( numero2 >= numero1 
            && numero2 >= numero3
            && numero2 >= numero4
            && numero2 >= numero5
        ) { document.write("el numero mayor es: " + numero2);

        } else if ( numero3 >= numero1 
            && numero3 >= numero2
            && numero3 >= numero4
            && numero3 >= numero5
        ) { document.write("el numero mayor es: " + numero3);

        } else if ( numero4 >= numero1 
            && numero4 >= numero2
            && numero4 >= numero3
            && numero4 >= numero5
        ) { document.write("el numero mayor es: " + numero4);

        } else { document.write("el numero mayor es: " + numero5);
        } 
});


let boton2 = document.getElementById("boton_2");
boton2.addEventListener("click", function (e) {
    e.preventDefault();
    let numero1 = parseInt(document.getElementById("campo_a").value);
    let numero2 = parseInt(document.getElementById("campo_b").value);
    let numero3 = parseInt(document.getElementById("campo_c").value);
    let numero4 = parseInt(document.getElementById("campo_d").value);
    let numero5 = parseInt(document.getElementById("campo_e").value);

    if(numero1 <= numero2 
        && numero1 <= numero3
        && numero1 <= numero4
        && numero1 <= numero5
        ) { document.write("el numero menor es: " + numero1);
            /* document.getElementById("resultado1").value = ("El numero mayor es: " + numero1); */
        } else if ( numero2 >= numero1 
            && numero2 <= numero3
            && numero2 <= numero4
            && numero2 <= numero5
        ) { document.write("el numero menor es: " + numero2);

        } else if ( numero3 <= numero1 
            && numero3 <= numero2
            && numero3 <= numero4
            && numero3 <= numero5
        ) { document.write("el numero menor es: " + numero3);

        } else if ( numero4 <= numero1 
            && numero4 <= numero2
            && numero4 <= numero3
            && numero4 <= numero5
        ) { document.write("el numero menor es: " + numero4);

        } else { document.write("el numero menor es: " + numero5);
        } 
});




//array/////////////////////////////////////
let boton3 = document.getElementById("boton_3");
boton3.addEventListener("click", function (e) {
    e.preventDefault();
    let numeros = [3, 5, 7, 1, 6];
    let mayor = numeros[0]
    for (let index = 0; index < numeros.length; index++) {
        if (numeros[index] > mayor) {
            mayor = numeros[index];
        }
        
    }
    console.log("El numero mayor es: " + mayor);

}
);


let boton4 = document.getElementById("boton_4");
boton4.addEventListener("click", function (e) {
    e.preventDefault();
    let numeros = [-1, 3, 4, 2, 6];
    let menor = numeros[0]
    for (let index = 0; index < numeros.length; index++) {
        if (numeros[index] < menor) {
            menor = numeros[index];
        }
        
    }
    console.log("El numero menor es: " + menor);

}


);

/////Escribir una función que permita saber si un número se repite dentro de un arreglo.///
/* _Caso 1_: Resultado esperado: El número 5 se encuentra más de una vez
[1, 22, 5, 17, 10, 5, 40, 5]

_Caso 2_: Resultado esperado: El número 7 se encuentra más de una vez
[7, 41, 5, 7, 10, 13, 2]

_Caso 3_: Resultado esperado: No hay números repetidos
[1, 22, 5, 14, 24, 31, 27, 15, 105] */


/* let boton5 = document.getElementById("boton_5");
boton5.addEventListener("click", function (e) {
    e.preventDefault(); */
let numeros1 = [1, 22, 5, 17, 10, 5, 40, 5];
let numeros2 = [7, 41, 5, 7, 10, 13, 2];
let numeros3 = [1, 22, 5, 14, 24, 31, 27, 15, 105];
let repetidos = function (numeros) {
    for (let i = 0; i < numeros.length; i++) {
        let cont = 0;
        for (let o = 0; o < numeros.length; o++) {
            if (numeros[i]==numeros[o]){
                cont++;
            } 
        } 
        if (cont!=1) {
        console.log(`El numero ${numeros[i]} se repite ${cont} veces`); 
        } /* else {console.log("ningun numero se repite")}   */   
        } 
    };

    repetidos (numeros1);
    repetidos (numeros2);
    repetidos (numeros3);


let pordesordenar = [105, 31, 14, 1, 2, 50, 24, 5]

console.log(desordenar(pordesordenar));

function desordenar(pordesordenar) {
    let numerosd = new Array();

    for (let i = 0, j=pordesordenar.length; i < pordesordenar.length; i++, j--) {
        if ((i%2)==0) {
            numerosd[j] = pordesordenar[j];
        } else {
            numerosd[i] = pordesordenar[j];
        }
        }
        return numerosd;
    }