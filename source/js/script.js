document.createElement( "picture" );

var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");

navMain.classList.remove("main-nav--nojs");
if (navMain.classList.contains("main-nav--opened")) {
  navMain.classList.remove("main-nav--opened");
  navMain.classList.add("main-nav--closed");
}

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
  }
});

if ( document.querySelector(".modal") ) {
  var modal = document.querySelector(".modal");
  var close = modal.querySelector(".modal__close");

  if (close) {
    close.addEventListener("click", function (evt) {
      evt.preventDefault();
      modal.classList.remove("modal--show");
    });
  }

  var link = document.querySelector(".featured-product__button");

  if (link) {
    link.addEventListener("click", function (evt) {
      evt.preventDefault();
      modal.classList.add("modal--show");
    });
  }

  var link2 = document.querySelectorAll(".product__add-to-cart");

  if (link2) {
    for (var i = 0; i < link2.length; i++) {
        link2[i].addEventListener("click", function (evt) {
        evt.preventDefault();
        modal.classList.add("modal--show");
      });
    }
  }
}
