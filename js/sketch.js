import Classeprova  from "./classes/Classeprova";

let xCanvas = 600;
let yCanvas = 700;

let prova;

function preload() {
}

/**
 * Funció per configurar la finestra del joc.
 * Aquesta funció es crida un cop abans de començar el dibuix del joc.
 */
function setup() {
  createCanvas(xCanvas, yCanvas);
  prova = new Classeprova(200, 200, 50, "Yellow");

}

/**
 * Funció principal per dibuixar a la pantalla i actualitzar el joc.
 * Aquesta funció es crida en cada fotograma del joc.
 */
function draw() {
  prova.drawClasseProva();

}

// Declarem les funcions globalment per a p5.js
globalThis.setup = setup;
globalThis.draw = draw;
globalThis.keyPressed = keyPressed;
globalThis.preload = preload;
