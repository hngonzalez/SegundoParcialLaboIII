namespace Parcial2{
    export class Camioneta extends Vehiculo{
        cuatroXcuatro:boolean;
        tipo = tipoVehiculo.Camioneta;

        constructor(id:number, marca:string, modelo:string, precio:number, cuatroXcuatro:boolean){
            super(id, marca, modelo, precio)
            
        }
    }
}