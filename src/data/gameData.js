/**
 * Game Data Structure
 * This file contains the data structure for the narrative adventure game.
 * The game is organized into chapters, which contain scenes, which contain choices.
 */

const gameData = {
    // Player state tracking
    player: {
        currentChapterId: "chapter1",
        currentSceneId: "scene1",
        inventory: [],
        flags: {}, // For tracking story decisions
        history: []
    },
    
    // Chapters contain 5-7 scenes each
    chapters: {
        "chapter1": {
            title: "The Beginning",
            description: "Your journey begins in the ancient forest of Eldia.",
            scenes: {
                "scene1": {
                    title: "The Forest Path",
                    text: "Moon washed fog coils between ancient trunks as you step into the Elderwood— a forest so old even the elves tell stories about its youth. Owls sing in languages you can almost understand, and bioluminescent spores drift like fireflies made of thought. Somewhere ahead, an unseen something calls you—whether for help or harm, you cannot yet tell. A moss covered milestone glows faintly at a fork in the path. Its runes rearrange themselves into words you can read: 'Seven choices reveal the heart. Choose well, wanderer, before we part.'",
                    background: "forest.png",
                    choices: [
                        {
                            id: "choice1",
                            text: "Follow the silver furred fox that darts across the left hand trail, its tail-tip sparking like a struck flint",
                            nextScene: "scene2"
                        },
                        {
                            id: "choice2",
                            text: "Study the runes on the milestone more closely; perhaps they hide a clue or a warning",
                            nextScene: "scene3"
                        },
                        {
                            id: "choice3",
                            text: "Trace the distant flute melody drifting from the right hand path toward a brook that glimmers with starlight.",
                            nextScene: "scene4"
                        }
                    ]
                },
                
                "scene2": {
                    title: "The Silver Fox",
                    text: "Soft earth muffles your steps as you follow the silver-furred fox down the left-hand trail. Pale sparks pop from its tail with each bound, briefly illuminating runes carved into trunks you pass. After several twisting minutes, the fox slips into a moonlit glade ringed by towering red-cap mushrooms. At its center rises an ancient stone pedestal holding a luminous acorn that pulses like a slow heartbeat. With a shimmer, the fox stretches into the shape of a diminutive sprite—amber-eyed, cloaked in leaves. In a lilting voice it speaks: 'The Elderwood wilts. This Heartseed keeps the rot at bay, but its light fades. Will you help rekindle it before the seventh stroke of dawn? There will be a hefty reward for a hero who can help.' The sprite waits, wings buzzing in nervous half-beats.",
                    background: "fox_path.png",
                    choices: [
                        {
                            id: "choice1",
                            text: "Accept the quest for a chance to save the Elderwood and a hefty reward!",
                            nextScene: "scene5"
                        },
                        {
                            id: "choice2",
                            text: "Examine the acorn more closely to see if there is any hidden magic or tricks to it.",
                            nextScene: "scene3"
                        },
                        {
                            id: "choice3",
                            text: "Ready your weapons and prepare for battle because the fox is a trickster and the Elderwood is not in danger!",
                            nextScene: "scene8"
                        }
                    ]
                },
                
                "scene3": {
                    title: "The Overgrown Path",
                    text: "[PLACEHOLDER] Description of the overgrown path scene.",
                    background: "overgrown_path.png",
                    choices: [
                        {
                            id: "choice1",
                            text: "Push through the thick vegetation.",
                            nextScene: "scene6"
                        },
                        {
                            id: "choice2",
                            text: "Try to find a clearer route.",
                            nextScene: "scene7"
                        }
                    ]
                },
                
                "scene4": {
                    title: "The Strange Sound",
                    text: "[PLACEHOLDER] Description of the strange sound scene.",
                    background: "forest_bushes.png",
                    choices: [
                        {
                            id: "choice1",
                            text: "Approach carefully and investigate.",
                            nextScene: "scene6"
                        },
                        {
                            id: "choice2",
                            text: "Back away slowly and return to the path.",
                            nextScene: "scene1"
                        }
                    ]
                },
                
                "scene5": {
                    title: "The Cave Entrance",
                    text: "[PLACEHOLDER] Description of the cave entrance scene.",
                    background: "cave_entrance.png",
                    choices: [
                        {
                            id: "choice1",
                            text: "Enter the cave.",
                            nextScene: "scene7"
                        },
                        {
                            id: "choice2",
                            text: "Look for a way around.",
                            nextScene: "scene6"
                        }
                    ]
                },
                
                "scene6": {
                    title: "The Clearing",
                    text: "[PLACEHOLDER] Description of the forest clearing scene.",
                    background: "clearing.png",
                    choices: [
                        {
                            id: "choice1",
                            text: "Investigate the ancient stones in the center.",
                            nextScene: "scene7"
                        },
                        {
                            id: "choice2",
                            text: "Head toward the smoke rising in the distance.",
                            nextChapter: "chapter2",
                            nextScene: "scene1"
                        }
                    ]
                },
                
                "scene7": {
                    title: "The Hidden Path",
                    text: "[PLACEHOLDER] Description of the hidden path discovery scene.",
                    background: "hidden_path.png",
                    choices: [
                        {
                            id: "choice1",
                            text: "Follow the hidden path.",
                            nextChapter: "chapter2",
                            nextScene: "scene1"
                        },
                        {
                            id: "choice2",
                            text: "Return to the main path and reconsider your options.",
                            nextScene: "scene1"
                        }
                    ]
                },
                "scene8": {
                    title: "The Battle",
                    text: "As you draw your weapon the sprite summons a large skeletal stag from the shadows. The sprite calls out, 'You have made a grave mistake challenging the elderwood!' The stag charges at you with a howl of rage, the ground shaking with each step. The sprite calls out, 'You will pay for this with your life!'",
                    background: "stag_attack.png",
                    choices: [
                        {
                            id: "choice1",
                            text: "Attack the sprite in hopes of stopping the stag!",
                            nextScene: "scene9"
                        },
                        {
                            id: "choice2",
                            text: "Face the stag head on and brace for the fight of your life!",
                            nextScene: "scene1"
                        },
                        {
                            id: "choice3",
                            text: "Run away and try to survive!",
                            nextScene: "scene10"
                        }
                    ]
                },
                "scene9": {
                    title: "The Battle",
                    text: "[PLACEHOLDER] Description of the battle scene.",
                    background: "battle.png",
                    choices: []
                },
                "scene10": {
                    title: "Game Over - A Fatal Mistake",
                    text: "As you run for your life the stag begins to gain ground on you. You can hear it breathing down your neck. As you take a glimpse behind you you can see that the stag has closed in and begins a gorging attack with its razor sharp antlers. The antlers swipe up and you are thrown in the air. You feel a sharp pain but after that everything goes black.\n\nYou have met a tragic end in the Elderwood...",
                    background: "death_stag.png",
                    choices: [
                        {
                            id: "choice1",
                            text: "Game Over - Return to the beginning",
                            nextChapter: "chapter1",
                            nextScene: "scene1",
                            onSelect: function() {
                                // Reset player state
                                gameData.player.inventory = [];
                                gameData.player.flags = {};
                                gameData.player.history = [];
                            }
                        }
                    ]
                }
                
            }
        },
        
        "chapter2": {
            title: "The Village",
            description: "You arrive at a small village with a big secret.",
            scenes: {
                "scene1": {
                    title: "Village Entrance",
                    text: "[PLACEHOLDER] Description of arriving at the village entrance.",
                    background: "village_entrance.png",
                    choices: [
                        {
                            id: "choice1",
                            text: "Enter the village openly.",
                            nextScene: "scene2"
                        },
                        {
                            id: "choice2",
                            text: "Observe from a distance first.",
                            nextScene: "scene3"
                        }
                    ]
                },
                
                // Additional scenes would be defined here
                // Each chapter should have 5-7 scenes as specified
            }
        }
        
        // Additional chapters would be defined here
    }
};

// Function to get the current scene
function getCurrentScene() {
    const chapter = gameData.chapters[gameData.player.currentChapterId];
    return chapter.scenes[gameData.player.currentSceneId];
}

// Function to make a choice and advance the story
function makeChoice(choiceId) {
    const currentScene = getCurrentScene();
    const selectedChoice = currentScene.choices.find(choice => choice.id === choiceId);
    
    if (!selectedChoice) return false;
    
    // Save the choice to history
    gameData.player.history.push({
        chapterId: gameData.player.currentChapterId,
        sceneId: gameData.player.currentSceneId,
        choiceId: choiceId
    });
    
    // Update chapter if needed
    if (selectedChoice.nextChapter) {
        gameData.player.currentChapterId = selectedChoice.nextChapter;
    }
    
    // Update scene
    if (selectedChoice.nextScene) {
        gameData.player.currentSceneId = selectedChoice.nextScene;
        return true;
    }
    
    return false;
} 