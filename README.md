# Fall of Eldia - Fantasy Adventure Game

A pixel-art fantasy decision-based narrative game similar to a "Choose Your Own Adventure" book.

## Project Structure

The game is organized into:
- **Chapters**: Larger story arcs (containing 5-7 scenes each)
- **Scenes**: Individual story segments with decisions
- **Choices**: 2-4 options per scene that branch the story

## Game Features

- Decision-based narrative with branching storylines
- Pixel art 2D aesthetic with fantasy theme
- Chapter and scene-based structure
- Save/load game functionality
- Menu system for game controls

## File Structure

- `index.html` - Main game page
- `src/styles/main.css` - Game styling
- `src/data/gameData.js` - Game content and decision tree
- `src/components/game.js` - Game engine
- `src/main.js` - Application initialization
- `src/assets/` - Images and sound files (to be added)

## How to Edit Game Content

The game content is defined in `src/data/gameData.js`. To create your narrative:

1. Define chapters with a title and description
2. Create scenes (5-7 per chapter) with:
   - Title and descriptive text
   - Background image reference
   - 2-4 choices that lead to other scenes
3. Connect scenes via the choice's `nextScene` and `nextChapter` properties

## How to Run

Simply open `index.html` in a web browser.

## Development Notes

- Add background images to the `src/assets` folder
- The placeholder text `[PLACEHOLDER]` should be replaced with your narrative content
- The game uses a simple state management system that tracks player choices

## Future Enhancements

- Audio implementation
- Character inventory system
- More complex decision logic
- Visual effects and animations 
