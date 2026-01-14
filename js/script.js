const cars = [
    { id: 1, name: "Toyota Land Cruiser V8", price: 12000000, img: "https://images.unsplash.com/photo-1594568284297-7c64464062b1?auto=format&fit=crop&w=600&q=80" },
    { id: 2, name: "Mercedes Benz G-Wagon", price: 25000000, img: "https://images.unsplash.com/photo-1520031441872-265e4ff70366?auto=format&fit=crop&w=600&q=80" },
    { id: 3, name: "Range Rover Sport", price: 18000000, img: "https://images.unsplash.com/photo-1606148632349-434778be1777?auto=format&fit=crop&w=600&q=80" },
    { id: 4, name: "Tesla Model S", price: 10000000, img: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=600&q=80" },
    { id: 5, name: "BMW X5 M-Sport", price: 9500000, img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=600&q=80" },
    { id: 6, name: "Audi Q8", price: 11000000, img: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=600&q=80" }
];

function renderInventory() {
    const carGrid = document.getElementById('carGrid');
    if (carGrid) {
        carGrid.innerHTML = cars.map(car => `
            <div class="car-card">
                <img src="${car.img}" alt="${car.name}" class="car-photo">
                <h3>${car.name}</h3>
                <p class="price">KES ${car.price.toLocaleString()}</p>
                <button class="add-btn" onclick="addToCart(${car.id})">Add to Cart</button>
            </div>
        `).join('');
    }
}

function addToCart(carId) {
    let cart = JSON.parse(localStorage.getItem('pilot_cart')) || [];
    const car = cars.find(c => c.id === carId);
    cart.push(car);
    localStorage.setItem('pilot_cart', JSON.stringify(cart));
    updateCartCount();
    alert(car.name + " added to cart!");
}

function updateCartCount() {
    const countLabel = document.getElementById('cart-count');
    let cart = JSON.parse(localStorage.getItem('pilot_cart')) || [];
    if (countLabel) countLabel.innerText = cart.length;
}

document.addEventListener('DOMContentLoaded', () => {
    renderInventory();
    updateCartCount();
});
