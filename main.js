//alert("PRUEBA")

class Auto {
    constructor(marca, modelo, color) {
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.toString = `Marca: ${this.marca}, Modelo: ${this.modelo}, Color: ${this.color}`;
    }
}

function inicio(){
    var total = [];
    welcome(total);   
}

function welcome(total){

    let name = prompt("Ingresa tu Nombre y Apellido");
    const title = document.createElement("h1");
    title.innerHTML=`Bienvenido a la página ${name}`;
    title.setAttribute("style","color:black");
    document.body.appendChild(title);
    let body = document.querySelector('body');
    body.setAttribute("style","background-color:gray");

    const title2 = document.createElement("h2");
    title2.innerHTML=`Esta es su lista de vehículos`;
    title2.setAttribute("style","color:white");
    document.body.appendChild(title2);

    const button = document.createElement("button");
    button.innerText = `Agregar Autos`;
    document.body.appendChild(button);
    button.addEventListener("click",() => {
        agregarAutos(total);
    });

    const button1 = document.createElement("button");
    button1.innerText = `Ver Autos`;
    document.body.appendChild(button1);
    button1.addEventListener("click",() => {
        printAutos(total);
    });

}



function printAutos(total){

    let ul = document.createElement("ul");

    total.forEach(a => {
        let item = document.createElement("li");
        let content = document.createTextNode(`Marca: ${a.marca} - Modelo: ${a.modelo} - Color: ${a.color}`);
        item.appendChild(content);
        ul.appendChild(item);
    });
    ul.setAttribute("style","color:black");
    document.body.appendChild(ul);
}



function agregarAutos(total) {
    
    alert(`Ingrese un vehiculo y sera guardado en su lista de vehiculos deseados`);
    var seguir = false;
    //var total = [];

    do {
        let continuar;
        total.push(crearAuto());

        do {
            continuar = prompt(`Desea agregar otro vehiculo?si/no`).toLowerCase();

            if (continuar == `si`) {
                seguir = true;
                alert(`Ingrese los datos del proximo vehiculo`);
            } else if (continuar == `no`) {
                seguir = false;
            }

        } while (continuar != `si` && continuar != `no`);

    } while (seguir);    
}

function crearAuto() {
    let aux1 = prompt(`Ingrese la marca del vehiculo`);
    let aux2 = prompt(`Ingrese el modelo del vehiculo`);
    let aux3 = prompt(`Ingrese el color del vehiculo`);
    var vehiculo = new Auto(aux1, aux2, aux3);
    return vehiculo;
}