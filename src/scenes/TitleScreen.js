
// You can write more code here

/* START OF COMPILED CODE */

class TitleScreen extends Phaser.Scene {

	constructor() {
		super("TitleScreen");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// goodpudding_A_pixelate_door_to_a_dungeon_with_a_torch_to_the_ri_73b595df_2531_4f5d_a7bf_da172c199f40
		const goodpudding_A_pixelate_door_to_a_dungeon_with_a_torch_to_the_ri_73b595df_2531_4f5d_a7bf_da172c199f40 = this.add.image(634, 283, "goodpudding_A_pixelate_door_to_a_dungeon_with_a_torch_to_the_ri_73b595df-2531-4f5d-a7bf-da172c199f40");
		goodpudding_A_pixelate_door_to_a_dungeon_with_a_torch_to_the_ri_73b595df_2531_4f5d_a7bf_da172c199f40.scaleX = 1.4364253973957375;
		goodpudding_A_pixelate_door_to_a_dungeon_with_a_torch_to_the_ri_73b595df_2531_4f5d_a7bf_da172c199f40.scaleY = 1.003888400015069;

		// title_screen
		const title_screen = this.add.image(660, 327, "Console-Quest-Title-Text");

		// credits_text
		const credits_text = this.add.image(144, 174, "credits-text");
		credits_text.visible = false;

		// press_enter_text
		const press_enter_text = this.add.image(637, 548, "press-enter-text");
		press_enter_text.scaleX = 6.436081064604193;
		press_enter_text.scaleY = 6.436081064604193;

		// instructions
		const instructions = this.add.image(386, 131, "Objective-sign");
		instructions.scaleX = 1.1708856217482784;
		instructions.scaleY = 1.1708856217482784;
		instructions.setOrigin(0, 0);
		instructions.visible = false;

		// startLevelAction
		const startLevelAction = new StartSceneActionScript(this);

		// startLevelAction (prefab fields)
		startLevelAction.sceneKey = "Level";

		this.title_screen = title_screen;
		this.press_enter_text = press_enter_text;
		this.instructions = instructions;
		this.startLevelAction = startLevelAction;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	title_screen;
	/** @type {Phaser.GameObjects.Image} */
	press_enter_text;
	/** @type {Phaser.GameObjects.Image} */
	instructions;
	/** @type {StartSceneActionScript} */
	startLevelAction;

	/* START-USER-CODE */

	create() {
		this.menu_music = this.sound.add("Land_of_8_Bits");
		const musicConfig = {
			mute: false,
			volume: .1,
			rate: 1,
			detune: 0,
			seek: 0,
			loop: true,
			delay: 0
		}
		this.menu_music.play(musicConfig);
		this.editorCreate();

		this.input.keyboard.on("keydown-ENTER", this.enterPressed, this);
		this.input.on("pointerdown", this.enterPressed, this);

		this.blinkText();
	}

	enterPressed() {

		if (this.title_screen.visible) {

			this.title_screen.visible = false;
			this.press_enter_text.visible = false;
			this.instructions.visible = true;

		} else {
			this.menu_music.stop();
			this.startLevelAction.execute();
		}
	}

	blinkText() {

		this.time.addEvent({
			repeat: -1,
			delay: 1000,
			callback: () => {
				this.press_enter_text.visible = !this.press_enter_text.visible;
			}
		});
	}

	update() {
		
		// this.background.tilePositionX += 0.3;
		// this.middle.tilePositionX += 0.6;
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
