console.log('js');


// Adding items into cart when add to order button clicked;
// Item 1;
document.getElementById('item1').addEventListener('click', function(){
  document.getElementById('cart').innerHTML += '<p class="p_cart">1 Burrito</p>' + '<p class="p_cart">$ 14.00</p>';
} );
// Item 2;
document.getElementById('item2').addEventListener('click', function(){
  document.getElementById('cart').innerHTML += '<p class="p_cart">1 Small Burrito</p>' + '<p class="p_cart">$ 14.00</p>';
} );
// Item 3;
document.getElementById('item3').addEventListener('click', function(){
  document.getElementById('cart').innerHTML += '<p class="p_cart">1 Tacos</p>' + '<p class="p_cart">$ 14.00</p>';
} );
// Item 4;
document.getElementById('item4').addEventListener('click', function(){
  document.getElementById('cart').innerHTML += '<p class="p_cart">1 Burrito</p>' + '<p class="p_cart">$ 14.00</p>';
} );
// Item 5;
document.getElementById('item5').addEventListener('click', function(){
  document.getElementById('cart').innerHTML += '<p class="p_cart">1 Small Burrito</p>' + '<p class="p_cart">$ 14.00</p>';
} );
// Item 6;
document.getElementById('item6').addEventListener('click', function(){
  document.getElementById('cart').innerHTML += '<p class="p_cart">1 Tacos</p>' + '<p class="p_cart">$ 14.00</p>';
} );
// Item 7;
document.getElementById('item7').addEventListener('click', function(){
  document.getElementById('cart').innerHTML += '<p class="p_cart">1 Burrito</p>' + '<p class="p_cart">$ 14.00</p>';
} );
// Item 8;
document.getElementById('item8').addEventListener('click', function(){
  document.getElementById('cart').innerHTML += '<p class="p_cart">1 Small Burrito</p>' + '<p class="p_cart">$ 14.00</p>';
} );
// Item 9;
document.getElementById('item9').addEventListener('click', function(){
  document.getElementById('cart').innerHTML += '<p class="p_cart">1 Tacos</p>' + '<p class="p_cart">$ 14.00</p>';
} );
// Item 10;
document.getElementById('item10').addEventListener('click', function(){
  document.getElementById('cart').innerHTML += '<p class="p_cart">1 Burrito</p>' + '<p class="p_cart">$ 14.00</p>';
} );
// Item 11;
document.getElementById('item11').addEventListener('click', function(){
  document.getElementById('cart').innerHTML += '<p class="p_cart">1 Small Burrito</p>' + '<p class="p_cart">$ 14.00</p>';
} );
// Item 12;
document.getElementById('item12').addEventListener('click', function(){
  document.getElementById('cart').innerHTML += '<p class="p_cart">1 Tacos</p>' + '<p class="p_cart">$ 14.00</p>';
} );




// Navigation function;
function myFunction() {
  var x = document.getElementById("myTopNav");
  if (x.className === "myNav") {
    x.className += " responsive";
  } else {
    x.className = "myNav";
  }
}


// Sign up and log in button;
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// Get the modal
var modal = document.getElementById('id02');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


/* Thank you message after clicking submit button */
$("#sign_up").click(function() {
   alert("Thank you for signing up.\nWELCOME TO MAD MEX FAMILIA!");
});

/* Log in alert when clicking submit button */
$("#log_in").click(function() {
   alert("You are now log in.");
});


/* Confirmation message after clicking send button */
 $("#send").click(function() {
    alert("Sent! We will get in touch to you soon.");
 });


//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}



// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



function openForm() {
  document.getElementById("popup1").style.display = "block";
}
function closeForm() {
  document.getElementById("pop").style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  let modal = document.getElementById('loginPopup');
  if (event.target == modal) {
    closeForm();
  }
}
