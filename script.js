const foods = [
  { name: "Classic Burger", description: "Grilled patty, lettuce, and tomato", price: 180 },
  { name: "Margherita Pizza", description: "Cheese, tomato, and fresh basil", price: 250 },
  { name: "Paneer Wrap", description: "Spiced paneer with crunchy vegetables", price: 160 },
  { name: "French Fries", description: "Crispy golden potato fries", price: 90 }
];

const cart = [];

const menu = document.getElementById("menu");
const cartItems = document.getElementById("cart-items");

function showMenu() {
  menu.innerHTML = foods.map((food, index) => `
    <article class="food-card">
      <h3>${food.name}</h3>
      <p>${food.description}</p>
      <p class="price">₹${food.price}</p>
      <button type="button" onclick="addToCart(${index})">Add to cart</button>
    </article>
  `).join("");
}

function addToCart(index) {
  cart.push(foods[index]);
  updateCart();
}

function updateCart() {
  cartItems.innerHTML = cart.map(food =>
    `<li>${food.name} — ₹${food.price}</li>`
  ).join("");

  const total = cart.reduce((sum, food) => sum + food.price, 0);
  document.getElementById("cart-total").textContent = total;
  document.getElementById("cart-count").textContent = cart.length;
}

document.getElementById("place-order").addEventListener("click", () => {
  const message = document.getElementById("message");

  if (cart.length === 0) {
    message.textContent = "Add an item to your cart first.";
    return;
  }

  message.textContent = "Demo order placed! Thanks for choosing QuickBite.";
  cart.length = 0;
  updateCart();
});

showMenu();
