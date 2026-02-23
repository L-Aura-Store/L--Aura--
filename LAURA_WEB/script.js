// 1. Navbar එකේ Magic Menu එක පාලනය කරන්න
function toggleMagicMenu() {
    const bar = document.getElementById("mainMenuBar");
    const menuText = document.getElementById("menuText"); // span id එක menuText විය යුතුයි
    
    bar.classList.toggle("active");

    if (bar.classList.contains("active")) {
        if(menuText) menuText.innerHTML = "CLOSE X";
    } else {
        if(menuText) menuText.innerHTML = "MENU =";
    }
}

// 2. Side Drawers (Account, Wishlist, Cart) විවෘත කරන්න
function openDrawer(id) {
    // මුලින්ම Overlay එක පෙන්වන්න
    document.getElementById('drawer-overlay').style.display = 'block';
    // අදාළ Drawer එක ඇතුළට ගන්න
    document.getElementById(id).style.right = '0';
}

// 3. සියලුම Drawers වසා දමන්න (Overlay එක එබූ විට හෝ X එබූ විට)
function closeAllDrawers() {
    document.getElementById('drawer-overlay').style.display = 'none';
    
    // හැම Drawer එකක්ම ආපහු පිටතට තල්ලු කරන්න
    const drawers = ['wishlist-drawer', 'account-drawer', 'cart-drawer'];
    drawers.forEach(drawerId => {
        const drawer = document.getElementById(drawerId);
        if(drawer) drawer.style.right = '-450px';
    });
}
function toggleMagicMenu() {
    const bar = document.getElementById("mainMenuBar");
    const menuText = document.getElementById("menuText");
    
    bar.classList.toggle("active");

    // "MENU =" එක "CLOSE X" කරන්න ඕනේ නම් මේක පාවිච්චි කරන්න පුළුවන්
    if (bar.classList.contains("active")) {
        menuText.innerHTML = "CLOSE X";
    } else {
        menuText.innerHTML = "MENU =";
    }
}
fetch('navbar.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('navbar-placeholder').innerHTML = data;
  });
  
/**
 * L-AURA Luxury Watches - Master Database
 */

const watchDatabase = [
    // --- ROLEX COLLECTION ---
    { id: 1, category: "ROLEX COLLECTION", brand: "Rolex", model: "Submariner Date", price: "Contact for Price" },
    { id: 2, category: "ROLEX COLLECTION", brand: "Rolex", model: "Cosmograph Daytona", price: "Contact for Price" },
    { id: 3, category: "ROLEX COLLECTION", brand: "Rolex", model: "GMT-Master II", price: "Contact for Price" },
    { id: 4, category: "ROLEX COLLECTION", brand: "Rolex", model: "Datejust 41", price: "Contact for Price" },
    { id: 5, category: "ROLEX COLLECTION", brand: "Rolex", model: "Day-Date 40", price: "Contact for Price" },

    // --- OMEGA & BREITLING ---
    { id: 6, category: "OMEGA & BREITLING", brand: "Omega", model: "Speedmaster Pro", price: "Contact for Price" },
    { id: 7, category: "OMEGA & BREITLING", brand: "Omega", model: "Seamaster 300M", price: "Contact for Price" },
    { id: 8, category: "OMEGA & BREITLING", brand: "Breitling", model: "Navitimer B01", price: "Contact for Price" },
    { id: 9, category: "OMEGA & BREITLING", brand: "Breitling", model: "Superocean", price: "Contact for Price" },
    { id: 10, category: "OMEGA & BREITLING", brand: "Breitling", model: "Avenger Auto", price: "Contact for Price" },

    // --- HOLY TRINITY ---
    { id: 11, category: "HOLY TRINITY", brand: "Audemars Piguet", model: "Royal Oak", price: "Contact for Price" },
    { id: 12, category: "HOLY TRINITY", brand: "Patek Philippe", model: "Nautilus", price: "Contact for Price" },
    { id: 13, category: "HOLY TRINITY", brand: "Patek Philippe", model: "Aquanaut", price: "Contact for Price" },
    { id: 14, category: "HOLY TRINITY", brand: "Vacheron Constantin", model: "Overseas", price: "Contact for Price" },
    { id: 15, category: "HOLY TRINITY", brand: "A. Lange & Söhne", model: "Lange 1", price: "Contact for Price" },

    // --- SPORT LUXURY ---
    { id: 16, category: "SPORT LUXURY", brand: "Tudor", model: "Black Bay", price: "Contact for Price" },
    { id: 17, category: "SPORT LUXURY", brand: "TAG Heuer", model: "Carrera", price: "Contact for Price" },
    { id: 18, category: "SPORT LUXURY", brand: "Hublot", model: "Big Bang", price: "Contact for Price" },
    { id: 19, category: "SPORT LUXURY", brand: "Zenith", model: "El Primero", price: "Contact for Price" },
    { id: 20, category: "SPORT LUXURY", brand: "Panerai", model: "Luminor", price: "Contact for Price" },

    // --- MODERN & AVANT ---
    { id: 21, category: "MODERN & AVANT", brand: "Richard Mille", model: "RM", price: "Contact for Price" },
    { id: 22, category: "MODERN & AVANT", brand: "Ulysse Nardin", model: "Freak", price: "Contact for Price" },
    { id: 23, category: "MODERN & AVANT", brand: "Jacob & Co", model: "Astronomia", price: "Contact for Price" },
    { id: 24, category: "MODERN & AVANT", brand: "H. Moser & Cie", model: "Endeavour", price: "Contact for Price" },
    { id: 25, category: "MODERN & AVANT", brand: "Bulgari", model: "Octo Finissimo", price: "Contact for Price" }
];

console.log("L-AURA Professional Database Loaded! ✅");
console.table(watchDatabase); // බ්‍රවුසර් එකේ ඉන්ස්පෙක්ට් කරලා බලපන් මේක ලස්සනට පේනවා.

                // filter.html එකේ watchDatabase එකට ප්‍රවේශ වීමට මේක පාවිච්චි කරන්න

// 1. Data & Variables
const watchBrands = [
    "Rolex", "Patek Philippe", "Audemars Piguet", "Richard Mille", "Cartier", 
    "Omega", "Vacheron Constantin", "Breitling", "IWC", "Hublot", 
    "Jaeger-LeCoultre", "Tudor", "Panerai", "TAG Heuer", "Grand Seiko", 
    "Longines", "Tissot", "Oris", "Zenith", "Blancpain", 
    "Chopard", "Girard-Perregaux", "Piaget", "Bulgari", "Breguet",
    "Ulysse Nardin", "A. Lange & Söhne", "Hamilton", "Seiko", "Citizen",
    "Bulova", "Rado", "Fossil", "Movado", "Mido", 
    "Montblanc", "Bell & Ross", "Nomos Glashütte", "Frederique Constant", "Sinn",
    "Bremont", "Maurice Lacroix", "Raymond Weil", "Baume & Mercier", "Junghans",
    "Victorinox", "Alpina", "Certina", "Shinola", "Gucci"
];

const watches = [];
watchBrands.forEach((brand, index) => {
    watches.push({
        id: index * 2,
        name: `${brand} Professional Edition`,
        brand: brand,
        gender: "Men",
        price: Math.floor(Math.random() * 50000) + 500,
        img: `https://picsum.photos/seed/${brand}men/400/400`
    });
    watches.push({
        id: index * 2 + 1,
        name: `${brand} Elegance Series`,
        brand: brand,
        gender: "Women",
        price: Math.floor(Math.random() * 30000) + 300,
        img: `https://picsum.photos/seed/${brand}women/400/400`
    });
});

// 2. Logic Functions
function initBrandFilters() {
    const container = document.getElementById('brand-filters');
    if(!container) return;
    container.innerHTML = watchBrands.sort().map(brand => `
        <label class="flex items-center gap-3 cursor-pointer text-xs text-gray-400 hover:text-white">
            <input type="checkbox" value="${brand}" class="filter-brand accent-yellow-600" onchange="filterWatches()"> ${brand}
        </label>
    `).join('');
}

function renderWatches(data) {
    const grid = document.getElementById('product-grid');
    if(!grid) return;
    grid.innerHTML = data.map(w => `
        <div class="watch-card p-4 rounded shadow-lg">
            <img src="${w.img}" class="w-full h-48 object-cover rounded mb-4 bg-zinc-800" alt="${w.name}">
            <div class="flex justify-between items-start mb-1">
                <span class="text-[10px] text-yellow-500 uppercase tracking-widest">${w.brand}</span>
                <span class="text-[9px] text-gray-500 uppercase font-bold">${w.gender}</span>
            </div>
            <h3 class="font-bold text-sm mb-2 h-10 overflow-hidden">${w.name}</h3>
            <div class="flex justify-between items-center mt-auto">
                <span class="text-white font-bold">$${w.price.toLocaleString()}</span>
                <button class="px-3 py-1 bg-zinc-800 border border-zinc-700 hover:bg-yellow-600 hover:text-black transition text-[10px] font-bold uppercase">Details</button>
            </div>
        </div>
    `).join('');
    if(data.length === 0) grid.innerHTML = `<p class="col-span-full text-center text-gray-500 py-20">No matching brands found.</p>`;
}

function filterWatches() {
    const selectedGenders = Array.from(document.querySelectorAll('.filter-gender:checked')).map(cb => cb.value);
    const selectedBrands = Array.from(document.querySelectorAll('.filter-brand:checked')).map(cb => cb.value);
    const priceVal = document.getElementById('filter-price').value;

    let filtered = watches.filter(w => {
        const genderMatch = selectedGenders.length === 0 || selectedGenders.includes(w.gender);
        const brandMatch = selectedBrands.length === 0 || selectedBrands.includes(w.brand);
        let priceMatch = true;
        if(priceVal === "entry") priceMatch = w.price <= 1000;
        else if(priceVal === "mid") priceMatch = w.price > 1000 && w.price <= 10000;
        else if(priceVal === "high") priceMatch = w.price > 10000;
        return genderMatch && brandMatch && priceMatch;
    });
    renderWatches(filtered);
}

// 3. Page Setup
document.addEventListener('DOMContentLoaded', () => {
    // Load Navbar
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-placeholder').innerHTML = data;
        });

    initBrandFilters();
    renderWatches(watches);
});