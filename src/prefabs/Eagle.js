class Eagle extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, texture, frame) {
    super(scene, x ?? 95, y ?? 75, texture || "monsters", frame ?? "orc2_down1.png");

    this.setInteractive(new Phaser.Geom.Rectangle(0, 0, 60, 64), Phaser.Geom.Rectangle.Contains);
    scene.physics.add.existing(this, false);
    this.body.allowGravity = false;
    this.body.setOffset(12, 0);
    this.body.setSize(39, 30, false);

    // Retrieve the player data
    // const player = this.scene.sys.game.data.get('player');
		console.log(this.scene.data.list.player)
    // // Save a reference to the player
    // this.player = player;
		// console.log(this.player);
    const enemyFollowsPlayer = new EnemyFollowsPlayer(this, this.events);

    // startAnimationScript
    const startAnimationScript = new StartAnimationScript(this);

    // startAnimationScript (prefab fields)
    startAnimationScript.animationKey = "monsters/orc2_down";
    startAnimationScript.killOnComplete = true;

    /* START-USER-CTR-CODE */
    this.scene.tweens.add({
      targets: this,
      y: this.y + 50
    });
    /* END-USER-CTR-CODE */
  }

  /** @type {number} */
  HP = 20;
  /** @type {number} */
  Speed = 2;
  /** @type {boolean} */
  collide = true;

  /* START-USER-CODE */

  preUpdate(time, delta) {
    super.preUpdate(time, delta);

    const player = this.player;

    if (player) {
      // Chase the player
      this.chase(player);
    }
  }

 
  /* END-USER-CODE */
}
