
let carrito = [];
let total = 0;

// Función que sirve para agregar un producto.
function agregarAlCarrito(producto, precio) {
    // Busca si el producto ya está en el carrito de compras.
    const productoEnCarrito = carrito.find(item => item.producto === producto);

    if (productoEnCarrito) {
    //incrementa la cantidad y actualiza el precio total por producto.
        productoEnCarrito.cantidad++;
        productoEnCarrito.totalPorProducto = productoEnCarrito.cantidad * precio;
    } else {
        //agréga cantidad  de a 1.
        carrito.push({ producto, cantidad: 1, precio, totalPorProducto: precio });
    }

    // Actualiza el total sumando el precio del producto.
    total += precio;
    // Llama a la función para actualizar la visualización del carrito.
    actualizarCarrito();
}

// Función para actualizar la visualización del carrito en la página.
function actualizarCarrito() {
    // Obtiene elementos HTML por sus IDs.
    const carritoLista = document.getElementById('carrito-lista');
    const totalElemento = document.getElementById('total');

    // Limpia la lista del carrito.
    carritoLista.innerHTML = '';
    
    // Itera sobre los productos en el carrito y crea elementos para mostrarlos.
    carrito.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.producto} - Cantidad: ${item.cantidad} - Total: $${item.totalPorProducto.toFixed(2)}`;

        // Botones para incrementar, decrementar y eliminar la cantidad del producto.
        const incrementButton = document.createElement('button');
        incrementButton.textContent = '+';
        incrementButton.onclick = () => incrementarCantidad(item);

        const decrementButton = document.createElement('button');
        decrementButton.textContent = '-';
        decrementButton.onclick = () => decrementarCantidad(item);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.onclick = () => eliminarProducto(item);

        // Agrega los botones al elemento de la lista.
        listItem.appendChild(incrementButton);
        listItem.appendChild(decrementButton);
        listItem.appendChild(deleteButton);
        // Agrega el elemento de la lista al contenedor del carrito.
        carritoLista.appendChild(listItem);
    });

    // Actualiza el elemento HTML del total.
    totalElemento.textContent = total.toFixed(2);
}

// Función para incrementar la cantidad de un producto en el carrito.
function incrementarCantidad(item) {
    item.cantidad++;
    item.totalPorProducto = item.cantidad * item.precio;
    total += item.precio;
    // Llama a la función para actualizar la visualización del carrito.
    actualizarCarrito();
}

// Función para decrementar la cantidad de un producto en el carrito.
function decrementarCantidad(item) {
    if (item.cantidad > 1) {
        item.cantidad--;
        item.totalPorProducto = item.cantidad * item.precio;
        total -= item.precio;
        // Llama a la función para actualizar la visualización del carrito.
        actualizarCarrito();
    }
}

// Función para eliminar un producto del carrito.
function eliminarProducto(item) {
    total -= item.totalPorProducto;
    // Filtra el producto del array del carrito.
    carrito = carrito.filter(producto => producto !== item);
    // Llama a la función para actualizar la visualización del carrito.
    actualizarCarrito();
}

// Función para simular el envío del pedido.
function enviarPedido() {
    // Muestra una alerta con la información del pedido.
    alert("Pedido enviado:\n" + JSON.stringify(carrito, null, 2));
    // Limpia el carrito después de enviar el pedido.
    carrito = [];
    total = 0;
    // Llama a la función para actualizar la visualización del carrito.
    actualizarCarrito();
}

