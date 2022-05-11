class CoinsBar extends DrawableObject {

    imagesCoins = [
        'img/7.Marcadores/Barra/Marcador moneda/azul/0_.png',
        'img/7.Marcadores/Barra/Marcador moneda/azul/20_.png',
        'img/7.Marcadores/Barra/Marcador moneda/azul/40_.png',
        'img/7.Marcadores/Barra/Marcador moneda/azul/60_.png',
        'img/7.Marcadores/Barra/Marcador moneda/azul/80_.png',
        'img/7.Marcadores/Barra/Marcador moneda/azul/100_.png',
    ];

    i = 0;

    constructor() {
        let i = 0;
        super().loadImage(this.imagesCoins[i]);
        this.loadImages(this.imagesCoins);
        this.x = 210;
        this.y = 10;
        this.height = 60;
        this.width = 170;
    }

    coinCollected() {
        this.i++;
        this.showCoinsbar();
    }

    showCoinsbar() {
        if (this.i < 3) {
            this.loadImage(this.imagesCoins[0]);
        } else if (this.i <= 6) {
            this.loadImage(this.imagesCoins[1]);
        } else if (this.i <= 8) {
            this.loadImage(this.imagesCoins[2]);
        } else if (this.i <= 10) {
            this.loadImage(this.imagesCoins[3]);
        } else if (this.i <= 12) {
            this.loadImage(this.imagesCoins[4]);
        } else if (this.i <= 14) {
            this.loadImage(this.imagesCoins[5]);
        }
    }
}

