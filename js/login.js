const formLogin = document.getElementById("formLogin");
const btnLogin = document.getElementById("btnLogin");
const errorDiv = document.getElementById("errorDiv");
const errorLabel = document.getElementById("errorLabel");

const nombreLogin = document.getElementById("nombreLogin");
const contraseñaLogin = document.getElementById("contraseñaLogin");

let validarLogin = false;

formLogin.addEventListener("submit", function (event) {
    event.preventDefault();
});

//Funcion para validar del loguin
function validarLogin() {
    if (usuarioLogin.value == "" || contraseñaLogin.value == "") {
        errorLabel.innerText="Debe ingresar su usuario y contraseña";
        errorDiv.classList.remove("disableElement");
        validarLogin = false;
        return false;
    } else {
        if (usuarioLogin.value != localStorage.getItem("email") || contraseñaLogin.value != localStorage.getItem("contraseña"))  {
            errorLabel.innerText="El usuario y/o la contraseña no coinciden!, ingreselos nuevamente";
            errorDiv.classList.remove("disableElement");
            usuarioLogin.focus();
            validarLogin = false;
            return false;
        } else {
        validarLogin = true;
        return true;
        }
    }
}

function enviarLogin() {
    //Guardar los datos del usuario en un JSON para la BD
    // let usuario = {
    //     nombre: nombre.value,
    //     apellido: apellido.value,
    //     dni: dni.value,
    //     email: email.value,
    //     contraseña1: contraseña1.value
    // };
    
    //Json
    // let json = JSON.stringify(usuario);
    //Guardar en BD
    
    //Guardar los datos en el localStorage para simular el funcionamiento de la app
    // localStorage.setItem("nombre", nombre.value);
    // localStorage.setItem("apellido", apellido.value);
    // localStorage.setItem("email", email);
    // localStorage.setItem("contraseña", contraseña);

    // formUsuarios.reset();
    errorLabel.innerText="paso";
}

btnLogin.addEventListener("click", () => {
    if (validarLogin()) {
        enviarLogin();
        // 
        alert("paso validacion de login, enviar a entradas");
    }
});
