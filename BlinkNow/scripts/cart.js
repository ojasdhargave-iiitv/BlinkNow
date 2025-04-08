document.addEventListener("DOMContentLoaded", function () {
  const cartButton = document.querySelector(".cart");
  const cartOverlay = document.getElementById("cart-overlay");
  const cartFrame = document.getElementById("cart-frame");

  function openCart() {
    cartOverlay.style.display = "block";
    document.body.style.overflow = "hidden";
  }

  function closeCart() {
    cartFrame.style.right = "-400px";
  }

  cartButton.addEventListener("click", openCart);

  cartOverlay.addEventListener("click", function (event) {
    if (event.target === cartOverlay) {
      closeCart();
    }
  });

  window.addEventListener("message", function (event) {
    if (event.data === "closeCart") {
      closeCart();
    }
  });
});

let cart = {
  items: [],
  totalQuantity: 0,
  subtotal: 0,
  deliveryCharge: 30,
  handlingCharge: 4,
  getTotal() {
    return this.subtotal + this.deliveryCharge + this.handlingCharge;
  },
};

function loadCart() {
  const savedCart = localStorage.getItem("blinkNowCart");
  if (savedCart) {
    const parsedCart = JSON.parse(savedCart);
    cart = {
      ...parsedCart,
      getTotal: cart.getTotal,
    };
    updateCartIndicator();
  }
}

function saveCart() {
  const cartCopy = { ...cart };
  delete cartCopy.getTotal;
  localStorage.setItem("blinkNowCart", JSON.stringify(cartCopy));
  updateCartIndicator();
}

function updateCartIndicator() {
  const cartButton = document.querySelector(".cart");
  if (cartButton) {
    if (cart.totalQuantity > 0) {
      cartButton.textContent = `Cart (${cart.totalQuantity})`;
    } else {
      cartButton.textContent = "Cart";
    }
  }
}

function addToCart(product) {
  const existingItemIndex = cart.items.findIndex(
    (item) => item.id === product.id
  );

  if (existingItemIndex >= 0) {
    cart.items[existingItemIndex].quantity += 1;
  } else {
    cart.items.push({
      ...product,
      quantity: 1,
    });
  }

  cart.totalQuantity += 1;
  cart.subtotal += product.price;

  saveCart();

  showAddedToCartFeedback(product.name);
}

function showAddedToCartFeedback(productName) {
  const feedbackDiv = document.createElement("div");
  feedbackDiv.style.position = "fixed";
  feedbackDiv.style.bottom = "20px";
  feedbackDiv.style.left = "50%";
  feedbackDiv.style.transform = "translateX(-50%)";
  feedbackDiv.style.backgroundColor = "rgb(49, 134, 22)";
  feedbackDiv.style.color = "white";
  feedbackDiv.style.padding = "10px 20px";
  feedbackDiv.style.borderRadius = "5px";
  feedbackDiv.style.zIndex = "9999";
  feedbackDiv.style.boxShadow = "0 2px 5px rgba(0,0,0,0.2)";
  feedbackDiv.textContent = `${productName} added to cart`;

  document.body.appendChild(feedbackDiv);

  setTimeout(() => {
    document.body.removeChild(feedbackDiv);
  }, 2000);
}

function initializeCart() {
  loadCart();

  const cartButton = document.querySelector(".cart");
  if (cartButton) {
    cartButton.addEventListener("click", openCartOverlay);
  }

  const addButtons = document.querySelectorAll(".addbutton");
  addButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      const productBox = this.closest(".scrollbox");
      if (productBox) {
        const productId = productBox.dataset.product;
        const productName = productBox.querySelector(".cap1").textContent;
        const productVariant = productBox.querySelector(".cap2").textContent;
        const productPrice = parseInt(
          productBox.querySelector(".cost").textContent.replace("₹", "")
        );
        const productImage = productBox.querySelector(".amul").src;

        addToCart({
          id: productId,
          name: productName,
          variant: productVariant,
          price: productPrice,
          image: productImage,
        });
      }
    });
  });
}

function openCartOverlay() {
  const overlay = document.getElementById("cart-overlay");
  const cartFrame = document.getElementById("cart-frame");

  if (overlay && cartFrame) {
    overlay.style.display = "block";

    cartFrame.style.right = "0";

    cartFrame.onload = function () {
      updateCartFrame(cartFrame);
    };

    if (cartFrame.contentDocument.readyState === "complete") {
      updateCartFrame(cartFrame);
    }
  }
}

function updateCartFrame(cartFrame) {
  if (!cartFrame.contentWindow) return;

  try {
    const productContainer = cartFrame.contentDocument.querySelector(
      ".product-slot-container"
    );
    if (productContainer) {
      productContainer.innerHTML = "";

      cart.items.forEach((item) => {
        const productHTML = `
         <div class="product-container" data-product-id="${item.id}">
           <div class="product-left-container">
             <div class="product-slot-image-container">
               <img alt="${item.name}" src="${item.image}" loading="lazy" class="product-slot-image">
             </div>
           </div>
           <div class="product-right-container">
             <div class="product-slot-text-wrapper">
               <div class="product-slot-title">${item.name}</div>
               <div class="product-slot-variant">${item.variant}</div>
               <div class="product-slot-price">₹${item.price}</div>
             </div>
             <div class="product-slot-button">
               <div class="addbutton">
                 <div class="addbutton-elements-minus" onclick="decreaseQuantity('${item.id}')">&#8722;</div>
                 <div class="addbutton-elements-quantity">${item.quantity}</div>
                 <div class="addbutton-elements-plus" onclick="increaseQuantity('${item.id}')">&#43;</div>
               </div>
             </div>
           </div>
         </div>
       `;
        productContainer.innerHTML += productHTML;
      });

      // Update shipment info
      const shipmentInfo = cartFrame.contentDocument.querySelector(
        ".shipment-slot-highlight"
      );
      if (shipmentInfo) {
        shipmentInfo.textContent = `Shipment of ${cart.totalQuantity} items`;
      }

      // Update prices
      cartFrame.contentDocument.querySelector(
        ".billing-slot-product-price-value"
      ).textContent = `₹${cart.subtotal}`;
      cartFrame.contentDocument.querySelector(
        ".billing-slot-total-price"
      ).textContent = `₹${cart.getTotal()}`;
      cartFrame.contentDocument.querySelector(
        ".checkout-price-text"
      ).textContent = `₹${cart.getTotal()}`;

      // Add functions for quantity buttons
      const scriptElement = cartFrame.contentDocument.createElement("script");
      scriptElement.textContent = `
       function increaseQuantity(productId) {
         window.parent.postMessage({
           action: 'increaseQuantity',
           productId: productId
         }, '*');
       }
       
       function decreaseQuantity(productId) {
         window.parent.postMessage({
           action: 'decreaseQuantity',
           productId: productId
         }, '*');
       }
     `;
      cartFrame.contentDocument.body.appendChild(scriptElement);
    }
  } catch (error) {
    console.error("Error updating cart frame:", error);
  }
}

function closeCartOverlay() {
  const overlay = document.getElementById("cart-overlay");
  const cartFrame = document.getElementById("cart-frame");

  if (overlay && cartFrame) {
    cartFrame.style.right = "-422px";

    setTimeout(() => {
      overlay.style.display = "none";
    }, 0);
  }
}

function handleIframeMessages(event) {
  if (event.data === "closeCart") {
    closeCartOverlay();
    return;
  }

  const message = event.data;

  if (message.action === "increaseQuantity") {
    increaseItemQuantity(message.productId);
  } else if (message.action === "decreaseQuantity") {
    decreaseItemQuantity(message.productId);
  }
}

window.increaseItemQuantity = function (productId) {
  const itemIndex = cart.items.findIndex((item) => item.id === productId);

  if (itemIndex >= 0) {
    cart.items[itemIndex].quantity += 1;
    cart.totalQuantity += 1;
    cart.subtotal += cart.items[itemIndex].price;
    saveCart();

    const cartFrame = document.getElementById("cart-frame");
    if (cartFrame) {
      updateCartFrame(cartFrame);
    }
  }
};

window.decreaseItemQuantity = function (productId) {
  const itemIndex = cart.items.findIndex((item) => item.id === productId);

  if (itemIndex >= 0) {
    cart.subtotal -= cart.items[itemIndex].price;
    cart.totalQuantity -= 1;

    if (cart.items[itemIndex].quantity <= 1) {
      // Remove item from cart
      cart.items.splice(itemIndex, 1);
    } else {
      // Decrease quantity
      cart.items[itemIndex].quantity -= 1;
    }

    saveCart();

    const cartFrame = document.getElementById("cart-frame");
    if (cartFrame) {
      updateCartFrame(cartFrame);
    }
  }
};

window.addEventListener("message", handleIframeMessages);

window.addToCart = function (product) {
  const existingItemIndex = cart.items.findIndex(
    (item) => item.id === product.id
  );

  if (existingItemIndex >= 0) {
    cart.items[existingItemIndex].quantity += 1;
  } else {
    cart.items.push({
      ...product,
      quantity: 1,
    });
  }

  cart.totalQuantity += 1;
  cart.subtotal += product.price;

  saveCart();

  showAddedToCartFeedback(product.name);
};

document.addEventListener("DOMContentLoaded", initializeCart);
