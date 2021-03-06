class Bosses extends movableObject {
    
    imagesWalking = [
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G1.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G2.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G3.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G4.png'

    ];

    imagesAlerta = [
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G5.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G6.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G7.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G8.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G9.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G10.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G11.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G12.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G13.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G14.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G15.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G16.png'
    ];

    imagesHit = [
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/3.Herida/G21.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/3.Herida/G22.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/3.Herida/G23.png'
    ];

    imagesDead = [
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G24.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G25.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G26.png'
    ];

    imagesAttack = [
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G17.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G18.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G19.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G20.png',
    ];


    bossAttacks = false;
    bossGetsAttacked = false;
    dead = false;

    // plays images of injured endboss and stops after counter reaches the number 5 (5 = number of last image)
    imagesAfterHit() {
        let count = 0;
        var imagesOfHitEndboss = setInterval(() => {
            this.playAnimation(this.imagesHit);
            if (count > 5) {
                clearInterval(imagesOfHitEndboss);
            }
            count++;
        }, 200);
    }

    // endboss rotates and flys away after dead. Timeout is set to avoid function from running forever
    Dead() {
        this.dead = true;
        let enbossFlyingAway = setInterval(() => {
            this.playAnimation(this.imagesDead);
            this.x += 40;
            this.y -= 15;
        }, 40); 
        setTimeout(() => {
            clearInterval(enbossFlyingAway)
        }, 3000);
    }

    // if character comes close to endboss fucntion plays agression images
    animateAggression() {
        setInterval(() => {
            if (!this.dead && this.x - this.characterX <= 550 && !this.bossAttacks) {
                this.playAnimation(this.imagesAlerta);
            }
        }, 300);
    }

    // if character comes to close or throws a bottle, enboss attacks
    animateAttack() {
        setInterval(() => {
            if (!this.dead && this.bossAttacks) {
                this.playAnimation(this.imagesAttack);
                if (this.x - this.characterX > 10 && this.boss == 'firstBoss') {
                    this.x -= 20;
                } else if (this.x - this.characterX > 10 && this.boss == 'secondBoss') {
                    this.x -= 30;
                }
            }
        }, 100);
    }
}