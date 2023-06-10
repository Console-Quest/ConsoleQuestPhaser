
window.addEventListener("load", function () {

	var game = new Phaser.Game({
		width: 1280,
		height: 720,
		type: Phaser.AUTO,
		backgroundColor: "#242424",
		scale: {
			mode: Phaser.Scale.FIT,
			autoCenter: Phaser.Scale.CENTER_BOTH
		},
		physics: {
			default: "arcade",
			arcade: {
				debug: false,
				gravity: {
					y: 0
				}
			}
		},
		render: {
			pixelArt: true,
		},
		input: {
			activePointers: 3
		}
	});

	game.scene.add("Boot", Boot, true);
	game.scene.add("Preloader", Preloader);
	game.scene.add("TitleScreen", TitleScreen);
	game.scene.add("Level", Level);
});

class Boot extends Phaser.Scene {

	preload() {

		this.load.pack("pack", "assets/preload-pack.json");
	}

	create() {

		this.scene.start("Preloader");
	}
}