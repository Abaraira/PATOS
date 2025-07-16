
    const productos = [
  {
    nombre: "PATITO GAY",
    imagen: "./IMG/DuckImg/pato_gay.jpg",
    categoria: "festivo",
    tamano: "mediano",
    interactivo: ["luces", "sonido", "agua"]
  },
  {
    nombre: "PATITO DOCTOR",
    imagen: "./IMG/DuckImg/pato_doctor.jpg",
    categoria: "profesiones",
    tamano: "grande",
    interactivo: ["sonido"]
  },
  {
    nombre: "PATITO MICKEY",
    imagen: "./IMG/DuckImg/pato_mickey_mouse.jpg",
    categoria: "personajes",
    tamano: "pequeno",
    interactivo: [ "sonido", "agua"]
  },
  {
    nombre: "PATITO MICHAEL J.",
    imagen: "./IMG/DuckImg/pato_michael_jackson.jpg",
    categoria: "personajes",
    tamano: "mediano",
    interactivo: ["luces"]
  },
  {
    nombre: "PATITO VACA",
    imagen: "./IMG/DuckImg/pato_vaca.jpg",
    categoria: "animales",
    tamano: "grande",
    interactivo: ["sonido"]
  },
  {
    nombre: "PATITO MONO",
    imagen: "./IMG/DuckImg/pato_mono.jpg",
    categoria: "animales",
    tamano: "pequeno",
    interactivo: ["agua", "sonido"]
  },
  {
    nombre: "PATITO CHEF",
    imagen: "./IMG/DuckImg/pato_chef.jpg",
    categoria: "profesiones",
    tamano: "mediano",
    interactivo: ["sonido"]
  },
  {
    nombre: "PATITO JUEZ",
    imagen: "./IMG/DuckImg/pato_juez.jpg",
    categoria: "profesiones",
    tamano: "mediano",
    interactivo: ["agua"]
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const catalogContainer = document.querySelector(".catalogContainer");
  const inputBuscar = document.getElementById("buscar");

  function mostrarProductos(lista) {
    catalogContainer.innerHTML = lista.map(producto => `
      <div class="catalogoItem">
        <img src="${producto.imagen}" alt="${producto.nombre}" class="duckImg" />
        <p class="nomDuck">${producto.nombre}</p>
      </div>
    `).join("");
  }

  // Mostrar todos al cargar
  mostrarProductos(productos);

  // Búsqueda
  inputBuscar.addEventListener("input", () => {
    const texto = inputBuscar.value.toLowerCase();
    const filtrados = productos.filter(pato => pato.nombre.toLowerCase().includes(texto));
    mostrarProductos(filtrados);
  });
});
