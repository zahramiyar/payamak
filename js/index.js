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
