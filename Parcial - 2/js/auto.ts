namespace Parcial2{
    export class Auto extends Vehiculo{
        cantidadPuertas:number;
        tipo = tipoVehiculo.Auto;

        constructor(id:number, marca:string, modelo:string, precio:number, cantidadPuertas:number){
            super(id, marca, modelo, precio)
            this.cantidadPuertas = cantidadPuertas;
        }
    }
}