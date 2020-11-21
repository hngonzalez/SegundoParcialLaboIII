namespace Parcial2{
    export interface Vehiculo{ 
        agregarVehi();
    }

    export class Vehiculo{ 
        id:number;
        marca:string;
        modelo:string;
        precio:number;
        tipo:any; 

        constructor(id:number, marca:string, modelo:string, precio:number){
            this.id = id;
            this.marca = marca;
            this.modelo = modelo;
            this.precio = precio;
        }
    }

    export enum tipoVehiculo{
        Auto = "auto",
        Camioneta = "camioneta"
    }
}
