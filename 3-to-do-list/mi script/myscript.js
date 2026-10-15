let main = document.getElementById("main");
let boton = document.getElementById("boton");
let lista_completa = document.getElementById("lista");
let lista_ordenada = document.getElementById("lista_ordenada");
let tarea = document.getElementById("tarea");

boton.addEventListener("click", function(event){
    event.preventDefault();

    const agregar_tarea = document.createElement("li");
    agregar_tarea.className = "tarea";
    agregar_tarea.innerText = tarea.value;

    const agregar_boton = document.createElement("button");
    agregar_boton.className = "eliminar";
    agregar_boton.textContent = "Eliminar";
    agregar_boton.addEventListener("click", function(event) {
        event.preventDefault();

        this.parentNode.remove();
    });

    agregar_tarea.appendChild(agregar_boton);
    lista_ordenada.appendChild(agregar_tarea);
});

