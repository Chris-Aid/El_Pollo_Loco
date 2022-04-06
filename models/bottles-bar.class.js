class BottlesBar extends DrawableObject {

    imagesBottles = [
        'img/7.Marcadores/Barra/Marcador_botella/Azul/0_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/20_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/40_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/60_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/80_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/100_.png',
    ];


    constructor() {
    
        super().loadImage('img/7.Marcadores/Barra/Marcador_botella/Azul/100_.png');
        this.loadImages(this.imagesBottles);
        this.x = 400;
        this.y = 10;
        this.height = 60;
        this.width = 170;
    }

}

