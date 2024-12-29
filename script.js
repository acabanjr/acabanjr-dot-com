// ! - ! - ! - Overlay for "Contact Profile Link" - ! - ! -! //

function openContactOverlay(event) {
  event.preventDefault();
  var overlay = document.getElementById("contact-overlay");
  overlay.style.display = "block";
  document.addEventListener("keydown", closeContactOnEsc);
  document.addEventListener("click", closeOverlayOnClickOutside2);
}

function closeContactOverlay(event) {
  event.preventDefault();
  var overlay = document.getElementById("contact-overlay");
  overlay.style.display = "none";
  document.removeEventListener("keydown", closeContactOnEsc);
  document.removeEventListener("click", closeOverlayOnClickOutside2);
}

function closeContactOnEsc(event) {
  if (event.key === "Escape") {
    closeContactOverlay(event);
  }
}

function closeOverlayOnClickOutside2(event) {
  var overlay = document.getElementById("contact-overlay");
  var overlayContent = document.querySelector(".overlay-content-container");
  overlay.style.display = "block";
  if (!overlayContent.contains(event.target) && !event.target.closest("#open-contact-overlay")) {
    closeContactOverlay(event);
  }
}

document.getElementById("open-contact-overlay").addEventListener("click", openContactOverlay);
document.getElementById("close-contact-overlay2").addEventListener("click", closeContactOverlay);





// ! - ! - ! - Overlay for the "Travel Parallax" - ! - ! -! //

function openOverlay(event) {
  event.preventDefault();
  var overlay = document.getElementById("overlay");
  overlay.style.display = "block";
  document.addEventListener("keydown", closeOnEsc);
}

function closeOverlay(event) {
  event.preventDefault();
  var overlay = document.getElementById("overlay");
  overlay.style.display = "none";
  document.removeEventListener("keydown", closeOnEsc);
}

function closeOnEsc(event) {
  if (event.key === "Escape") {
  closeOverlay(event);
  }
}

document.getElementById("section-link-travel").addEventListener("click", openOverlay);
document.getElementById("close-button").addEventListener("click", closeOverlay);




// ! - ! - ! - Overlay for "Contact Footer Link" - ! - ! -! //

function openContactDualOverlay(event) {
  event.preventDefault();
  var overlay = document.getElementById("contactdual-overlay");
  overlay.style.display = "block";
  document.addEventListener("keydown", closeContactDualOnEsc);
  document.addEventListener("click", closeOverlayOnClickOutside);
}

function closeContactDualOverlay(event) {
  event.preventDefault();
  var overlay = document.getElementById("contactdual-overlay");
  overlay.style.display = "none";
  document.removeEventListener("keydown", closeContactDualOnEsc);
  document.removeEventListener("click", closeOverlayOnClickOutside);
}

function closeContactDualOnEsc(event) {
  if (event.key === "Escape") {
    closeContactDualOverlay(event);
  }
}

function closeOverlayOnClickOutside(event) {
  var overlay = document.getElementById("contactdual-overlay");
  var overlayContent = document.querySelector(".overlay3-content-container");
  overlay.style.display = "block";
  if (!overlayContent.contains(event.target) && !event.target.closest("#open-contactdual-overlay")) {
    closeContactDualOverlay(event);
  }
}

document.getElementById("open-contactdual-overlay").addEventListener("click", openContactDualOverlay);
document.getElementById("close-contactdual-overlay3").addEventListener("click", closeContactDualOverlay);