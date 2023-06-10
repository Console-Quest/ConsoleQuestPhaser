/* START OF COMPILED CODE */

class Player extends Phaser.GameObjects.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 11, y ?? 14, texture || "bluechar", frame ?? "down2.png");

		scene.physics.add.existing(this, false);
		this.body.allowGravity = false;
		this.body.collideWorldBounds = true;
		this.body.checkCollision.up = false;
		this.body.checkCollision.down = false;
		this.body.checkCollision.left = false;
		this.body.checkCollision.right = false;
		this.body.setOffset(12, 16);
		this.body.setSize(8, 16, false);

		// startAnimationScript
		const startAnimationScript = new StartAnimationScript(this);

		// startAnimationScript (prefab fields)
		startAnimationScript.animationKey = "bluechardown";

		/* START-USER-CTR-CODE */
    // this.spellSounds = {
    // 	Fire_Ball: 'fire_cast',
    // };
    this.fire_cast = this.scene.sound.add("fire_cast");
    this.lightning_cast = this.scene.sound.add("lightning_cast");
    this.water_cast = this.scene.sound.add("water_cast");
    this.magic_cast = this.scene.sound.add("magic_cast");

    this.hurtFlag = false;
    this.scene = scene;
    this.cursors = scene.input.keyboard.createCursorKeys();
    this.spellFrame = 10;
    this.spellVelocity = 400;
    this.directions = {
      up: { x: 0, y: -this.spellVelocity, angle: -90 },
      down: { x: 0, y: this.spellVelocity, angle: 90 },
      left: { x: -this.spellVelocity, y: 0, angle: 180 },
      right: { x: this.spellVelocity, y: 0 },
      "up-left": {
        x: -this.spellVelocity,
        y: -this.spellVelocity,
        angle: -135,
      },
      "up-right": { x: this.spellVelocity, y: -this.spellVelocity, angle: -45 },
      "down-left": {
        x: -this.spellVelocity,
        y: this.spellVelocity,
        angle: 135,
      },
      "down-right": { x: this.spellVelocity, y: this.spellVelocity, angle: 45 },
    };
    // this.loadSpellSounds();
    // Save the player object in the data system
    // this.scene.sys.game.data.set('player', this);
    console.log(this.scene.data);
    this.scene.data.set("player", this);

    // console.log(this.scene.data.list.player)

    scene.input.keyboard.on("keydown-SPACE", this.castSpell, this);
    let spells = ["Tornado"];
		// "Tornado", "Molten_Spear", "Water_Geyser"
    this.scene.time.addEvent({
      loop: true,
      delay: 1000 - this.attackSpeed,
      callback: () => {
        this.autoCastSpell(spells);
        this.attackSpeed += 50;
        console.log(1100 - (this.attackSpeed * 200));
        
      },
    });

    this.scene.events.on("update", () => this.updatePlayer());

    /* END-USER-CTR-CODE */
	}

	/** @type {number} */
	HP = 100;
	/** @type {number} */
	XP = 0;
	/** @type {number} */
	Damage = 10;
	/** @type {boolean} */
	isAlive = true;
	/** @type {number} */
	attackSpeed = 1;
	/** @type {number} */
	moveSpeed = 100;
	/** @type {} */
	spells = "";
	/** @type {number} */
	healthRegen = 1;
	/** @type {number} */
	level = 1;

	/* START-USER-CODE */

  // loadSpellSounds() {
  // 	const spellTypes = ['fire_cast', 'lightning_cast', 'magic_cast', 'magic_whoosh', 'water_cast'];
  // 	spellTypes.forEach(spellType => {
  // 		const soundKey = `${spellType}`;
  // 		this.spellSounds[spellType] = this.scene.sound.add(soundKey);
  // 	});
  // }

  /**
   * @return {Phaser.Physics.Arcade.Body}
   */
  getBody() {
    return this.body;
  }

  updatePlayer() {
    if (this.hurtFlag) {
      this.play("bluecharleft", true);
    }
  }

  hurtPlayer() {
    if (this.hurtFlag) {
      return;
    }

    this.hurtFlag = true;

    const body = this.getBody();
    body.velocity.y = -100;
    body.velocity.x = this.scale.x == 1 ? -100 : 100;
  }

  castSpell(spellType, spellDirection) {
    if (this.hurtFlag) {
      return;
    }
    if (!spellDirection) {
      return;
    }
    const getSpellAudio = (spellType) => {
      switch (spellType) {
        case "Fire_Ball":
          this.fire_cast.play();
          break;
        case "Molten_Spear":
          this.lightning_cast.play();
          break;
        case "Water_Geyser":
          this.water_cast.play();
          break;
        case "Tornado":
          this.magic_cast.play();
          break;
      }
      return;
    };

    const {
      x = 0,
      y = 0,
      angle = 0,
      flipX = false,
      flipY = false,
    } = spellDirection;

    getSpellAudio(spellType);

    const spell = this.scene.physics.add.sprite(this.x, this.y, spellType, 0);
    spell.anims.play(spellType, true);
    spell.damage = this.Damage;
    spell.setVelocity(x, y);
    spell.angle = angle;
    spell.flipX = flipX;
    spell.flipY = flipY;
  }

  autoCastSpell(spells) {
    const playerFacing = this.getPlayerFacing();
    const spellDirection = this.directions[playerFacing];

    let delay = 0;
    for (let i = 0; i < spells.length; i++) {
      const spellType = spells[i];
      this.scene.time.delayedCall(delay, () => {
        // Need to add projectiles to player (# of spells cast at once)
        // for (i in this.projectiles){
        //   this.castSpell(spellType, spellDirection);
        // }
        this.castSpell(spellType, spellDirection);
      });
      delay += 100; // Adjust the delay time between spells (in milliseconds) as needed
    }
  }

  getPlayerFacing() {
    if (this.cursors.left.isDown) {
      if (this.cursors.up.isDown) {
        return "up-left";
      } else if (this.cursors.down.isDown) {
        return "down-left";
      } else {
        return "left";
      }
    } else if (this.cursors.right.isDown) {
      if (this.cursors.up.isDown) {
        return "up-right";
      } else if (this.cursors.down.isDown) {
        return "down-right";
      } else {
        return "right";
      }
    } else if (this.cursors.up.isDown) {
      return "up";
    } else if (this.cursors.down.isDown) {
      return "down";
    } else {
      return "idle";
    }
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
