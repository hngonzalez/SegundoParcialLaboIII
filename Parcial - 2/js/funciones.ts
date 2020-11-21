namespace Parcial2{
    
    var listaVehiculos:Array<Vehiculo> = new Array<Vehiculo>();
    window.addEventListener("load",()=>{
        

        let btnNuevoVehiculo = (<HTMLInputElement>document.getElementById("nuevoVehiculo"));
        btnNuevoVehiculo.addEventListener("click",newVehi);

        let btnAgregar = (<HTMLInputElement>document.getElementById("btnAgregar"));
        btnAgregar.addEventListener("click",hola);

        
        let selTipoVehi = document.getElementById("selectTipoVehiculo");
        selTipoVehi.addEventListener("change",tipoVehi);

        let selectTipoVehiculoFilter = document.getElementById("selectTipoVehiculoFilter");
        selectTipoVehiculoFilter.addEventListener("change",filterList); 
    });

    export function newVehi(){
        let containerNewVehiculo = (<HTMLInputElement>document.getElementById("containerNewVehiculo"));
        
        if (containerNewVehiculo.hidden == true) {
            containerNewVehiculo.hidden = false;
        } else
        {
            containerNewVehiculo.hidden = true;
        }
    }
    
    export function tipoVehi(){
        var selTipoVehi = (<HTMLInputElement>document.getElementById("selectTipoVehiculo")).value;

        let label4x4 = (<HTMLInputElement>document.getElementById("label4x4"));
        let in4x4 = (<HTMLInputElement>document.getElementById("in4x4"));
        let labelPuertas = (<HTMLInputElement>document.getElementById("labelPuertas"));
        let inCantPuertas = (<HTMLInputElement>document.getElementById("inCantPuertas"));
            

        if (selTipoVehi == "camioneta") {                
            label4x4.hidden = false;
            in4x4.hidden = false;
            labelPuertas.hidden = true;
            inCantPuertas.hidden = true;
        } else if (selTipoVehi == "auto"){

            labelPuertas.hidden = false;
            inCantPuertas.hidden = false;
            label4x4.hidden = true;
            in4x4.hidden = true;
        }
    }

    export function hola(){
        var btnAgregar = (<HTMLInputElement>document.getElementById("btnAgregar"));
        var inMarca = (<HTMLInputElement>document.getElementById("inMarca")).value;
        var inModelo = (<HTMLInputElement>document.getElementById("inModelo")).value;
        var inPrecio = (<HTMLInputElement>document.getElementById("inPrecio")).value;
        var selTipoVehi = (<HTMLInputElement>document.getElementById("selectTipoVehiculo")).value;
        

        if (selTipoVehi == "camioneta") {    
            var idParaAsignar = obtengoID(); 

            let in4x4 = (<HTMLInputElement>document.getElementById("in4x4")).value;        
            let newCamioneta = new Camioneta(idParaAsignar,inMarca,inModelo,Number(inPrecio),Boolean(in4x4));

            listaVehiculos.push(newCamioneta);
            AgregarVehiculo(newCamioneta);
        } else if (selTipoVehi == "auto"){
            var idParaAsignar = obtengoID(); 

            let inCantPuertas = (<HTMLInputElement>document.getElementById("inCantPuertas")).value;
            let newAuto = new Auto(idParaAsignar,inMarca,inModelo,Number(inPrecio),Number(inCantPuertas));
            
            listaVehiculos.push(newAuto);
            AgregarVehiculo(newAuto);
            
        }
    }

    export function filterList(event){
        event.preventDefault();
        var tablaFiltrada = (<HTMLInputElement>document.getElementById("tablaFiltrada"));
        var h3ListaFiltrada = (<HTMLInputElement>document.getElementById("h3ListaFiltrada"));
        var tablaGral = (<HTMLInputElement>document.getElementById("tablaGral"));
        tablaFiltrada.hidden = false;
        h3ListaFiltrada.hidden = false;

        console.log(listaVehiculos);
        
        if(listaVehiculos!=null){
            
            if(event.target.value === "camioneta"){
                
                var filtrado = listaVehiculos.filter((item)=>{
                    return item.tipo == tipoVehiculo.Camioneta;
                });
                
                AgregarVehiculoFiltrados(filtrado);
            }
            else if(event.target.value === "auto"){
                var filtrado = listaVehiculos.filter((item)=>{
                    return item.tipo == tipoVehiculo.Auto;
                });
                AgregarVehiculoFiltrados(filtrado);
            }
            else{
                tablaFiltrada.hidden = true;
                h3ListaFiltrada.hidden = true;
            }
        }
        else{
             
        }
        
    }

    export function obtengoID(){
        return listaVehiculos.reduce((acc, valor)=>{
            return acc = acc + 1;
            },0);
    }

    export function AgregarVehiculoFiltrados(vehi:Vehiculo[]){

        var tcuerpito = document.getElementById("tcuerpoFiltrado");
        tcuerpito.innerHTML = "";

        var tcuerpo = (<HTMLInputElement>document.getElementById("tcuerpoFiltrado"));
        
        vehi.forEach(element => {
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

    export function AgregarVehiculo(vehi:Vehiculo){
        
        var tcuerpo = (<HTMLInputElement>document.getElementById("tcuerpoGral"));
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
}
