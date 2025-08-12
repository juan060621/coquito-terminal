let listaClientes = [];
let idCounter = 1;

function agregarCliente() {
    let nombre = document.getElementById("nombre").value.trim();
    let documento = document.getElementById("documento").value.trim();
    let telefono = document.getElementById("telefono").value.trim();
    let idDireccion = document.getElementById("idDireccion").value.trim();

    if (!nombre || !documento || !telefono || !idDireccion) {
        alert("Por favor, complete todos los campos.");
        return;
    }

    let cliente = {
        id: idCounter++,
        nombre,
        documento,
        telefono,
        idDireccion
    };

    listaClientes.push(cliente);
    mostrarClientes();

    // Limpiar campos
    document.getElementById("nombre").value = "";
    document.getElementById("documento").value = "";
    document.getElementById("telefono").value = "";
    document.getElementById("idDireccion").value = "";
}

function mostrarClientes() {
    let tbody = document.querySelector("#tablaClientes tbody");
    tbody.innerHTML = "";

    listaClientes.forEach(cliente => {
        let fila = `
            <tr>
                <td>${cliente.id}</td>
                <td>${cliente.nombre}</td>
                <td>${cliente.documento}</td>
                <td>${cliente.telefono}</td>
                <td>${cliente.idDireccion}</td>
            </tr>
        `;
        tbody.innerHTML += fila;
    });
}
