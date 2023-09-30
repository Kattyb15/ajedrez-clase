console.log("Entro index.js");
console.log(piezas);

const inputBusqueda = document.getElementById("inputBusqueda");
const resultadoBusqueda = document.getElementById("resultadoBusqueda");
const imgPieza = document.getElementById("imgPieza");


function buscar() {
    console.log("Entro a funcion buscar");
    const txtBusqueda = inputBusqueda.value;
    if (txtBusqueda == "") {
        alert("No hay criterio de busqueda");
    }
    let resultado = piezas.find((pieza) => {
        return pieza.nombre.toLocaleLowerCase() == txtBusqueda.toLocaleLowerCase();
    });

    if (resultado == undefined) {
        // alert("No se encontro la pieza");
        imgPieza.src = "assets/images/piezas/logo.png";
        resultadoBusqueda.innerText = "No se encontro la pieza";
    } else {
        // aqui si deberia tener la pieza
        imgPieza.src = resultado.imagen;
        // resultadoBusqueda.innerHTML = resultado.movimiento;
        resultadoBusqueda.innerText = resultado.movimiento;
    }

    console.log(resultado, "resultado");
}

inputBusqueda.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        console.log("Entro a evento keypress con enter");
        buscar();
    }
});



