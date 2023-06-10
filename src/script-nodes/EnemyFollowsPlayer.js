class EnemyFollowsPlayer extends ScriptNode {
  constructor(parent, events) {
    super(parent);
    this.events = events;
  }

  update(time, delta) {
    const { x: targetX, y: targetY } = this.scene.data.list.player || { x: 0, y: 0 };
    const { x: enemyX, y: enemyY } = this.gameObject;

    const directionX = targetX - enemyX;
    const directionY = targetY - enemyY;

    const length = Math.sqrt(directionX * directionX + directionY * directionY);

    const speed = 100; // Adjust the speed as desired

    const velocityX = (directionX / length) * speed;
    const velocityY = (directionY / length) * speed;

    this.gameObject.body.setVelocity(velocityX, velocityY);
  }
}
