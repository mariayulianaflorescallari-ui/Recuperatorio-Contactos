let contactos = [];

let nombre = document.getElementById("nombre");
let telefono = document.getElementById("telefono");
let btnAgregar = document.getElementById("btnAgregar");
let listaContactos = document.getElementById("listaContactos");
let mensajeVacio = document.getElementById("mensajeVacio");
let contador = document.getElementById("contador");

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

    contador.textContent = contactos.length;

    if (contactos.length === 0) {
        mensajeVacio.style.display = "block";
        return;
    }

    mensajeVacio.style.display = "none";

    contactos.forEach(function(contacto, indice) {

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

        let btnEliminar = item.querySelector(".btnEliminar");

        btnEliminar.addEventListener("click", function() {

            contactos.splice(indice, 1);

            mostrarContactos();

        });

        listaContactos.appendChild(item);

    });

}