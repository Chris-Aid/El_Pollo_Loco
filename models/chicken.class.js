class chicken extends movableObject {
    height = 90;
    width = 90;
    y = 330;
    
    constructor() {
        super().loadImage('img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png')

        this.x = 200 + Math.random() * 500;
    }
    
}