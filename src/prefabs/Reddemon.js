
// You can write more code here

/* START OF COMPILED CODE */

class Reddemon extends Phaser.Physics.Arcade.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 179, y ?? 112, texture || "monsters", frame ?? "red-demon_down2.png");

		scene.physics.add.existing(this, false);
		this.body.setSize(60, 64, false);

		// startAnimationScript
		const startAnimationScript = new StartAnimationScript(this);

		// enemyFollowsPlayer
		new EnemyFollowsPlayer(this);

		// startAnimationScript (prefab fields)
		startAnimationScript.animationKey = "monsters/red-demon_down";

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
