// scripts/main.js

window.onload = function() {
    const audio = document.getElementById('background-music');
    
    
    audio.play().catch(error => {
        console.log("Autoplay blocked, audio cannot play automatically.");
    });

    audio.volume = 0.4;
    audio.loop = true;
};

