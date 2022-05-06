class World {
    startScreen = new startScreen();
    endScreen = new endScreen();
    character = new Character();
    statusbar = new StatusBar();
    coinsbar = new CoinsBar();
    bottlesbar = new BottlesBar();
    endboss = new Endboss();
    drawableObject = new DrawableObject();
    throwableObjects = [];
    keyboard = new Keyboard;
    level = level1;

    chickenCounter = 0;
    bottleCounter = 0;

    smashBottleSound = new Audio('https://freesound.org/data/previews/548/548230_12308033-lq.mp3');
    chickenDies = new Audio('https://freesound.org/data/previews/342/342162_6099553-lq.mp3');
    coinCollection = new Audio('https://freesound.org/data/previews/163/163452_2263027-lq.mp3');
    bottleCollection = new Audio('https://freesound.org/data/previews/195/195227_3628012-lq.mp3');

    // canvas;
    ctx;
    keyboard;
    camera_x;

    gameStarted = false;
    gameOver = false;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d'); // this.ctx = document.getElementById('canvas').getContext('2d);
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.setWorld();
        this.draw();
        this.run();
    }

    setWorld() {

        this.character.world = this;

        setInterval(() => {
            this.endboss.characterX = this.character.x;

            this.character.gameStarted = this.gameStarted;
            this.character.gameOver = this.gameOver;
            this.level.enemies.forEach((chicken) => { chicken.gameStarted = this.gameStarted });
            this.level.enemies.forEach((chicken) => { chicken.gameOver = this.gameOver });
            this.level.smallEnemies.forEach((smallchicken) => { smallchicken.gameStarted = this.gameStarted });
            this.level.smallEnemies.forEach((smallchicken) => { smallchicken.gameOver = this.gameOver });
        }, 50);
    }

    run() {
        setInterval(() => {
            this.checkCollisionsWithEndboss();
            this.checkCollisionsOfCoins();
            this.checkCollisionsOfBottles();
            this.checkIfBottleHitsEndboss();
            this.checkIfBottleHitsEnemy();
            this.checkIfBottleHitsSmallChicken();
            this.checkIfCharakterIsToCloseToEndoss();
            this.checkIfGameIsStarted();

        }, 10);

        setInterval(() => {
            this.checkThrowObjecs();
            this.checkCollisionsWithChicken();
            this.checkCollisionsWithSmallChicken();
            this.updateCounter();
        }, 100);
    }

    updateCounter() {
        if (this.gameStarted) {
            document.getElementById('chickenCounter').innerHTML = `<p>CHICKEN KILLED</p> <p><b>${this.chickenCounter}</b></p>`;
            document.getElementById('bottleCounter').innerHTML = `<p>BOTTLES</p> <p><b>${this.bottleCounter}</b></p>`;
        }
    }

    checkIfGameIsStarted() {
        window.addEventListener('keydown', (event) => {
            this.gameStarted = true;
            document.getElementById('pressAnyKey').style = "display: none";
        });
    }

    checkIfCharakterIsToCloseToEndoss() {
        if (this.endboss.x - this.character.x <= 350) {
            this.endboss.bossAttacks = true;
        }
    }

    checkCollisionsWithEndboss() {
        if (this.character.isColliding(this.endboss)) {
            this.character.energy = 0;
            this.gameOver = true;
        }
    }

    checkCollisionsWithChicken() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                if (this.character.isAboveGround()) {
                    if (!enemy.dead) {
                        enemy.dead = true;
                        this.chickenCounter++;
                        enemy.Dead();
                        this.chickenDies.play();
                    }
                } else if (!enemy.dead) {
                    if (this.character.energy == 0) {
                        this.gameOver = true;
                    } else if (!enemy.alreadyHit) {
                        enemy.alreadyHit = true;
                        this.character.hit();
                        this.character.grunt.play();
                        this.statusbar.setPercentage(this.character.energy);
                    }
                }
            }
        });
    }

    checkCollisionsWithSmallChicken() {
        this.level.smallEnemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                if (this.character.isAboveGround() && !enemy.isAboveGround() || this.character.y + this.character.height - 30 < enemy.y) {
                    if (!enemy.dead) {
                        this.chickenCounter++;
                        enemy.dead = true;
                        enemy.Dead();
                        this.chickenDies.play();
                    }
                } else if (!enemy.dead) {
                    if (this.character.isDead()) {
                        this.gameOver = true;
                    } else if (!enemy.alreadyHit) {
                        enemy.alreadyHit = true;
                        this.character.hit();
                        this.character.grunt.play();
                        this.statusbar.setPercentage(this.character.energy);
                    }
                }
            }
        });
    }

    checkCollisionsOfCoins() { // function checks collision with coins.
        this.level.coins.forEach((coin) => {
            if (this.character.isColliding(coin)) {
                this.level.coins.splice(this.level.coins.indexOf(coin), 1);
                this.coinsbar.coinCollected();
                this.coinCollection.play();
            }
        });
    }

    checkCollisionsOfBottles() {
        this.level.bottles.forEach((bottle) => {
            if (this.character.isColliding(bottle)) {
                this.bottleCounter++;
                this.level.bottles.splice(this.level.bottles.indexOf(bottle), 1);
                this.bottlesbar.bottlesCollected();
                this.bottleCollection.play();
            }
        });
    }

    checkIfBottleHitsEndboss() {
        this.throwableObjects.forEach((object) => {
            if (object.isColliding(this.endboss)) {
                if (!object.allreadyhits) {
                    object.allreadyhits = true;
                    this.smashBottleSound.play();
                    this.endboss.energy -= 25;
                    console.log(this.endboss.energy)
                    this.endboss.bossAttacks = true;
                    this.throwableObjects[this.throwableObjects.indexOf(object)].showSmashingBottleAnimation();

                    if (this.endboss.energy <= 0) {
                        this.endboss.Dead();
                    } else {
                        this.endboss.imagesAfterHit();
                    }
                }
            }
        });
    }

    checkIfBottleHitsEnemy() {
        this.throwableObjects.forEach((object) => {
            this.level.enemies.forEach((enemy) => {
                if (enemy.isColliding(object)) {
                    if (!enemy.dead && !object.allreadyhits) {
                        object.allreadyhits = true;
                        this.smashBottleSound.play();
                        this.chickenDies.play();
                        enemy.energy -= 25;
                        enemy.dead = true;
                        this.chickenCounter++;
                        enemy.Dead();
                    }
                }
            });
        });
    }

    checkIfBottleHitsSmallChicken() {
        this.throwableObjects.forEach((object) => {
            this.level.smallEnemies.forEach((enemy) => {
                if (enemy.isColliding(object)) {
                    if (!enemy.dead && !object.allreadyhits) {
                        object.allreadyhits = true;
                        this.smashBottleSound.play();
                        this.chickenDies.play();
                        enemy.energy -= 25;
                        enemy.dead = true;
                        this.chickenCounter++;
                        enemy.Dead();
                    }
                }
            });
        });
    }

    // function creates new throwable Object every time D is pressed.
    checkThrowObjecs() {
        if (this.keyboard.D && this.bottleCounter > 0) {
            let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100, this.character.otherDirection);
            this.throwableObjects.push(bottle);
            this.bottlesbar.bottleThrown();
            this.bottleCounter--;
            setTimeout(() => { // objects get deleted after 1 sec!
                this.throwableObjects.splice(this.throwableObjects.indexOf(bottle), 1);
            }, 1000);
        }
    }

    //following functions are responsible for drawing the objects onto the canvas and display them in a poper way!

    draw() {

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0); // moving forwards


        this.addObjectsToMap(this.level.backgroundObjects);
        this.showObjectsInWorld(this.character);
        this.showObjectsInWorld(this.endboss);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.smallEnemies);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.bottles);
        this.addObjectsToMap(this.throwableObjects);

        this.ctx.translate(-this.camera_x, 0); // moving backwards
        // -- Space for fixed objects --

        this.showObjectsInWorld(this.statusbar);
        this.showObjectsInWorld(this.coinsbar);
        this.showObjectsInWorld(this.bottlesbar);

        this.ctx.translate(this.camera_x, 0); // moving forwards
        this.ctx.translate(-this.camera_x, 0); // moving backwards

        if (!this.gameStarted) {
            this.showObjectsInWorld(this.startScreen);
        }

        if (this.gameOver) {
            this.showObjectsInWorld(this.endScreen);
        }


        // draw wird immer wieder aufgerufen!
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    addObjectsToMap(object) {
        object.forEach(o => {
            this.showObjectsInWorld(o);
        });
    }

    showObjectsInWorld(mo) {
        if (mo.otherDirection) {
            this.turnCharacter(mo);
        }

        mo.draw(this.ctx);
        mo.drawRectangle(this.ctx);

        if (mo.otherDirection) {
            this.turnCharacterAgain(mo);
        }
    }

    turnCharacter(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    turnCharacterAgain(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }
}