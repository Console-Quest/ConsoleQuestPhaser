class Ghost extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, texture, frame) {
    super(scene, x ?? 476, y ?? 261, texture || "monsters", frame ?? "ghost_down2.png");

    scene.physics.add.existing(this, false);
    this.body.setSize(60, 64, false);
  }

  preUpdate(time, delta) {
    super.preUpdate(time, delta);

    /** @type {Level} */
    const level = this.scene;
    const player = level.player;

    this.flipX = this.x < player.x;
  }
}
