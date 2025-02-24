/**
 * Classe que representa el personatge principal, Comecocos.
 */
export default class Personatge {
  /**
   * Crea una instància de Personatge.
   * @param {number} x - Posició X inicial del Personatge.
   * @param {number} y - Posició Y inicial del Personatge.
   * @param {number} radi - Radi del Comecocos.
   * @param {string} color - Color del Comecocos.
   */
  constructor(x, y, radi, color) {
    this.x = x;
    this.y = y;
  }

  /**
   * Dibuixa el Comecocos a la seva posició actual.
   */
  drawPersonatge(img) {
    image(img, this.x, this.y, 30, 30)
  }

  /**
   * Actualitza l'angle de la boca del Comecocos segons la direcció de moviment.
   * @param {string} direction - Direcció del moviment ('UP', 'DOWN', 'LEFT', 'RIGHT').
   */
  // updateImatge(direction) {
  //   if (direction === 'UP') {
  //     im
  //   } else if (direction === 'DOWN') {
  //     this.angleInici = 125;
  //     this.angleFi = 55;
  //   } else if (direction === 'LEFT') {
  //     this.angleInici = 210;
  //     this.angleFi = 135;
  //   } else if (direction === 'RIGHT') {
  //     this.angleInici = 40;
  //     this.angleFi = 330;
  //   }
  // }

  /**
   * Actualitza la posició del Comecocos.
   * @param {number} x - Nova posició X.
   * @param {number} y - Nova posició Y.
   */
  updatePosition(x, y) {
    this.x = x;
    this.y = y;
  }
}
