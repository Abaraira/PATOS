// SIDEBAR FILTROS
const btnFiltros = document.getElementById('btn-filtros');
const sidebar = document.getElementById('sidebar');
const cerrar = document.getElementById('cerrar');

btnFiltros.addEventListener('click', () => {
  sidebar.classList.add('activo');
});

cerrar.addEventListener('click', () => {
  sidebar.classList.remove('activo');
});

// ARRAY DE PRODUCTOS
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
    interactivo: ["sonido", "agua"]
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
    interactivo: ["luces"]
  }
];

const container = document.querySelector('.catalogContainer');

//.map() para generar y renderizar los productos
function renderProductos(lista) {
  container.innerHTML = '';

  const items = lista.map(pato => {
    const div = document.createElement('div');
    div.classList.add('catalogItem', 'fade-in');
    div.innerHTML = `
      <a href="detail.html">
        <img src="${pato.imagen}" alt="${pato.nombre}" class="duckImg" />
        <p class="nomDuck">${pato.nombre}</p>
      </a>
    `;
    return div;
  });

// Añadir todos los elementos al DOM
  container.append(...items);
}

// Filtros seleccionados
function obtenerFiltrosSeleccionados() {
  const filtros = {
    tamano: [],
    interactivo: [],
    categoria: []
  };

  document.querySelectorAll('input[name="tamano"]:checked').forEach(cb => filtros.tamano.push(cb.value));
  document.querySelectorAll('input[name="interactivo"]:checked').forEach(cb => filtros.interactivo.push(cb.value));
  document.querySelectorAll('input[name="tematico"]:checked').forEach(cb => filtros.categoria.push(cb.value));

  return filtros;
}

// Aplicar filtros
function aplicarFiltros() {
  const { tamano, interactivo, categoria } = obtenerFiltrosSeleccionados();

  const filtrados = productos.filter(pato => {
    const cumpleTamano = tamano.length ? tamano.includes(pato.tamano) : true;
    const cumpleCategoria = categoria.length ? categoria.includes(pato.categoria) : true;
    const cumpleInteractivo = interactivo.length ? interactivo.every(i => pato.interactivo.includes(i)) : true;

    return cumpleTamano && cumpleCategoria && cumpleInteractivo;
  });

  renderProductos(filtrados);
}

// Escuchar cambios en los checkboxes
document.querySelectorAll('aside input[type="checkbox"]').forEach(cb => {
  cb.addEventListener('change', aplicarFiltros);
});

// BUSCADOR
const buscarInput = document.getElementById('buscar');
buscarInput.addEventListener('input', () => {
  const texto = buscarInput.value.toLowerCase();
  const filtrados = productos.filter(p => p.nombre.toLowerCase().includes(texto));
  renderProductos(filtrados);
});

// Render inicial
renderProductos(productos);