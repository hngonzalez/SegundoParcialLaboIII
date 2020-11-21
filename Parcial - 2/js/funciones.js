var Parcial2;
(function (Parcial2) {
    var listaVehiculos = new Array();
    window.addEventListener("load", function () {
        var btnNuevoVehiculo = document.getElementById("nuevoVehiculo");
        btnNuevoVehiculo.addEventListener("click", newVehi);
        var btnAgregar = document.getElementById("btnAgregar");
        btnAgregar.addEventListener("click", hola);
        var selTipoVehi = document.getElementById("selectTipoVehiculo");
        selTipoVehi.addEventListener("change", tipoVehi);
        var selectTipoVehiculoFilter = document.getElementById("selectTipoVehiculoFilter");
        selectTipoVehiculoFilter.addEventListener("change", filterList);
    });
    function newVehi() {
        var containerNewVehiculo = document.getElementById("containerNewVehiculo");
        if (containerNewVehiculo.hidden == true) {
            containerNewVehiculo.hidden = false;
        }
        else {
            containerNewVehiculo.hidden = true;
        }
    }
    Parcial2.newVehi = newVehi;
    function tipoVehi() {
        var selTipoVehi = document.getElementById("selectTipoVehiculo").value;
        var label4x4 = document.getElementById("label4x4");
        var in4x4 = document.getElementById("in4x4");
        var labelPuertas = document.getElementById("labelPuertas");
        var inCantPuertas = document.getElementById("inCantPuertas");
        if (selTipoVehi == "camioneta") {
            label4x4.hidden = false;
            in4x4.hidden = false;
            labelPuertas.hidden = true;
            inCantPuertas.hidden = true;
        }
        else if (selTipoVehi == "auto") {
            labelPuertas.hidden = false;
            inCantPuertas.hidden = false;
            label4x4.hidden = true;
            in4x4.hidden = true;
        }
    }
    Parcial2.tipoVehi = tipoVehi;
    function hola() {
        var btnAgregar = document.getElementById("btnAgregar");
        var inMarca = document.getElementById("inMarca").value;
        var inModelo = document.getElementById("inModelo").value;
        var inPrecio = document.getElementById("inPrecio").value;
        var selTipoVehi = document.getElementById("selectTipoVehiculo").value;
        if (selTipoVehi == "camioneta") {
            var idParaAsignar = obtengoID();
            var in4x4 = document.getElementById("in4x4").value;
            var newCamioneta = new Parcial2.Camioneta(idParaAsignar, inMarca, inModelo, Number(inPrecio), Boolean(in4x4));
            listaVehiculos.push(newCamioneta);
            AgregarVehiculo(newCamioneta);
        }
        else if (selTipoVehi == "auto") {
            var idParaAsignar = obtengoID();
            var inCantPuertas = document.getElementById("inCantPuertas").value;
            var newAuto = new Parcial2.Auto(idParaAsignar, inMarca, inModelo, Number(inPrecio), Number(inCantPuertas));
            listaVehiculos.push(newAuto);
            AgregarVehiculo(newAuto);
        }
    }
    Parcial2.hola = hola;
    function filterList(event) {
        event.preventDefault();
        var tablaFiltrada = document.getElementById("tablaFiltrada");
        var h3ListaFiltrada = document.getElementById("h3ListaFiltrada");
        var tablaGral = document.getElementById("tablaGral");
        tablaFiltrada.hidden = false;
        h3ListaFiltrada.hidden = false;
        console.log(listaVehiculos);
        if (listaVehiculos != null) {
            if (event.target.value === "camioneta") {
                var filtrado = listaVehiculos.filter(function (item) {
                    return item.tipo == Parcial2.tipoVehiculo.Camioneta;
                });
                AgregarVehiculoFiltrados(filtrado);
            }
            else if (event.target.value === "auto") {
                var filtrado = listaVehiculos.filter(function (item) {
                    return item.tipo == Parcial2.tipoVehiculo.Auto;
                });
                AgregarVehiculoFiltrados(filtrado);
            }
            else {
                tablaFiltrada.hidden = true;
                h3ListaFiltrada.hidden = true;
            }
        }
        else {
        }
    }
    Parcial2.filterList = filterList;
    function obtengoID() {
        return listaVehiculos.reduce(function (acc, valor) {
            return acc = acc + 1;
        }, 0);
    }
    Parcial2.obtengoID = obtengoID;
    function AgregarVehiculoFiltrados(vehi) {
        var tcuerpito = document.getElementById("tcuerpoFiltrado");
        tcuerpito.innerHTML = "";
        var tcuerpo = document.getElementById("tcuerpoFiltrado");
        vehi.forEach(function (element) {
            var row = document.createElement("tr");
            row.setAttribute("class", "rowDato");
            var txtId = document.createTextNode(String(element.id));
            var colId = document.createElement("td");
            colId.appendChild(txtId);
            row.appendChild(colId);
            var txtMarca = document.createTextNode(element.marca);
            var colMarca = document.createElement("td");
            colMarca.appendChild(txtMarca);
            row.appendChild(colMarca);
            var txtModelo = document.createTextNode(element.modelo);
            var colModelo = document.createElement("td");
            colModelo.appendChild(txtModelo);
            row.appendChild(colModelo);
            var txtPrecio = document.createTextNode(String(element.precio));
            var colPrecio = document.createElement("td");
            colPrecio.appendChild(txtPrecio);
            row.appendChild(colPrecio);
            var txtAccion = document.createTextNode("");
            var colAccion = document.createElement("td");
            colAccion.appendChild(txtAccion);
            row.appendChild(colAccion);
            tcuerpo.appendChild(row);
        });
        //tcuerpo.parentNode.replaceChild(new_tbody, tcuerpo);
    }
    Parcial2.AgregarVehiculoFiltrados = AgregarVehiculoFiltrados;
    function AgregarVehiculo(vehi) {
        var tcuerpo = document.getElementById("tcuerpoGral");
        var row = document.createElement("tr");
        row.setAttribute("class", "rowDato");
        var txtId = document.createTextNode(String(vehi.id));
        var colId = document.createElement("td");
        colId.appendChild(txtId);
        row.appendChild(colId);
        var txtMarca = document.createTextNode(vehi.marca);
        var colMarca = document.createElement("td");
        colMarca.appendChild(txtMarca);
        row.appendChild(colMarca);
        var txtModelo = document.createTextNode(vehi.modelo);
        var colModelo = document.createElement("td");
        colModelo.appendChild(txtModelo);
        row.appendChild(colModelo);
        var txtPrecio = document.createTextNode(String(vehi.precio));
        var colPrecio = document.createElement("td");
        colPrecio.appendChild(txtPrecio);
        row.appendChild(colPrecio);
        var txtAccion = document.createTextNode("");
        var colAccion = document.createElement("td");
        colAccion.appendChild(txtAccion);
        row.appendChild(colAccion);
        tcuerpo.appendChild(row);
    }
    Parcial2.AgregarVehiculo = AgregarVehiculo;
})(Parcial2 || (Parcial2 = {}));
