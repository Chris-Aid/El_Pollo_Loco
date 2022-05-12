class Endboss extends Bosses {
    height = 330;
    width = 260;
    y = 315;
    x = 2000;
    energy = 100;
    acceleration = 5;

    characterX;

    bossAttacks = false;
    bossGetsAttacked = false;
    dead = false;



    // showAggression = setInterval(this.animateAttack(), 100);
    // startAttack = setInterval(this.animateAggression(), 100);

    constructor() {
        super().loadImage(this.imagesAlerta[0]);
        this.loadImages(this.imagesWalking);
        this.loadImages(this.imagesAlerta);
        this.loadImages(this.imagesHit);
        this.loadImages(this.imagesDead);
        this.loadImages(this.imagesAttack);

        this.animateAggression();
        this.animateAttack();
    }

  
}