function enviarInfo(plato) {
    var select = plato.parentElement.querySelector('select'); // Obtener el select del plato
    var seleccionado = select.options[select.selectedIndex].text; // Obtener la opción seleccionada

    var platosEnCarrito = localStorage.getItem('platosEnCarrito');
    var platos = platosEnCarrito ? JSON.parse(platosEnCarrito) : [];

    platos.push(seleccionado); // Agregar la selección actual a la lista de platos en el carrito
    localStorage.setItem('platosEnCarrito', JSON.stringify(platos)); // Actualizar el almacenamiento local

    // Mostrar una alerta indicando que se agregó el producto al carrito
    alert("¡Producto agregado al carrito!");

    window.location.href = 'index.html'; // Redirigir a la página del carrito
}