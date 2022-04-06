class CoinsBar extends DrawableObject {

    imagesCoins = [
        'img/7.Marcadores/Barra/Marcador moneda/azul/0_.png',
        'img/7.Marcadores/Barra/Marcador moneda/azul/20_.png',
        'img/7.Marcadores/Barra/Marcador moneda/azul/40_.png',
        'img/7.Marcadores/Barra/Marcador moneda/azul/60_.png',
        'img/7.Marcadores/Barra/Marcador moneda/azul/80_.png',
        'img/7.Marcadores/Barra/Marcador moneda/azul/100_.png',
    ];

    constructor() {
        
        super().loadImage('img/7.Marcadores/Barra/Marcador moneda/azul/100_.png');
        this.loadImages(this.imagesCoins);
        this.x = 210;
        this.y = 10;
        this.height = 60;
        this.width = 170;  
    }

}

