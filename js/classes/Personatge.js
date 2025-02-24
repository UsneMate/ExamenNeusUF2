
export default class Personatge {

  constructor(x, y, radi, color) {
    this.x = x;
    this.y = y;
  }

  /**
   * Dibuixa el Comecocos a la seva posició actual.
   */
  drawPersonatge(img) {
    image(img, this.x, this.y);
  }

  updatePosition(x, y) {
    this.x = x;
    this.y = y;
  }
}
