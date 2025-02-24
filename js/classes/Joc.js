// Importem totes les classes necessàries per al funcionament del joc
import Tauler from './Tauler.js';
import Personatge from './Personatge.js';
import All from './All.js';



export default class Joc {

  constructor() {

    this.puntuacio = 0;
    this.meuTauler = new Tauler();



    // Imatges del joc
    this.imgTerra = null;
    this.imgAll = null;
    this.imgPersonatgeDreta  = null;
    this.imgPersonatgeEsquerra = null;
    this.imgPersonatgeDalt = null;
    this.imgPersonatgeBaix = null;
    this.imgZombi = null;
    this.imgDracula = null;

    /**
     * Temps d'inici de la partida.
     * @type {number}
     */
    this.tempsInici = 0;
    this.meuPersonatge = new Personatge(30, 30, 30, 30);

    this.Alls = [];
    /**
     * Indica si el joc està actiu.
     * @type {boolean}
     */
    this.jocActiu = true;
    this.powerUpActiu = false;
    this.tempsPowerUp = 0;
  }

  /**
   * Inicia una nova partida reiniciant variables i repartint el menjar.
   */
  iniciarPartida() {
    this.tempsInicial = millis();
    this.jocActiu = true;
    this.puntuacio = 0;
    // this.repartirMenjar();
  }

  /**
   * Finalitza la partida i mostra un missatge a la consola.
   */
  finalitzarPartida() {
    try {
      this.jocActiu = false;
      console.log("Partida finalitzada.");
    } catch (error) {
      console.error("Error en finalitzar la partida: ", error.message);
    }
  }

  tempsTranscorregut() {
    try {
      if (this.jocActiu) {
        // Si el PowerUp està actiu, guardem el temps actual com a temps transcorregut.
        if (this.powerUpActiu) {
          // Si el PowerUp està activat, es comptabilitza el temps que ha passat
          return millis() - this.tempsPowerUp;
        }
        // Si el PowerUp no està activat, es calcula el temps des de l'inici normalment
        return millis() - this.tempsInici;
      }
      return 0; // Si el joc no està actiu, retornem 0
    } catch (error) {
      console.error("Error en calcular el temps transcorregut: ", error.message);
    }
  }

  preload() {
    try {
      this.imgTerra = loadImage("../img/terra.png", img => {
        console.log("Imatge de roca carregada correctament.");
      }, error => {
        throw new Error("Error en carregar la imatge de la roca.");
      });

      this.imgAll = loadImage("../img/all.png", img => {
        console.log("Imatge de menjar carregada correctament.");
      }, error => {
        throw new Error("Error en carregar la imatge del menjar.");
      });

      this.imgPersonatgeDreta = loadImage("../img/personatgeDreta.png", img => {
        console.log("Imatge de cirera carregada correctament.");
      }, error => {
        throw new Error("Error en carregar la imatge de la cirera.");
      });

      this.imgPersonatgeEsquerra = loadImage("../img/personatgeEsquerra.png", img => {
        console.log("Imatge de cirera carregada correctament.");
      }, error => {
        throw new Error("Error en carregar la imatge de la cirera.");
      });

      this.imgPersonatgeBaix = loadImage("../img/personatgeAbaix.png", img => {
        console.log("Imatge de cirera carregada correctament.");
      }, error => {
        throw new Error("Error en carregar la imatge de la cirera.");
      });

      this.imgPersonatgeDalt = loadImage("../img/personatgeAdalt.png", img => {
        console.log("Imatge de cirera carregada correctament.");
      }, error => {
        throw new Error("Error en carregar la imatge de la cirera.");
      });

      this.imgDracula = loadImage("../img/dracula.png", img => {
        console.log("Imatge de cirera carregada correctament.");
      }, error => {
        throw new Error("Error en carregar la imatge de la cirera.");
      });

      this.imgZombi = loadImage("../img/zombi.png", img => {
        console.log("Imatge de cirera carregada correctament.");
      }, error => {
        throw new Error("Error en carregar la imatge de la cirera.");
      });

    } catch (error) {
      console.error(error.message);
    }
  }

  dibuixarTauler() {
    for (let i = 0; i < this.meuTauler.mapa.length; i++) {
      for (let j = 0; j < this.meuTauler.mapa[i].length; j++) {
        if (this.meuTauler.mapa[i][j] === 1) {
          image(this.imgTerra, j * 30, i * 30, 30, 30);
        }
      }
    }
  }

  dibuixarPersonatge(imgPersonatgeDreta) {
    this.meuPersonatge.drawPersonatge(imgPersonatgeDreta);
  }

  repartirAll(){
    for (let i = 0; i < this.meuTauler.mapa.length; i++) {
      for (let j = 0; j < this.meuTauler.mapa[i].length; j++) {
        if (this.meuTauler.mapa[i][j] === 2) {
          this.Alls.push(new All(j * 30, i * 30, 5));
        }
      }
    }
  }

  dibuixarMenjar() {
    this.Alls.forEach(all => {
      all.drawAll(this.imgAll);
      let puntsObtinguts = all.checkCollisionAll(this.meuPersonatge.x, this.meuPersonatge.y);
      if (this.powerUpActiu) {
        puntsObtinguts *= 2; // Multiplica els punts per 2 si el PowerUp està actiu
      }
      this.puntuacio += puntsObtinguts;
    });

    /**
     * Verifiquem si ha passat més de 10 segons des que es va activar el PowerUp
     */
    if (this.powerUpActiu && this.tempsTranscorregut() - this.tempsPowerUp > 10000) { // 10 segons en mil·lisegons
      this.powerUpActiu = false; // Desactiva el PowerUp
    }
    /**
     * si no queda menjar, s'acaba la partida
     */
    if (this.Alls.length === 0) {
      this.finalitzarPartida();
      console.log("Partida finalitzada, ja no hi ha menjar ni cireres.");
    }
  }
}
