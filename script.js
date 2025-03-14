function playMusicAndRedirect() {
    const music = document.getElementById("background-music");
    music.play();
  
    setTimeout(function() {
      window.location.href = "Content Page.html";
    }, 2000); // 2-second delay
  }

  function adjustButtonPosition() {
    const button = document.querySelector(".click-button");
    const container = document.querySelector(".container"); // Get the container
    const backgroundImage = document.querySelector(".image");
  
    // Get the dimensions of the container and background image
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    const bgWidth = backgroundImage.clientWidth;
    const bgHeight = backgroundImage.clientHeight;
  
    // Calculate the position of the button as a percentage of the container's dimensions
    const buttonLeft = (400 / 1920) * containerWidth; // 721px is the x-coordinate for a 1920px wide container
    const buttonTop = (300 / 1080) * containerHeight; // 313px is the y-coordinate for a 1080px tall container
  
    // Set the button's position
    button.style.left = `${buttonLeft} 776px`;
    button.style.top = `${buttonTop} 469px`;
  }
  
  // Adjust position on page load
  window.addEventListener("load", adjustButtonPosition);
  
  // Adjust position on window resize or zoom
  window.addEventListener("resize", adjustButtonPosition);
  
  // Use a MutationObserver to detect changes in the container's dimensions
  const container = document.querySelector(".container");
  const observer = new MutationObserver(adjustButtonPosition);
  observer.observe(container, { attributes: true, attributeFilter: ["style", "class"] });
  
  // Recalculate the button's position after the viewport meta tag is applied
  setTimeout(adjustButtonPosition, 100); // Small delay to ensure the viewport meta tag is applied