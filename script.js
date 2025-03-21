function redirectToContent() {
  // Add fade-out animation to the body
  document.body.classList.add('fade-out');

  // Wait for the animation to complete before redirecting
  setTimeout(() => {
    sessionStorage.setItem("music-playing", "true"); // Save music state
    window.location.href = "Wedding Gallery.html"; // Redirect
  }, 500); // Match this duration with the fade-out animation (0.5s = 500ms)
}

// Force reload the page when navigating back
window.onpageshow = function(event) {
if (event.persisted) { // Check if the page is loaded from the cache
  window.location.reload(); // Reload the page
}
}
