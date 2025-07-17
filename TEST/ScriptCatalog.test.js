/**
 * @jest-environment jsdom
 */

import { jest } from '@jest/globals';

// módulos y elementos del DOM
document.body.innerHTML = `
  <div class="catalogContainer"></div>

  <input type="checkbox" name="tamano" value="mediano" />
  <input type="checkbox" name="interactivo" value="sonido" />
  <input type="checkbox" name="tematico" value="profesiones" />

  <input id="buscar" type="text" />
`;

//Contenido
const container = document.querySelector('.catalogContainer');

const productos = [
  {
    nombre: "PATITO GAY",
    imagen: "img1.jpg",
    categoria: "festivo",
    tamano: "mediano",
    interactivo: ["luces", "sonido", "agua"]
  },
  {
    nombre: "PATITO DOCTOR",
    imagen: "img2.jpg",
    categoria: "profesiones",
    tamano: "grande",
    interactivo: ["sonido"]
  }
];

function renderProductos(lista) {
  container.innerHTML = '';
  const ordenados = [...lista].sort((a, b) => a.nombre.localeCompare(b.nombre));
  const items = ordenados.map(pato => {
    const div = document.createElement('div');
    div.classList.add('catalogItem');
    div.innerHTML = `<p>${pato.nombre}</p>`;
    return div;
  });
  container.append(...items);
}

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

// TESTS
test('renderiza todos los productos al inicio', () => {
  renderProductos(productos);
  expect(container.children.length).toBe(2);
  expect(container.textContent).toContain('PATITO GAY');
  expect(container.textContent).toContain('PATITO DOCTOR');
});

test('filtra por tamaño "mediano"', () => {
  document.querySelector('input[name="tamano"][value="mediano"]').checked = true;
  aplicarFiltros();
  expect(container.children.length).toBe(1);
  expect(container.textContent).toContain('PATITO GAY');
});

test('filtra por categoría "profesiones"', () => {
  document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
  document.querySelector('input[name="tematico"][value="profesiones"]').checked = true;
  aplicarFiltros();
  expect(container.children.length).toBe(1);
  expect(container.textContent).toContain('PATITO DOCTOR');
});