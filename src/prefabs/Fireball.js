/* START OF COMPILED CODE */

class Fireball extends Phaser.GameObjects.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 130, y ?? 89, texture || "spells", frame ?? "Fire_Ball1.png");

		this.setInteractive(new Phaser.Geom.Circle(32, 32, 32), Phaser.Geom.Circle.Contains);
		scene.physics.add.existing(this, false);
		this.body.mass = 2;
		this.body.collideWorldBounds = true;
		this.body.pushable = false;
		this.body.setSize(64, 64, false);

		// spellCollisionScript
		new SpellCollisionScript(this);

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.damage = 10; 
		/* END-USER-CTR-CODE */
	}

	/** @type {string} */
	spell1 = "fire_cast";

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
