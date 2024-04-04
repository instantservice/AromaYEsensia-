window.onload = function () {
    mostrarProductosEnCarrito();
    calcularTotal();
}

function mostrarProductosEnCarrito() {
    var listaProductos = document.getElementById('lista-productos');
    listaProductos.innerHTML = ''; // Limpiar la lista de productos antes de volver a mostrarlos
    
    var platosEnCarrito = obtenerPlatosEnCarrito();
    
    platosEnCarrito.forEach(function (platoSeleccionado) {
        var elementoLista = document.createElement('li');
        elementoLista.textContent = platoSeleccionado;
        
        // Agrega un botón "Eliminar" junto a cada producto
        var botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.onclick = function() {
            eliminarProducto(platoSeleccionado);
        };
        elementoLista.appendChild(botonEliminar);
        
        listaProductos.appendChild(elementoLista);
    });
}

function obtenerPlatosEnCarrito() {
    var platosEnCarrito = localStorage.getItem('platosEnCarrito');
    return platosEnCarrito ? JSON.parse(platosEnCarrito) : [];
}

function eliminarProducto(plato) {
    var platosEnCarrito = obtenerPlatosEnCarrito();
    
    // Encuentra el índice del plato a eliminar
    var index = platosEnCarrito.indexOf(plato);
    if (index !== -1) {
        // Elimina el plato del arreglo
        platosEnCarrito.splice(index, 1);
        
        // Actualiza el almacenamiento local
        localStorage.setItem('platosEnCarrito', JSON.stringify(platosEnCarrito));
        
        // Vuelve a mostrar los productos en el carrito
        mostrarProductosEnCarrito();
        
        // Recalcula y muestra el nuevo total
        calcularTotal();
    }
}

function calcularTotal() {
    var total = 0;
    var platosEnCarrito = obtenerPlatosEnCarrito();
    
    platosEnCarrito.forEach(function (platoSeleccionado) {
        var precioIndex = platoSeleccionado.lastIndexOf('-') + 1;
        var precio = parseFloat(platoSeleccionado.substring(precioIndex).replace('$', '').trim());
        total += precio;
    });

    var totalPagarElement = document.getElementById('total-pagar');
    totalPagarElement.textContent = '$' + total.toFixed(2);
}

