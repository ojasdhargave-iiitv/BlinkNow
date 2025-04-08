const products = {
    'amul-gold-milk': {
        id: 'amul-gold-milk',
        title: 'Amul Gold Full Cream Fresh Milk',
        description: '500ml of fresh, full cream milk',
        price: '₹33',
        deliveryTime: '13 MINS',
        weight: '500 ml',
        image: 'pics/1c0db977-31ab-4d8e-abf3-d42e4a4b4632.avif',
        details: 'Amul Gold Milk is a pure and hygienic milk with a rich taste. It contains 4.5% fat and 8.5% SNF giving you thicker and creamier milk for your daily needs.'
    },
    'puregg': {
        id: 'puregg',
        title: 'Pure Eggs Premium Speciality Eggs',
        description: '6 pieces, Pure White Eggs',
        price: '₹50',
        deliveryTime: '13 MINS',
        weight: '6 pieces',
        image: 'pics/dairy/05aeaeb4-4749-4808-9386-6dccb8f17035.jpg',
        details: 'Enjoy delicious and healthy egg recipes with Pure Eggs Premium any time of the day. Have them boiled or scramble with some vegetables to relish its delightful flavour.'
    },
    'amul-butter': {
        id: 'Amul Salted Butter',
        title: 'Amul Gold Full Cream Fresh Milk',
        description: '100gm of fresh, full fat butter',
        price: '₹60',
        deliveryTime: '13 MINS',
        weight: '100 gm',
        image: 'pics/dairy/0be0d49a-4dae-408a-8786-afae1dd05cb1.jpg',
        details: 'Made from the freshest of cream, the Amul butter has wonderful taste which is delicate and slightly salty. This finely processed butter is natural, pure and tastes best with toasts and sandwiches. Has a natural and pure formulation that gives a great taste. Made from fresh cream that has a delicious flavour. Spread it over toast or cook your curries in it for a heavenly taste.'
    },
    'amul-tazza': {
        id: 'amul-tazza',
        title: 'Amul Taaza Toned Fresh Milk',
        description: '1ltr of fresh, full toned milk',
        price: '₹53',
        deliveryTime: '13 MINS',
        weight: '1 ltr',
        image: 'pics/dairy/94c99c0b-0cb1-4c07-b91d-586c5300945b.avif',
        details: 'Amul Tazza Milky Milk is a pure and hygienic milk with a rich taste. It contains 4.5% fat and 8.5% SNF giving you thicker and creamier milk for your daily needs.'
    },
    'amul-chesse': {
        id: 'amul-chesse',
        title: 'Amul Cheese Cubes',
        description: '200gm of fresh chesse',
        price: '₹127',
        deliveryTime: '13 MINS',
        weight: '200gm',
        image: 'pics/dairy/170a.jpg',
        details: 'Add yummy double cheese burst to all your dishes with Amul Cheese Cubes and enjoy the mouth-watering burst of flavours. The cheese is rich in protein and vitamins making it a healthy ingredient in all the dishes. A simple omelette will also taste amazing with these cubes of Amul cheese. The cube form of cheese makes it easier to use in the pizzas, fondues and other exotic dishes. The cubic can be used in a thousand ways, from party platter to grating it into the soup. The cheese lover has many options to include cheese in their diet.'
    },
    'a-grade-egg': {
        id: 'a-grade-egg',
        title: 'Egg on Eggs Grade-A Premium White Eggs',
        description: '12 pieces',
        price: '₹100',
        deliveryTime: '13 MINS',
        weight: 'Shelf life: 15 days',
        image: 'pics/dairy/7c338b62-a530-4e8c-b020-9fa68f6cf038.jpg',
        details: 'This Item is non-returnable. For a damaged, defective, incorrect or expired item, you can request a replacement within 72 hours of delivery. In case of an incorrect item, you may raise a replacement or return request only if the item is sealed/ unopened/ unused and in original condition.'
    },
    'amul-fresh': {
        id: 'amul-fresh',
        title: 'Amul Cow Fresh Milk',
        description: '500 ml of fresh, full fresh milk',
        price: '₹28',
        deliveryTime: '13 MINS',
        weight: 'Shelf life: 5 days',
        image: 'pics/dairy/89cb3ef5-0003-4100-bcf4-f97092f30997.jpg',
        details: 'Amul Cow Milk (Polypack) is pure and pasteurized milk with great nutritional value. It can be consumed directly or can be used for preparing tea, coffee, sweets, khoya, curd, buttermilk, ghee etc.'
    },
    'amul-dahi': {
        id: 'amul-dahi',
        title: 'Amul Curd',
        description: '850 ml of fresh, thick curd',
        price: '₹50',
        deliveryTime: '13 MINS',
        weight: 'shelf life: 7 days',
        image: 'pics/dairy/0e07b9e3-8968-4058-932c-e877df190918.jpg',
        details: 'This Item is non-returnable. For a damaged, defective, incorrect or expired item, you can request a replacement within 72 hours of delivery. In case of an incorrect item, you may raise a replacement or return request only if the item is sealed/ unopened/ unused and in original condition.'
    },
    'amul-gircow': {
        id: 'amul-gircow',
        title: 'Amul A2 Gir Cow Fresh Milk',
        description: '1ltr of fresh, toned creamy milk',
        price: '₹80',
        deliveryTime: '13 MINS',
        weight: 'shelf life: 4 days',
        image: 'pics/dairy/d12b403a-0798-4e32-bd6c-7ea5e4608d53.jpg',
        details: 'The product is non-returnable. For a damaged, defective, expired or incorrect item, you can request a replacement within 24 hours of delivery. In case of an incorrect item, you may raise a replacement or return request only if the item is sealed/ unopened/ unused and in original condition.'
    },
    'bread': {
        id: 'bread',
        title: 'Britannia 100% Whole Wheat Bread (No Maida)',
        description: '400 gm of fresh, soft bread',
        price: '₹55',
        deliveryTime: '13 MINS',
        weight: 'shelf life: 5 days',
        image: 'pics/dairy/c2813780-9847-46a9-8645-e1ef44e8c7f2.jpg',
        details: 'Made from 100% whole wheat grains, Britannia Whole Wheat Bread is a good source of fibre and essential nutrients. Soft and delicious, enjoy toasted bread with tea or roast it on pan for making crunchy croutons.'
    },
    'amul-masti': {
        id: 'amul-masti',
        title: 'Amul Masti Curd',
        description: '1kg of fresh, thick curd',
        price: '₹75',
        deliveryTime: '13 MINS',
        weight: 'shelf life: 7 days',
        image: 'pics/dairy/c2b22cd4-b144-4266-901a-ff4ae82aa912.avif',
        details: 'This Item is non-returnable. For a damaged, defective, incorrect or expired item, you can request a replacement within 72 hours of delivery. In case of an incorrect item, you may raise a replacement or return request only if the item is sealed/ unopened/ unused and in original condition.'
    },



    'kettle-red': {
        id: 'kettle-red',
        title: 'Kettle Studio Mature Cheddar & Red Onions Potato Chips',
        description: '56gm',
        price: '₹47',
        deliveryTime: '13 MINS',
        weight: 'shelf life: 18 months',
        image: 'pics/snack/ff2acf02-4008-4fc5-b411-d7927cf92fd7.avif',
        details: 'Fresh Potatoes, Vegetable Oils (Sunflower Oil, Palmolein Oil, Cotton Seed Oil), Onion Powder, Maltodextrine, Iodized salt, Corn Starch, Sugar, Cheddar Cheese Powder, Milk Solids, Anticaking Agent (E470(i), E551), Acidity Regulators (E270, E330), Edible Vegetable Fat (Palm), Flavour Enhancers (E627, E631), Antioxidant (E300).'
    },
    'onionring': {
        id: 'onionring',
        title: 'Nongshim Onion Ring Puffs',
        description: '50gm',
        price: '₹129',
        deliveryTime: '13 MINS',
        weight: 'shelf life: 18 months',
        image: 'pics/snack/5fe78691-f9b7-497c-a111-b4fb2514aa02.avif',
        details: 'This Item is non-returnable. For a damaged, defective, incorrect or expired item, you can request a replacement within 72 hours of delivery. In case of an incorrect item, you may raise a replacement or return request only if the item is sealed/ unopened/ unused and in original condition.'
    },
    'kettle-pink': {
        id: 'kettle-pink',
        title: 'Kettle Studio Himalayan Pink Salt Potato Chips',
        description: '47gm',
        price: '₹47',
        deliveryTime: '13 MINS',
        weight: 'shelf life: 18 months',
        image: 'pics/snack/033d8394-849a-4a07-a712-79a50df9bd51.avif',
        details: 'This Item is non-returnable. For a damaged, defective, incorrect or expired item, you can request a replacement within 72 hours of delivery. In case of an incorrect item, you may raise a replacement or return request only if the item is sealed/ unopened/ unused and in original condition.'
    },
    'doki-purple': {
        id: 'doki-purple',
        title: 'DOKi Tokyo Teriyaki Buffalo Jerky',
        description: '30gm',
        price: '₹199',
        deliveryTime: '13 MINS',
        weight: 'shelf life: 18 months',
        image: 'pics/snack/f20b4670-e147-4af7-8a25-c5e30ad860c2.avif',
        details: 'Buffalo, Teriyaki Sauce [Soy Sauce (Water, Salt, Soybean, Wheat, Color Caramel 1-Plain, Hfs) , Water, Sugar, Brown Sugar, Tomato Paste, Rice Wine (Water,Rice,Wheat), Oyster Sauce (Water, Sugar,Salt, Oyster Extract (Oysters, Water, Salt) , Modified Corn Starch, Color Caramel 1-Plain) , Rice Vinegar, Modified Corn Starch, Ginger, Onion, Garlic Powder, Acidity Regulator (Lactic Acid), Stabilizer (Xanthum Gum)], Soy Sauce( Water, Soyabean, Wheat, Salt) Jaggery, Celery Powder, Honey, Tamarind Pulp, Vinegar, Sea Salt, Black Pepper, Onion Powder, Chilli Flakes, Sesame Seeds, Garlic Powder, Yeast Extract, Bhut Jolokia, Natural Flavouring Agent'
    },
    'kettle-pink': {
        id: 'kettle-pink',
        title: 'Kettle Studio Himalayan Pink Salt Potato Chips',
        description: '47gm',
        price: '₹47',
        deliveryTime: '13 MINS',
        weight: 'shelf life: 18 months',
        image: 'pics/snack/033d8394-849a-4a07-a712-79a50df9bd51.avif',
        details: 'This Item is non-returnable. For a damaged, defective, incorrect or expired item, you can request a replacement within 72 hours of delivery. In case of an incorrect item, you may raise a replacement or return request only if the item is sealed/ unopened/ unused and in original condition.'
    },
    'cheetos': {
        id: 'cheetos',
        title: 'Cheetos Flamin hot Crunchy Puffs',
        description: '29gm',
        price: '₹161',
        deliveryTime: '13 MINS',
        weight: 'shelf life: 6 months',
        image: 'pics/snack/b3ee7724-3b6c-475e-aa50-1714fe9199be.avif',
        details: 'This Item is non-returnable. For a damaged, defective, incorrect or expired item, you can request a replacement within 72 hours of delivery.In case of an incorrect item, you may raise a replacement or return request only if the item is sealed/ unopened/ unused and in original condition.'
    },
    'kettle-green': {
        id: 'kettle-green',
        title: 'Kettle Studio Homestyle Potato Crisps - Lime & Chilli',
        description: '133gm',
        price: '₹99',
        deliveryTime: '13 MINS',
        weight: 'shelf life: 18 months',
        image: 'pics/snack/b798ce6c-b936-4fc3-a5a5-48d125fbe978.avif',
        details: 'This Item is non-returnable. For a damaged, defective, incorrect or expired item, you can request a replacement within 72 hours of delivery.In case of an incorrect item, you may raise a replacement or return request only if the item is sealed/ unopened/ unused and in original condition.'
    },
    'darkchoco': {
        id: 'darkchoco',
        title: 'Beanly Dark Chocolate Spread with Breadsticks',
        description: '52gm',
        price: '₹130',
        deliveryTime: '13 MINS',
        weight: 'shelf life: 6 months',
        image: 'pics/snack/bb141b2d-4fd6-4e64-af0c-185464e52abb.avif',
        details: 'Now you can enjoy the taste of Dark Choco Hazelnut anytime, anywhere, with the new Beanly Dips snack pack! This comes with Dark choco Hazelnut spread & crispy breadsticks, perfect for dipping.'
    },
    'shrimps': {
        id: 'shrimps',
        title: 'Nongshim Shrimp Flavoured Hot & Spicy Crackers Chips',
        description: '75gm',
        price: '₹130',
        deliveryTime: '13 MINS',
        weight: 'shelf life: 12 months',
        image: 'pics/snack/bebe562d-c417-465b-9b12-4d612f48d08a.avif',
        details: 'Wheat flour, rice bran oil, corn starch, shrimp (8.26%), Palm oil, thickener (INS 1404), sugar, salt, seasoning (kelp, anchovy, soy sauce (0.0045%), milk, maltodextrin, yeast extract, bonito, tuna), kimchi seasoning (cabbage, red chilli pepper, garlic, salt), onion powder, flavour (dried shrimp), acidity regulator (INS 330)'
    },
    'kimchi': {
        id: 'kimchi',
        title: 'Orion Korean Kimchi K Snack Onion Rings',
        description: '70gm',
        price: '₹51',
        deliveryTime: '13 MINS',
        weight: 'shelf life: 8 months',
        image: 'pics/snack/c7221d26-16ce-4b85-802a-b4a5aaabae13.avif',
        details: 'Authentic Kimchi Flavor: Tangy, spicy, and umami-packed for a true Korean taste.Crispy & Crunchy: Ring-shaped chips with a satisfying crunch.K-Snack Favorite: Perfect for fans of Shin Ramyun, Samyang, Nongshim, and Maggi Hot & Spicy.Versatile Pairing: Great with ramen, K-dramas, or on-the-go snacking.Premium Ingredients: Made with quality seasonings for an intense, flavorful bite.'
    },
    'cheetos-blue': {
        id: 'cheetos-blue',
        title: 'Cheetos Cheese Flavoured Puffs',
        description: '25gm',
        price: '₹161',
        deliveryTime: '13 MINS',
        weight: 'shelf life: 12 months',
        image: 'pics/snack/ef3c74a4-c809-4799-919d-27f75fba37eb.avif',
        details: 'This Item is non-returnable. For a damaged, defective, incorrect or expired item, you can request a replacement within 72 hours of delivery.In case of an incorrect item, you may raise a replacement or return request only if the item is sealed/ unopened/ unused and in original condition.'
    },
    'doki-orange': {
        id: 'doki-orange',
        title: 'DOKi Kerala Fry Buffalo Jerky',
        description: '30gm',
        price: '₹199',
        deliveryTime: '13 MINS',
        weight: 'shelf life: 12 months',
        image: 'pics/snack/a0f592fe-d783-42e1-b1a4-1efccdc52721.avif',
        details: 'Buffalo, Soy Sauce (Water, Soybean, Wheat, Salt), Coconut Milk, Olive Oil, Onion Powder, Garlic Powder, Dessicated Coconut, Celery Powder, Green Chili Powder, Fennel Powder, Ginger Powder, Salt, Cumin Powder, Garam Masala (Coriander, Chili, Cumin, Cassia Leaf, Black Pepper, Cassia Bark, Clove, Black Cardamom, Star Anise, Fennel, Dried Ginger, Iodized Salt, Caraway), Coriander Powder, Cracked Black Pepper, Curry Leaf Powder, Yeast Extract'
    },
    'kabs': {
        id: 'kabs',
        title: 'Kabs Jackpot Chilli Lemon Stix Crisps',
        description: '80gm',
        price: '₹65',
        deliveryTime: '13 MINS',
        weight: 'shelf life: 6 months',
        image: 'pics/snack/fe49d6ac-194c-4caf-b46d-48c1a3e6a17b.avif',
        details: 'Perfect ready to eat savory snack to have at tea timeFried Potato snack made by mix of Potato flakes & refined wheat flour to make the potato light and crispy, Hot spice powder makes that 2x Hot & Spicy'
    },
    
};

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.scrollbox').forEach(item => {
        item.addEventListener('click', function(e) {
            if (e.target.closest('.addbutton')) return;
            
            const productId = this.getAttribute('data-product');
            if (productId) {
                showProduct(productId);
                history.pushState({product: productId}, '', `#product-${productId}`);
            }
        });
    });
    document.querySelectorAll('.see').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionTitle = this.closest('.tit').querySelector('.hot').textContent;
            showSeeAllPage(sectionTitle);
            history.pushState({section: sectionTitle}, '', `#see-all-${encodeURIComponent(sectionTitle)}`);
        });
    });
    if (window.location.hash) {
        const hash = window.location.hash.substring(1);
        if (hash.startsWith('product-')) {
            const productId = hash.replace('product-', '');
            showProduct(productId);
        } else if (hash.startsWith('see-all-')) {
            const sectionTitle = decodeURIComponent(hash.replace('see-all-', ''));
            showSeeAllPage(sectionTitle);
        }
    }
});
function showProduct(productId) {
    const product = products[productId];
    if (!product) return;
    
    const sectionsToHide = [
        '.mid', '.grid-container', '.banner', '.categories',
        '.tit', '.scrollcon', '.scrollcon1', '.banner1',
        '.slogan', '.decorline', '.slogan1', '.linkcontainer',
        '.linkcontainer1', '.trade', '.downloadapp', '.installcon',
        '.circon', '#categoryContent'
    ];
    
    sectionsToHide.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => el.style.display = 'none');
    });

    let productContent = document.getElementById('productContent');
    if (!productContent) {
        productContent = document.createElement('div');
        productContent.id = 'productContent';
        document.body.appendChild(productContent);
    }
    
    productContent.innerHTML = `
        <div class="product-detail-container">
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.title}" class="product-main-image">
            </div>
            <div class="product-info">
                <div class="product-header">
                    <h1>${product.title}</h1>
                    <p>${product.description}</p>
                </div>
                <div class="product-price">${product.price}</div>
                <div class="product-delivery">Delivery in ${product.deliveryTime}</div>
                <div class="product-weight">${product.weight}</div>
                <div class="product-actions">
                    <button class="add-to-cart-btn">ADD TO CART</button>
                </div>
                <p>Press the logo above to back to home page</p>
                <div class="product-description">
                    <h3>Product Details</h3>
                    <p>${product.details}</p>
                </div>
            </div>
        </div>
        <div class="footerpage">
        <div class="linkcontainer">  
            <div class="footerlink">Useful Links</div>
            <div class="footerlinkgrid">
                <p class="paralink">About</p>
                <p class="paralink">Privacy</p>
                <p class="paralink">Partner</p>
                <p class="paralink">Careers</p>
                <p class="paralink">Terms</p>
                <p class="paralink">Franchise</p>
                <p class="paralink">Blog</p>
                <p class="paralink">FAQs</p>
                <p class="paralink">Seller</p>
                <p class="paralink">Press</p>
                <p class="paralink">Security</p>
                <p class="paralink">Warehouse</p>
                <p class="paralink">Lead</p>
                <p class="paralink">Mobile</p>
                <p class="paralink">Deliver</p>
                <p class="paralink">Value</p>
                <p class="paralink">Contact</p>
                <p class="paralink">Resources</p>
            </div>
        </div>

        <div class="linkcontainer1">
            <div class="footerlink1">Categories</div>
            <div class="footerlink1" style="color: green; cursor: pointer; text-decoration: underline; margin-left: 15px; font-size: 15px;">see all</div>
            <div class="footerlinkgrid1">
                <p class="paralink">Vegetables & Fruits</p>
                <p class="paralink">Dairy & Breakfast</p>
                <p class="paralink">Munchies</p>
                <p class="paralink">Cold Drinks & Juices</p>
                <p class="paralink">Instant & Frozen Food</p>
                <p class="paralink">Tea, Coffee & Health Drinks</p>
                <p class="paralink">Bakery & Biscuits</p>
                <p class="paralink">Sweet Tooth</p>
                <p class="paralink">Atta, Rice & Dal</p>
                <p class="paralink">Dry Fruits, Masala & Oil</p>
                <p class="paralink">Sauces & Spreads</p>
                <p class="paralink">Chicken, Meat & Fish</p>
                <p class="paralink">Paan Corner</p>
                <p class="paralink">Organic & Premium</p>
                <p class="paralink">Baby Care</p>
                <p class="paralink">Pharma & Wellness</p>
                <p class="paralink">Cleaning Essentials</p>
                <p class="paralink">Home & Office</p>
                <p class="paralink">Ice Creams & Frozen Deserts</p>
                <p class="paralink">Personal Care</p>
                <p class="paralink">Pet Care</p>
                <p class="paralink">Beauty & Cosmetics</p>
                <p class="paralink">Fashion & Accessories</p>
                <p class="paralink">Electronics & Electricals</p>
                <p class="paralink">Stationery Needs</p>
                <p class="paralink">Books</p>
                <p class="paralink">Toys & Games</p>
                <p class="paralink">Print Store</p>
                <p class="paralink">E-Gift Cards</p>
            </div>
        </div>
        <div class="trade">@ BlinkNow Commerce Private Limited, 2024-2025</div>
        <div class="downloadapp">Download App</div>
        <div class="installcon">
            <img src="pics/d61019073b700ca49d22.webp">
            <img src="pics/8ed033800ea38f24c4f0.webp">
        </div>
        <div class="allcircles">
            <div class="circon">
                <div class="circleicon"></div>
            </div>
            <div class="circon">
                <div class="circleicon"></div>
            </div>
            <div class="circon">
                <div class="circleicon"></div>
            </div>
            <div class="circon">
                <div class="circleicon"></div>
            </div>
        </div>
        <div class="terms" style="color: rgb(93, 93, 93); font-size: 15px; padding: 15px;">“BlinkNow” is owned & managed by "BlinkNow Commerce Private Limited" and is not related, linked or interconnected in whatsoever manner or nature, to “IIITV.COM” which is a real estate services business operated by "IIITV Consultancy Services Private Limited”.</div>
    
    </div>
    `;
    
    productContent.style.display = 'block';
}

function showSeeAllPage(sectionTitle) {
    const sectionsToHide = [
        '.mid', '.grid-container', '.banner', '.categories',
        '.tit', '.scrollcon', '.scrollcon1', '.banner1',
        '.slogan', '.decorline', '.slogan1', '.linkcontainer',
        '.linkcontainer1', '.trade', '.downloadapp', '.installcon',
        '.circon', '#categoryContent', '#productContent'
    ];
    
    sectionsToHide.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => el.style.display = 'none');
    });
    const seeAllContent = document.getElementById('seeAllContent');
    seeAllContent.innerHTML = `
        <div class="category-header">
            <h1 id="seeAllTitle">${sectionTitle}</h1>
            <div class="sort-controls">
                <span>Sort by:</span>
                <button class="sort-btn active" data-sort="asc">Name (A-Z)</button>
                <button class="sort-btn" data-sort="desc">Name (Z-A)</button>
            </div>
        </div>
        <div class="products-grid" id="productsGrid"></div>
        <div class="footerpage">
            <!-- Your existing footer content -->
        </div>
    `;
    
    const section = Array.from(document.querySelectorAll('.hot'))
        .find(el => el.textContent.includes(sectionTitle))
        ?.closest('.tit')?.nextElementSibling;
    
    if (section) {
        const scrollboxes = section.querySelectorAll('.scrollbox');
        let productsData = [];
        scrollboxes.forEach(box => {
            const productId = box.getAttribute('data-product');
            const product = products[productId];
            if (product) {
                productsData.push(product);
            }
        });
        displaySortedProducts(productsData, 'asc');
        document.querySelectorAll('.sort-btn').forEach(button => {
            button.addEventListener('click', function() {
                const sortOrder = this.getAttribute('data-sort');
                displaySortedProducts(productsData, sortOrder);
                document.querySelectorAll('.sort-btn').forEach(btn => 
                    btn.classList.remove('active'));
                this.classList.add('active');
            });
        });
    }
    
    seeAllContent.style.display = 'block';
}
function displaySortedProducts(productsData, sortOrder) {
    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = '';
    const sortedProducts = [...productsData].sort((a, b) => {
        const nameA = a.title.toLowerCase();
        const nameB = b.title.toLowerCase();
        return sortOrder === 'asc' 
            ? nameA.localeCompare(nameB)
            : nameB.localeCompare(nameA);
    });
    
    sortedProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'see-all-product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.title}" class="see-all-product-image">
            <h3 class="see-all-product-title">${product.title}</h3>
            <p class="see-all-product-weight">${product.weight}</p>
            <p class="see-all-product-price">${product.price}</p>
            <p class="see-all-product-delivery">Delivery in ${product.deliveryTime}</p>
            <button class="see-all-add-to-cart-btn">ADD TO CART</button>
        `;
        productCard.addEventListener('click', function(e) {
            if (!e.target.closest('.see-all-add-to-cart-btn')) {
                showProduct(product.id);
                history.pushState({product: product.id}, '', `#product-${product.id}`);
            }
        });
        productsGrid.appendChild(productCard);
    });
}
window.addEventListener('popstate', function(event) {
    if (window.location.hash) {
        const hash = window.location.hash.substring(1);
        if (hash.startsWith('product-')) {
            const productId = hash.replace('product-', '');
            showProduct(productId);
        } else if (hash.startsWith('see-all-')) {
            const sectionTitle = decodeURIComponent(hash.replace('see-all-', ''));
            showSeeAllPage(sectionTitle);
        }
    } else {
        document.querySelectorAll('*').forEach(el => el.style.display = '');
    }
});