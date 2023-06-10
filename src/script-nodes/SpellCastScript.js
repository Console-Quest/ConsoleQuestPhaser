class SpellCastScript extends Phaser.GameObjects.Components.Script {
  constructor(parent) {
    super(parent);

    this.player = null;
    this.spellsTextureKey = "";
    this.spellSounds = {};
    this.hurtFlag = false;
    this.cursors = null;
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
  }

  start() {
    this.cursors = this.scene.input.keyboard.createCursorKeys();
    this.scene.input.keyboard.on("keydown-SPACE", this.castSpell, this);
    this.scene.events.on("update", this.updatePlayer, this);
  }

  updatePlayer() {
    if (this.hurtFlag) {
      this.player.play("bluecharleft", true);
    }
  }

  hurtPlayer() {
    if (this.hurtFlag) {
      return;
    }

    this.hurtFlag = true;

    const body = this.player.body;
    body.velocity.y = -100;
    body.velocity.x = this.player.scale.x == 1 ? -100 : 100;
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
          this.spellSounds.fire_cast.play();
          break;
        case "Molten_Spear":
          this.spellSounds.lightning_cast.play();
          break;
        case "Water_Geyser":
          this.spellSounds.water_cast.play();
          break;
        case "Tornado":
          this.spellSounds.magic_cast.play();
          break;
      }
    };

    const {
      x = 0,
      y = 0,
      angle = 0,
      flipX = false,
      flipY = false,
    } = spellDirection;

    getSpellAudio(spellType);

    const spell = this.scene.physics.add.sprite(
      this.player.x,
      this.player.y,
      spellType,
      0
    );
    spell.anims.play(spellType, true);
    spell.damage = 10;

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
        this.castSpell(spellType, spellDirection);
      });
      delay += 1000; // Adjust the delay time between spells (in milliseconds) as needed
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
}
