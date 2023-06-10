
// You can write more code here

/* START OF COMPILED CODE */

class CharacterMoveScript extends ScriptNode {

	constructor(parent) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {number} */
	deltaX = 0;
	/** @type {number} */
	deltaY = 0;
	/** @type {number} */
	duration = 0;

	/* START-USER-CODE */

/**
 * This function adds a tween animation to a game object that moves it back and forth repeatedly.
 */
awake() {
	const startX = this.gameObject.x;
	const startY = this.gameObject.y;
	const distance = 100; // Adjust the distance as desired

	const tween1 = this.scene.tweens.add({
			targets: this.gameObject,
			x: startX + distance,
			y: startY,
			duration: this.duration
	});

	const tween2 = this.scene.tweens.add({
			targets: this.gameObject,
			x: startX + distance,
			y: startY + distance,
			duration: this.duration,
			delay: this.duration
	});

	const tween3 = this.scene.tweens.add({
			targets: this.gameObject,
			x: startX,
			y: startY + distance,
			duration: this.duration,
			delay: this.duration * 2
	});

	const tween4 = this.scene.tweens.add({
			targets: this.gameObject,
			x: startX,
			y: startY,
			duration: this.duration,
			delay: this.duration * 3
	});

	this.scene.tweens.add({
			targets: [tween1, tween2, tween3, tween4],
			loop: -1
	});
}


	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
