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






// Get elements
const galleryItems = document.querySelectorAll('.gallery-item');
const lightboxContainer = document.querySelector('.lightbox-container');
const lightboxContent = document.querySelector('.lightbox-content');
const lightboxImage = document.querySelector('.lightbox-image');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

let currentIndex = 0; // Track the index of the currently displayed image

// Function to open the lightbox with a specific image
function openLightbox(imageUrl, index) {
  lightboxImage.src = imageUrl;
  lightboxContainer.style.display = 'block';
  currentIndex = index;
}

// Function to close the lightbox
function closeLightbox() {
  lightboxContainer.style.display = 'none';
}

// Function to navigate to the previous image
function showPrevImage() {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    // Wrap to the last image when reaching the beginning
    currentIndex = galleryItems.length - 1;
  }
  const imageUrl = galleryItems[currentIndex].querySelector('img').src;
  openLightbox(imageUrl, currentIndex);
}

// Function to navigate to the next image
function showNextImage() {
  if (currentIndex < galleryItems.length - 1) {
    currentIndex++;
  } else {
    // Wrap to the first image when reaching the end
    currentIndex = 0;
  }
  const imageUrl = galleryItems[currentIndex].querySelector('img').src;
  openLightbox(imageUrl, currentIndex);
}


// Add click event listeners to each gallery item
galleryItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    // Get the clicked image's source and index
    const imageUrl = item.querySelector('img').src;

    // Display the lightbox
    openLightbox(imageUrl, index);
  });
});

// Close the lightbox when clicking on the image
lightboxContent.addEventListener('click', (e) => {
  // Close only if the click target is the image (not the buttons)
  if (e.target === lightboxImage) {
    closeLightbox();
  }
});

// Add click event listeners to previous and next buttons
prevButton.addEventListener('click', () => {
  showPrevImage();
});

nextButton.addEventListener('click', () => {
  showNextImage();
});

// Add event listeners for left and right arrow key presses
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') {
    // Handle left arrow key press
    showPrevImage();
  } else if (e.key === 'ArrowRight') {
    // Handle right arrow key press
    showNextImage();
  }
});
