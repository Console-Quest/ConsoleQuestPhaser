// You can write more code here

/* START OF COMPILED CODE */

class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	preload() {

		this.load.pack("asset-pack", "assets/asset-pack.json");
	}

	/** @returns {void} */
	editorCreate() {

		// map
		const map = this.add.tilemap("map");
		map.addTilesetImage("tileset", "tileset");

		// spaceKey
		const spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

		// leftKey
		const leftKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);

		// rightKey
		const rightKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

		// upKey
		const upKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);

		// downKey
		const downKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);

		// consoleTest
		const consoleTest = this.add.tilemap("consoleTest");
		consoleTest.addTilesetImage("Dungeon_Tileset", "Dungeon_Tileset");

		// layer
		const layer = consoleTest.createLayer("Background", ["Dungeon_Tileset"], 0, 1);

		// bush
		const bush = this.add.image(220, 517, "atlas-props", "bush");
		bush.setOrigin(0, 0);

		// sign
		const sign = this.add.image(176, 300, "atlas-props", "sign");
		sign.setOrigin(0, 0);

		// skulls
		const skulls = this.add.image(240, 310, "atlas-props", "skulls");
		skulls.setOrigin(0, 0);

		// cherry_1
		const cherry_1 = new Cherry(this, 496, 80);
		this.add.existing(cherry_1);

		// cherry_2
		const cherry_2 = new Cherry(this, 512, 80);
		this.add.existing(cherry_2);

		// cherry_3
		const cherry_3 = new Cherry(this, 368, 273);
		this.add.existing(cherry_3);

		// cherry_4
		const cherry_4 = new Cherry(this, 400, 272);
		this.add.existing(cherry_4);

		// cherry
		const cherry = new Cherry(this, 480, 79);
		this.add.existing(cherry);

		// cherry_5
		const cherry_5 = new Cherry(this, 384, 272);
		this.add.existing(cherry_5);

		// gem
		const gem = new Gem(this, 64, 96);
		this.add.existing(gem);

		// gem_1
		const gem_1 = new Gem(this, 48, 96);
		this.add.existing(gem_1);

		// gem_2
		const gem_2 = new Gem(this, 80, 96);
		this.add.existing(gem_2);

		// gem_3
		const gem_3 = new Gem(this, 672, 256);
		this.add.existing(gem_3);

		// gem_1_1
		const gem_1_1 = new Gem(this, 672, 208);
		this.add.existing(gem_1_1);

		// gem_2_1
		const gem_2_1 = new Gem(this, 704, 192);
		this.add.existing(gem_2_1);

		// HUD
		const hUD = this.add.layer();

		// player
		const player = new Player(this, 386, 574);
		player.flipX = false;
		player.flipY = false;
		hUD.add(player);

		// eagle
		const eagle = new Eagle(this, 199, 76);
		this.add.existing(eagle);

		// eagle_1
		const eagle_1 = new Eagle(this, 230, 572);
		this.add.existing(eagle_1);

		// orc
		const orc = new Orc(this, 304, 558);
		this.add.existing(orc);

		// arcadesprite_1
		const arcadesprite_1 = new Reddemon(this, 682, 552);
		this.add.existing(arcadesprite_1);

		// reddemon
		const reddemon = new Reddemon(this, 816, 337);
		this.add.existing(reddemon);

		// reddemon_1
		const reddemon_1 = new Reddemon(this, 480, 189);
		this.add.existing(reddemon_1);

		// reddemon_2
		const reddemon_2 = new Reddemon(this, 709, 152);
		this.add.existing(reddemon_2);

		// reddemon_3
		const reddemon_3 = new Reddemon(this, 999, 305);
		this.add.existing(reddemon_3);

		// reddemon_4
		const reddemon_4 = new Reddemon(this, 941, 467);
		this.add.existing(reddemon_4);

		// reddemon_5
		const reddemon_5 = new Reddemon(this, 248, 127);
		this.add.existing(reddemon_5);

		// lists
		const items = [cherry, cherry_1, cherry_2, cherry_3, cherry_4, cherry_5, gem, gem_1, gem_2, gem_3, gem_1_1, gem_2_1, skulls];
		const enemies = [arcadesprite_1, orc, eagle_1, reddemon_1, reddemon_2, reddemon, reddemon_3, reddemon_4, reddemon_5, eagle];
		const spells = [];

		// colliderPlayerVsLayer
		const colliderPlayerVsLayer = this.physics.add.collider(player, cherry);

		// colliderEnemiesVsLayer
		const colliderEnemiesVsLayer = this.physics.add.collider(enemies, layer);

		// overlapPlayerVsItems
		const overlapPlayerVsItems = this.physics.add.overlap(player, items, this.pickItem, undefined, this);

		// overlapPlayerVsEnemies
		const overlapPlayerVsEnemies = this.physics.add.overlap(player, enemies, undefined, this.checkAgainstEnemies, this);

		// ColliderSpellVsEnemies
		const colliderSpellVsEnemies = this.physics.add.overlap(spells, enemies, this.checkAgainstSpellEnemyCollision, undefined, this);

		this.layer = layer;
		this.player = player;
		this.map = map;
		this.spaceKey = spaceKey;
		this.leftKey = leftKey;
		this.rightKey = rightKey;
		this.upKey = upKey;
		this.downKey = downKey;
		this.consoleTest = consoleTest;
		this.items = items;
		this.enemies = enemies;
		this.spells = spells;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.Tilemaps.TilemapLayer} */
	layer;
	/** @type {Player} */
	player;
	/** @type {Phaser.Tilemaps.Tilemap} */
	map;
	/** @type {Phaser.Input.Keyboard.Key} */
	spaceKey;
	/** @type {Phaser.Input.Keyboard.Key} */
	leftKey;
	/** @type {Phaser.Input.Keyboard.Key} */
	rightKey;
	/** @type {Phaser.Input.Keyboard.Key} */
	upKey;
	/** @type {Phaser.Input.Keyboard.Key} */
	downKey;
	/** @type {Phaser.Tilemaps.Tilemap} */
	consoleTest;
	/** @type {Array<Cherry|Gem|Phaser.GameObjects.Image>} */
	items;
	/** @type {Array<Reddemon|Orc|Eagle>} */
	enemies;
	/** @type {Array<any>} */
	spells;

	/* START-USER-CODE */

	//--------------------------------------------
	// Spells not found here ... If we implement them this way, can we bring the prefab over w/ spell values?
	//--------------------------------------------

	create() {
		this.play_music = this.sound.add("Retro_Platforming");
		const musicConfig = {
			mute: false,
			volume: .1,
			rate: 1,
			detune: 0,
			seek: 0,
			loop: true,
			delay: 0
		}
		this.play_music.play(musicConfig);
		//this.pickupSounds = ['xp1', 'xp2', 'xp3', 'xp4'].map(name => this.sound.add(name));
		this.xp1 = this.sound.add("xp1");
		this.xp2 = this.sound.add("xp2");
		this.xp3 = this.sound.add("xp3");
		this.xp4 = this.sound.add("xp4");
		this.lvl_up = this.sound.add("level_up1");

		this.editorCreate();
		// const backgroundLayer = map.createLayer('Background', tileset);
    // const interactiveLayer = map.createLayer('Interactive', tileset).setInteractive();
		// // this.initColliders();
		// backgroundLayer.setCollisionByProperty({ collide: true });
    // interactiveLayer.setCollisionByProperty({ collide: true });
		this.cameras.main.setZoom(2);
    this.cameras.main.startFollow(this.player);
	}




	update() {
		console.log(this.player.XP);
		this.movePlayer();

		// fix player position

		this.player.x = Math.floor(this.player.x);

		// fix camera position

		const cam = this.cameras.main;

		// camera X follows the player
		cam.scrollX = Math.floor(this.player.x);

		// cameras Y moves to a sector of the world
		// const row = Math.floor(this.player.y / cam.height);
		// cam.scrollY = row * cam.height;
	}

	movePlayer() {
    if (this.player.hurtFlag) {
        return;
    }

    const body = this.player.getBody();

    const upDown = this.upKey.isDown;
    const downDown = this.downKey.isDown;
    const leftDown = this.leftKey.isDown;
    const rightDown = this.rightKey.isDown;

	// Pulls in players speed
	const moveSpeed = this.player.moveSpeed + 100;
    var vel = moveSpeed;

    // Calculate X velocity
    let velocityX = 0;
    let playerAnimation = "";

    if (leftDown) {
        velocityX = -vel;
        playerAnimation = "bluecharleft";
    } else if (rightDown) {
        velocityX = vel;
        playerAnimation = "bluecharright";
    }

    // Calculate Y velocity
    let velocityY = 0;

    if (upDown) {
        velocityY = -vel;
        playerAnimation = "bluecharup";
    } else if (downDown) {
        velocityY = vel;
        playerAnimation = "bluechardown";
    }

    // Set player velocity
    body.velocity.x = velocityX;
    body.velocity.y = velocityY;

    // Check if no movement keys are pressed
    if (!leftDown && !rightDown) {
        body.velocity.x = 0;
    }
    if (!upDown && !downDown) {
        body.velocity.y = 0;
    }

    // Play the appropriate animation
    if (playerAnimation) {
        this.player.play(playerAnimation, true);
    } else {
        this.player.anims.stop();
    }
}

// Will account for players xp and cur level
handlePlayerXP(){
	let xpGained = 10 - (this.player.level / 2);
	this.player.XP += xpGained;
	if (this.player.XP >= 100) {
		this.lvl_up.play();
		this.player.XP -= 100;
	}
	return;
}

getPickupAudio() {
	let randomNumber = Math.floor(Math.random() * 4);
	switch (randomNumber) {
		case 0:
		  this.xp1.play();
		  break;
		case 1:
		  this.xp2.play();
		  break;
		case 2:
		  this.xp3.play();
		  break;
		case 3:
		  this.xp4.play();
		  break;
	  }
	  return;
}

	// initColliders() {

	// 	this.map.setCollision([27, 29, 31, 33, 35, 37, 77, 81, 86, 87, 127, 129, 131, 133, 134, 135, 83, 84, 502, 504, 505, 529, 530, 333, 335, 337, 339, 366, 368, 262, 191, 193, 195, 241, 245, 291, 293, 295]);
	// 	this.setTopCollisionTiles([35, 36, 84, 86, 134, 135, 366, 367, 368, 262]);
	// }

	/**
	 * @param {Player} player
	 * @param {Phaser.GameObjects.Sprite} enemy
	 * @param {Phaser.GameObjects.Sprite} spell
	 */
	checkAgainstSpellEnemyCollision(spell, enemy) {
		const player = this.player;
		const damage = spell.damage;

		enemy.hp -= damage;

		if (enemy.hp <= 0) {
			enemy.destroy();
		}

		spell.destroy();
		console.log('Enemy HP:', enemy.hp);
	}


	/**
	 * @param {Player} player
	 * @param {Phaser.GameObjects.Sprite} item
	 */
	pickItem(player, item) {

		this.add.existing(new FeedbackItem(this, item.x, item.y));
		this.getPickupAudio();
		this.handlePlayerXP();
		item.destroy();
	}

	/**
	 * @param {number[]} tiles
	 */
	// setTopCollisionTiles(tiles) {

	// 	const tileSet = new Set(tiles);

	// 	for (let x = 0; x < this.map.width; x++) {

	// 		for (let y = 0; y < this.map.height; y++) {

	// 			const tile = this.layer.getTileAt(x, y);

	// 			if (tile && tileSet.has(tile.index)) {

	// 				tile.setCollision(false, false, true, false);
	// 			}
	// 		}
	// 	}
	// }

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here