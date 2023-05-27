const formUsuarios = document.getElementById("formUsuarios");
const btnSubmit = document.getElementById("btnSubmit");
const btnReset = document.getElementById("btnReset");
const errorDiv = document.getElementById("errorDiv");
const errorLabel = document.getElementById("errorLabel");

const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const dni = document.getElementById("dni");
const email = document.getElementById("email");
const contraseña1 = document.getElementById("contraseña1");
const contraseña2 = document.getElementById("contraseña2");
let validar = false;

formUsuarios.addEventListener("submit", function (event) {
    event.preventDefault();
});

//Funcion para validar que todos los datos tengan contenido
function validarFormulario() {
    alert("entro en validar")
    alert("nombre.value: " + nombre.value);
    if (nombre.value == "" || apellido.value == "" || dni.value == "" || email.value == "" || contraseña1.value == "" || contraseña2.value == "") {
        errorLabel.innerText="Para poder guardar el usuario debe completar todos sus datos!";
        validar = false;
        return false;
    } else {
        if (contraseña1.value != contraseña2.value) {
            errorLabel.innerText="Las contraseñas no coinciden!, ingreselas nuevamente";
            contraseña1.value="";
            contraseña2.value="";
            contraseña1.focus();
            validar = false;
            return false;
        } else {
        validar = true;
        return true;
        }
    }
}

function enviarFormulario() {
    alert("se envia el form");
    alert(`
        DATOS PARA ENVIAR CORREO DE VERIFICACIÓN
        Nombre: ${nombre}
        Apellido: ${apellido}
        DNI: ${dni}
        Usuario/Email: ${email}
        Contraseña: ${contraseña}
        `);

    //Guardar los datos del usuario en un JSON para la BD
    let usuarios = {
        nombre,
        apellido,
        dni,
        email,
        contraseña1,
    };
    //Json
    // let json = JSON.stringify(usuarios);

    //Guardar los datos en el localStorage para simular el funcionamiento de la app
    // localStorage.setItem("nombre", nombre);
    // localStorage.setItem("apellido", apellido);
    // localStorage.setItem("email", email);
    // localStorage.setItem("contraseña", contraseña);

    formUsuarios.reset();
}

btnReset.addEventListener("click", () => {
    formUsuarios.reset();
});

btnSubmit.addEventListener("click", () => {
    
    if (validarFormulario()) {
        enviarFormulario();
    }
});
