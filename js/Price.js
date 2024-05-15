function closemenu() {
  document.getElementById("mobile-menu-back").classList.toggle("show");
  document.getElementById("mobile-menu-box").classList.toggle("show2");
}
function closecart(){

  document.getElementById("cart_left_menu").classList.remove("show_register");
}
function opencart(){
  document.getElementById("cart_left_menu").classList.add("show_register");
}
function closeRegister(){
  document.getElementById("Register_left_menu").classList.remove("show_register");
}
function openlist() {

  document.getElementById("Register_left_menu").classList.add("show_register");
  document.getElementById("list-navbar-open").classList.add("opens");
  document.getElementById("Grouping-open").classList.remove("opens-group");


  document.getElementById("list-navbar").classList.add("active1");
  document.getElementById("Grouping").classList.remove("active1");

}
function openguorp() {
  document.getElementById("Grouping-open").classList.add("opens-group");
  document.getElementById("list-navbar-open").classList.remove("opens");
  document.getElementById("list-navbar").classList.remove("active1");
  document.getElementById("Grouping").classList.add("active1");
}

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 120;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
window.onscroll = function() {scrollFunction()};

let mybutton = document.getElementById("myBtn");
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



var countDownDate = new Date("March 15, 2020 14:41:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("clock").innerHTML = days + " : " + hours + " : "
    + minutes + " : " + seconds ;

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("clock").innerHTML = "00" + " : " +  "00" + " : "
      + "00" + " : " +  "00";
  }
}, 1000);




const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");

togglePassword.addEventListener("click", function () {
  // toggle the type attribute
  const type = password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);

  // toggle the icon
  this.classList.toggle("bi-eye");
});

// prevent form submit
const form = document.querySelector("form");
form.addEventListener('submit', function (e) {
  e.preventDefault();
});
