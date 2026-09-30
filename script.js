let contactos = [];

let nombre = document.getElementById("nombre");
let telefono = document.getElementById("telefono");
let btnAgregar = document.getElementById("btnAgregar");
let listaContactos = document.getElementById("listaContactos");
let mensajeVacio = document.getElementById("mensajeVacio");

btnAgregar.addEventListener("click", function() {

    let nombreContacto = nombre.value.trim();
    let telefonoContacto = telefono.value.trim();

    if (nombreContacto === "" || telefonoContacto === "") {
        return;
    }

    let contacto = {
        nombre: nombreContacto,
        telefono: telefonoContacto
    };

    contactos.push(contacto);

    mostrarContactos();

    nombre.value = "";
    telefono.value = "";

});

function mostrarContactos() {

    listaContactos.innerHTML = "";

    mensajeVacio.style.display = "none";

    contactos.forEach(function(contacto) {

        let item = document.createElement("div");

        item.className = "contacto";

        item.innerHTML = `
            <div>
                <strong>${contacto.nombre}</strong>
                <p>${contacto.telefono}</p>
            </div>

            <button class="btnEliminar">
                Eliminar
            </button>
        `;

        listaContactos.appendChild(item);

    });

}