document.createElement("picture");

var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");

navMain.classList.remove("main-nav--nojs");
if (navMain.classList.contains("main-nav--opened")) {
  navMain.classList.remove("main-nav--opened");
  navMain.classList.add("main-nav--closed");
}

navToggle.addEventListener("click", function () {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
  }
});

if (document.querySelector(".modal")) {
  var modal = document.querySelector(".modal");
  var link = document.querySelector(".featured-product__button");
  var link2 = document.querySelectorAll(".product__add-to-cart");

  if (link) {
    link.addEventListener("click", function (evt) {
      evt.preventDefault();
      modal.classList.add("modal--show");
    });
  }

  if (link2) {
    for (var i = 0; i < link2.length; i++) {
      link2[i].addEventListener("click", function (evt) {
        evt.preventDefault();
        modal.classList.add("modal--show");
      });
    }
  }

  modal.addEventListener("mousedown", function (event) {
    if (modal !== event.target) return;
    modal.classList.remove("modal--show");
  });
}

if (document.querySelector(".contacts__map")) {
  var contactsMapEmbed = document.querySelector(".contacts__map-embed");
  contactsMapEmbed.classList.remove("contacts__map-embed--nojs");
  var contactsMapLink = document.querySelector(".contacts__map-link");
  contactsMapLink.classList.remove("contacts__map-link--nojs");
}

var map;
function initMap() {
  var LatLng = { lat: 59.938682, lng: 30.322989 };
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: LatLng,
    zoomControl: false,
    scaleControl: false,
    scrollwheel: false
  });
  var marker = new google.maps.Marker({
    position: { lat: 59.938682, lng: 30.322989 },
    map: map,
    title: "Магазин Мишка",
    icon: {
      url: "img/map-pin.png",
      size: new google.maps.Size(67, 100),
      origin: new google.maps.Point(0, 0)
    }
  });
}
