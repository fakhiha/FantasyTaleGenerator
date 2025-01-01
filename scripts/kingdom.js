function generateKingdomName() {
    const words = [
        "Shadow", "Blood", "Night", "Storm", "Raven", "Thorn", "Frost", "Ash", "Gloom",
        "Hollow", "Silver", "Sable", "Violet", "Steel", "Black", "Moon", "Fang", "Ironwood",
        "Grave", "Wyrm", "Spire", "Blight", "Fallen", "Dread", "Vile", "Nightfall", "Grim",
        "Ember", "Dark", "Hearth", "Stormcrest", "Hallow", "Ruin", "Vanguard", "Skull",
        "Wicked", "Ironheart", "Bloodstone", "Drake", "Moonlit", "Mourn", "Ravenspire",
        "Gloomspire", "Dreadspire", "Bloodthorn", "Nightshade", "Ironspire", "Shadowfall",
        "Gravehart", "Ashen", "Harrow", "Blightstone", "Hollowspire", "Silvermoon", "Grimstone"
    ];

    const word1 = words[Math.floor(Math.random() * words.length)];
    const word2 = words[Math.floor(Math.random() * words.length)];

    const kingdomName = word1 + word2;

    document.getElementById('generated-name').innerText = kingdomName;

    // Save the kingdom name to localStorage
    localStorage.setItem('kingdomName', kingdomName);

    // Show the "Next" button
    document.getElementById('next-button').style.display = "inline-block";
}

window.onload = function () {
    const audio = document.getElementById('background-music');

    audio.play().catch(error => {
        console.log("Autoplay blocked, audio cannot play automatically.");
    });

    audio.volume = 0.2;
    audio.loop = true;
};
