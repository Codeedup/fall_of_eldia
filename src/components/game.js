/**
 * Game Engine
 * This file contains the core functionality for displaying scenes and handling player choices.
 */

// DOM Elements
const sceneContainer = document.getElementById('scene-container');
const sceneTextContainer = document.getElementById('scene-text-container');
const choicesContainer = document.getElementById('choices-container');
const chapterIndicator = document.getElementById('chapter-indicator');
const sceneIndicator = document.getElementById('scene-indicator');

// Game state variables
let gameActive = false;
let audioEnabled = true;

// Initialize the game
function initGame() {
    gameActive = true;
    renderCurrentScene();
    
    // Add event listener for keyboard navigation (optional)
    document.addEventListener('keydown', handleKeyDown);
}

// Render the current scene
function renderCurrentScene() {
    if (!gameActive) return;
    
    const currentScene = getCurrentScene();
    const currentChapter = gameData.chapters[gameData.player.currentChapterId];
    
    // Update chapter and scene indicators
    chapterIndicator.textContent = currentChapter.title;
    sceneIndicator.textContent = currentScene.title;
    
    // Clear previous scene content
    sceneContainer.innerHTML = '';
    sceneTextContainer.innerHTML = '';
    
    // Create scene image
    if (currentScene.background) {
        const imageElement = document.createElement('img');
        imageElement.classList.add('scene-image');
        imageElement.src = `src/assets/${currentScene.background}`;
        imageElement.alt = currentScene.title;
        sceneContainer.appendChild(imageElement);
    } else {
        // Create a placeholder if no image is available
        const placeholderElement = document.createElement('div');
        placeholderElement.classList.add('scene-image', 'placeholder');
        placeholderElement.textContent = 'No image available';
        sceneContainer.appendChild(placeholderElement);
    }
    
    // Create scene text
    const textElement = document.createElement('div');
    textElement.classList.add('scene-text');
    textElement.textContent = currentScene.text;
    sceneTextContainer.appendChild(textElement);
    
    // Render choices
    renderChoices(currentScene.choices);
}

// Render the choices for the current scene
function renderChoices(choices) {
    // Clear current choices
    choicesContainer.innerHTML = '';
    
    // Create and append each choice button
    choices.forEach(choice => {
        const choiceButton = document.createElement('button');
        choiceButton.classList.add('choice-btn');
        choiceButton.textContent = choice.text;
        choiceButton.dataset.choiceId = choice.id;
        
        // Add click event
        choiceButton.addEventListener('click', () => {
            handleChoice(choice.id);
        });
        
        choicesContainer.appendChild(choiceButton);
    });
}

// Handle player choice selection
function handleChoice(choiceId) {
    // Play selection sound (if audio is implemented)
    playSound('select');
    
    // Get the current scene and selected choice
    const currentScene = getCurrentScene();
    const selectedChoice = currentScene.choices.find(choice => choice.id === choiceId);
    
    if (!selectedChoice) return false;
    
    // Execute onSelect function if it exists (for game over/restart functionality)
    if (selectedChoice.onSelect && typeof selectedChoice.onSelect === 'function') {
        selectedChoice.onSelect();
    }
    
    // Update game state based on choice
    const result = makeChoice(choiceId);
    
    if (result) {
        // Add transition effect
        sceneContainer.classList.add('scene-transition');
        sceneTextContainer.classList.add('scene-transition');
        choicesContainer.classList.add('choices-transition');
        
        // Render the new scene after a short delay
        setTimeout(() => {
            sceneContainer.classList.remove('scene-transition');
            sceneTextContainer.classList.remove('scene-transition');
            choicesContainer.classList.remove('choices-transition');
            renderCurrentScene();
        }, 500);
    }
}

// Optional keyboard navigation
function handleKeyDown(event) {
    if (!gameActive) return;
    
    const choices = document.querySelectorAll('.choice-btn');
    
    // Number keys 1-4 for choices
    if (event.key >= '1' && event.key <= '4') {
        const index = parseInt(event.key) - 1;
        if (index < choices.length) {
            choices[index].click();
        }
    }
}

// Sound effects (placeholder)
function playSound(soundType) {
    if (!audioEnabled) return;
    
    // Sound implementation would go here
    // This is just a placeholder for future audio implementation
    console.log(`Playing sound: ${soundType}`);
}

// Save game (placeholder)
function saveGame() {
    const saveData = {
        player: gameData.player,
        timestamp: new Date().toISOString()
    };
    
    localStorage.setItem('eldiaAdventureSave', JSON.stringify(saveData));
    console.log('Game saved');
}

// Load game (placeholder)
function loadGame() {
    const saveData = localStorage.getItem('eldiaAdventureSave');
    
    if (saveData) {
        const parsedData = JSON.parse(saveData);
        gameData.player = parsedData.player;
        renderCurrentScene();
        console.log('Game loaded');
        return true;
    }
    
    return false;
}

// Export game state for debugging
function debugGameState() {
    console.log('Current game state:', {
        chapter: gameData.player.currentChapterId,
        scene: gameData.player.currentSceneId,
        history: gameData.player.history
    });
} 