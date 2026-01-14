// 1. Location Data
const locations = {
    "Kenya": {
        "Nairobi": ["Westlands", "Dagoretti", "Kasarani", "Kibra", "Embakasi"],
        "Mombasa": ["Nyali", "Likoni", "Kisauni", "Mvita"],
        "Kiambu": ["Thika", "Ruiru", "Limuru", "Kikuyu"],
        "Kisumu": ["Kisumu Central", "Kisumu East", "Kisumu West"]
    },
    "Uganda": {
        "Kampala": ["Kawempe", "Makindye", "Rubaga"],
        "Entebbe": ["Division A", "Division B"]
    },
    "Tanzania": {
        "Dar es Salaam": ["Ilala", "Kinondoni", "Temeke"],
        "Arusha": ["Arusha City", "Meru"]
    }
};

// 2. Signup Location Logic
function initSignup() {
    const countryDropdown = document.getElementById('country');
    const countyDropdown = document.getElementById('county');
    const constituencyDropdown = document.getElementById('constituency');

    if (!countryDropdown) return; // Exit if not on signup page

    // When Country Changes
    countryDropdown.addEventListener('change', function() {
        const country = this.value;
        // Reset dependent dropdowns
        countyDropdown.innerHTML = '<option value="">Select County</option>';
        constituencyDropdown.innerHTML = '<option value="">Select Constituency</option>';

        if (country && locations[country]) {
            Object.keys(locations[country]).forEach(county => {
                let opt = new Option(county, county);
                countyDropdown.add(opt);
            });
        }
    });

    // When County Changes
    countyDropdown.addEventListener('change', function() {
        const country = countryDropdown.value;
        const county = this.value;
        constituencyDropdown.innerHTML = '<option value="">Select Constituency</option>';

        if (county && locations[country][county]) {
            locations[country][county].forEach(cons => {
                let opt = new Option(cons, cons);
                constituencyDropdown.add(opt);
            });
        }
    });
}

// 3. Initialize everything
document.addEventListener('DOMContentLoaded', () => {
    initSignup();
    
    // Check if on shop page to render cars
    if (document.getElementById('carGrid')) {
        renderInventory(); 
    }
});
