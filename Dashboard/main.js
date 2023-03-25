// Crear funcion para repetir codigo repetitivo

// Objeto de las Apps
aplications = {
    "Names": ["FillApp", "PushApp"],
    "Icons": ["fa-solid fa-clapperboard", "fa-solid fa-rocket"],
    "Colors": ["black", "purple"]
}




// Obtener el Dashboard
let Dashboard = document.getElementsByClassName("Dashboard")[0];




//  Agregarle una app nueva
console.log("Aplicaciones a crear:");

for( let i=0; i < aplications.Names.length; i++){
    console.log(aplications.Names[i]);

    let app = document.createElement("DIV");
    let icon = document.createElement("I");
    let name = document.createElement("H3");

    // Modificar el elemento de la app padre
    app.setAttribute("id", "app3");
    app.setAttribute("class","apps");

    // Añadir elementos hijos
        // Agregar icono
    icon.setAttribute("class", aplications.Icons[i]);
    icon.style.color = aplications.Colors[i];

        // Agregar nombre
    
    name.innerHTML = aplications.Names[i];


    // Juntar todo
    app.appendChild(icon);
    app.appendChild(name);
    Dashboard.appendChild(app);
}



// Dashboard.appendChild(app);