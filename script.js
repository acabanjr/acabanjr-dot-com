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




// ! - ! - ! - Overlay for the "Fashion Parallax" - ! - ! -! //

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




// ! - ! - ! - Overlay for "Contact Profile Link" - ! - ! -! //

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




// ! - ! - ! - Overlay for "Contact Footer Link" - ! - ! -! //

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




// ! - ! - ! - Overlay for the "Interiors Parallax" - ! - ! -! //

function openSectionOverlay3(event) {
  event.preventDefault();
  var overlay = document.getElementById("section-overlay3");
  overlay.style.display = "block";
  document.addEventListener("keydown", closeSectionOnEsc3);
}

function closeSectionOverlay3(event) {
  event.preventDefault();
  var overlay = document.getElementById("section-overlay3");
  overlay.style.display = "none"; // Hide the overlay
  document.removeEventListener("keydown", closeSectionOnEsc3);
}

function closeSectionOnEsc3(event) {
  if (event.key === "Escape") {
    closeSectionOverlay3(event);
  }
}

document.getElementById("section-link-interiors").addEventListener("click", openSectionOverlay3);
document.getElementById("section-close-button-interiors").addEventListener("click", closeSectionOverlay3);




// ! - ! - ! - Gallery and Lightbox within the "Interiors Overlay" - ! - ! -! //

// Query gallery items...
const galleryItems = document.querySelectorAll('.gallery-item');
const lightboxContainer = document.querySelector('.lightbox-container');
const lightboxContent = document.querySelector('.lightbox-content');
const lightboxImage = document.querySelector('.lightbox-image');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

let currentIndex = 0; // Track index of currently displayed image

// Open lightbox with specific image...
function openLightbox(imageUrl, index) {
  lightboxImage.src = imageUrl;
  lightboxContainer.style.display = 'block';
  currentIndex = index;
}

// Close lightbox...
function closeLightbox() {
  lightboxContainer.style.display = 'none';
}

// Image navigation...
function showPrevImage() {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = galleryItems.length - 1; // Wrap to last image when reaching the beginning
  }
  const imageUrl = galleryItems[currentIndex].querySelector('img').src;
  openLightbox(imageUrl, currentIndex);
}

function showNextImage() {
  if (currentIndex < galleryItems.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0; // Wrap to first image when reaching the end
  }
  const imageUrl = galleryItems[currentIndex].querySelector('img').src;
  openLightbox(imageUrl, currentIndex);
}

// Click event listeners...
galleryItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    const imageUrl = item.querySelector('img').src;
    openLightbox(imageUrl, index);
  });
});

lightboxContent.addEventListener('click', (e) => {
  if (e.target === lightboxImage) {
    closeLightbox();
  }
});

prevButton.addEventListener('click', () => {
  showPrevImage();
});

nextButton.addEventListener('click', () => {
  showNextImage();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') {
    showPrevImage();
  } else if (e.key === 'ArrowRight') {
    showNextImage();
  }
});