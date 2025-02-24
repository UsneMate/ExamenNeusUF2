/**
 * Classe que representa una cirera en el joc.
 */
export default class All {
  /** @type {number} Coordenada X de la cirera */
  #x;
  /** @type {number} Coordenada Y de la cirera */
  #y;
  /** @type {number} Punts que dona la cirera en ser menjada */
  #punts;
  /** @type {boolean} Indica si la cirera ha estat menjada */
  #menjat;

  /**
   * Crea una instància de la cirera.
   * @param {number} x - Posició X de la cirera.
   * @param {number} y - Posició Y de la cirera.
   * @param {number} punts - Punts que atorga la cirera en ser menjada.
   */
  constructor(x, y, punts) {
    this.#x = x;
    this.#y = y;
    this.#punts = punts;
    this.#menjat = false;
  }

  /**
   * Dibuixa la cirera si encara no ha estat menjada.
   * @param {p5.Image} imgMenjar - Imatge de la cirera.
   */
  drawAll(imgMenjar) {
    if (!this.#menjat) {
      image(imgMenjar, this.#x, this.#y, 30, 30);
    }
  }

  checkCollisionAll(personatgeX, personatgeY, radi) {
    if (!this.#menjat && dist(this.#x, this.#y, personatgeX, personatgeY) < 30) {
      this.#menjat = true;
      return this.#punts;
    }
    return 0;
  }

  /**
   * Estableix el valor de punts de la cirera.
   * @param {number} punts - Nou valor de punts.
   */
  setPunts(punts) {
    this.#punts = punts;
  }
}
