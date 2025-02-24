export default class Classeprova {
  /**
   *
   * @param x
   * @param y
   * @param radi
   * @param color
   */
  constructor(x, y, radi, color) {
    this.x = x;
    this.y = y;
    this.radi = radi;
    this.color = color;
  }

  drawClasseProva() {
    fill(this.color);
    ellipse(this.x, this.y, this.radi, this.radi);
  }
}

