// You can write more code here

/* START OF COMPILED CODE */

class FeedbackItem extends Phaser.GameObjects.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 154, y ?? 80, texture || "atlas", frame ?? "item-feedback/item-feedback-1");

		// startAnimationScript
		const startAnimationScript = new StartAnimationScript(this);
		// this.gemsounds = [
		// 	this.scene.sound.add("xp1"),
		// 	this.scene.sound.add("xp2"),
		// 	this.scene.sound.add("xp3"),
		// 	this.scene.sound.add("xp4")
		// ];

		// startAnimationScript (prefab fields)
		startAnimationScript.animationKey = "item-feedback/item-feedback";
		//this.playRandomSound();

		startAnimationScript.killOnComplete = true;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.
	// playRandomSound() {
	// 	const randomIndex = Phaser.Math.RND.integerInRange(0, this.gemsounds.length - 1);
	// 	const sound = this.gemsounds[randomIndex];
	// 	sound.play();
	// }

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
