class Endboss extends Bosses {
    height;
    width;
    y;
    x ;
    energy = 100;
    acceleration = 5;
    characterX;

    // showAggression = setInterval(this.animateAttack(), 100);
    // startAttack = setInterval(this.animateAggression(), 100);

    constructor(x, y, height, width, boss) {
        super().loadImage(this.imagesAlerta[0]);
        this.loadImages(this.imagesWalking);
        this.loadImages(this.imagesAlerta);
        this.loadImages(this.imagesHit);
        this.loadImages(this.imagesDead);
        this.loadImages(this.imagesAttack);

        this.animateAggression();
        this.animateAttack();

        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.boss = boss;
    }

  
}