class BottlesBar extends DrawableObject {

    imagesBottleBar = [
        'img/7.Marcadores/Barra/Marcador_botella/Azul/0_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/20_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/40_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/60_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/80_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/100_.png',
    ];
    i = 0;

    constructor() {
        super().loadImage('img/7.Marcadores/Barra/Marcador_botella/Azul/0_.png');
        this.loadImages(this.imagesBottleBar);
        this.x = 400;
        this.y = 10;
        this.height = 60;
        this.width = 170;
    }

    bottlesCollected() {
        this.i++;
        this.showBottlesBar();
    }

    bottleThrown() {
        this.i--
        this.showBottlesBar();
    }

    showBottlesBar() {
        if (this.i < 2) {
            this.loadImage(this.imagesBottleBar[0]);
        } else if (this.i <= 4) {
            this.loadImage(this.imagesBottleBar[1]);
        } else if (this.i <= 6) {
            this.loadImage(this.imagesBottleBar[2]);
        } else if (this.i <= 8) {
            this.loadImage(this.imagesBottleBar[3]);
        } else if (this.i <= 10) {
            this.loadImage(this.imagesBottleBar[4]);
        } else if (this.i <= 12) {
            this.loadImage(this.imagesBottleBar[5]);
        }
    }
}

