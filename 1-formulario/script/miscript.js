// console.log("Prueba hecha.");
// console.warn("Esto es un warning");
// console.error("Esto es un error");

// var hola = 'Saludo';
let quetal = 'Saludo 2';
const comoEstas = 'Bien';

let body = document.getElementById("body");
let nombre = document.getElementById("nombre");
let apellidos = document.getElementById("apellidos");
let nick = document.getElementById("nickname");
let email = document.getElementById("email");
let comentario = document.getElementById("comentario");
let datos = document.getElementById("datos");
let sexo = document.querySelector('input[name="sex"]:checked');


form.addEventListener("submit", function(event){
    event.preventDefault();    
    
    console.log(nombre.value);
    console.log(apellidos.value);
    console.log(email.value);
    console.log(sexo);
    datos.innerHTML = ` 
    <p> Hola ${nombre.value} ${apellidos.value}, que tal? </p>
    <p> y tu correo es ${email.value}, correcto?</p>`;

    
    
    body.classList.add("fondo");
}   
);

form.addEventListener("reset", function(event) {
    event.preventDefault();

    body.classList.remove("fondo");
    datos.innerHTML = '';
});

