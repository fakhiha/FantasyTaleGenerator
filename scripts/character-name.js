function generateCharacterName() {
    const prefixes = [
        "Ar", "El", "Thal", "Mer", "Syl", "Gal", "Fen", "Or", "Lys", "Cael",
        "Zan", "Vor", "Drak", "Nyx", "Ery", "Isen", "Vyn", "Alth", "Xar", "Vel",
        "Quin", "Kal", "Mor", "Ser", "Rav", "Tor", "Yen", "Eld", "Shae", "Zyn",
        "Lior", "Ael", "Ther", "Var", "Cyr", "Kor", "Mal", "Fyn", "Jor", "Tas",
        "Ulr", "Vae", "Zor", "Xen", "Pyr", "Dae", "Niv", "Ryn", "Bryn", "Oryn"
    ];

    const suffixes = [
        "dorin", "wyn", "thal", "dor", "ien", "rin", "anor", "las", "vell", "ith",
        "varis", "gorn", "maris", "kiel", "ven", "oros", "nys", "ralis", "zeth", "nar",
        "vryn", "lys", "thas", "dris", "kara", "sael", "riel", "torin", "vyn", "zar",
        "shar", "fyr", "oril", "dar", "nos", "ria", "veth", "thalor", "dyr", "aer",
        "orn", "riel", "lan", "zryn", "theris", "kan", "yas", "valis", "ion", "drael"
    ];

    const randomPrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const randomSuffix = suffixes[Math.floor(Math.random() * suffixes.length)];

    const characterName = randomPrefix + randomSuffix;

    // Display the name
    const nameDisplay = document.getElementById('generated-name');
    nameDisplay.textContent = characterName;

    // Smooth fade-in animation
    nameDisplay.style.opacity = 0;
    setTimeout(() => {
        nameDisplay.style.opacity = 1;
    }, 100);

    // Save to localStorage
    localStorage.setItem('characterName', characterName);
    // Show the "Next" button
    document.getElementById('next-button').style.display = "inline-block";
}
