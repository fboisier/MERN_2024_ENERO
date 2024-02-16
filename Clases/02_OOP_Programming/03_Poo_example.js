class Vehiculo{

    static nombreClase = 'VEHICULO'

    constructor(modelo, color){
        this.placa = '';
        this.marca = 'Toyota'
        this.modelo = modelo;
        this.color = color;
        this.kilometraje = 0;
        console.log("SE EJECUTO EL 1");
    }

    printVehiculo(){
        console.log(`${this.marca} ${this.modelo} - ${this.color} (${this.placa})`);
    }

    viaje(kilometros){
        console.log("AVANZANDO ", kilometros);
        this.kilometraje += kilometros;
    }

    verKilometraje(){
        console.log(`${this.marca} ${this.modelo}: ${this.kilometraje}`);
    }

    // Class Methods
    static getNombreClase() {
        console.log(this.nombreClase);
    }
}

class Moto extends Vehiculo{
    static nombreClase = 'MOTO';

    constructor(modelo, color){
        super(modelo, color);
    }

    verKilometraje(){
        super.verKilometraje();
        console.log(`Este es el Kilometraje de la MOTO:${this.kilometraje}`);
    }
}


objetoAuto1 = new Vehiculo("Yaris", "Rojo");
objetoAuto1.placa = 'PO34492';

car2 = new Vehiculo("Hilux", "Azul");

objetoAuto1.printVehiculo();
car2.printVehiculo();

objetoAuto1.viaje(19);
objetoAuto1.viaje(11);
objetoAuto1.verKilometraje();

Vehiculo.getNombreClase();

moto1 = new Moto("Motokachi", "Negro");
moto1.printVehiculo();

Moto.getNombreClase()
moto1.verKilometraje();
