/**** carousel  *****/

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

/**** sticky nav bar *****/
let wrapper = document.getElementsByClassName("wrapper")[0];

function scrollFunction() {
  if (wrapper.scrollTop > 500) {
    document.getElementById("nav-bg").style.top = "0";
  } else {
    document.getElementById("nav-bg").style.top = "-12vh";
  }
}

wrapper.addEventListener("scroll", scrollFunction);

/**** tab buttons in climb section ****/

function switchTab1() {
  let teamElement = document.getElementById("team");
  let btn1 = document.getElementById("mtn1");
  let btn2 = document.getElementById("mtn2");

  btn1.style.backgroundColor = 'white';
  btn1.style.color = 'black';
  btn2.style.backgroundColor = '#182443';
  btn2.style.color = 'white';
  teamElement.style.backgroundImage = 'url("tab1.png")';
}

function switchTab2() {
  let teamElement = document.getElementById("team");
  let btn1 = document.getElementById("mtn1");
  let btn2 = document.getElementById("mtn2");

  btn1.style.backgroundColor = '#182443';
  btn1.style.color = 'white';
  btn2.style.backgroundColor = 'white';
  btn2.style.color = 'black';
  teamElement.style.backgroundImage = 'url("tab2.png")';
}

let btn1 = document.getElementById("mtn1");
let btn2 = document.getElementById("mtn2");

btn1.addEventListener("click", switchTab1);
btn2.addEventListener("click", switchTab2);
