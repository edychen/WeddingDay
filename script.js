function playMusicAndRedirect() {
    const music = document.getElementById("background-music");
    music.play();
  
    setTimeout(function() {
      window.location.href = "Content Page.html";
    }, 2000); // 2-second delay
  }

  
