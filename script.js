const products = [
    { id: 1, name: "Wireless Mouse Pro", price: 499, category: "Electronics", image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=300&fit=crop" },
    { id: 2, name: "Bluetooth Headphones ANC", price: 1499, category: "Electronics", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop" },
    { id: 3, name: "USB-C Cable Braided", price: 299, category: "Accessories", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop" },
    { id: 4, name: "Laptop Stand Aluminum", price: 899, category: "Accessories", image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=300&fit=crop" },
    { id: 5, name: "Mechanical Keyboard RGB", price: 2499, category: "Electronics", image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=300&fit=crop" },
    { id: 6, name: "Webcam 4K Ultra HD", price: 1299, category: "Electronics", image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&h=300&fit=crop" },
    { id: 7, name: "Phone Case Carbon Fiber", price: 399, category: "Accessories", image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=400&h=300&fit=crop" },
    { id: 8, name: "Power Bank 20000mAh PD", price: 1199, category: "Electronics", image: "https://images.unsplash.com/photo-1609092627939-1dfb2cb12ce2?w=400&h=300&fit=crop" },
    { id: 9, name: "Screen Cleaner Kit Pro", price: 199, category: "Accessories", image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=400&h=300&fit=crop" },
    { id: 10, name: "Gaming Mouse Pad XXL", price: 349, category: "Gaming", image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=400&h=300&fit=crop" },
    { id: 11, name: "Wireless Charger 15W", price: 799, category: "Electronics", image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop" },
    { id: 12, name: "LED Desk Lamp Smart", price: 649, category: "Home", image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=300&fit=crop" },
    { id: 13, name: "External SSD 1TB NVMe", price: 3999, category: "Storage", image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400&h=300&fit=crop" },
    { id: 14, name: "Monitor Stand Dual", price: 549, category: "Accessories", image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=300&fit=crop" },
    { id: 15, name: "Ethernet Cable Cat8", price: 249, category: "Networking", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop" },
    { id: 16, name: "Portable Speaker Waterproof", price: 1799, category: "Electronics", image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=300&fit=crop" },
    { id: 17, name: "Laptop Sleeve Premium", price: 599, category: "Accessories", image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=300&fit=crop" },
    { id: 18, name: "HDMI Cable 8K", price: 349, category: "Accessories", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop" },
    { id: 19, name: "Smart Watch Series 9", price: 2999, category: "Wearables", image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400&h=300&fit=crop" },
    { id: 20, name: "Tablet Stand Adjustable", price: 449, category: "Accessories", image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=300&fit=crop" }
];

let filteredProducts = [...products];

const productsGrid = document.getElementById('products-grid');
const searchInput = document.getElementById('search-input');
const filterPrice = document.getElementById('filter-price');
const sortBy = document.getElementById('sort-by');
const productCount = document.getElementById('product-count');
const activeFilters = document.getElementById('active-filters');
const noResults = document.getElementById('no-results');
const themeToggle = document.getElementById('theme-toggle');

// Theme toggle
themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    themeToggle.textContent = newTheme === 'light' ? '🌙' : '☀️';
    localStorage.setItem('theme', newTheme);
});

// Load saved theme
const savedTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', savedTheme);
themeToggle.textContent = savedTheme === 'light' ? '🌙' : '☀️';

function renderProducts(productsToRender) {
    productsGrid.innerHTML = '';
    
    if (productsToRender.length === 0) {
        noResults.style.display = 'block';
        productCount.textContent = '0 products';
        return;
    }
    
    noResults.style.display = 'none';
    productCount.textContent = `${productsToRender.length} product${productsToRender.length !== 1 ? 's' : ''}`;
    
    productsToRender.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
            <div class="product-content">
                <span class="product-category">${product.category}</span>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-price">₹${product.price.toLocaleString('en-IN')}</div>
                <button class="add-to-cart">Add to Cart</button>
            </div>
        `;
        productsGrid.appendChild(card);
    });
}

function updateActiveFilters() {
    const filters = [];
    if (searchInput.value) filters.push(`Search: "${searchInput.value}"`);
    if (filterPrice.value !== 'all') filters.push(filterPrice.options[filterPrice.selectedIndex].text);
    if (sortBy.value !== 'default') filters.push(sortBy.options[sortBy.selectedIndex].text);
    
    activeFilters.textContent = filters.length ? filters.join(' • ') : 'Showing all';
}

function filterAndSort() {
    let result = [...products];
    
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm) {
        result = result.filter(p => p.name.toLowerCase().includes(searchTerm) || p.category.toLowerCase().includes(searchTerm));
    }
    
    const priceRange = filterPrice.value;
    if (priceRange === '0-500') result = result.filter(p => p.price < 500);
    else if (priceRange === '500-1000') result = result.filter(p => p.price >= 500 && p.price <= 1000);
    else if (priceRange === '1000+') result = result.filter(p => p.price > 1000);
    
    const sortValue = sortBy.value;
    if (sortValue === 'price-low') result.sort((a, b) => a.price - b.price);
    else if (sortValue === 'price-high') result.sort((a, b) => b.price - a.price);
    else if (sortValue === 'name-az') result.sort((a, b) => a.name.localeCompare(b.name));
    
    filteredProducts = result;
    renderProducts(filteredProducts);
    updateActiveFilters();
}

// Event listeners
searchInput.addEventListener('input', filterAndSort);
filterPrice.addEventListener('change', filterAndSort);
sortBy.addEventListener('change', filterAndSort);

// Initial render
renderProducts(products);