function playMusicAndRedirect() {
    const music = document.getElementById("background-music");
    music.play();
  
    setTimeout(function() {
      window.location.href = "Content Page.html";
    }, 2000); // 2-second delay
  }

  // Lock position on pressing the 'L' key
document.addEventListener('keydown', (e) => {
    if (e.key === 'l' || e.key === 'L') {
      disableDrag(); // Disable dragging
      alert('Button position locked!'); // Optional: Notify the user
    }
    
    const button = document.querySelector('.click-button');

let isDragging = false;
let offsetX, offsetY;

// Load saved position from localStorage
const savedPosition = JSON.parse(localStorage.getItem('buttonPosition'));
if (savedPosition) {
  button.style.left = `${savedPosition.left}px`;
  button.style.top = `${savedPosition.top}px`;
} else {
  // Set default position if no saved data exists
  button.style.left = '50px'; // Default X position
  button.style.top = '50px';  // Default Y position
}

// Function to enable dragging
function enableDrag() {
  button.style.cursor = 'grab'; // Set cursor to grab
  button.classList.remove('locked'); // Remove locked class

  // Add event listeners for dragging
  button.addEventListener('mousedown', startDrag);
  document.addEventListener('mousemove', drag);
  document.addEventListener('mouseup', endDrag);
}

// Function to disable dragging
function disableDrag() {
  button.style.cursor = 'default'; // Set cursor to default
  button.classList.add('locked'); // Add locked class

  // Remove event listeners for dragging
  button.removeEventListener('mousedown', startDrag);
  document.removeEventListener('mousemove', drag);
  document.removeEventListener('mouseup', endDrag);
}

// When the mouse is pressed down on the button
function startDrag(e) {
  isDragging = true;

  // Calculate the offset between the mouse position and the button's top-left corner
  offsetX = e.clientX - button.getBoundingClientRect().left;
  offsetY = e.clientY - button.getBoundingClientRect().top;

  // Change cursor to "grabbing" while dragging
  button.style.cursor = 'grabbing';
}

// When the mouse is moved
function drag(e) {
  if (isDragging) {
    // Calculate the new position of the button
    const newX = e.clientX - offsetX;
    const newY = e.clientY - offsetY;

    // Apply the new position
    button.style.left = `${newX}px`;
    button.style.top = `${newY}px`;
  }
}

// When the mouse is released
function endDrag() {
  isDragging = false;

  // Save the button's position to localStorage
  const buttonPosition = {
    left: parseInt(button.style.left, 10),
    top: parseInt(button.style.top, 10),
  };
  localStorage.setItem('buttonPosition', JSON.stringify(buttonPosition));

  // Change cursor back to "grab"
  button.style.cursor = 'grab';
}

// Enable dragging by default
enableDrag();

// Lock position on pressing the 'L' key
document.addEventListener('keydown', (e) => {
  if (e.key === 'l' || e.key === 'L') {
    disableDrag(); // Disable dragging
    alert('Button position locked!'); // Optional: Notify the user
  }
});
  });
