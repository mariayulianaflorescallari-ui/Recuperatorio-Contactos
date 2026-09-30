let contactos = [];

let nombre = document.getElementById("nombre");
let telefono = document.getElementById("telefono");
let btnAgregar = document.getElementById("btnAgregar");
let listaContactos = document.getElementById("listaContactos");
let mensajeVacio = document.getElementById("mensajeVacio");
let contador = document.getElementById("contador");
let buscar = document.getElementById("buscar");

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

function mostrarContactos(lista = contactos) {

    listaContactos.innerHTML = "";

    contador.textContent = contactos.length;

    if (lista.length === 0) {
        mensajeVacio.style.display = "block";
        return;
    }

    mensajeVacio.style.display = "none";

    lista.forEach(function(contacto) {

        let indice = contactos.indexOf(contacto);

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

buscar.addEventListener("input", function() {

    let texto = buscar.value.toLowerCase();

    let resultados = contactos.filter(function(contacto) {

        return contacto.nombre.toLowerCase().includes(texto);

    });

    mostrarContactos(resultados);

});