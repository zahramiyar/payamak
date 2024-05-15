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

  document.getElementById("list-navbar-open").classList.add("opens");
  document.getElementById("Grouping-open").classList.remove("opens-group");

  document.getElementById("Register_left_menu").classList.add("show_register");
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

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))



function openSocial1() {
  document.getElementById("link1").classList.add("open-social");
  document.getElementById("link1").classList.remove("close-social")
  }
function closeSocial1() {
  document.getElementById("link1").classList.add("close-social");
  document.getElementById("link1").classList.remove("open-social");

}

function openSocial2() {
  document.getElementById("link2").classList.add("open-social");
  document.getElementById("link2").classList.remove("close-social");
}
function openSocial3() {

  document.getElementById("link3").classList.add("open-social");
  document.getElementById("link3").classList.remove("close-social");
}


function closeSocial2() {
  document.getElementById("link2").classList.add("close-social");
  document.getElementById("link2").classList.remove("open-social");
  }
function closeSocial3() {
  document.getElementById("link3").classList.add("close-social");
  document.getElementById("link3").classList.remove("open-social");
}

function hoverimg1() {
  document.getElementById("img-opasiti-1").classList.add("img-opasiti");
  document.getElementById("img-opasiti-1").classList.remove("close-social");
  document.getElementById("img-zoom-1").classList.add("img-zoom");
  document.getElementById("num11").classList.add("animation_mask1");
  document.getElementById("num21").classList.add("animation_mask2");
  document.getElementById("num31").classList.add("animation_mask3");

}
  function hoverimg2() {
    document.getElementById("img-opasiti-2").classList.add("img-opasiti");
    document.getElementById("img-opasiti-2").classList.remove("close-social");
    document.getElementById("img-zoom-2").classList.add("img-zoom");
    document.getElementById("num12").classList.add("animation_mask1");
    document.getElementById("num22").classList.add("animation_mask2");
    document.getElementById("num32").classList.add("animation_mask3");
    }
  function hoverimg3() {

    document.getElementById("img-opasiti-3").classList.add("img-opasiti");
    document.getElementById("img-opasiti-3").classList.remove("close-social");
    document.getElementById("img-zoom-3").classList.add("img-zoom");
    document.getElementById("num13").classList.add("animation_mask1");
    document.getElementById("num23").classList.add("animation_mask2");
    document.getElementById("num33").classList.add("animation_mask3");

  }
function removhoverimg1() {
  document.getElementById("img-opasiti-1").classList.add("close-social");
  document.getElementById("img-opasiti-1").classList.remove("img-opasiti");
  document.getElementById("img-zoom-1").classList.remove("img-zoom");
  document.getElementById("num11").classList.remove("animation_mask1");
  document.getElementById("num21").classList.remove("animation_mask2");
  document.getElementById("num31").classList.remove("animation_mask3");



}
  function removhoverimg2() {

    document.getElementById("img-opasiti-2").classList.add("close-social");
    document.getElementById("img-opasiti-2").classList.remove("img-opasiti");
    document.getElementById("img-zoom-2").classList.remove("img-zoom");
    document.getElementById("num12").classList.remove("animation_mask1");
    document.getElementById("num22").classList.remove("animation_mask2");
    document.getElementById("num32").classList.remove("animation_mask3");
  }
  function removhoverimg3() {

    document.getElementById("img-opasiti-3").classList.add("close-social");
    document.getElementById("img-opasiti-3").classList.remove("img-opasiti");
    document.getElementById("img-zoom-3").classList.remove("img-zoom");
    document.getElementById("num13").classList.remove("animation_mask1");
    document.getElementById("num23").classList.remove("animation_mask2");
    document.getElementById("num33").classList.remove("animation_mask3");
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
