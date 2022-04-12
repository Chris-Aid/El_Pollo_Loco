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
        if (this.i < 5) {
            this.i++;
            this.loadImage(this.imagesBottleBar[this.i]);
        }
    }

    bottleThrown() {
        if (this.i > 0) {
            this.i--;
            this.loadImage(this.imagesBottleBar[this.i]);
        }
    }

}

