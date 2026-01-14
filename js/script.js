// 1. Database of Cars with Secure HTTPS Image Links
const cars = [
    { 
        id: 1, 
        name: "Toyota Land Cruiser V8", 
        price: 12000000, 
        img: "https://images.unsplash.com/photo-1594568284297-7c64464062b1?auto=format&fit=crop&w=600&q=80" 
    },
    { 
        id: 2, 
        name: "Mercedes Benz G-Wagon", 
        price: 25000000, 
        img: "https://images.unsplash.com/photo-1520031441872-265e4ff70366?auto=format&fit=crop&w=600&q=80" 
    },
    { 
        id: 3, 
        name: "Range Rover Sport", 
        price: 18000000, 
        img: "https://images.unsplash.com/photo-1606148632349-434778be1777?auto=format&fit=crop&w=600&q=80" 
    },
    { 
        id: 4, 
        name: "Tesla Model S", 
        price: 10000000, 
        img: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=600&q=80" 
    },
    { 
        id: 5, 
        name: "BMW X5 M-Sport", 
        price: 9500000, 
        img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=600&q=80" 
    },
    { 
        id: 6, 
        name: "Audi Q8", 
        price: 11000000, 
        img: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=600&q=80" 
    }
];

// 2. Function to display cars on the shop page
function displayCars() {
    const carGrid = document.getElementById('carGrid');
    
    // Only run if we are actually on the shop page
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

// 3. Cart Management Logic
function addToCart(carId) {
    // Get existing cart from local storage or start fresh
    let cart = JSON.parse(localStorage.getItem('pilot_cart')) || [];
    
    // Find the car that matches the ID
    const selectedCar = cars.find
