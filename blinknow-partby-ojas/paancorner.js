document.addEventListener('DOMContentLoaded', function() {
    // Sample product data for Paan Corner
    const paanProducts = [
        {
            id: 1,
            name: "Traditional Meetha Paan",
            weight: "1 piece",
            price: "₹20",
            image: "pics/paan-corner_web.jpg"
        },
        {
            id: 2,
            name: "Chocolate Paan",
            weight: "1 piece",
            price: "₹25",
            image: "pics/paan-corner_web.jpg"
        },
        {
            id: 3,
            name: "Magai Paan",
            weight: "1 piece",
            price: "₹30",
            image: "pics/paan-corner_web.jpg"
        },
        {
            id: 4,
            name: "Paan Masala",
            weight: "10g pouch",
            price: "₹15",
            image: "pics/paan-corner_web.jpg"
        },
        {
            id: 5,
            name: "Sada Paan",
            weight: "1 piece",
            price: "₹15",
            image: "pics/paan-corner_web.jpg"
        },
        {
            id: 6,
            name: "Paan with Gulkand",
            weight: "1 piece",
            price: "₹35",
            image: "pics/paan-corner_web.jpg"
        },
        {
            id: 7,
            name: "Paan Kit",
            weight: "5 pieces",
            price: "₹100",
            image: "pics/paan-corner_web.jpg"
        },
        {
            id: 8,
            name: "Betel Leaves",
            weight: "100g",
            price: "₹50",
            image: "pics/paan-corner_web.jpg"
        },
        // Add more products as needed
    ];

    const productsContainer = document.querySelector('.products-grid-container');

    // Generate product cards
    paanProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <h3 class="product-title">${product.name}</h3>
            <p class="product-weight">${product.weight}</p>
            <p class="product-price">${product.price}</p>
            <button class="add-to-cart-btn">ADD TO CART</button>
        `;
        
        productsContainer.appendChild(productCard);
    });

    // Add click event to "ADD TO CART" buttons
    document.querySelectorAll('.add-to-cart-btn').forEach(button => {
        button.addEventListener('click', function() {
            const productCard = this.closest('.product-card');
            const productName = productCard.querySelector('.product-title').textContent;
            alert(`${productName} added to cart!`);
            // Here you would normally add to cart functionality
        });
    });
});