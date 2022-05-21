console.log("Main controller is ready");
// =================================================


// Variables del DOM
var AppName = "My Dashboard";
let minmax = "70px";
let visualizador = document.getElementById("shower");
let menubar = document.getElementById("menu");


//  Funciones para el DOM
const changeMonitor = function(monitor){
    // * Esta funcion sirvirá para cambia rentre vistas html el iframe
    console.log(`Cambiando a ${monitor}`);

    // *Si el atributo ya existe, eliminarlo
    // ! Eliminarlo independientemente de la vista que sea
    if (visualizador.hasAttribute("src")){  
        visualizador.removeAttribute("src");
    }

    // TODO: Setear la vista correspondiente
    visualizador.setAttribute("src", `./plantillas/${monitor}.html`);
}

//  Funcion para hacer aparecer el menu
menubar.addEventListener("change", function(){
    let etiquetas_A = document.getElementsByTagName("a");
    
    if (minmax === "70px"){
        minmax = "10px";
    }else{
        minmax = "70px";
    }
    
    for (i=0; i< etiquetas_A.length; i++){
        etiquetas_A[i].style.width = minmax;
        console.log(etiquetas_A[i]);
    }
    
});



// Mostrar Bienvenida
changeMonitor('welcome');