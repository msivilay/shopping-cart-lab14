/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  // cartItems is an array of CartItem objects
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

  console.log(cartItems);
  // cart is an instance of Cart object
  // Cart object has a property that in an array of CartItems
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// DONE: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() 
{
  // nameOfTheTable.innerHTML(a way to delete it??)
let tbody = document.querySelector('tbody');
  tbody.innerHTML = '';

}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart


function showCart() {

  // 1. make a table
  // 2. table has 3 columns: itemName, quantity, and 'x' to remove the item from the cart
  // 3. each row is an item + quantity

  // TODO: Find the table body

  let tbody = document.querySelector('tbody');

  // TODO: Iterate over the items in the cart

   for (let i=0; i<cart.items.length; i++){
     let tr = document.createElement('tr');
     tbody.appendChild(tr);

     let td = document.createElement ('td');
     td.textContent = cart.items[i].product;

     tr.appendChild(td);

    td = document.createElement('td');
    td.textContent = cart.items[i].quantity;

    tr.appendChild(td);
    }

  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
