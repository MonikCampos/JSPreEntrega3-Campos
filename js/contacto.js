const formContacto = document.getElementById("formContacto")
const btnSubmit = document.getElementById("btnSubmit")
const btnReset = document.getElementById("btnReset")

formContacto.addEventListener("submit", function (event) {
    event.preventDefault();
});

btnReset.addEventListener('click', () => {
    formContacto.reset();
});
btnSubmit.addEventListener('click', () => {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let email = document.getElementById("email").value;
    let celular = document.getElementById("celular").value;
    let mensaje = document.getElementById("mensaje").value;

    // Enviar los datos a un correo electrónico
    alert(`
    DATOS PARA ENVIAR CORREO
    Nombre: ${nombre}
    Apellido: ${apellido}
    Email: ${email}
    Celular: ${celular}
    Mensaje: ${mensaje}
    `);

    formContacto.reset();
});