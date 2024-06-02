const products = [
    { id: 1, name: 'Lowbed Truck', image: 'imgs/lowbed.webp' },
    { id: 2, name: 'Swampbuggy Machines', image: 'imgs/buggy.webp' },
    { id: 3, name: 'Self-Loaders', image: 'imgs/self-loader.jpeg' },
    { id: 4, name: 'Track Chains', image: 'imgs/excavatorchain.jpg' },
    { id: 5, name: 'Swampbuggy Undercarriage', image: 'imgs/download.jpeg' },
    { id: 6, name: 'Aluminium Slippers', image: 'imgs/slippers.jpg' },
    { id: 7, name: 'Track Chain', image: 'imgs/excavatorchain.jpg' },
    { id: 8, name: 'Track Bolts & Nuts', image: 'imgs/images.jpeg' },
    { id: 9, name: 'Teflon Pads', image: 'imgs/teflonpad.png' },
    { id: 10, name: 'Driving Chains', image: 'imgs/track.jpg' },
    { id: 11, name: 'Movement Pumps', image: 'imgs/cat.webp' },
    { id: 12, name: 'Final Drives', image: 'imgs/images1.jpeg' },
    { id: 13, name: 'Bearings', image: 'imgs/bearing2.webp' },
    { id: 14, name: 'Rubber Gaskets', image: 'imgs/gasket.jpeg' },
    { id: 15, name: 'Mechanical Seals', image: 'imgs/seals.jpg' },
    { id: 16, name: 'Conveyor Belts', image: 'imgs/conveyor.jpeg' },
    { id: 17, name: 'Conveyor Roller', image: 'imgs/roller.jpeg' },
    { id: 18, name: 'Sprockets', image: 'imgs/sprocket2.jpeg' },
    { id: 19, name: 'Axel Sprockets', image: 'imgs/axel.jpeg' },
    { id: 20, name: 'Excavators', image: 'imgs/oemp.jpg' }
];

const cart = [];

document.addEventListener('DOMContentLoaded', () => {
    const productsContainer = document.getElementById('productsContainer');
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}" onmouseover="zoomIn(this)" onmouseout="zoomOut(this)">
            <h3>${product.name}</h3>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productsContainer.appendChild(productDiv);
    });
});

function searchProducts() {
    const query = document.getElementById('searchBar').value.toLowerCase();
    const productsContainer = document.getElementById('productsContainer');
    productsContainer.innerHTML = '';
    products
        .filter(product => product.name.toLowerCase().includes(query))
        .forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');
            productDiv.innerHTML = `
                <img src="${product.image}" alt="${product.name}" onmouseover="zoomIn(this)" onmouseout="zoomOut(this)">
                <h3>${product.name}</h3>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            `;
            productsContainer.appendChild(productDiv);
        });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    alert(`${product.name} has been added to your cart.`);
}

function toggleCart() {
    const cartOverlay = document.getElementById('cartOverlay');
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = cart.map(item => `<p>${item.name}</p>`).join('');
    cartOverlay.style.display = cartOverlay.style.display === 'flex' ? 'none' : 'flex';
    document.body.classList.toggle('blurred');
}

function prepareCartItems() {
    const hiddenCartItems = document.getElementById('hiddenCartItems');
    hiddenCartItems.innerHTML = cart.map(item => `<input type="hidden" name="cart[]" value="${item.name}">`).join('');
}

function zoomIn(img) {
    img.classList.add('zoomed');
}

function zoomOut(img) {
    img.classList.remove('zoomed');
}
