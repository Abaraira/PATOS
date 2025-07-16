// Función para cambiar la cantidad
function changeQuantity(amount) {
  const quantityInput = document.getElementById('quantity');
  let current = parseInt(quantityInput.value);

  if (isNaN(current)) current = 1;

  const newQuantity = current + amount;

  // No permitir valores menores a 1
  quantityInput.value = newQuantity < 1 ? 1 : newQuantity;
}

// Evento para el botón "Añadir al carrito"
document.addEventListener('DOMContentLoaded', () => {
  const addCartBtn = document.querySelector('.add-cart');
  if (addCartBtn) {
    addCartBtn.addEventListener('click', function () {
      const quantity = document.getElementById('quantity').value;

      // Guardar la cantidad en localStorage
      localStorage.setItem('cantidad', quantity);

      // Redirigir al carrito
      window.location.href = 'carrito.html';
    });
  }
});v