console.log("Este es un pokedex");

async function traerDatos(url){
    var respuestaApi = await fetch(url);
    var respuestaApiJson = await respuestaApi.json();
    console.log(respuestaApiJson);
    var contenedor = document.getElementById("imagenes");

    contenedor.innerHTML = "";

    var lista = respuestaApiJson.results
    console.log(lista)

    lista.forEach(async(elemento, indice, arreglo)=>{

        var linkPokemon = await fetch(elemento.url);
        var linkPokemonjson = await linkPokemon.json();
        console.log(linkPokemonjson);
        contenedor.innerHTML += `
        <div class="tarjeta">
            <img src=${linkPokemonjson.sprites.front_default} alt="Tarjeta Pokemon">
            <h4 style="color:white">${linkPokemonjson.name}</h4>
        </div>
        `
    })
}


function traerUrl(){
    var url = document.getElementById("opcionBusqueda").value;
    console.log(url);
    traerDatos(url);
}

function limpiar(){
    var imagenes = document.getElementById("imagenes");
    imagenes.innerHTML = "";

}