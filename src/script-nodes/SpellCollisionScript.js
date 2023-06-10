/* START OF COMPILED CODE */

class SpellCollisionScript extends ScriptNode {

	constructor(parent) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.damage = 10; // Set the damage amount for the spell collision
		/* END-USER-CTR-CODE */
	}

	/** @type {number} */
	Damage = 10;

	/* START-USER-CODE */

	// Write your code here.

	start() {
		// Set up collision detection
		this.scene.physics.add.overlap(this.gameObject, this.scene.enemies, this.handleCollision, null, this);
		
	}

	handleCollision(spell, enemy) {
		console.log('HIT BRUH');
		// Apply damage to the enemy
		enemy.HP -= this.damage;

		// Destroy the spell animation sprite
		spell.destroy();

		// Check if the enemy is defeated
		if (enemy.HP <= 0) {
			// Destroy the enemy sprite
			enemy.destroy();
		}

		// Additional logic or effects for enemy hit by a spell
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
