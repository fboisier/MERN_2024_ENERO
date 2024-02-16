class Ninja{
    constructor(nombre, salud){
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = 3;
        this.fuerza = 3;
    }

    sayName(){
        console.log(this.nombre);
    }

    drinkSake(){
        this.salud += 10;
    }
}


ninja1 = new Ninja("Francisco", 100);

ninja1.sayName();
ninja1.drinkSake();

console.log(ninja1);