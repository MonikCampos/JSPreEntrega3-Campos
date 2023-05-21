const formEntradas = document.getElementById('formEntradas')
const formPelicula = document.getElementById('formPelicula')
const cine = document.getElementById('cine')
cine.addEventListener("change", onChangeCine)

let formato = null
let dia = null
let hora = null
let siguienteCine = null
let precio = null
let siguientePrecio = null
let asiento = null
let siguienteAsiento = null
let tarjeta = null
let siguienteResumen = null

let validarCine = true
let validarFormato = true
let validarDia = true
let validarHora = true
let validarPrecio = true
let validarAsiento = true
let validarTarjeta = true
let validarResumen = true

formEntradas.addEventListener('submit', function (event) {
    event.preventDefault()
    if (validar) {
        envioFormulario()
    }
});

function onChangeCine() {
    const selectedOption = cine.options[cine.selectedIndex].value
    // console.log(`opcion: ${selectedOption}`)
    if (validarCine) {
        console.log("validar=" + validarCine)
        let htmlFormato = document.createElement('div')
        htmlFormato.innerHTML = `
            <p>Seleccione el <strong>formato</strong></p>
            <select name="selectFormato" id="formato">
                <option selected="selected" value="">Seleccione Formato...</option>
                <option value="1">Subtitulada</option>
                <option value="2">Doblada</option>
                <option value="3">3D</option>
            </select>
        `
        formPelicula.appendChild(htmlFormato)
        validarCine = false
        formato = document.getElementById('formato')
        formato.addEventListener("change", onChangeFormato)
    }
}

function onChangeFormato() {
    const selectedOption = formato.options[formato.selectedIndex].value
    // console.log(`opcion: ${selectedOption}`)
    if (validarFormato) {
        console.log("validar true")
        let htmlDia = document.createElement('div')
        htmlDia.innerHTML = `
            <p>Seleccione el <strong>día</strong>
            </p>
            <select name="selectDia" id="dia">
                <option selected="selected" value="">Seleccione Día...</option>
                <option value="1">Hoy</option>
                <option value="2">Mañana</option>
                <option value="3">Pasado</option>
            </select>
        `
        formPelicula.appendChild(htmlDia)
        validarFormato = false
        dia = document.getElementById('dia')
        dia.addEventListener("change", onChangeDia)
    }
}

function onChangeDia() {
    const selectedOption = dia.options[dia.selectedIndex].value
    // console.log(`opcion: ${selectedOption}`)
    if (validarDia) {
        let htmlHora = document.createElement('div')
        htmlHora.innerHTML = `
            <p>Seleccione la <strong>hora</strong></p>
            <select name="selectHora" id="hora">
                <option selected="selected" value="">Seleccione Hora...</option>
                <option value="1">14:30</option>
                <option value="2">16:50</option>
                <option value="3">22:20</option>
            </select>
        `
        formPelicula.appendChild(htmlHora)
        validarDia = false
        hora = document.getElementById('hora')
        hora.addEventListener("change", onChangeHora)
    }
}

function onChangeHora() {
    const selectedOption = hora.options[hora.selectedIndex].value
    // console.log(`opcion: ${selectedOption}`)
    if (validarHora) {
        let htmlSiguiente = document.createElement('div')
        htmlSiguiente.innerHTML = `
            <a class="btn btn-dark" id="siguienteCine">SIGUIENTE</a>
        `
        formPelicula.appendChild(htmlSiguiente)
        validarHora = false
        siguienteCine = document.getElementById('siguienteCine')
        siguienteCine.addEventListener("click", sectionPrecio)
    }
}

function sectionPrecio() {
    let htmlPrecio = document.createElement('div')
    htmlPrecio.innerHTML = `
        <h3>Selección de precio</h3>
        <p>Seleccione el <strong>precio</strong></p>
        <select name="selectPrecio" id="precio">
            <option selected="selected" value="">Seleccione Precio...</option>
            <option value="7">NORMAL</option>
            <option value="8">TARDE</option>
            <option value="9">2x1</option>
        </select>
        `
    formPrecio.appendChild(htmlPrecio)
    precio = document.getElementById('precio')
    precio.addEventListener("change", onChangePrecio)
}

function onChangePrecio() {
    const selectedOption = precio.options[precio.selectedIndex].value
    // console.log(`opcion: ${selectedOption}`)
    if (validarPrecio) {
        let htmlSiguiente = document.createElement('div')
        htmlSiguiente.innerHTML = `
            <a class="btn btn-dark" id="siguientePrecio">SIGUIENTE</a>
        `
        formPrecio.appendChild(htmlSiguiente)
        validarPrecio = false
        siguientePrecio = document.getElementById('siguientePrecio')
        siguientePrecio.addEventListener("click", sectionAsiento)
    }
}

function sectionAsiento() {
    let htmlAsiento = document.createElement('div')
    htmlAsiento.innerHTML = `
        <h3>Selección de asiento</h3>
        <p>Seleccione el <strong>asiento</strong></p>
        <select name="selectPrecio" id="asiento">
            <option selected="selected" value="">Seleccione asiento...</option>
            <option value="10">A1</option>
            <option value="11">A2</option>
            <option value="12">A3</option>
        </select>
        `
    formAsiento.appendChild(htmlAsiento)
    asiento = document.getElementById('asiento')
    asiento.addEventListener("change", onChangeAsiento)
}

function onChangeAsiento() {
    const selectedOption = asiento.options[asiento.selectedIndex].value
    // console.log(`opcion: ${selectedOption}`)
    if (validarAsiento) {
        let htmlSiguiente = document.createElement('div')
        htmlSiguiente.innerHTML = `
            <a class="btn btn-dark" id="siguienteAsiento">SIGUIENTE</a>
        `
        formAsiento.appendChild(htmlSiguiente)
        validarAsiento = false
        siguienteAsiento = document.getElementById('siguienteAsiento')
        siguienteAsiento.addEventListener("click", sectionResumen)
    }
}

function sectionResumen() {
    let htmlResumen = document.createElement('div')
    htmlResumen.innerHTML = `
        <h3>Resumen de transacción</h3>
        <p>Selección de <strong>tarjeta</strong> de pago.</p>
        <select name="selectTarjeta" id="tarjeta">
            <option selected="selected" value="">Seleccione Tarjeta...</option>
            <option value="13">VISA DEBITO</option>
            <option value="14">VISA CREDITO</option>
            <option value="15">MASTERCARD</option>
        </select>
        `
    formResumen.appendChild(htmlResumen)
    tarjeta = document.getElementById('tarjeta')
    tarjeta.addEventListener("change", onChangeTarjeta)
}

function onChangeTarjeta() {
    const selectedOption = tarjeta.options[tarjeta.selectedIndex].value
    // console.log(`opcion: ${selectedOption}`)
    if (validarTarjeta) {
        let htmlSiguiente = document.createElement('div')
        htmlSiguiente.innerHTML = `
            <a class="btn btn-dark" id="siguienteResumen">SIGUIENTE</a>
        `
        formResumen.appendChild(htmlSiguiente)
        validarTarjeta = false
        siguienteResumen = document.getElementById('siguienteResumen')
        siguienteResumen.addEventListener("click", pagarEntrada)
    }
}

function pagarEntrada() {
    let htmlPagar = document.createElement('div')
    htmlPagar.innerHTML = `
        <a class="btn btn-dark" id="pagar">PAGAR</a>
    `
    formPagar.appendChild(htmlPagar)
    pagar = document.getElementById('pagar')
    pagar.addEventListener("click", confirmarPago)
}

function confirmarPago() {
    respuesta = prompt('Está seguro de confirmar la compra S/N: ')
    if (respuesta === 'S') {
        envioFormulario
    } else {
        alert('La compra fue cancelada.')
    }
}

function envioFormulario() {
    // const usuario = inputsForm[0].value;
    // const cine = inputsForm[1].value;
    // const formato = inputsForm[2].value;
    // const fecha = inputsForm[3].value;
    // const dia = fecha.getDate();
    // const mes = fecha.getMonth() + 1;
    // const año = fecha.getFullYear();
    // const hora = fecha.getHours();
    // const fechaFull = `${dia}/${mes}/${año}`;
    // const precio = inputsForm[4].value;
    // const asiento = inputsForm[4].value;

    // const datos = {
    //     nombre,
    //     apellido,
    //     dni,
    //     email,
    //     telefono,
    //     direccion,
    //     monto,
    //     plazo,
    //     tasa,
    //     cuota,
    //     interes,
    //     total,
    //     fechaActual,
    //     fechaVencimiento
    // }
    console.log("Se envió")
    // formulario2.reset();
    // form.reset();
    // ultimoFormulario.classList.add('disable');
    // resultadoContainer.classList.add('disable');
    // botonCalcular2.classList.add('buttonDisable');
    // validar2 = false;
    // validar = false;
    // return datos;
}