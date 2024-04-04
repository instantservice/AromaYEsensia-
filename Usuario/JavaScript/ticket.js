window.onload = function () {
    var listaProductos = document.getElementById('lista-productos');
    var totalElement = document.getElementById('total');

    var platosEnCarrito = localStorage.getItem('platosEnCarrito');
    var platos = platosEnCarrito ? JSON.parse(platosEnCarrito) : [];

    platos.forEach(function (platoSeleccionado) {
        var elementoLista = document.createElement('div');
        var nombrePrecio = platoSeleccionado.split('-');
        elementoLista.innerHTML = `<span>${nombrePrecio[0]}:</span><span>$${nombrePrecio[1]}</span>`;
        listaProductos.appendChild(elementoLista);
    });

    // Calcular el total a pagar
    var total = platos.reduce(function (accumulator, currentValue) {
        var precioIndex = currentValue.lastIndexOf('-') + 1;
        var precio = parseFloat(currentValue.substring(precioIndex).replace('$', '').trim());
        return accumulator + precio;
    }, 0);

    totalElement.innerHTML = `<span>Total:</span><span>$${total.toFixed(2)}</span>`;
}
document.addEventListener('DOMContentLoaded', function() {
    // Obtenemos la fecha actual
    const fechaActual = new Date();

    // Obtenemos los componentes de la fecha (día, mes y año)
    const dia = fechaActual.getDate();
    const mes = fechaActual.getMonth() + 1; // Los meses empiezan desde 0
    const año = fechaActual.getFullYear();

    // Formateamos la fecha como "dd/mm/yyyy"
    const fechaFormateada = `${dia}/${mes}/${año}`;

    // Obtenemos el elemento donde queremos mostrar la fecha y actualizamos su contenido
    const elementoFecha = document.getElementById('fecha-ticket');
    elementoFecha.textContent = `Fecha: ${fechaFormateada}`;
});
