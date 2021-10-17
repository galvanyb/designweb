function guardarDato() {
    var nombre = document.getElementById("nombre").value;
    var movil = document.getElementById("movil").value;
    var email = document.getElementById("email").value;

    const datos = {
        'movil': movil,
        'email': email,
    }

    localStorage.setItem(nombre, JSON.stringify(datos));

    document.getElementById("nombre").value = "";
    document.getElementById("movil").value = "";
    document.getElementById("email").value = "";
    actualizarDatos();
}

function recuperarDato() {
    var nombre = document.getElementById("nombre").value;

    let datos = localStorage.getItem(nombre);
    datos = JSON.parse(datos);

    document.getElementById("movil").value = datos.movil;
    document.getElementById("email").value = datos.email;;
}

function eliminarDato() {
    var nombre = document.getElementById("nombre").value;
    localStorage.removeItem(nombre);
    actualizarDatos();
}

function eliminarTodo() {
    localStorage.clear();
    actualizarDatos();
}

function actualizarDatos() {
    var registro = "";
    if (localStorage.length === 0) {
        registro += '<li>Vacio</li>';
    } else {
        for (var i = 0; i <= localStorage.length - 1; i++) {
            var key = localStorage.key(i);
            let datos = localStorage.getItem(i);
            datos = JSON.parse(datos);

            registro += `<li>' + '<span class="nom">' ${key} </span>
                                 <span class="nom">' ${kdatos.movil} </span>
                                 <span class="nom">' ${kdatos.email} </span>`

        }
    }
    document.getElementById('contactos').innerHTML = registro;
}