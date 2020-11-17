// Ricreare lo slider di immagini ma questa volta con Vue.
// Partiamo dallo zip che vi passo,
// facciamo funzionare i bottoni next e prev
// e mettiamo in pagina i pallini
// BONUS:
// - vediamo se troviamo una nostra tecnica per affrontare la cosa;
// - facciamo si che sia evidenziato solo il pallino relativo all’img in corso;
// - altro che volete provare.

var app = new Vue ({
  el: '#app',
  data: {
    indiceFoto: 0,
    foto: [
      "img/image1.jpg",
      "img/image2.jpg",
      "img/image3.jpg",
      "img/image4.jpg"
    ]
  },
  methods: {
    nextFoto: function () {
      this.indiceFoto ++;

      if (this.indiceFoto > (this.foto.length -1)) {
        this.indiceFoto = 0;
      }
    },
    prevFoto: function () {
      this.indiceFoto --;

      if (this.indiceFoto < 0) {
        this.indiceFoto = (this.foto.length -1);
      }
    }
  }
});
