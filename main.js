const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const shoppingCartMenu = document.querySelector(".navbar-shopping-cart");
const burgerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const aside = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");

menuEmail.addEventListener("click", toggleDesktopMenu);
burgerMenu.addEventListener("click", toggleMobileMenu);
shoppingCartMenu.addEventListener("click", toggleShoppingCartAside);

function toggleDesktopMenu() {
  const isAsideMenuClosed = aside.classList.contains("inactive");

  if (!isAsideMenuClosed) {
    aside.classList.add("inactive");
  }

  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  const isAsideMenuClosed = aside.classList.contains("inactive");

  if (!isAsideMenuClosed) {
    aside.classList.add("inactive");
  }
  mobileMenu.classList.toggle("inactive");
}

function toggleShoppingCartAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add("inactive");
  }

  aside.classList.toggle("inactive"); 
}

const productList = [];
productList.push({
  name: "Bike",
  price: 1200,
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
  name: "Motorbike",
  price: 6000,
  image: "https://images.pexels.com/photos/12764125/pexels-photo-12764125.jpeg?auto=compress&cs=tinysrgb&w=400"
});
productList.push({
  name: "PC",
  price: 20000,
  image: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=400"
});

function desplegarProductos(productsArray) {
  for (let product of productsArray) {
    /*Se crean los elementos HTML con sus respectivas valore obtenidos de la lista
    de productos */
    const productCard =document.createElement("div");
    productCard.classList.add("product-card");
  
    const productImage = document.createElement("img");
    productImage.setAttribute("src", product.image);
  
    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");
  
    const productInfoDivChild = document.createElement("div");
  
    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price;
  
    const productName = document.createElement("p");
    productName.innerText = product.name;
  
    const productInfoFigure = document.createElement("figure");
    const imgCart = document.createElement("img");
    imgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");
  
    /*Construir el bloque de la página de productos con los elementos creados arriba */
    productInfoFigure.appendChild(imgCart);
  
    productInfoDivChild.appendChild(productPrice);
    productInfoDivChild.appendChild(productName);
  
    productInfo.appendChild(productInfoDivChild);
    productInfo.appendChild(productInfoFigure);
  
    productCard.appendChild(productImage);
    productCard.appendChild(productInfo);
  
    cardsContainer.appendChild(productCard);
  }
}

desplegarProductos(productList);
