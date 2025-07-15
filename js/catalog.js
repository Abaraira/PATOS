const products = [
    { id: 'item1' , name: 'Patito Gay', image: './assets/img/duckImages/imágenes patos/patito_gay.jpg', description: 'Un patito muy orgulloso con los colores del arcoíris que celebra la diversidad y el amor en todas sus formas. Ideal para mostrar tu orgullo en la bañera o en tu colección.', price: '2.50' },
    { id: 'item2', name: 'Patito Doctor', image: './assets/img/duckImages/imágenes patos/patito-doctor.jpg', description: 'El patito que te cuida y te sana con su buen humor y su estetoscopio siempre listo.', price: '3.00' },
    { id: 'item3', name: 'Patito Graduado', image: './assets/img/duckImages/imágenes patos/patito-graduado.jpg', description: '¡Felicitaciones al patito que ha terminado sus estudios! Con su birrete y diploma, está listo para el éxito.', price: '3.25' },
    { id: 'item4', name: 'Patito Socorrista', image: './assets/img/duckImages/imágenes patos/patito_socorrista.jpg', description: 'Siempre listo para un rescate acuático. Este patito socorrista es el héroe de la bañera.', price: '2.75' },
    { id: 'item5', name: 'Patito Marinero', image: './assets/img/duckImages/imágenes patos/patito-marinero.jpg', description: 'Un patito navegante con espíritu aventurero y su clásico traje de marinero. ¡Listo para surcar los mares!', price: '2.90' },
    { id: 'item6', name: 'Patito Mono', image: './assets/img/duckImages/imágenes patos/patito-mono.jpg', description: 'El patito más divertido de la selva, disfrazado de mono. ¡Asegura risas en cada baño!', price: '2.60' },
    { id: 'item7', name: 'Patito Chef', image: './assets/img/duckImages/imágenes patos/pato-chef.jpg', description: 'Un cocinero de primera, este patito chef prepara los mejores baños y aventuras culinarias imaginarias.', price: '3.10' },
    { id: 'item8', name: 'Patito Juez', image: './assets/img/duckImages/imágenes patos/patito_juez.avif', description: 'Con la ley en la mano, un patito muy justo y con su mazo siempre preparado para dictar sentencia.', price: '3.30' },
];


document.addEventListener('DOMContentLoaded', () => {
    const productsGridContainer = document.getElementById('products-grid-container');

   

    products.forEach(product => {
        const productLink = document.createElement('a');
        productLink.href = `detail.html?id=${product.id}`;
        productLink.classList.add('catalogoItem');

        const productImage = document.createElement('img');
        productImage.classList.add('duckImg');
        productImage.src = product.image;
        productImage.alt = product.name;

        const productName = document.createElement('p');
        productName.classList.add('nomDuck');
        productName.textContent = product.name;

        productLink.appendChild(productImage);
        productLink.appendChild(productName);
        productsGridContainer.appendChild(productLink);
    });
});

function hacer(){

    console.log (products)
}

console.log (hacer())