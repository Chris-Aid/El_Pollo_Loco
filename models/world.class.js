class World {
    startScreen = new startScreen();
    endScreen = new endScreen();
    character = new Character();
    statusbar = new StatusBar();
    coinsbar = new CoinsBar();
    bottlesbar = new BottlesBar();
    drawableObject = new DrawableObject();
    throwableObjects = [];
    keyboard = new Keyboard;
    level = level1;

    chickenCounter = 0;
    coinCounter = 0;
    bottleCounter = 0;

    smashBottleSound = new Audio('https://freesound.org/data/previews/548/548230_12308033-lq.mp3');
    chickenDies = new Audio('https://freesound.org/data/previews/342/342162_6099553-lq.mp3');
    coinCollection = new Audio('https://freesound.org/data/previews/163/163452_2263027-lq.mp3');
    bottleCollection = new Audio('https://freesound.org/data/previews/195/195227_3628012-lq.mp3');
    // backgroundMusic = new Audio('https://freesound.org/data/previews/489/489035_4977896-lq.mp3');
    endbossSound = new Audio('https://freesound.org/data/previews/316/316920_4921277-lq.mp3');
    gameWin = new Audio('https://cdn.freesound.org/previews/572/572624_10182789-lq.mp3');

    ctx;
    keyboard;
    camera_x;

    gameStarted = false;
    gameOver = false;
    coinsPushed = false;
    secondCoindsPushed = false;

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

        // gives some variables from world to other classes.
        setInterval(() => {
            this.level.endboss.forEach((boss) => { boss.characterX = this.character.x });
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
            this.checkCollectionOfCoins();
            this.checkCollectionOfHearts();
            this.checkCollectionOfBottles();
            this.checkIfBottleHitsEndboss();
            this.checkIfBottleHitsEnemy();
            this.checkIfBottleHitsSmallChicken();
            this.checkIfCharakterIsToCloseToEndoss();
            this.checkIfGameIsStarted();
            this.pushNewCoins();
        }, 10);

        setInterval(() => {
            this.checkThrowObjecs();
            this.checkCollisionsWithChicken();
            this.checkCollisionsWithSmallChicken();
            this.updateCounter();
            // this.addNewObjectsToWorld();
        }, 100);
    }

    updateCounter() {
        if (this.gameStarted) {
            document.getElementById('chickenCounter').innerHTML = `<p>CHICKEN KILLED</p> <p><b>${this.chickenCounter}</b></p>`;
            document.getElementById('coinCounter').innerHTML = `<p>COINS COLLECTED</p> <p><b>${this.coinCounter}</b></p>`;
            document.getElementById('bottleCounter').innerHTML = `<p>BOTTLES</p> <p><b>${this.bottleCounter}</b></p>`;
        }
    }

    checkIfGameIsStarted() {
        window.addEventListener('keydown', (event) => {
            if (!this.level.endboss[1].dead) {
                this.gameStarted = true;
                // this.backgroundMusic.play();
                document.getElementById('pressAnyKey').style = "display: none";
            }
        });
    }

    pushNewCoins() {
        if(this.character.x > 2000 && !this.coinsPushed || 
            this.character.x > 6000 && !this.secondCoindsPushed) {
            this.coinsPushed = true;
            this.secondCoindsPushed = true;
            this.level.coins.push(
                new Coin('img/8.Coin/Moneda1.png', 350, this.character.x + 1000 + 40),
                new Coin('img/8.Coin/Moneda1.png', 300, this.character.x + 1000 + 80),
                new Coin('img/8.Coin/Moneda1.png', 250, this.character.x + 1000 + 130),
                new Coin('img/8.Coin/Moneda1.png', 210, this.character.x + 1000 + 180),
                new Coin('img/8.Coin/Moneda1.png', 250, this.character.x + 1000 + 230),
                new Coin('img/8.Coin/Moneda1.png', 300, this.character.x + 1000 + 270),
                new Coin('img/8.Coin/Moneda1.png', 350, this.character.x + 1000 + 310),
            );
        }
    }

    // if character comes to close to Endboss, images of Aggression are played
    checkIfCharakterIsToCloseToEndoss() {
        this.level.endboss.forEach((endboss) => {
            if (endboss.x - this.character.x <= 650) {
                endboss.bossAttacks = true;
            }
        });
    }

    //character dies instantly if endboss hits him
    checkCollisionsWithEndboss() {
        this.level.endboss.forEach((endboss) => {
            if (this.character.isColliding(endboss)) {
                this.character.energy = 0;
                this.gameOver = true;
            }
        });
    }

    checkCollisionsWithChicken() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                if (this.character.isAboveGround()) {
                    if (!enemy.dead && !enemy.alreadyHit) {
                        this.characterKillsChicken(enemy);
                        this.spawnNewChicken('brownChicken');
                    }
                } else if (!enemy.dead) {
                    if (this.character.energy == 0) {
                        this.gameOver = true;
                        // this.backgroundMusic.pause();
                    } else if (!enemy.alreadyHit) {
                        this.chickenHitsCharacter(enemy);
                    }
                }
            }
        });
    }

    checkCollisionsWithSmallChicken() {
        this.level.smallEnemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                if (this.character.isAboveGround() && !enemy.isAboveGround() || this.character.chickenSmashes(enemy)) {
                    if (!enemy.dead && !enemy.alreadyHit) {
                        this.characterKillsChicken(enemy);
                        this.spawnNewChicken('yellowChicken');
                    }
                } else if (!enemy.dead) {
                    if (this.character.isDead()) {
                        this.gameOver = true;
                    } else if (!enemy.alreadyHit) {
                        this.chickenHitsCharacter(enemy);
                    }
                }
            }
        });
    }

    characterKillsChicken(enemy) {
        this.chickenCounter++;
        enemy.dead = true;
        enemy.Dead();
        this.chickenDies.play();
    }

    // every time Pepe kills a chicken, a new one spawns.
    spawnNewChicken(enemy) {
        if (enemy == 'yellowChicken') {
            this.level.smallEnemies.push(new smallChicken(this.character.x + 2000));
        } else {
            this.level.enemies.push(new chicken(this.character.x + 2000));
        }
    }

    chickenHitsCharacter(enemy) {
        enemy.alreadyHit = true;
        this.character.lastAction = new Date().getTime();
        this.character.hit();
        this.character.grunt.play();
        this.statusbar.setPercentage(this.character.energy);
        setTimeout(() => { // after 0,8 seconds, an enemy can hit the character again
            enemy.alreadyHit = false;
        }, 800);
    }

    checkCollectionOfCoins() { // function checks collision with coins.
        this.level.coins.forEach((coin) => {
            if (this.character.isColliding(coin)) {
                this.level.coins.splice(this.level.coins.indexOf(coin), 1);
                this.coinCounter++;
                this.coinsbar.coinCollected();
                this.coinCollection.play();
                // this.level.coins.push(
                //     new Coin('img/8.Coin/Moneda1.png', 350, this.character.x + 1000 + 40),
                //     new Coin('img/8.Coin/Moneda1.png', 300, this.character.x + 1000 + 40),
                //     new Coin('img/8.Coin/Moneda1.png', 250, this.character.x + 1000 + 50),
                //     new Coin('img/8.Coin/Moneda1.png', 210, this.character.x + 1000 + 50),
                //     new Coin('img/8.Coin/Moneda1.png', 250, this.character.x + 1000 + 50),
                //     new Coin('img/8.Coin/Moneda1.png', 300, this.character.x + 1000 + 40),
                //     new Coin('img/8.Coin/Moneda1.png', 350, this.character.x + 1000 + 40),
                // );
            }
        });
    }

    checkCollectionOfHearts() { // function checks collision with hearts.
        this.level.hearts.forEach((heart) => {
            if (this.character.isColliding(heart) && this.character.energy < 100) {
                this.level.hearts.splice(this.level.hearts.indexOf(heart), 1);
                this.character.energy += 10;
                this.statusbar.setPercentage(this.character.energy);
            }
        });
    }

    checkCollectionOfBottles() {
        this.level.bottles.forEach((bottle) => {
            if (this.character.isColliding(bottle)) {
                this.bottleCounter++;
                this.level.bottles.splice(this.level.bottles.indexOf(bottle), 1);
                this.bottlesbar.bottlesCollected();
                this.bottleCollection.play();
                this.level.bottles.push(new Bottle('img/6.botella/2.Botella_enterrada1.png', this.character.x + 3000));
            }
        });
    }

    checkIfBottleHitsEndboss() {
        this.throwableObjects.forEach((object) => {
            this.level.endboss.forEach((endboss) => {
                if (object.isColliding(endboss)) {
                    if (!object.allreadyhits) {
                        object.allreadyhits = true;
                        this.smashBottleSound.play();
                        this.endbossSound.play();
                        endboss.bossAttacks = true;
                        if (endboss.boss == 'firstBoss') {
                            endboss.energy -= 25;
                        } else {
                            endboss.energy -= 10;
                        }
                        this.throwableObjects[this.throwableObjects.indexOf(object)].showSmashingBottleAnimation();
                        if (endboss.energy <= 0 && endboss.boss == 'firstBoss') {
                            endboss.Dead();
                        } else if (endboss.energy <= 0 && endboss.boss == 'secondBoss') {
                            endboss.Dead();
                            this.resetGame();
                        } else {
                            endboss.imagesAfterHit();
                        }
                    }
                }
            });
        });
    }

    checkIfBottleHitsEnemy() {
        this.throwableObjects.forEach((bottle) => {
            this.level.enemies.forEach((enemy) => {
                if (enemy.isColliding(bottle)) {
                    if (!enemy.dead && !bottle.allreadyhits) {
                        bottle.allreadyhits = true;
                        this.smashBottleSound.play();
                        this.chickenDies.play();
                        enemy.energy -= 25;
                        enemy.dead = true;
                        this.chickenCounter++;
                        enemy.Dead();
                        this.spawnNewChicken();
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
                        this.spawnNewChicken('yellowChicken');
                    }
                }
            });
        });
    }

    // function creates new throwable Object every time D is pressed.
    checkThrowObjecs() {
        if (this.keyboard.D && this.bottleCounter > 0 && !this.gameOver && this.gameStarted) {
            let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100, this.character.otherDirection);
            this.level.bottles.push(new Bottle('img/6.botella/2.Botella_enterrada1.png', this.character.x + 3000));
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
        this.addObjectsToMap(this.level.endboss);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.smallEnemies);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.bottles);
        this.addObjectsToMap(this.level.hearts);
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

    // renders through all objects and applies showObjectsInWorldFunction for each
    addObjectsToMap(object) {
        object.forEach(o => {
            this.showObjectsInWorld(o);
        });
    }

    showObjectsInWorld(mo) {
        if (mo.otherDirection) {
            this.turnCharacter(mo);
        }

        //draw function is within drawable Objects class and draws all the objects
        mo.draw(this.ctx);
        // mo.drawRectangle(this.ctx);

        if (mo.otherDirection) {
            this.turnCharacterAgain(mo);
        }
    }

    // function is responsible for turning the character
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

    resetGame() {
        this.displayScore();
        this.backgroundMusic.pause();
        this.gameWin.play();
        this.level.enemies.forEach((enemy) => {
            enemy.dead = true;
            enemy.Dead();
        });
        this.level.smallEnemies.forEach((smallenemy) => {
            smallenemy.dead = true;
            smallenemy.Dead();
        });
        setTimeout(() => {
            location.reload(true);
        }, 8000);
    }

    displayScore() {
        document.getElementById('score').classList.add('scoreAfterWin');
        document.getElementById('score-overlay').classList.add('displayScoreAfterWin');
        document.getElementById('chickenCounter').classList.add('counterAfterWin');
        document.getElementById('coinCounter').classList.add('counterAfterWin');
        document.getElementById('bottleCounter').style = 'display: none';
        document.getElementById('congrats').style = 'display: flex';
    }
}