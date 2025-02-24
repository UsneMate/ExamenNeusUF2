function preload() {
}

/**
 * Funció per configurar la finestra del joc.
 * Aquesta funció es crida un cop abans de començar el dibuix del joc.
 */
function setup() {
  createCanvas(xCanvas, yCanvas);

}

/**
 * Funció principal per dibuixar a la pantalla i actualitzar el joc.
 * Aquesta funció es crida en cada fotograma del joc.
 */
function draw() {

  }

// Declarem les funcions globalment per a p5.js
globalThis.setup = setup;
globalThis.draw = draw;
globalThis.preload = preload;
