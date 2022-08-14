/*Array of objects (each object represents one of the offered products in the markt)*/

const products = [
  {
    name: "Carton of Cherries",
    price: 4,
    quantity: 0,
    productId: 1,
    image: "images/cherry.jpg"
  },
  {
    name: "Carton of Strawberries",
    price: 5,
    quantity: 0,
    productId: 2,
    image: "images/strawberry.jpg"
  },
  {
    name: "Bag of Oranges",
    price: 10,
    quantity: 0,
    productId: 3,
    image: "images/orange.jpg"
  }
];

/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/

/*Empty array named cart to hold the items in the cart */

const cart = [];
 
/*Add product to cart:

Function addProductToCart enables to add a product to cart and increase its quantity. Conditional with Array.prototype.includes verifies based on product's Id whether a product already exists in the array const cart = []. If a product doesn't exist in the cart, function enables to add it to cart and increase its quantity with the method Array.prototype.push()*/

function addProductToCart(productId) {
  const element = products.find(function callbackOne (element) { /*Callback function is invoked within the method Array.prototype.find()*/ 
    return element.productId === productId;
  });
  if (cart.includes(element)) {
    element.quantity += 1;
  } else {
    element.quantity = 1;
    cart.push(element);
  }
};

/*Increase product's quantity

Function increaseQuantity enables to increase the quantity of a product that already exists in the cart. Method Array.prototype.forEach loops through each element (single product) of the array const cart = [] based on product's Id. If a given product is found in the array, then the customer will be able to increase its quantity*/

function increaseQuantity (productId) {
  cart.forEach(function callbackTwo (element) { /*Callback function is invoked within the method Array.prototype.forEach()*/
    if (productId === element.productId) {
      element.quantity++;
    };
  }
)};

/*Decrease product's quantity:

Function decreaseQuantity enables to decrease the quantity of a product in the cart. First, function will iterate through each element (product) of the array const cart = [] to determine its correct quantity. If a product is found, then customer will be able to decrease its quantity. Method Array.prototype.splice enables to decrease the quantity of a product by removing items from the array const cart = []*/

function decreaseQuantity(productId) {
  cart.forEach(function callbackThree (element, index) { /*Callback function is invoked within the method Array.prototype.forEach()*/
    if (productId === element.productId) {
      if (element.quantity === 1) {
        cart.splice(index, 1); /* -> If an element exists in cart, customer may reduce its quantity. Method splice removes one item of a given element based on its index. It will remove only one item at a time*/
      }
      element.quantity--;
    }
  });
};

/*Remove product from cart:

If invoked, function removeProductFromCart will iterate through each element (product) of the array const cart = []. In case a product is found with the forEach loop, customer will be able to remove a product from the cart. Method Array.prototype.splice() removes an existing product*/

function removeProductFromCart(productId) {
  cart.forEach(function callbackFour (element, index) { /*Callback function is invoked within the method Array.prototype.forEach()*/
    if (element.productId === productId) {
      element.quantity--;
      cart.splice(index, 1); /* -> If an element exists in cart, customer may remove it from the cart. Method splice removes all items of a product from the cart*/
    };
  });
};

/*Calculate total:

Function cartTotal iterates through each element (product) in the array const cart []. If a product is found, function will calculate total price of each product by multiplying its quantity by the price of a single item. Return statement will return total price*/

function cartTotal() {
  let totalPrice = 0;
  cart.forEach(function callbackFive (element) { /*Callback function is invoked within the method Array.prototype.forEach()*/
    totalPrice += element.price * element.quantity;
  });
  return totalPrice;
};

/*Empty cart: 

Function emptyCart iterates through each product (product) of the array const cart = []. Array.prototype.splice empties cart completely*/

function emptyCart() {
  cart.forEach(function callbackSix (element) { /*Callback function is invoked within the method Array.prototype.forEach()*/
    element.quantity = 0;
  });
  cart.splice(0, cart.length)
};

/*Payment

Function payment will execute code to check how much money is submitted. If more money is given, customer will get a change. If not, a negative value (representing how much customer should pay more) will be displayed.*/

let cash = 0;
function pay(amount) {
  cash += amount;
  return cash - cartTotal();
};

/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
   products,
   cart,
   addProductToCart,
   increaseQuantity,
   decreaseQuantity,
   removeProductFromCart,
   cartTotal,
   pay, 
   emptyCart,
   /* Uncomment the following line if completing the currency converter bonus */
   // currency
};
