class Level {
    enemies;
    smallEnemies;
    endboss;
    clouds;
    backgroundObjects;
    coins;
    bottles;
    hearts;
    level_end_x = 16000;

    constructor(enemies, smallEnemies, endboss, clouds, backgroundObjects, coins, bottles, hearts) {
        this.enemies = enemies;
        this.smallEnemies = smallEnemies;
        this.endboss = endboss;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.coins = coins;
        this.bottles = bottles;
        this.hearts = hearts;
    }
}