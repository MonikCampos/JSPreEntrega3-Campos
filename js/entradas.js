//Lógica para la vta de entradas
const formEntradas = document.getElementById('formEntradas')
const formPelicula = document.getElementById('formPelicula')
const formPrecio = document.getElementById('formPrecio')
const formAsiento = document.getElementById('formAsiento')
const formResumen = document.getElementById('formResumen')
let selectCine = document.getElementById('selectCine')
const saludoUsr = document.getElementById('saludoUsr')
const faUsr = document.getElementById('faUsr')
const sectionMovie = document.getElementById('sectionMovie')
selectCine.addEventListener('change', onChangeCine)

let selectPelicula = null
let selectFormato = null
let selectDia = null
let selectHora = null
let siguienteCine = null
let selectPrecio = null
let selectCantidad = null
let siguientePrecio = null
let selectAsiento = null
let siguienteAsiento = null
let selectTarjeta = null
let siguienteResumen = null

let validar = false
let validarPelicula = false
let validarCine = false
let validarFormato = false
let validarDia = false
let validarHora = false
let validarPrecio = false
let validarCantidad = false
let validarAsiento = false
let validarTarjeta = false
let validarResumen = false

formEntradas.addEventListener('submit', function (event) {
    event.preventDefault()
    if (validar) {
        envioFormulario()
    }
});

function validarUsr() {
    if (localStorage.getItem('nombre') != null && localStorage.getItem('apellido') != null && localStorage.getItem('contraseña') !=null || localStorage.getItem('email') != null) {
        //Saluda y habilita a comprar entradas
        saludoUsr.classList.remove("disableElement");
        saludoUsr.innerHTML = `Hola ${localStorage.getItem('nombre')} ${localStorage.getItem('apellido')}!`;
        //Asigna el nombre del usuario logueado a la página
        faUsr.innerHTML = localStorage.getItem('nombre');
        formPelicula.classList.remove("disableElement");
        selectCine.classList.remove("disableElement");
    } else {
        saludoUsr.classList.remove("disableElement");
        saludoUsr.innerHTML = 'Para comprar entradas, si ya está registrado por favor identifíquese con su email y contraseña <a class="btn btn-light" href="./login.html">AQUÍ</a>';
        selectCine.classList.add("disableElement");
        formPelicula.classList.add("disableElement");
    }
}
function validarMovie() {
    if (localStorage.getItem('pelicula') != null) {
        //Muestra el nombre de la película
        sectionMovie.innerHTML = `Película seleccionada: ${localStorage.getItem('pelicula')}<br> 
        <a class="btn btn-dark" id="otraPelicula">SELECCIONAR OTRA PELÍCULA</a> 
        <a class="btn btn-dark" href="../index.html">IR A CARTELERA</a>`;
        let otraPelicula = document.getElementById("otraPelicula");
        otraPelicula.addEventListener('click', function () {
            //Limpia la selección de la película
            selectCine.classList.add("disableElement");
            localStorage.setItem('pelicula', null);
            sectionMovie.innerHTML = `<h3>Selección de película</h3>
                <select name="selectPelicula" id="selectPelicula">
                    <option selected value="0">Seleccione Película...</option>
                    <option value="La Sirenita">La Sirenita</option>
                    <option value="Cuando ellas quieren más">Cuando ellas quieren más</option>
                    <option value="Amor a primer mensaje">Amor a primer mensaje</option>
                </select>
            <p></p>
            `;
            selectPelicula = document.getElementById('selectPelicula')
            selectPelicula.addEventListener("change", onChangePelicula)
        });
        validarPelicula=true;
        return true;
    } else {
        sectionMovie.innerHTML = `<h3>Selección de película</h3>
        <select name="selectPelicula" id="selectPelicula">
            <option selected value="0">Seleccione Película...</option>
            <option value="La Sirenita">La Sirenita</option>
            <option value="Cuando ellas quieren más">Cuando ellas quieren más</option>
            <option value="Amor a primer mensaje">Amor a primer mensaje</option>
        </select>
    <p></p>
    `;
    selectPelicula = document.getElementById('selectPelicula')
    selectPelicula.addEventListener("change", onChangePelicula)
    validarPelicula=false;
    return false;
    }
}

validarUsr();
validarMovie();

//Si se seleccionó peli, la guarda en el localstorage y carga el select de Formato
function onChangePelicula() {
    const selectedOption = selectPelicula.options[selectPelicula.selectedIndex].value
    if (validarCine) {
        localStorage.setItem("pelicula", selectedOption)
    } else {
        localStorage.setItem("pelicula", selectedOption)
        selectCine.classList.remove("disableElement")
        validarPelicula = true
    }
}

//Si se seleccionó cine, lo guarda en el localstorage y carga el select de Formato
function onChangeCine() {
    const selectedOption = selectCine.options[selectCine.selectedIndex].value
    // console.log(`opcion: ${selectedOption}`)
        if (validarCine) {
            localStorage.setItem("cineEntrada", selectedOption);
        } else {
            localStorage.setItem("cineEntrada", selectedOption);
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
            validarCine = true
            selectFormato = document.getElementById('selectFormato')
            selectFormato.addEventListener("change", onChangeFormato)
        }
}


//Si se seleccionó formato, lo guarda en el localstorage y carga el select de día (una semana), hice la función
function onChangeFormato() {
    const selectedOption = selectFormato.options[selectFormato.selectedIndex].value
    // console.log(`opcion: ${selectedOption}`)
    if (validarFormato) {
            localStorage.setItem("formatoEntrada", selectedOption)
        } else {
            localStorage.setItem("formatoEntrada", selectedOption)
            let htmlDia = document.createElement('div')
            htmlDia.innerHTML = `
                <select name="selectDia" id="selectDia">              
                </select>
                <p></p>
            `
            formPelicula.appendChild(htmlDia)
            validarFormato = true
            selectDia = document.getElementById('selectDia')
            const diasAvanzados = 7;
            const opcionesSelect = cargarDias(diasAvanzados);
            selectDia.innerHTML = opcionesSelect.join('');
            selectDia.addEventListener("change", onChangeDia)
        }
}

//Si se seleccionó formato, lo guarda en el localstorage y carga el select de hora de la función
function onChangeDia() {
    const selectedOption = selectDia.options[selectDia.selectedIndex].value
    // console.log(`opcion: ${selectedOption}`)
    if (validarDia) {
        localStorage.setItem("diaEntrada", selectedOption)
        } else {
            localStorage.setItem("diaEntrada", selectedOption)
            let htmlHora = document.createElement('div')
            htmlHora.innerHTML = `
                <select name="selectHora" id="selectHora">
                    <option selected="selected" value="">Seleccione Hora...</option>
                    <option value="14:30">14:30</option>
                    <option value="16:50">16:50</option>
                    <option value="18:10">18:10</option>
                    <option value="22:20">22:20</option>
                </select>
                <p></p>
            `
            formPelicula.appendChild(htmlHora)
            validarDia = true
            selectHora = document.getElementById('selectHora')
            selectHora.addEventListener("change", onChangeHora)
        }
}

//Si se seleccionó cine, formato, día y hora , aparece el btn siguiente, guarda hora en el localstorage 
//Muestra los datos seleccionados hasta el momento
function onChangeHora() {
    const selectedOption = selectHora.options[selectHora.selectedIndex].value
    // console.log(`opcion: ${selectedOption}`)
    if (validarHora) {
        localStorage.setItem("horaEntrada", selectedOption);
        } else {
            localStorage.setItem("horaEntrada", selectedOption);
            let htmlSiguiente = document.createElement('div')
            htmlSiguiente.innerHTML = `
                <p>
                    <a class="btn btn-dark" id="siguienteCine">SIGUIENTE</a>
                </p>
            `
            formPelicula.appendChild(htmlSiguiente)
            validarHora = false
            siguienteCine = document.getElementById('siguienteCine')
            siguienteCine.addEventListener("click", sectionPrecio)
        }
}

function sectionPrecio() {
    sectionMovie.classList.add("disableElement")
    formPelicula.classList.add("disableElement")
    formPrecio.classList.remove("disableElement")
    let htmlPrecio = document.createElement('div')
    htmlPrecio.innerHTML = `
        <h4>Usted ha seleccionado la película: ${localStorage.getItem('pelicula')}. <br>Formato ${localStorage.getItem('formatoEntrada')}, 
        en el cine ${localStorage.getItem('cineEntrada')}. <br>Día: ${localStorage.getItem('diaEntrada')} 
        a las ${localStorage.getItem('horaEntrada')} hrs.</h4>
        <br>
        <p>
        <select name="selectPrecio" id="selectPrecio">
            <option selected value="0">Seleccione el Precio...</option>
            <option value="Adultos-$1500">Adultos-$1500</option>
            <option value="Menores hasta 12 años-$1100">Menores hasta 12 años-$1100</option>
            <option value="Matiné-$1100">Matiné-$1100</option>
            <option value="2x1-$1700">2x1-$1700</option>
        </select>
        <select name="selectCantidad" id="selectCantidad" class="disableElement">
            <option selected value="0">Cantidad de entradas...</option>
            <option value=1>1</option>
            <option value=2>2</option>
            <option value=3>3</option>
            <option value=4>4</option>
            <option value=5>5</option>
            <option value=6>6</option>
            <option value=7>7</option>
            <option value=8>8</option>
            <option value=9>9</option>
            <option value=10>10</option>
        </select>
        </p>
        <p>Máximo 10 entradas por transaccion.</p>
        <p>Para entradas con cargo se cobrarán $50 por cada una en concepto de costo por servicio.</p>
        <p>Promociones: Los beneficios 2x1 incluyen cada uno dos entradas, seleccione solo 1 para obtener 2 entradas.</p>
        `
    formPrecio.appendChild(htmlPrecio)
    selectPrecio = document.getElementById('selectPrecio')
    selectPrecio.addEventListener("change", onChangePrecio)
    
    selectCantidad = document.getElementById('selectCantidad')
    selectCantidad.addEventListener("change", onChangeCantidad)
}

function onChangePrecio() {
    const selectedOption = selectPrecio.options[selectPrecio.selectedIndex].value
    // console.log(`opcion: ${selectedOption}`)
    if (validarPrecio) {
        localStorage.setItem("precioEntrada", selectedOption)
    } else {
        localStorage.setItem("precioEntrada", selectedOption)
        selectCantidad.classList.remove('disableElement')
        validarPrecio = true
    }
}

function onChangeCantidad() {
    const selectedOption = selectCantidad.options[selectCantidad.selectedIndex].value
    // console.log(`opcion: ${selectedOption}`)
    if (validarCantidad) {
        localStorage.setItem("cantidadEntrada", selectedOption)
    } else {
        localStorage.setItem("cantidadEntrada", selectedOption)
        let htmlSiguiente = document.createElement('div')
        htmlSiguiente.innerHTML = `
        <p>
            <a class="btn btn-dark" id="siguientePrecio">SIGUIENTE</a>
        </p>
        `
        formPrecio.appendChild(htmlSiguiente)
        validarPrecio = true
        siguientePrecio = document.getElementById('siguientePrecio')
        siguientePrecio.addEventListener("click", sectionAsiento)
    }
}


function sectionAsiento() {
    formPrecio.classList.add("disableElement")
    formAsiento.classList.remove("disableElement")
    let htmlAsiento = document.createElement('div')
    htmlAsiento.innerHTML = `
        <h4>Usted ha seleccionado la película: ${localStorage.getItem('pelicula')}. <br>Formato ${localStorage.getItem('formatoEntrada')}, 
        en el cine ${localStorage.getItem('cineEntrada')}. <br>Día: ${localStorage.getItem('diaEntrada')} 
        a las ${localStorage.getItem('horaEntrada')} hrs.</h4>
        <br>
        <h4>Promoción: ${localStorage.getItem('precioEntrada')}. Cantidad de entradas: ${localStorage.getItem('cantidadEntrada')}</h4>
        <br>
        <h4>A pagar: $${localStorage.getItem('totalEntrada')}.</h4>
        <p>
        <select name="selectAsiento" id="selectAsiento">
            <option selected vaLue="">Seleccione asiento...</option>
            <option value="F1-A1">F1-A1</option>
            <option value="F1-A2">F1-A2</option>
            <option value="F2-A6">F2-A6</option>
            <option value="F7-A1">F7-A1</option>
            <option value="F7-A1">F7-A2</option>
            <option value="F7-A1">F7-A3</option>
        </select>
        </p>
        `
    formAsiento.appendChild(htmlAsiento)
    selectAsiento = document.getElementById('selectAsiento')
    selectAsiento.addEventListener("change", onChangeAsiento)
}

function onChangeAsiento() {
    const selectedOption = selectAsiento.options[selectAsiento.selectedIndex].value
    // console.log(`opcion: ${selectedOption}`)
    if (validarAsiento) {
        localStorage.setItem("asientoEntrada", selectedOption)
    } else {
        localStorage.setItem("asientoEntrada", selectedOption)
        let htmlSiguiente = document.createElement('div')
        htmlSiguiente.innerHTML = `
            <p>    
                <a class="btn btn-dark" id="siguienteAsiento">SIGUIENTE</a>
            </p>
        `
        formAsiento.appendChild(htmlSiguiente)
        validarAsiento = true
        siguienteAsiento = document.getElementById('siguienteAsiento')
        siguienteAsiento.addEventListener("click", sectionResumen)
    }
}

function sectionResumen() {
    formAsiento.classList.add("disableElement")
    formResumen.classList.remove("disableElement");
    let htmlResumen = document.createElement('div')
    htmlResumen.innerHTML = `
        <h4>Usted ha seleccionado la película: ${localStorage.getItem('pelicula')}. <br>Formato ${localStorage.getItem('formatoEntrada')}, 
        en el cine ${localStorage.getItem('cineEntrada')}. <br>Día: ${localStorage.getItem('diaEntrada')} 
        a las ${localStorage.getItem('horaEntrada')} hrs. Asientos: ${localStorage.getItem('asientoEntrada')}</h4>
        <br>
        <h4>Promoción: ${localStorage.getItem('precioEntrada')}. Cantidad de entradas: ${localStorage.getItem('cantidadEntrada')}</h4>
        <br>
        <h4>A pagar: $${localStorage.getItem('totalEntrada')}.</h4>
        <br> 
        <h3>Forma de pago online</h3>   
        <p>
        <select name="selectTarjeta" id="selectTarjeta">
            <option selected="selected" value="">Seleccione la Tarjeta...</option>
            <option value="VISA DEBITO">VISA DEBITO</option>
            <option value="VISA CREDITO">VISA CREDITO</option>
            <option value="MASTERCARD">MASTERCARD</option>
        </select>
        </p>
        `
    formResumen.appendChild(htmlResumen)
    selectTarjeta = document.getElementById('selectTarjeta')
    selectTarjeta.addEventListener("change", onChangeTarjeta)
}

function onChangeTarjeta() {
    const selectedOption = selectTarjeta.options[selectTarjeta.selectedIndex].value
    // console.log(`opcion: ${selectedOption}`)
    if (validarTarjeta) {
        localStorage.setItem("tarjetaEntrada", selectedOption)
    } else {
        localStorage.setItem("tarjetaEntrada", selectedOption)
        let htmlSiguiente = document.createElement('div')
        htmlSiguiente.innerHTML = `
            <p>
                <a class="btn btn-dark" id="siguienteResumen">SIGUIENTE</a>
            </p>
        `
        formResumen.appendChild(htmlSiguiente)
        validarTarjeta = true
        siguienteResumen = document.getElementById('siguienteResumen')
        siguienteResumen.addEventListener("click", pagarEntrada)
    }
}

function pagarEntrada() {
    formEntradas.classList.add("disableElement")
    formResumen.classList.add("disableElement")
    let htmlPagar = document.createElement('div')
    htmlPagar.innerHTML = `
        <h2>RESUMEN DE LA COMPRA</H2>
        <h4>Usted ha seleccionado la película: ${localStorage.getItem('pelicula')}<br> Formato ${localStorage.getItem('formatoEntrada')}, 
        en el cine ${localStorage.getItem('cineEntrada')}.<br> Día: ${localStorage.getItem('diaEntrada')} 
        a las ${localStorage.getItem('horaEntrada')} hrs. Asiento: ${localStorage.getItem('asientoEntrada')} </h4>
        <h4>Cantidad de entradas: ${localStorage.getItem('cantidadEntrada')}. Precio: ${localStorage.getItem('precioEntrada')}, para pagar con la tarjeta ${localStorage.getItem('tarjetaEntrada')}.</h4>
        <h4><a class="btn btn-dark" id="pagar">PAGAR</a></h4>
    `
    formPagar.appendChild(htmlPagar)
    validar=true
    pagar = document.getElementById('pagar')
    pagar.addEventListener("click", confirmarPago)
}

function limpiarEntrada() {
    localStorage.setItem('pelicula', "");
    localStorage.setItem('cineEntrada', "");
    localStorage.setItem('formatoEntrada', "");
    localStorage.setItem('diaEntrada', "");
    localStorage.setItem('horaEntrada', "");
    localStorage.setItem('asientoEntrada', "");
    localStorage.setItem('cantidadEntrada', "");
    localStorage.setItem('precioEntrada', "");
    localStorage.setItem('tarjetaEntrada', "");
    // no hice las validaciones todavía
    // validar = false
    // validarPelicula = false
    // validarCine = true
    // validarFormato = true
    // validarDia = true
    // validarHora = true
    // validarPrecio = true
    // validarCantidad = true
    // validarAsiento = true
    // validarTarjeta = true
    // validarResumen = true
    formPelicula.classList.add("disableElement");
    formPrecio.classList.add("disableElement");
    formAsiento.classList.add("disableElement");
    formResumen.classList.add("disableElement");
    formPagar.classList.add("disableElement");
    window.location.href = "../index.html";
}

function confirmarPago() {
    Swal.fire({
        title: '¿Está seguro de confirmar la compra?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Si',
        confirmButtonColor: '#044D8C',
        denyButtonText: 'No',
        denyButtonColor: '#7E8ECB',
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire('¡Compra realizada con éxito!', '', 'success')
            setTimeout(function() {
                envioFormulario()
            }, 3000);
        } else if (result.isDenied) {
        Swal.fire('La compra fue cancelada', '', 'info')
        }
    })
}

function envioFormulario() {
    const nombre = localStorage.getItem("nombre") + " " + localStorage.getItem("apellido");
    const usuario = localStorage.getItem("email");
    const contraseña = localStorage.getItem("contraseña");
    const pelicula = localStorage.getItem("pelicula");
    const cine = localStorage.getItem("cineEntrada");
    const formato = localStorage.getItem("formatoEntrada");
    const fecha = localStorage.getItem("diaEntrada");
    const hora = localStorage.getItem("horaEntrada");
    const asiento = localStorage.getItem("asientoEntrada");
    const precio = localStorage.getItem("precioEntrada");
    const cantidad = localStorage.getItem("cantidadEntrada");
    const tarjeta = localStorage.getItem("tarjetaEntrada");
    const total = localStorage.getItem("totalEntrada");


    const ventaEntrada = { nombre, usuario, contraseña, pelicula, cine, formato, fecha, hora, asiento, precio, cantidad, tarjeta, total}
    
    //Json
    let jsonVenta = JSON.stringify(ventaEntrada);
    //Guardar en BD

    // alert("Se guardó: " + jsonVenta)
    limpiarEntrada();
}

//Días de le semana: desde el día actual + 7
function cargarDias(dias) {
    const fechaActual = new Date()
    const diasAvanzados = dias - fechaActual.getDay()
    if (diasAvanzados < 0) {
        diasAvanzados += 7
    }
    const fechaFinal = fechaActual.getDate() + diasAvanzados
    const opciones = []
    opciones.push(
        `<option selected value="0">Seleccione el Día...</option> `
    )
    for (let i = 0; i < 8; i++) {
        const fecha = new Date(fechaActual.getFullYear(), fechaActual.getMonth(), fechaActual.getDate() + i)
        const dia = fecha.getDay()
        const nombreDia = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
        const nombreMes = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
        opciones.push(
            `<option value="${nombreDia[fecha.getDay()]}, ${fecha.getDate()} de ${nombreMes[fecha.getMonth()]} de ${fecha.getFullYear()}">${nombreDia[fecha.getDay()]}, ${fecha.getDate()} de ${nombreMes[fecha.getMonth()]} de ${fecha.getFullYear()}</option>`
        )
    }
    return opciones
}