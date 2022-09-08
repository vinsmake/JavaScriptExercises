let numero1 = parseInt(document.getElementById("campo_a").value);
let numero2 = parseInt(document.getElementById("campo_b").value);
let numero3 = parseInt(document.getElementById("campo_c").value);

/* 
let res1 = document.getElementById("resultado1");
res1.innerHTML = 0;
 */
let boton1 = document.getElementById("boton_1");

boton1.addEventListener("click", function (e) {
    e.preventDefault();
    let numero1 = parseInt(document.getElementById("campo_a").value);
    let numero1class = document.getElementById("campo_a");
    let numero2 = parseInt(document.getElementById("campo_b").value);
    let numero2class = document.getElementById("campo_b");
    let numero3 = parseInt(document.getElementById("campo_c").value);
    let numero3class = document.getElementById("campo_c");
    if ((numero1 >= 1)
        &&
        (numero1 <= 100))
        {
    
        if (numero1 >= numero2 
            && numero1 >= numero3
            ) { document.write("el numero mayor es: " + numero1);
                /* document.getElementById("resultado1").value = ("El numero mayor es: " + numero1); */
            } else if ( numero2 >= numero1 
                && numero2 >= numero3
            ) { document.write("el numero mayor es: " + numero2);

            } else { document.write("el numero mayor es: " + numero3);
            } 
    } else {
        numero1class.classList.remove("is-valid");
        numero1class.classList.add("is-invalid");
    };
});


// let boton2 = document.getElementById("boton_2");
// boton2.addEventListener("click", function (e) {
//     e.preventDefault();
//     let numero1 = parseInt(document.getElementById("campo_a").value);
//     let numero2 = parseInt(document.getElementById("campo_b").value);
//     let numero3 = parseInt(document.getElementById("campo_c").value);
//     let numero4 = parseInt(document.getElementById("campo_d").value);
//     let numero5 = parseInt(document.getElementById("campo_e").value);

//     if(numero1 <= numero2 
//         && numero1 <= numero3
//         && numero1 <= numero4
//         && numero1 <= numero5
//         ) { document.write("el numero menor es: " + numero1);
//             /* document.getElementById("resultado1").value = ("El numero mayor es: " + numero1); */
//         } else if ( numero2 >= numero1 
//             && numero2 <= numero3
//             && numero2 <= numero4
//             && numero2 <= numero5
//         ) { document.write("el numero menor es: " + numero2);

//         } else if ( numero3 <= numero1 
//             && numero3 <= numero2
//             && numero3 <= numero4
//             && numero3 <= numero5
//         ) { document.write("el numero menor es: " + numero3);

//         } else if ( numero4 <= numero1 
//             && numero4 <= numero2
//             && numero4 <= numero3
//             && numero4 <= numero5
//         ) { document.write("el numero menor es: " + numero4);

//         } else { document.write("el numero menor es: " + numero5);
//         } 
// });


