var Parcial2;
(function (Parcial2) {
    var Vehiculo = /** @class */ (function () {
        function Vehiculo(id, marca, modelo, precio) {
            this.id = id;
            this.marca = marca;
            this.modelo = modelo;
            this.precio = precio;
        }
        return Vehiculo;
    }());
    Parcial2.Vehiculo = Vehiculo;
    var tipoVehiculo;
    (function (tipoVehiculo) {
        tipoVehiculo["Auto"] = "auto";
        tipoVehiculo["Camioneta"] = "camioneta";
    })(tipoVehiculo = Parcial2.tipoVehiculo || (Parcial2.tipoVehiculo = {}));
})(Parcial2 || (Parcial2 = {}));
