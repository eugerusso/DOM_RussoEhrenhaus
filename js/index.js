//La idea es hacer como una app de organizción medio inspirada en Notion 

let hoy = new Date();
console.log(hoy);
let usuario = prompt(`Ingrese su nombre`); 
let nuevaTarea;
const listaDeTareas=[];

// const saludar = () =>{ alert(`Bienvenido/a ${usuario} listo/a para organizar tu día?`)}

function ingresarTarea(){
    nuevaTarea= new Tarea(prompt(`Ingrese la tarea que tenes que realizar `),prompt(`Ingrese una breve descripcion`));    
    return nuevaTarea
}

class Tarea{
    constructor(titulo,descripcion){
        this.titulo=titulo;
        this.descripcion=descripcion;
    }
}

// saludar();

for (let i=0; i<3;i++){
    listaDeTareas.push(ingresarTarea());
}

listaDeTareas.forEach( function(el){
    console.log(el);
})

//creando un template string para el saludo
let saludo = document.getElementById("saludo");
saludo.innerText= `Bienvenido ${usuario}`;


//crear una lista a traves del array creado

/* let ul = document.querySelector("ul");
let li = documente.createElement("li");

for (const task of listaDeTareas){
    li.innerHTML= task;
    li.appendChild(listaDeTareas);
}
 */

let task = document.getElementById("tasks");

for(const lista of listaDeTareas){
    let li = document.createElement("li");
    li.innerHTML= lista;
    task.appendChild(li);
}

let probandoArray =["tarea1","tarea2","tarea3"]

for(const prueba of probandoArray){
    let punto=  document.createElement("li");
    punto.innerHTML = prueba;
    task.append(punto);

}