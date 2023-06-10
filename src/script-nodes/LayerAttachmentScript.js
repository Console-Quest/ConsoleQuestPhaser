class LayerAttachmentScript extends Phaser.GameObjects.Components.Script {
  start() {
    const layer = this.scene.layers.get("HUD");
    layer.setScrollFactor(0);
  }
}