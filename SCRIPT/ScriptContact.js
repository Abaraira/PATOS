document.addEventListener("DOMContentLoaded", () => {
  
  let contacts = JSON.parse(localStorage.getItem("contacts")) || [];

  const form = document.getElementById("contactform");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); 

    // Obtener los valores ingresados
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Crear objeto de contacto
    const contactData = {
      name,
      email,
      message,
      timestamp: new Date().toISOString(), 
    };

    
    contacts.push(contactData);

    // Guardar en localStorage
    localStorage.setItem("contacts", JSON.stringify(contacts));

    // Mostrar en consola
    console.log("Nuevo mensaje enviado:", contactData);
    console.log("Todos los mensajes hasta ahora:", contacts);

    // Limpiar formulario
    form.reset();
  });
});