// background-music.js
window.onload = function() {
    const audio = document.getElementById('background-music');
    if (audio.paused) {
        audio.play().catch(error => {
            console.log("Autoplay blocked, audio cannot play automatically.");
        });
    }
    audio.volume = 0.6; // Set volume
};
