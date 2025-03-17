// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombreAmigo;
let listaAmigos = [];

function asignarTexto(elemento, texto){
    let elementoHTML = document.getElementById(elemento)
    elementoHTML.innerHTML = texto;
    return;
}


//funcion para limpiar texto
function limpiarInput(){
    document.querySelector('#amigo').value ='';
}


//crea nuevas tag dentro de la lista
function listaAmigosLi(){
    let lista = document.querySelector('#resultado');
    lista.innerHTML = "";
    for(let i = 0; i < listaAmigos.length; i++){
        var amigo = listaAmigos[i];
        let li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    }
    
}

//funcion que valida si el campo esta vacio, de lo contrario agrega el amigo a la vista.
function agregarAmigo(){

    nombreAmigo = document.getElementById('amigo').value;

    if(nombreAmigo === ''){
        alert("Por favor, inserte un nombre.");
    }else{
        listaAmigos.push(nombreAmigo);
        console.log("este es el nombre insertado hasta el momento "+nombreAmigo);
        console.log("estos son los items en el array "+listaAmigos);
        limpiarInput();
        listaAmigosLi();
    }
   

}