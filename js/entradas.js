//Lógica para la vta de entradas
const formEntradas = document.getElementById('formEntradas')
const formPelicula = document.getElementById('formPelicula')
let selectCine = document.getElementById('selectCine')
const saludoUsr = document.getElementById('saludoUsr')
selectCine.addEventListener("change", onChangeCine)

let selectFormato = null
let selectDia = null
let selectHora = null
let siguienteCine = null
let selectPrecio = null
let siguientePrecio = null
let selectAsiento = null
let siguienteAsiento = null
let selectTarjeta = null
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

//podría cargar para cada película las opciones de horas y formatos, en array dentro del objeto por ejemplo
//proxima entrega si llego
function onChangeCine() {
    const selectedOption = selectCine.options[selectCine.selectedIndex].value
    // console.log(`opcion: ${selectedOption}`)
    if (validarCine) {
        let htmlFormato = document.createElement('div')
        htmlFormato.innerHTML = `
            <select name="selectFormato" id="selectFormato">
                <option selected value="0">Seleccione Formato...</option>
                <option value="2D-Subtitulada">2D-Subtitulada</option>
                <option value="2D-Doblada">2D-Doblada</option>
                <option value="3D-Doblada">3D-Doblada</option>
            </select>
            <p></p>
        `
        formPelicula.appendChild(htmlFormato)
        validarCine = false
        selectFormato = document.getElementById('selectFormato')
        selectFormato.addEventListener("change", onChangeFormato)
    }
}

function onChangeFormato() {
    const selectedOption = selectFormato.options[selectFormato.selectedIndex].value
    // console.log(`opcion: ${selectedOption}`)
    if (validarFormato) {
        let htmlDia = document.createElement('div')
        htmlDia.innerHTML = `
            <select name="selectDia" id="selectDia">
                <option selected="selected" value="">Seleccione Día...</option>                
            </select>
            <p></p>
        `
        formPelicula.appendChild(htmlDia)
        validarFormato = false
        selectDia = document.getElementById('selectDia')
        const diasAvanzados = 7;
        const opcionesSelect = cargarDias(diasAvanzados);
        selectDia.innerHTML = opcionesSelect.join('');
        selectDia.addEventListener("change", onChangeDia)
    }
}

//podría cargar para cada película las opciones de horas y formatos, en array dentro del objeto por ejemplo
//proxima entrega si llego
function onChangeDia() {
    const selectedOption = selectDia.options[selectDia.selectedIndex].value
    // console.log(`opcion: ${selectedOption}`)
    if (validarDia) {
        let htmlHora = document.createElement('div')
        htmlHora.innerHTML = `
            <select name="selectHora" id="selectHora">
                <option selected="selected" value="">Seleccione Hora...</option>
                <option value="1">14:30</option>
                <option value="2">16:50</option>
                <option value="3">22:20</option>
            </select>
            <p></p>
        `
        formPelicula.appendChild(htmlHora)
        validarDia = false
        selectHora = document.getElementById('selectHora')
        selectHora.addEventListener("change", onChangeHora)
    }
}

function onChangeHora() {
    const selectedOption = selectHora.options[selectHora.selectedIndex].value
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
    formPrecio.classList.remove("disableElement");
    let htmlPrecio = document.createElement('div')
    htmlPrecio.innerHTML = `
        <select name="selectPrecio" id="selectPrecio">
            <option selected value="0">Seleccione el Precio...</option>
            <option value="NORMAL">NORMAL</option>
            <option value="Matiné">Matiné</option>
            <option value="2x1">2x1</option>
        </select>
        <p></p>
        `
    formPrecio.appendChild(htmlPrecio)
    selectPrecio = document.getElementById('selectPrecio')
    selectPrecio.addEventListener("change", onChangePrecio)
}

function onChangePrecio() {
    const selectedOption = selectPrecio.options[selectPrecio.selectedIndex].value
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
    formAsiento.classList.remove("disableElement");
    let htmlAsiento = document.createElement('div')
    htmlAsiento.innerHTML = `
        <select name="selectAsiento" id="selectAsiento">
            <option selected vaLue="">Seleccione asiento...</option>
            <option value="F1-A1">F1-A1</option>
            <option value="F1-A2">F1-A2</option>
            <option value="F2-A6<">F2-A6</option>
            <option value="F7-A1">F7-A1</option>
            <option value="F7-A1">F7-A2</option>
            <option value="F7-A1">F7-A3</option>
        </select>
        <p></p>
        `
    formAsiento.appendChild(htmlAsiento)
    selectAsiento = document.getElementById('selectAsiento')
    selectAsiento.addEventListener("change", onChangeAsiento)
}

function onChangeAsiento() {
    const selectedOption = selectAsiento.options[selectAsiento.selectedIndex].value
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
    formResumen.classList.remove("disableElement");
    let htmlResumen = document.createElement('div')
    htmlResumen.innerHTML = `
        <select name="selectTarjeta" id="selectTarjeta">
            <option selected="selected" value="">Seleccione la Tarjeta...</option>
            <option value="VISA DEBITO">VISA DEBITO</option>
            <option value="VISA CREDITO">VISA CREDITO</option>
            <option value="MASTERCARD">MASTERCARD</option>
        </select>
        <p></p>
        `
    formResumen.appendChild(htmlResumen)
    selectTarjeta = document.getElementById('selectTarjeta')
    selectTarjeta.addEventListener("change", onChangeTarjeta)
}

function onChangeTarjeta() {
    const selectedOption = selectTarjeta.options[selectTarjeta.selectedIndex].value
    // console.log(`opcion: ${selectedOption}`)
    if (validarTarjeta) {
        let htmlSiguiente = document.createElement('div')
        htmlSiguiente.innerHTML = `
            <a class="btn btn-dark" id="siguienteResumen">SIGUIENTE</a>
            <p></p>
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

//Días de le semana: desde el día actual + 7
function cargarDias(dias) {
    const fechaActual = new Date();
    const diasAvanzados = dias - fechaActual.getDay();
    if (diasAvanzados < 0) {
        diasAvanzados += 7;
    }

    const fechaFinal = fechaActual.getDate() + diasAvanzados;
    
    const opciones = [];
    opciones.push(
        `<option selected value="0">Seleccione el Día...</option> `
    );
    for (let i = 0; i < 8; i++) {
        const fecha = new Date(fechaActual.getFullYear(), fechaActual.getMonth(), fechaActual.getDate() + i);
        const dia = fecha.getDay();
        const nombreDia = [
            'Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'
        ];
        const nombreMes = [
            'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
            'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
        ];
    
        opciones.push(
            `<option value="${fecha.getDate()}-${nombreDia} de ${nombreMes[fecha.getMonth()]} de ${fecha.getFullYear()}">${nombreDia[fecha.getDay()]}, ${fecha.getDate()} de ${nombreMes[fecha.getMonth()]} de ${fecha.getFullYear()}</option>`
        );
    }
    return opciones;
}

function validarUsr() {
    if (localStorage.getItem('nombre') != null && localStorage.getItem('apellido') != null && localStorage.getItem('contraseña') !=null || localStorage.getItem('email') != null) {
        saludoUsr.classList.remove("disableElement");
        saludoUsr.innerHTML = `Hola ${localStorage.getItem('nombre')} ${localStorage.getItem('apellido')}!`;
        selectCine.classList.remove("disableElement");
    } else {
        saludoUsr.classList.remove("disableElement");
        saludoUsr.innerHTML = 'Para comprar entradas, si ya está registrado por favor identifíquese con su email y contraseña <a class="btn btn-light" href="./login.html">AQUÍ</a>';
        selectCine.classList.add("disableElement");
    }
}

validarUsr();