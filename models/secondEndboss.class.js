class Endboss extends Bosses {
    height = 390;
    width = 300;
    y = 255;
    x = 4000;
    energy = 100;
    acceleration = 5;

    characterX;

    bossAttacks = false;
    bossGetsAttacked = false;
    dead = false;

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