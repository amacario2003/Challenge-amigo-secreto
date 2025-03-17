// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombreAmigo;
let listaAmigos = [];

function asignarTexto(elemento, texto){
    let elementoHTML = document.getElementById(elemento)
    elementoHTML.innerHTML = texto;
    return;
}

function limpiarInput(){
    document.querySelector('#amigo').value ='';
}

function agregarAmigo(){

    nombreAmigo = document.getElementById('amigo').value;

    if(nombreAmigo === ''){
        alert("Por favor, inserte un nombre.");
    }else{
        listaAmigos.push(nombreAmigo);
        console.log("este es el nombre insertado hasta el momento "+nombreAmigo);
        console.log("estos son los items en el array "+listaAmigos);
        limpiarInput();
    }
   

}