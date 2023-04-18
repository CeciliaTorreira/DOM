

//* DOM

//* Es una copia manipulable del código de una página web.

// Nuestra página web tiene elementos con las que el usuario puede interactuar. El HTML no cambia, es estático.
// DOM se analiza y estudia como un sistema de raíces


console.log(document)  //! Document es la consola es la representacion del código del HTML


//* Como buscamos en el DOM elementos específicos.

// querySelector //! Busca la referencia de un solo elemento del Dom para poder modificarlo


let h1DOM = document.querySelector("h1") //! .querySelector busca la referencia del DOM

console.log(h1DOM)

// .innerText   Propiedad de los elementos DOM que me permite acceder al texto de ese elemento. El texto que hay entre la etiqueta que abre y cierra un elemento de DOM


console.log(h1DOM.innerText)

// h1DOM.innerText = "Modificando con JS"            


// Eventualmente estas modificaciones no estáran nada más cargue la página

// Estas modificaciones vendrán de dos tipos:

//*1 Por efectos automáticos que tienen un tiempo específico:

setTimeout(() =>{
    h1DOM.innerText = "Modificando con JS luego después de 2 segundos"      //! A los dos segundos aparecerá el cambio
}, 2000)

let h2DOM = document.querySelector("h2")

setInterval(()=>{
    h2DOM.innerText++                //! El contador del 0 dentro del h2 seguirá creciendo por uno cada segundo (1000ms)
}, 1000)

//! Todos los elementos que traigamos del DOM siempre van a ser un string. El sistema fuerza una coerción


//*2 Por medio de Eventos que realiza el usuario. (Usuario enviando formulario, hace click en elementos, pasa el ratón sobre un campo, etc...)


let buttonDOM = document.querySelector("button")
buttonDOM.addEventListener("click", () => {
    //*Qué va a ocurrir cuando el usuario haga click sobre el botón
    console.log("Clickando")
    h1DOM.innerText = "Has clickeado el botón"
    h2DOM.innerText = "0" //* Reinicio el timer
})


//* Diferentes maneras de acceder a elementos.
//* Selectores del .querySelector
//! Añadimos al segundo h1 el ID "title"

let titleDOM = document.querySelector("#title") // Misma notación que css, le añadimos el id title así que usaremos el numeral
console.log(titleDOM)

titleDOM.innerText = "patata"

let paragDOM = document.querySelector(".some-text") // Selector de clase en CSS así que usamos .
paragDOM.innerText = "cambiando a patata"

//* querySelectorAll => Busca múltiples referencias de VARIOS elementos del DOM para poder modificarlos

let allParagDOM = document.querySelectorAll(".some-text") // Misma forma de acceso 
console.log(allParagDOM)

/* NodeList(3) [p.some-text, p.some-text, p.some-text]
0
: 
p.some-text
1
: 
p.some-text
2
: 
p.some-text
length
: 
3
[[Prototype]]
: 
NodeList
 */

//querySelector crea una lista de nodos (NodeList)
//! Es un tipo de dato que parece un array, se comporta casi como uno pero NO ES UN ARRAY.
//! Hay ciertas pocas práticas y métodos de array que podrían ser utilizados con ellos.

allParagDOM[1].innerText = "Modificando con querySelectorAll" //! Estamos modificando el segundo elemento con selector de corchetes.

//? NodeList también nos permite usar bucles for, for of y el método for Each

allParagDOM.forEach((eachNodeDOM)=>{
console.log(eachNodeDOM)
eachNodeDOM.innerText = "Modificando con forEach"  //! Todos los elementos han sido modificados
})
//! Nos muestra todos los elementos de ese Nodo

// Búsquedas anidadas

let allCardsDOM = document.querySelectorAll(".card") // Selector de clase .card

/* allCardsDOM.forEach ((eachCardDOM)=>{
letparafInsideCarmDom = document.querySelector("p")
letparafInsideCarmDom.innerText = "Cambios"   //! Esto intenta acceder al primer párrafo que consigue. Hay que hacer una búsqueda anidada
}) */

allCardsDOM.forEach ((eachCardDOM)=>{

    letparafInsideCarmDom = eachCardDOM.querySelector("p")
    letparafInsideCarmDom.innerText = "Cambios"               //! Itera sobre el elemento y por cada elemento tipo p que encuentre lo modificará
    
    })

    //! En lugar de usar querySelector con document, podemos hacer búsquedas en una zona específica del DOM, en este caso eachCardDOM, ya que previamente establecimos que trabajamos con ".card".


    console.log(document.getElementById("title")) // Se le dice cuál es el ID, no se usa notación de CSS, sin numeral en este caso. Un único elemento.
    console.log(document.getElementsByClassName("card"))  // Coleccion de HTML, varios elementos. //! Sobre colecciones de HTML podemos usar la notacion de corcheres y bucles for (NO FOR EACH)
    console.log( document.getElementsByTagName("h1")) // Nos da todos los elementos con la misma tag, varios elementos.
    // console.log(document.getElementsByName()) // Nos da todos los elementos con el mismo nombre, varios elementos.


    //* Otras modificaciones que podemos hacer sobre los elementos de DOM

    // Podemos modificar el ID

    // Podemos modificar la clase

    let finalThoughtsDOM = document.querySelector("#final-thoughts") //! ID SELECTOR DE CSS 

    console.log(finalThoughtsDOM)


    // finalThoughtsDOM.id = "new-id" // Le asignamos un nuevo ID  //! <section id="new-id" class="after-footer best-practice">…</section>


    setTimeout(() => {
        finalThoughtsDOM.id="new-id"          //! A los 3 segundos la clase cambiará. No se hacen estos cambios para ahorrarse hacer modificaciones en el documento de CSS. Estos cambios tienen una utilidad.
    }, 3000)                                  //? En este caso esta parte tendrá el p con color azul pero a los 3 segundos su clase cambiará y dejará de serlo.
      //! Los elementos de DOM/HTML solo deberían tener un ID
    console.log(finalThoughtsDOM.className)

    // finalThoughtsDOM.className = "new-class" // Se reemplazan las clases anteriores(TODAS), no se añaden nuevas //! <section id="new-id" class="new-class"> 

    //Esto no sería correcto, reemplazamos todas las clases.

    //! Los elementos de DOM/HTML podrían tener múltiples clases

    //* Tenemos formas de agregar, quitar y verificar las clases del elemento.
    // .classList

    finalThoughtsDOM.classList.add("new-class") // Añadir clase
    finalThoughtsDOM.classList.remove("best-practice") // Le quitamos la clase

    finalThoughtsDOM.classList.contains("after-footer") // Devuelve un boolean si la clase está incluída o no.
    console.log(finalThoughtsDOM.classList.contains("after-footer"))  // TRUE
    console.log(finalThoughtsDOM.classList.contains("patata"))  // FALSE

    //! Mirar método .toggle()


    setTimeout(() => {
        finalThoughtsDOM.classList.add("bold")  // A los 3 segundos adquirirá la clase .bold, adquiriendo también las características establecidas en el CSS.
    }, 3000);




    // * CREAR Y ELIMINAR ELEMENTOS DE DOM.

    let emptycontainerDOM = document.querySelector("#empty-container") //! NUMERAL ID DE CSS
    console.log(emptycontainerDOM)

    let newElementDOM = document.createElement("h4")  //! Creamos una referencia de elemento
    newElementDOM.innerText = "Nuevo elemento creado desde JS" //! Aquí podemos apreciar que no se ve en la página, solo en la consola.
    console.log(newElementDOM) //! NO EXISTE DE FORMA VISUAL, EXISTE EN NUESTRO CÓDIGO DE JAVASCRIPT

    emptycontainerDOM.append(newElementDOM) //! De esta manera lo añadimos visualmente

    let newElementDOM2 = document.createElement("h4")
    newElementDOM2.innerText = "Segundo elemento creado desde JS"

    emptycontainerDOM.append(newElementDOM2); //! AÑADIMOS SEGUNDO ELEMENTO


    //* remove() => Elimina/borra un elemento. El elemento como tal sigue existiendo, solo lo saca de la visualización en la página
setTimeout(() => {
    newElementDOM.remove()
    // document.body.remove() // Podríamos hasta borrar el body del elemento.
}, 3000);

//! Ambos nuevos elementos estarán presentes al principio pero al cabo de 3 segundos el primer elemento desaparecerá

/* setTimeout(() => {
    emptycontainerDOM.append(newElementDOM)  //! El elemento eliminado previamente volverá a aparecer. No aparecerá en la misma posición, sino sera añadido al final. 
}, 6000); */
setTimeout(() => {
    newElementDOM2.remove()
    emptycontainerDOM.append(newElementDOM) 
    emptycontainerDOM.append(newElementDOM2)  //!De esta manera podríamos quitar el segundo para que el que estaba en primer lugar antes siga en la misma posición
}, 6000);
 

//! MIRAR MÉTODO .replaceWith()

//* innerText vs innerHTML 

let footerDOM = document.querySelector("#footer")

console.log(footerDOM.innerText)  //! Literalmente es SOLO el texto (string) que hay dentro de las etiquetas que abren y cierran.


console.log(footerDOM.innerHTML) //! Es una versión en string de la estructura que exista dentro de las etiquetas que abren y cierran. ES UN STRING, NO UN OBJETO.

let newString = "patata"

footerDOM.innerHTML = `<h1> <span> ${newString} </span> </h1>` //! Estamos agregando toda una estructura de HTML. En la consola no se muestra como tal, en la ventana de elements sí ya que
                                                              //! es algo visual.


console.log(footerDOM.innerHTML)                                                        



// *EVENTOS (DOM EVENT LISTENERS)
//? Un evento es cualquier momento en el que el usuario interactúa con la página web de alguna manera (escribir, clickear, enviar información, hover, etc)


//* Sintaxis  //! MIRAR TIPOS DE EVENTOS

/* 
target . addEventListener("click", ()=>{

}) */

//addEventListener
//? El evento siempre va a ocurrir, lo que hace el addEvenListener es permitirnos ejecutar algo adicional cuando ese evento sucede, en el caso de abajo, visualmente.


/* let eventTitleDOM = document.querySelector("#event-title") */

//! EJERMPLOS PARA ALMACENAR LSO ESTILOS ORIGINALES 
// let starterText = eventTitleDOM.innerText //! Variable para revertir el proceso tras el evento en este caso mouseenter
// let starterStyle = eventTitleDOM.innerText.style;

/* eventTitleDOM.addEventListener("mouseenter", ()=>{
    console.log("Pasando el cursor por el título")             //! 10script.js:252 Pasando el cursor por el título
eventTitleDOM.innerText = "PATATA"
  // Podemos asignar estilos directamente desde JS
  eventTitleDOM.style.color = "magenta"
  eventTitleDOM.style.backgroundColor = "green";
//* Cuando trabajamos con DOM todos los nombres de propiedades de CSS se escriben con camelcase, background-color = backgroundColor.
} )
//! ESTO SOLO SE ACTIVARÁ CUANDO EL EVENTO SUCEDA  ^^^^
eventTitleDOM.addEventListener("mouseleave", ()=>{
    console.log("Quitando el cursor del título")            
eventTitleDOM.innerText = "EVENTS!";
eventTitleDOM.style.color = "black";
eventTitleDOM.style.backgroundColor = "transparent"; 
} ) */

//! Si se aplicasen los mismos valores tanto en CSS como en JS prevalecerá lo de JS ya que es lo último en leerse.

// mouseenter
// mouseleave
// click
// dblclick
// keydown
// keyup
// submit
// focus

//* REESTRUCTURACIÓN DE CÓDIGO

//*FUNCIONES 


function hoverTitle()
{
  eventTitleDOM.innerText = "PATATA"
  eventTitleDOM.style.color = "magenta"
  eventTitleDOM.style.backgroundColor = "green";
}

function unHoverTitle()
{
eventTitleDOM.innerText = "EVENTS!";
eventTitleDOM.style.color = "black";
eventTitleDOM.style.backgroundColor = "transparent"; 
}

function sumDom(){
    console.log("Probando")  //! Podemos clickear para comprobar en la consola que nuestros cambios son efectivos
    counterDOM.innerText++  // Number(counterDOM.innerText) + 1 (o cualquier número si quisiésemos sumar más de uno)
}

function subsDom(){
    counterDOM.innerText-- //! Podemos añadir una condición para que no baje de 0
}

function addToList()
 {
    console.log("Probando añadir elemento")     //! Una vez comprobamos que funciona podemos seguir con la función
    // Buscamos el valor de texto a agregar. Seleccionamos dónde va a ser escrito ese valor.
     //let inputDOM = document.querySelector("#name")  // (#name) no va a tener acceso a innerText, input es etiqueta de autocierre
     let inputDOM = document.querySelector("#name")  
     let newText = inputDOM.value;
     

    // Creamos un elemento de lista (li)
    let liDOM = document.createElement("li")

    // Le añadimos el texto al li
    liDOM.innerText = newText;
    console.log(liDOM)

    // Añadir el li a la lista
    
    let ulDOM = document.querySelector("#output-list") // Seleccionamos dónde añadiremos los elementos creados
    ulDOM.append(liDOM);

 }


 function deleteBtn(event){              //! Le pasamos como parámetro el evento con el cual haría tal acción, el addEventListener lo hace de manera automática
console.log("Probando borrado de botón")
// console.log(event) // Con esto obtenemos toda la información del evento que sucede al realizar tal acción, en este caso clickear sobre el botón
//buscamos el button que queremos borrar
console.log(event.target) //! Nos dará el elemento específico sobre el cuál ocurre este elemento

// hacemos .remove()

// event.target.remove()
// * Suponemos que el elemento que quiero borrar no es un único botón, sino que son todos los botones.

// Podríamos buscar el div por selector de ID o class.
//! Los tres botones tienen un elemento parent que los abarca.
console.log(event.target.parentNode) // Nos dirá cuál es el elemento que alberga los tres botones.
event.target.parentNode.remove() // Con esto quitaríamos todos los botones
 }



 //! ejemplo con innerHTML para acortar código
 // let ulDOM = document.querySelector("#output-list")
 // ulDOM.innerHTML += `<li>${newtext}</li>`


//* ADDEVENTLISTENERS
let eventTitleDOM = document.querySelector("#event-title")
let counterDOM = document.querySelector("#counter span")
let increaseButton = document.querySelector("#increment")
let decreaseButton = document.querySelector("#decrement")
let addItemBtn = document.querySelector("#add-btn")



eventTitleDOM.addEventListener("mouseenter", hoverTitle)     //! ===> Cuando esto sucede ejecutará la función de arriba
eventTitleDOM.addEventListener("mouseleave", unHoverTitle)      //? Esta es una forma muy limpia de trabajar
increaseButton.addEventListener("click", sumDom)
decreaseButton.addEventListener("click", subsDom)
addItemBtn.addEventListener("click", addToList);

let allBtns = document.querySelectorAll(".last-btn")

allBtns.forEach((eachBtnDOM)=>{
    eachBtnDOM.addEventListener("click", deleteBtn)
})



// CLASS ACTIVITY
//! Añadir eventos que al pulsar los botones se sume o sustraiga un número del contador.  ^^^

//! Crear un evento que agregue cada palabra escrita en la cajetilla vacía se agregue a una lista.

//! Crear un evento que al clickear sobre un botón sea borrado.


