# Console Quest 2

****

Console Quest 2 is a top-down 2D game built with Phaser 3.

![Game screenshot](./path-to-your-screenshot.png)

## Game Description

In Console Quest 2, you control a character who...

(Talk about the gameplay, story, and mechanics of your game here.)

## File Structure

The game is organized as follows:
src/
|- scenes/
| |- BootScene.js
| |- LoadScene.js
| |- MainMenuScene.js
| |- MonsterScene.js
| |- TreasureScene.js
| |- HealingScene.js
| |- BossScene.js
|
|- entities/
| |- Player.js
| |- Monster.js
|
|- assets/
| |- ... (Your game's assets: images, audio files, etc.)
|
|- main.js
|- index.html
webpack.config.js
package.json
README.md

## UML

(Insert your UML diagram here.)

## How to Run the Game

1. Clone this repository to your local machine.
2. Navigate to the project folder in your terminal.
3. Run `npm install` to install the dependencies.
4. Run `npm run build` to bundle the JavaScript files.
5. Open `index.html` in your browser to start the game.

## Game Mechanics

### Player

The player character is controlled using the W, A, S, and D keys. The player can...

### Monsters

Monsters are AI-controlled entities that...

### Scenes

The game is divided into several scenes:

- **BootScene**: This is the first scene of the game, which preloads any necessary assets for the LoadScene.
- **LoadScene**: This scene preloads the game's main assets and displays a loading screen.
- **MainMenuScene**: This scene displays the main menu of the game.
- **MonsterScene**: In this scene, the player encounters and battles with monsters.
- **TreasureScene**: In this scene, the player can...
- **HealingScene**: In this scene, the player can...
- **BossScene**: In this scene, the player encounters and battles with a boss monster.

****

# console-quest-2

****

Description of game

****

## Installation

1. Clone the repository to your local machine.
2. Open a terminal window and navigate to the project directory.
3. Run npm install to install the dependencies.

## Usage

1. Start the server by running node index.js in the terminal.
2. In a separate terminal window, run node gamePlayers.js.
3. Enter your name in the gamePlayers console.
4. The game loop will start on the server, and you will be prompted to choose your attack type and target enemy.
5. Keep playing until you defeat all enemies or your health reaches 0.

****

[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-908a85?logo=gitpod)](https://gitpod.io/#https://github.com/PhaserEditor2D/starter-example-sunny-land)

This is a port to Phaser 3 of the [Sunny Land demo made by Luis Zuno](https://ansimuz.itch.io/sunny-land-pixel-game-art).

This is a good example of how to use the Tilemap support in the Scene Editor, the User Components and the Animations Editor.

## Configuration

* It includes the latest Phaser v3 runtime (in the `lib/` folder).
* It is coded in JavaScript.
* It includes a VS Code project configuration (`jsconfig.json` file) and the type definitions (in the `types/` folder).

## Run the editor

If you have NodeJS installed, you can run the editor using the `editor` NPM script, defined in the `package.json` file:

```bash
$ npm install
$ npm update
$ npm run editor
```

If you are in a remote environment (like the Gitpod.io IDE), then run the editor like this:

```bash
$ npm run editor-remote
```

If you want to see all the editor options, run:

```bash
$ npx phasereditor2d-launcher -help
```

If Phaser Editor 2D Core is globally installed, you can run:

```bash
$ PhaserEditor2D -project .
```

## Script Nodes

Script nodes are logic objects. You can add a script node to the scene or a game object, for extending it with custom data and behavior.

This project includes the [basic script nodes](https://github.com/PhaserEditor2D/script-nodes-basic-js) in the `src/script-nodes-basic/` folder. You can add your own script nodes in the `src/script-nodes/` folder.#
