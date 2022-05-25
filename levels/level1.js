const level1 = new Level(

    [
        new chicken(0),
        new chicken(200 * 1),
        new chicken(200 * 2),
        new chicken(200 * 3),
    ],
    [
        new smallChicken(0),
        new smallChicken(200 * 1),
        new smallChicken(200 * 2),
        new smallChicken(200 * 3),
    ],
    [
        new Endboss(6000, 315, 330, 260, 'firstBoss'),
        new Endboss(12000, 235, 410, 310, 'secondBoss')
    ],
    [
        new Cloud('img/5.Fondo/Capas/4.nubes/1.png', 0),
        new Cloud('img/5.Fondo/Capas/4.nubes/2.png', 1280),
        new Cloud('img/5.Fondo/Capas/4.nubes/1.png', 1280 * 2),
        new Cloud('img/5.Fondo/Capas/4.nubes/1.png', 1280 * 3),
        new Cloud('img/5.Fondo/Capas/4.nubes/2.png', 1280 * 4),
        new Cloud('img/5.Fondo/Capas/4.nubes/1.png', 1280 * 5),
        new Cloud('img/5.Fondo/Capas/4.nubes/2.png', 1280 * 6),
        new Cloud('img/5.Fondo/Capas/4.nubes/1.png', 1280 * 7),
        new Cloud('img/5.Fondo/Capas/4.nubes/1.png', 1280 * 8),
        new Cloud('img/5.Fondo/Capas/4.nubes/2.png', 1280 * 9),
        new Cloud('img/5.Fondo/Capas/4.nubes/1.png', 1280 * 10),
        new Cloud('img/5.Fondo/Capas/4.nubes/2.png', 1280 * 11),
        new Cloud('img/5.Fondo/Capas/4.nubes/1.png', 1280 * 12),
    ],
    [
        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', -1279, this.height = 720),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', -1279),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', -1279),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', -1279),

        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 0, this.height = 720),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 0),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 0),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 0),

        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 1279, this.height = 720),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', 1279),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', 1279),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', 1279),

        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 1279 * 2, this.height = 720),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 1279 * 2),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 1279 * 2),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 1279 * 2),

        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 1279 * 3, this.height = 720),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', 1279 * 3),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', 1279 * 3),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', 1279 * 3),

        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 1279 * 4, this.height = 720),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 1279 * 4),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 1279 * 4),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 1279 * 4),

        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 1279 * 5, this.height = 720),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', 1279 * 5),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', 1279 * 5),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', 1279 * 5),

        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 1279 * 6, this.height = 720),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 1279 * 6),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 1279 * 6),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 1279 * 6),

        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 1279 * 7, this.height = 720),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', 1279 * 7),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', 1279 * 7),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', 1279 * 7),

        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 1279 * 8, this.height = 720),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 1279 * 8),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 1279 * 8),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 1279 * 8),

        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 1279 * 9, this.height = 720),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', 1279 * 9),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', 1279 * 9),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', 1279 * 9),

        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 1279 * 10, this.height = 720),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 1279 * 10),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 1279 * 10),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 1279 * 10),
    ],
    [
        new Coin('img/8.Coin/Moneda1.png', 350, 630),
        new Coin('img/8.Coin/Moneda1.png', 300, 670),
        new Coin('img/8.Coin/Moneda1.png', 250, 710),
        new Coin('img/8.Coin/Moneda1.png', 210, 760),
        new Coin('img/8.Coin/Moneda1.png', 250, 810),
        new Coin('img/8.Coin/Moneda1.png', 300, 850),
        new Coin('img/8.Coin/Moneda1.png', 350, 890),

        // new Coin('img/8.Coin/Moneda1.png', 540, 1400),
        // new Coin('img/8.Coin/Moneda1.png', 540, 1900),
        // new Coin('img/8.Coin/Moneda1.png', 540, 2400),
        // new Coin('img/8.Coin/Moneda1.png', 540, 2900),
        // new Coin('img/8.Coin/Moneda1.png', 540, 3400),
    ],
    [
        new Bottle('img/6.botella/2.Botella_enterrada1.png', 0),
        new Bottle('img/6.botella/2.Botella_enterrada2.png', 200),
        new Bottle('img/6.botella/2.Botella_enterrada1.png', 400),
        new Bottle('img/6.botella/2.Botella_enterrada2.png', 600),
        new Bottle('img/6.botella/2.Botella_enterrada1.png', 1000),
        new Bottle('img/6.botella/2.Botella_enterrada1.png', 2000),
        new Bottle('img/6.botella/2.Botella_enterrada2.png', 2500),
        new Bottle('img/6.botella/2.Botella_enterrada1.png', 3000),
        new Bottle('img/6.botella/2.Botella_enterrada1.png', 3500),
    ],
    [
        new Heart('img/7.Marcadores/Icono/Vidas.png', 1200),
        new Heart('img/7.Marcadores/Icono/Vidas.png', 4000),
        new Heart('img/7.Marcadores/Icono/Vidas.png', 5300),
        new Heart('img/7.Marcadores/Icono/Vidas.png', 6000),
        new Heart('img/7.Marcadores/Icono/Vidas.png', 7500),
        new Heart('img/7.Marcadores/Icono/Vidas.png', 9000),
        new Heart('img/7.Marcadores/Icono/Vidas.png', 11000),
    ]

);