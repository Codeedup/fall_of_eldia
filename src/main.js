/**
 * Main Application Entry Point
 * This file initializes the game and sets up any UI controls.
 */

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('Fall of Eldia - Game Initializing');
    
    // Set up any UI controls (can be expanded later)
    setupUIControls();
    
    // Try to load a saved game first
    const savedGameLoaded = loadGame();
    
    // If no saved game, start a new game
    if (!savedGameLoaded) {
        initGame();
    }
});

// Setup additional UI controls
function setupUIControls() {
    // Add menu button (if needed)
    const gameHeader = document.getElementById('game-header');
    
    const menuButton = document.createElement('button');
    menuButton.id = 'menu-button';
    menuButton.textContent = '≡ Menu';
    menuButton.addEventListener('click', toggleMenu);
    
    gameHeader.appendChild(menuButton);
    
    // Create menu panel (hidden by default)
    const menuPanel = document.createElement('div');
    menuPanel.id = 'menu-panel';
    menuPanel.classList.add('hidden');
    
    // Add menu options
    const menuOptions = [
        { text: 'New Game', action: startNewGame },
        { text: 'Save Game', action: saveGame },
        { text: 'Load Game', action: loadGame },
        { text: 'Toggle Sound', action: toggleSound },
        { text: 'Close Menu', action: toggleMenu }
    ];
    
    menuOptions.forEach(option => {
        const button = document.createElement('button');
        button.classList.add('menu-option');
        button.textContent = option.text;
        button.addEventListener('click', option.action);
        menuPanel.appendChild(button);
    });
    
    document.body.appendChild(menuPanel);
}

// Toggle menu visibility
function toggleMenu() {
    const menuPanel = document.getElementById('menu-panel');
    menuPanel.classList.toggle('hidden');
}

// Start a new game
function startNewGame() {
    // Reset player state
    gameData.player = {
        currentChapterId: "chapter1",
        currentSceneId: "scene1",
        inventory: [],
        flags: {},
        history: []
    };
    
    // Initialize the game
    initGame();
    
    // Hide the menu
    toggleMenu();
}

// Toggle sound effects
function toggleSound() {
    audioEnabled = !audioEnabled;
    console.log(`Sound ${audioEnabled ? 'enabled' : 'disabled'}`);
}

// Add CSS for the menu
const menuStyles = document.createElement('style');
menuStyles.textContent = `
    #menu-button {
        position: absolute;
        top: 10px;
        right: 10px;
        background-color: var(--secondary-color);
        color: var(--text-color);
        border: 2px solid var(--choice-border);
        padding: 5px 10px;
        font-family: 'VT323', monospace;
        font-size: 1rem;
        cursor: pointer;
    }
    
    #menu-panel {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: var(--primary-color);
        border: 4px solid var(--accent-color);
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        z-index: 100;
    }
    
    .menu-option {
        background-color: var(--secondary-color);
        color: var(--text-color);
        border: 2px solid var(--choice-border);
        padding: 10px 15px;
        font-family: 'VT323', monospace;
        font-size: 1.1rem;
        cursor: pointer;
        transition: all 0.2s ease;
    }
    
    .menu-option:hover {
        background-color: var(--choice-hover);
    }
    
    .hidden {
        display: none !important;
    }
    
    /* Additional animation for scene transitions */
    .scene-transition {
        opacity: 0;
        transform: translateY(-10px);
        transition: all 0.5s ease;
    }
    
    .choices-transition {
        opacity: 0;
        transform: translateY(10px);
        transition: all 0.5s ease;
    }
`;

document.head.appendChild(menuStyles); 