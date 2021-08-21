//Function to calculate total price

function calculateTotalPrice() {
  const totalPrice = document.getElementById("total-price");
  const bestPrice = parseFloat(document.getElementById("best-price").innerText);
  totalPrice.innerText =
    bestPrice + getCost("memory") + getCost("storage") + getCost("delivery");

  document.getElementById("final-total").innerText = totalPrice.innerText;
}

//adding event to the promocode

document.getElementById("promo-btn").addEventListener("click", function () {
  const total = parseFloat(document.getElementById("total-price").innerText);
  const promoCodeInput = document.getElementById("promo-input");
  const promoCode = promoCodeInput.value;
  if (promoCode == "stevekaku") {
    document.getElementById("final-total").innerText = total - total * 0.2;
  }
  promoCodeInput.value = "";
});

//function to get cost

function getCost(product) {
  const cost = parseFloat(document.getElementById(product + "-cost").innerText);
  return cost;
}

//add event listener to 16 GB memory

document.getElementById("memory-2").addEventListener("click", function () {
  const memoryCost = document.getElementById("memory-cost");

  memoryCost.innerText = 180;
  calculateTotalPrice();
});

//add event listener to 8 GB memory
document.getElementById("memory-1").addEventListener("click", function () {
  const memoryCost = document.getElementById("memory-cost");

  memoryCost.innerText = 0;
  calculateTotalPrice();
});

//add event listener to 256GB SSD storage

document.getElementById("SSD-1").addEventListener("click", function () {
  const storageCost = document.getElementById("storage-cost");

  storageCost.innerText = 0;
  calculateTotalPrice();
});

//add event listener to 512GB SSD storage

document.getElementById("SSD-2").addEventListener("click", function () {
  const storageCost = document.getElementById("storage-cost");

  storageCost.innerText = 100;
  calculateTotalPrice();
});

//add event listener to 1TB SSD storage

document.getElementById("SSD-3").addEventListener("click", function () {
  const storageCost = document.getElementById("storage-cost");

  storageCost.innerText = 180;
  calculateTotalPrice();
});

//add event listener to free prime delivery

document.getElementById("free-delivery").addEventListener("click", function () {
  const deliveryCost = document.getElementById("delivery-cost");

  deliveryCost.innerText = 0;

  calculateTotalPrice();
});

//add event listener to delivery charge of $20

document
  .getElementById("charged-delivery")
  .addEventListener("click", function () {
    const deliveryCost = document.getElementById("delivery-cost");

    deliveryCost.innerText = 20;

    calculateTotalPrice();
  });
