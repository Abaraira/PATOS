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
      let quantityValue = parseInt(document.getElementById('quantity').value);
      let currentCart = parseInt(localStorage.getItem('cartTotal')) || 0;

      let newTotal = currentCart + quantity;

      // Guardar nueva cantidad total
      localStorage.setItem('cartTotal', newTotal);

      // Redirigir al carrito
      window.location.href = 'cart.html';

      // Redirigir al carrito
      window.location.href = 'cart.html';
    });
  }
});v
// Al cargar la página, mostrar el total en el icono del carrito
document.addEventListener('DOMContentLoaded', () => {
  const cartCountElement = document.getElementById('cart-count');
  if (cartCountElement) {
    const total = localStorage.getItem('cartTotal') || 0;
    cartCountElement.textContent = total;
  }
});