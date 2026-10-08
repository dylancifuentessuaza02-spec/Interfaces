
document.getElementById("siguiente").addEventListener("click", function(event) {
    document.getElementById("paso2").classList.toggle("activo");
    document.getElementById("paso1").classList.remove("activo");
});

document.getElementById("contraseña").addEventListener("click", function(event) {
    document.getElementById("paso3").classList.toggle("activo");
    document.getElementById("paso2").classList.remove("activo");
});