var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  // 변수 초기화
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  // 처음으로
  if (n > slides.length) {
    slideIndex = 1;
  }

  // 끝으로
  if (n < 1) {
    slideIndex = slides.length;
  }

  // 슬라이드 초기화
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // dot 초기화
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
