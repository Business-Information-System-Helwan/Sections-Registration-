// back to top
{
  // Get a reference to the button
var scrollToTopButton = document.getElementById("scroll-to-top-button");

// Show or hide the button based on the user's scroll position
window.addEventListener("scroll", function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollToTopButton.style.display = "block";
  } else {
      scrollToTopButton.style.display = "none";
  }
});

// Scroll to the top when the button is clicked
scrollToTopButton.addEventListener("click", function() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
});

}
