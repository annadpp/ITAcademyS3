// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
  {
    id: 1,
    name: "cooking oil",
    price: 10.5,
    type: "grocery",
    offer: {
      number: 3,
      percent: 20,
    },
  },
  {
    id: 2,
    name: "Pasta",
    price: 6.25,
    type: "grocery",
  },
  {
    id: 3,
    name: "Instant cupcake mixture",
    price: 5,
    type: "grocery",
    offer: {
      number: 10,
      percent: 30,
    },
  },
  {
    id: 4,
    name: "All-in-one",
    price: 260,
    type: "beauty",
  },
  {
    id: 5,
    name: "Zero Make-up Kit",
    price: 20.5,
    type: "beauty",
  },
  {
    id: 6,
    name: "Lip Tints",
    price: 12.75,
    type: "beauty",
  },
  {
    id: 7,
    name: "Lawn Dress",
    price: 15,
    type: "clothes",
  },
  {
    id: 8,
    name: "Lawn-Chiffon Combo",
    price: 19.99,
    type: "clothes",
  },
  {
    id: 9,
    name: "Toddler Frock",
    price: 9.99,
    type: "clothes",
  },
];
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
// Adds products to cart
/*function addToCart(id) {
  // 1. Loop for to the array products to get the item to add to cart
  for (let i = 0; i < products.length; i++) {
    // 2. Add found product to the cartList array
    if (products[i].id === id) {
      cartList.push(products[i]);
    }
  }
  console.log(cartList);
  generateCart();
  applyPromotionsCart();
  printCart();
  // How it works: loops on products array -> if id in array = id in product button adds product to cartList array
}*/

// Exercise 2
// Deletes cart
function cleanCart() {
  cartList = [];
  cart = [];
  document.getElementById("total_price").innerHTML = 0;
  document.getElementById("cart_list").innerHTML = "";

  console.log(cartList);
  console.log(cart);
  // How it works: checks if something in cart -> if something, deletes -> deletes info in Cart section to delete it
}

// Exercise 3
// Calculates total price of items in cart
function calculateTotal() {
  var total = 0;
  // Calculate total price of the cart using the "cartList" array
  for (let item of cartList) {
    total += item.price;
    console.log(total);
  }
  // How it works: loops on cartList array's items -> adds item price to total REVISAR
}

// Exercise 4
// Looks for duplicate items and adds "quantity" object
/*function generateCart() {
  // Using the "cartlist" array that contains all the items in the shopping cart,
  // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
  cart = [];

  for (i = 0; i < cartList.length; i++) {
    let exists = cart.find((newItem) => newItem.id === cartList[i].id);

    if (exists) {
      exists.quantity++;
      exists.subtotal = exists.price * exists.quantity;
    } else {
      cartList[i].quantity = 1;
      cartList[i].subtotal = cartList[i].price;
      cart.push(cartList[i]);
    }
    console.log(cart);
  }
  // How it works: loops on cartList -> find compares values cart and cartList -> if cart item = cartList item +1 quantity and quantity times existing price -> if cart item != cartList item quantity = 1, add price from cartList to cart subtotal and pushes rest of product info from cartList to cart
}*/

// Exercise 5
// Applies discounts and promotions
function applyPromotionsCart() {
  // Apply promotions to each item in the array "cart"
  for (i = 0; i < cart.length; i++) {
    if (cart[i].id == 1 && cart[i].quantity >= 3) {
      cart[i].subtotalWithDiscount = 10 * cart[i].quantity;
    } else if (cart[i].id == 3 && cart[i].quantity >= 10) {
      cart[i].subtotalWithDiscount = cart[i].price * (2 / 3) * cart[i].quantity;
    } else {
      cart[i].subtotalWithDiscount = cart[i].subtotal;
    }

    console.log(cart);
  }
  // How it works: loops on cart array's items -> if "oil" and x3 discounted price 10 -> if "cupcake mixture and x10+ discounted price 2/3x"
}

// Exercise 6
// Fills Cart section info
function printCart() {
  // Fill the shopping cart modal manipulating the shopping cart dom
  const tableContent = document.getElementById("cart_list");
  tableContent.innerHTML = "";

  let finalPrice = document.getElementById("total_price");

  for (i = 0; i < cart.length; i++) {
    var tr = document.createElement("tr");

    var th1 = document.createElement("th");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");

    var tdText1 = document.createTextNode(
      cart[i].name.charAt(0).toUpperCase() + cart[i].name.slice(1).toLowerCase()
    );
    var tdText2 = document.createTextNode("$ " + cart[i].price);
    var tdText3 = document.createTextNode(cart[i].quantity);
    var tdText4 = document.createTextNode(
      "$ " + cart[i].subtotalWithDiscount.toFixed(2)
    );
    var tdText5 = document.createElement("a");

    tdText5.innerHTML = `<a href="javascript:void(0)" class="btn btn-primary m-3 btn-sm" onclick="removeFromCart(i)" type="button" value="rem" />rem</a>`;

    th1.appendChild(tdText1);
    td1.appendChild(tdText2);
    td2.appendChild(tdText3);
    td3.appendChild(tdText4);
    td4.appendChild(tdText5);

    tr.appendChild(th1);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);

    tableContent.appendChild(tr);
  }

  var total = 0;
  for (let item of cart) {
    total += item.subtotalWithDiscount;
    console.log(total);
  }

  finalPrice.innerHTML = total.toFixed(2);
  // How it works:
}

// ** Nivell II **
// Refactor previous code in order to simplify it (buy() and generateCart())
// Exercise 8
function addToCart(id) {
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cart array or update its quantity in case it has been added previously.
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === id) {
      let exists = cart.find((newItem) => newItem.id === products[i].id);
      if (exists) {
        exists.quantity++;
        exists.subtotal = exists.price * exists.quantity;
      } else {
        cart.push(products[i]);
        cart[cart.length - 1].quantity = 1;
        cart[cart.length - 1].subtotal = cart[cart.length - 1].price;
      }
    }
  }
  countQuant();
  applyPromotionsCart();
  printCart();
  //How it works: loops through Products array -> if id in array = id in product button adds product to cart array -> gets quantity from countQuant, aplies promotions through applyPromotionsCart and fills cart section info from printCart
}

// Counts items in cart
function countQuant() {
  let quantity = 0;
  for (let i = 0; i < cart.length; i++) {
    quantity += cart[i].quantity;
  }
  //How it works: loops through cart array items -> adds quantity +1 to item added to cart
}

// Exercise 9
function removeFromCart(id) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === id) {
      let exists = cart.find((newItem) => newItem.id === products[i].id);
      if (!exists) {
        if (cart[cart.length - 1].quantity > 1) {
          cart[cart.length - 1].quantity--;
          cart[cart.length - 1].subtotal =
            cart[cart.length - 1].quantity * cart[cart.length - 1].price;
        } else {
          cart.splice([cart.length - 1], 1);
        }
      }
    }
    countQuant();
    applyPromotionsCart();
    printCart();
  }
}

function open_modal() {
  console.log("Open Modal");
  printCart();
}
