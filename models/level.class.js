class Level {
    enemies;
    smallEnemies;
    endboss;
    clouds;
    backgroundObjects;
    coins;
    bottles;
    level_end_x = 16000;

    constructor(enemies, smallEnemies, endboss, clouds, backgroundObjects, coins, bottles) {
        this.enemies = enemies;
        this.smallEnemies = smallEnemies;
        this.endboss = endboss;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.coins = coins;
        this.bottles = bottles;
    }
}