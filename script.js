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
	
function openSectionOverlay2(event) {
  event.preventDefault();
  var overlay = document.getElementById("section-overlay2");
  overlay.style.display = "block";
  document.addEventListener("keydown", closeSectionOnEsc2);
}

function closeSectionOverlay2(event) {
  event.preventDefault();
  var overlay = document.getElementById("section-overlay2");
  overlay.style.display = "none";
  document.removeEventListener("keydown", closeSectionOnEsc2);
}

function closeSectionOnEsc2(event) {
  if (event.key === "Escape") {
  closeSectionOverlay2(event);
  }
}

document.getElementById("section-link-fashion").addEventListener("click", openSectionOverlay2);
document.getElementById("section-close-button").addEventListener("click", closeSectionOverlay2);

function openContactOverlay(event) {
  event.preventDefault();
  var overlay = document.getElementById("contact-overlay");
  overlay.style.display = "block";
  document.addEventListener("keydown", closeContactOnEsc);
}

function closeContactOverlay(event) {
  event.preventDefault();
  var overlay = document.getElementById("contact-overlay");
  overlay.style.display = "none";
  document.removeEventListener("keydown", closeContactOnEsc);
}

function closeContactOnEsc(event) {
  if (event.key === "Escape") {
    closeContactOverlay(event);
  }
}

document.getElementById("open-contact-overlay").addEventListener("click", openContactOverlay);
document.getElementById("close-contact-overlay2").addEventListener("click", closeContactOverlay);

function openContactDualOverlay(event) {
  event.preventDefault();
  var overlay = document.getElementById("contactdual-overlay");
  overlay.style.display = "block";
  document.addEventListener("keydown", closeContactDualOnEsc);
}

function closeContactDualOverlay(event) {
  event.preventDefault();
  var overlay = document.getElementById("contactdual-overlay");
  overlay.style.display = "none";
  document.removeEventListener("keydown", closeContactDualOnEsc);
}

function closeContactDualOnEsc(event) {
  if (event.key === "Escape") {
    closeContactDualOverlay(event);
  }
}

document.getElementById("open-contactdual-overlay").addEventListener("click", openContactDualOverlay);
document.getElementById("close-contactdual-overlay2").addEventListener("click", closeContactDualOverlay);