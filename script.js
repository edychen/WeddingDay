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
  });