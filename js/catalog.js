/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
const cart = new Cart([]);

// On screen load, we call this method to put all of the product options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //DONE: Add an <option> tag inside the form's select for each product
  const selectElement = document.getElementById('items');
  for (let i in Product.allProducts) 
  {
    // create <option> element
    let option = document.createElement('option');

    // give content
    // we want the content to be the name of the product
    option.textContent = Product.allProducts[i].name;

    // give value property and fill it with option name in HTML
    option.value = Product.allProducts[i].name;

    // append to DOM @ element with 'items' tag
    selectElement.appendChild(option);
  }
}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {

  // DONE: Prevent the page from reloading
  event.preventDefault();

  // Do all the things ...
  addSelectedItemToCart();
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();

}

// DONE: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
  // DONE: suss out the item picked from the select list

  // get DOM element with the name of the selected item from the dropdown menu
  let itemPicked = document.querySelector('select').value;
  // DONE: get the quantity

  let quantityPicked = document.querySelector('input:nth-of-type(1)').value;

  // DONE: using those, add one item to the Cart
  cart.addItem(itemPicked, quantityPicked);
}

// DONE: Update the cart count in the header nav with the number of items in the Cart

function updateCounter() 
{
  // get the <span> in the <nav> in the <header>
  let itemCountSpan = document.querySelector('span')

  // update <span> in <nav> with number of unique items in cart
  itemCountSpan.textContent = cart.items.length;

  /*
  let cartCounter = 0;

  for (let i = 0; i < cart.items.length; i++)
  {
    
    let currentCartItemsQuantity = cart.items[i].quantity;
  }
  // traverse through the cart
  // look for items
  // get the quantityPicked property
  // add to total (cartCounter)
  */


  // update in header nav
  // change .textContent of <span> in header to the value of cartCounter 
}

// DONE: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() 
{
  // DONE: Get the item and quantity from the form

  let itemPicked = document.querySelector('select').value;
 
  let quantityPicked = document.querySelector('input:nth-of-type(1)').value;

  let cartPreviewDiv = document.querySelector('div:last-child');

  // TODO: Add a new element to the cartContents div with that information

  let p = document.createElement ('p');
  p.textContent = `${itemPicked}: ${quantityPicked}`;
  cartPreviewDiv.appendChild(p);
 
} 

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
const catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
