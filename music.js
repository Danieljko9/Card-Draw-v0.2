document.addEventListener("DOMContentLoaded", () => {
    const musicFiles = [
        "Blank.mp3",
        "Dreams.mp3",
        "Fearless.mp3",
        "HeroesTonight.mp3",
        "Invincible.mp3",
        "Mortals.mp3",
        "MyHeart.mp3",
        "Royalty.mp3",
        "SkyHigh.mp3",
        "WhyWeLose.mp3"
    ];

    // Shuffle function
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // Shuffle the playlist
    shuffle(musicFiles);

    let currentTrackIndex = 0;
    const backgroundMusic = document.getElementById("backgroundMusic");
    const toggleMusicBtn = document.getElementById("toggleMusicBtn");
    const songPopup = document.getElementById("songPopup");

    // Function to show song name popup
    function showSongPopup() {
        songPopup.textContent = `Now Playing: ${musicFiles[currentTrackIndex].replace(".mp3", "")}`;
        songPopup.classList.add("show");
        setTimeout(() => {
            songPopup.classList.remove("show");
        }, 3000); // Adjust time as needed
    }

    // Set the initial source and show popup
    backgroundMusic.src = `music/${musicFiles[currentTrackIndex]}`;
    showSongPopup();

    backgroundMusic.addEventListener('ended', () => {
        currentTrackIndex = (currentTrackIndex + 1) % musicFiles.length;
        backgroundMusic.src = `music/${musicFiles[currentTrackIndex]}`;
        backgroundMusic.play();
        showSongPopup();
    });

    // Play the background music when the page loads
    backgroundMusic.play();

    // Toggle background music on/off
    toggleMusicBtn.addEventListener("click", () => {
        if (backgroundMusic.paused) {
            backgroundMusic.play();
            toggleMusicBtn.textContent = "Turn Music Off";
        } else {
            backgroundMusic.pause();
            toggleMusicBtn.textContent = "Turn Music On";
        }
    });
});
