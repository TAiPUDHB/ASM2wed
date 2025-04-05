
document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    const products = document.querySelectorAll(".product");
    const pagination = document.querySelector(".pagination");
    let index = 0;
    const totalItems = products.length;
    const visibleItems = 9; // Hiển thị 4 sản phẩm cùng lúc

    // Tạo chấm tròn theo số lượng sản phẩm
    const pageCount = totalItems - visibleItems + 1; // Số bước có thể di chuyển
    for (let i = 0; i < pageCount; i++) {
        const dot = document.createElement("span");
        dot.classList.add("dot");
        if (i === 0) dot.classList.add("active");
        pagination.appendChild(dot);
    }

    const dots = document.querySelectorAll(".dot");

    function updateSlider() {
        const offset = -(index * (100 / visibleItems));
        slider.style.transform = `translateX(${offset}%)`;

        dots.forEach(dot => dot.classList.remove("active"));
        dots[index].classList.add("active");
    }

    function nextSlide() {
        if (index < pageCount - 1) {
            index++;
        } else {
            index = 0; // Khi hết sản phẩm thì quay lại đầu
        }
        updateSlider();
    }

    // Tự động chạy slider mỗi 3 giây
    let interval = setInterval(nextSlide, 3000);

    // Khi click vào chấm tròn
    dots.forEach((dot, i) => {
        dot.addEventListener("click", function () {
            index = i;
            updateSlider();

            // Reset lại thời gian tự động chạy
            clearInterval(interval);
            interval = setInterval(nextSlide, 3000);
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const sliderWrapper = document.querySelector(".custom-slider-wrapper");
    const slider = document.querySelector(".custom-slider");
    const products = document.querySelectorAll(".product");
    const pagination = document.querySelector(".custom-pagination");

    let currentIndex = 0;
    let totalProducts = products.length;
    let visibleItems = 4;

    // Tạo Pagination Dots
    for (let i = 0; i < totalProducts - visibleItems + 1; i++) {
        let dot = document.createElement("span");
        dot.classList.add("dot");
        if (i === 0) dot.classList.add("active");
        dot.addEventListener("click", () => goToSlide(i));
        pagination.appendChild(dot);
    }

    const dots = document.querySelectorAll(".dot");

    function goToSlide(index) {
        currentIndex = index;
        updateSlider();
        updateDots();
    }

    function updateSlider() {
        let offset = -(currentIndex * 25);
        slider.style.transform = `translateX(${offset}%)`;
    }

    function updateDots() {
        dots.forEach((dot, i) => {
            dot.classList.toggle("active", i === currentIndex);
        });
    }

    function autoSlide() {
        currentIndex = (currentIndex + 1) % (totalProducts - visibleItems + 1);
        updateSlider();
        updateDots();
    }

    setInterval(autoSlide, 3000); // Chạy tự động mỗi 3 giây
});
document.addEventListener("DOMContentLoaded", function () {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    
    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function () {
            const name = this.getAttribute("data-name");
            const price = parseInt(this.getAttribute("data-price"));
            const image = this.getAttribute("data-image");

            const existingProduct = cart.find(item => item.name === name);
            if (existingProduct) {
                existingProduct.quantity++;
            } else {
                cart.push({ name, price, image, quantity: 1 });
            }

            localStorage.setItem("cart", JSON.stringify(cart));
            alert("Đã thêm vào giỏ hàng!");
        });
    });
});
// Chuyển đến trang giỏ hàng
function goToCart() {
    window.location.href = "cart.html";
}

// Thêm sản phẩm vào giỏ hàng
function addToCart(name, price, image) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ name, price, image });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Sản phẩm đã được thêm vào giỏ hàng!");
}

// Hiển thị sản phẩm trong giỏ hàng
function displayCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartItemsContainer = document.getElementById("cart-items");

    if (cartItemsContainer) {
        cartItemsContainer.innerHTML = "";
        cart.forEach((item, index) => {
            cartItemsContainer.innerHTML += `
                <div class="cart-item">
                    <img src="${item.image}" width="50">
                    <p>${item.name} - ${item.price.toLocaleString()} đ</p>
                    <button onclick="removeFromCart(${index})">❌</button>
                </div>
            `;
        });
    }
}

// Xóa sản phẩm khỏi giỏ hàng
function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

// Xóa toàn bộ giỏ hàng
function clearCart() {
    localStorage.removeItem("cart");
    displayCart();
}

// Thanh toán (demo)
function checkout() {
    alert("Thanh toán thành công!");
    clearCart();
}

// Chạy hiển thị giỏ hàng khi vào trang cart.html
if (window.location.pathname.includes("cart.html")) {
    displayCart();
}
document.getElementById("view-cart").addEventListener("click", function () {
    window.location.href = "cart.html"; // Chuyển sang trang giỏ hàng
});
function addToCart(name, price, image) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    
    // Kiểm tra xem sản phẩm đã tồn tại chưa, nếu có thì tăng số lượng
    let existingProduct = cart.find(item => item.name === name);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ name, price, image, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(name + " đã thêm vào giỏ hàng!");
}
document.getElementById("scrollToSection").addEventListener("click", function(event) {
    event.preventDefault();
    document.querySelector(".gaming-laptops").scrollIntoView({ behavior: "smooth" });
});