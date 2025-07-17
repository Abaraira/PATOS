document.addEventListener("DOMContentLoaded", () => {

  let contacts = JSON.parse(localStorage.getItem("contacts")) || [];

  const form = document.getElementById("contactform");
  const confirmationMessage = document.getElementById("confirmationMessage");
  const captchaContainer = document.getElementById("captchaContainer");
  const captchaError = document.getElementById("captchaError");
  let captchaShown = false;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!captchaShown) {
      captchaContainer.style.display = "block";
      captchaShown = true;
      return; 
    }

    const captchaInput = document.getElementById("captchaAnswer").value.trim().toLowerCase();
    if (captchaInput !== "cuac") {
      captchaError.style.display = "block";
      return;
    }

    captchaError.style.display = "none";

    // Obtener valores del formulario
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const contactData = {
      name,
      email,
      message,
      timestamp: new Date().toISOString(),
    };

    contacts.push(contactData);
    localStorage.setItem("contacts", JSON.stringify(contacts));

    console.log("Nuevo mensaje enviado:", contactData);
    console.log("Todos los mensajes hasta ahora:", contacts);

    // Mostrar mensaje emergente
    confirmationMessage.innerHTML = `Gracias por tu mensaje, <strong>${name}</strong>.<br>Nos contactaremos contigo en un cuac.`;
    confirmationMessage.classList.add("show");

    function hideMessage() {
      confirmationMessage.classList.remove("show");
      document.removeEventListener("keydown", onEsc);
    }

    function onEsc(e) {
      if (e.key === "Escape") hideMessage();
    }

    confirmationMessage.addEventListener("click", hideMessage);
    document.addEventListener("keydown", onEsc);

    form.reset();
    captchaContainer.style.display = "none";
    captchaShown = false;
  });
});