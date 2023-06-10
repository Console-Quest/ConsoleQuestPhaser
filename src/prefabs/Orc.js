
// You can write more code here

/* START OF COMPILED CODE */

class Orc extends Phaser.GameObjects.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 150, y ?? 100, texture || "monsters", frame ?? "orc1_down1.png");

		this.setInteractive(new Phaser.Geom.Rectangle(0, 0, 26, 36), Phaser.Geom.Rectangle.Contains);
		scene.physics.add.existing(this, false);
		this.body.allowGravity = false;
		this.body.setSize(26, 36, false);

		// characterMoveScript
		const characterMoveScript = new CharacterMoveScript(this);

		// startAnimationScript
		const startAnimationScript = new StartAnimationScript(this);

		// characterMoveScript (prefab fields)
		characterMoveScript.deltaX = 50;
		characterMoveScript.deltaY = 50;
		characterMoveScript.duration = 6000;

		// startAnimationScript (prefab fields)
		startAnimationScript.animationKey = "monsters/orc1_down";
		startAnimationScript.killOnComplete = true;

		/* START-USER-CTR-CODE */
		this.scene.tweens.add({
			targets: this,
			y: this.y + 50
		});
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {number} */
	HP = 20;
	/** @type {number} */
	Speed = 50;
	/** @type {number} */
	Damage = 5;

	/* START-USER-CODE */
	preUpdate(time, delta) {

		super.preUpdate(time, delta);

		/** @type {Level} */
		const level = this.scene;

		const player = level.player;

		this.flipX = this.x < player.x;
	}
	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
