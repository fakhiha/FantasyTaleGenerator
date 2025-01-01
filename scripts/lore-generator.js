// Fetch lore prompts from the server
function fetchLorePrompts() {
    fetch('/lore-prompts')
        .then(response => response.text())
        .then(data => {
            const lorePrompts = parseLoreFile(data);
            generateLore(lorePrompts);
        })
        .catch(error => console.error('Error fetching lore prompts:', error));
}

// Function to parse the lore prompts from the text file
function parseLoreFile(fileContent) {
    // Split by double newlines, which represent each lore prompt
    const prompts = fileContent.split(/\n\s*\n/).filter(Boolean); // Split by two newlines and remove empty prompts
    return prompts;
}

// Function to generate and display a random lore prompt
function generateLore(lorePrompts) {
    const kingdomName = localStorage.getItem('kingdomName');
    const characterName = localStorage.getItem('characterName');

    const prompt = lorePrompts[Math.floor(Math.random() * lorePrompts.length)];
    const loreText = prompt.replace(/\${kingdomName}/g, kingdomName).replace(/\${characterName}/g, characterName);

    const loreDisplay = document.getElementById('lore-text');
    loreDisplay.textContent = loreText;

    // Smooth fade-in animation for the lore
    loreDisplay.style.opacity = 0;
    setTimeout(() => {
        loreDisplay.style.opacity = 1;
    }, 100);
}

// Function to handle the "Generate New Lore" button click
document.getElementById("generateLoreBtn").addEventListener("click", function() {
    fetchLorePrompts(); // Reload lore when the button is clicked
});

// Fetch lore prompts on page load
fetchLorePrompts();
