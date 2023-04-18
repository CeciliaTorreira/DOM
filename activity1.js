
console.log(document) 

// ITERATION 1: Get the node element with the main title and console.log it

let titleDOM = document.querySelector("title") //! .querySelector busca la referencia del DOM, en este caso el título
let h1DOM = document.querySelector("h1")


// ----------------------------------------------

// ITERATION 2: Console.log the main title text

console.log(titleDOM)
console.log(h1DOM)


// ----------------------------------------------

// ITERATION 3: Get all the nodes with the fruit items into a NodeList. Console.log the NodeList

let fruitsDOM = document.querySelectorAll(".fruits") // Accedemos a la clase ".fruits" como accederíamos a la clase en CSS
console.log(fruitsDOM)


// ----------------------------------------------


//ITERATION 4: Get all the veggie items. Console log the text of each one

let veggiesDOM = document.querySelectorAll(".veggies") // Igual que antes accedemos a la clase veggies como lo haríamos en CSS
console.log(veggiesDOM)

veggiesDOM.forEach((eachveggiesDOM)=>{
    console.log(eachveggiesDOM.innerText) //! Con .innerText mostraremos el texto dentro, no los nodos.
})


// ----------------------------------------------


// ITERATION 5: Add a class 'best-fruit' to all the fruits with an Odd index. 1 & 3
// think about loops, ways to add classes to an element
let allFruits = document.querySelectorAll("fruit-item");

allFruits.forEach((eachfruit, index) => {
  if (index % 2 !== 0) 
  { 
    eachfruit.classList.add("best-fruit")
  }
});

  
// fruitsDOM.classList.add("new-class") // Añadir clase


// => <li class="fruit-item best-fruit">Grapes</li>
// => <li class="fruit-item best-fruit">Plum</li>


// ----------------------------------------------

// ITERATION 6: Remove class 'veggie-item' from all veggies that start with the letter "A" or "T".



// => ... <li>Avocado</li>
// => ... <li>Tomato</li>
