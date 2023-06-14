
// Variables y operaciones

let nombre = "Lucia";
let apellido = "Nishida";
let username = "Lucia_Nishimiya";
let edad = 19;
let email = "lucia@zuros.xyz";
let mayorDeEdad = true;
let dineroAhorrado = 3000;
let deudas = 453;

const nombreCompleto = `${nombre} ${apellido}`
const dineroReal = dineroAhorrado - deudas;
console.log('Nombre completo' + nombreCompleto);    
console.log('Dinero real' + dineroReal);


// Funciones

const name = "Juan David";
const lastname = "Castro Gallego";
const nickname = "juandc";

function preferName (Name, Lastname , nick) {
    console.log(`Mi nombre es ${Name} ${Lastname}, pero prefiero que me digas ${nick}.`);
};
preferName(name, lastname, nickname);

// Condicionales

const tipoDeSuscripcion = "Basic";
if (tipoDeSuscripcion == "Free") {
	console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion == "Basic") {
	 console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (tipoDeSuscripcion == "Expert") {
	 console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else if (tipoDeSuscripcion == "ExpertPlus") {
	 console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
} else {
	 console.log("No tienes ninguna suscripción");
}

//Ciclos



let i = 0;
while (i < 5) {
  i++;
  console.log(`El valor de i es: ${i}`);
}
let i2 = 10;
while (i2 >= 2) {
  i2--;
  console.log(`El valor de i2 es: ${i2}`);
}


let respuesta = parseInt(prompt('¿Cuánto es 2 + 2?'));

while(respuesta !== 4) {
    alert("Respuesta incorrecta");
    respuesta = parseInt(prompt('¿Cuánto es 2 + 2?'));
}

alert('Felicidades acertaste!');

//Listas

// Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.
let animales = ["Perro", "Gato", "León", "Elefante", "Tigre", "Oso"];
function readArray(array){
	console.log(array[0])
}
readArray(animales);

//Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

function readArray(array) {
    for (let i = 0; i < array.length; i++) {
      console.log(`${i + 1} ${array[i]}`)
    }
  }
  readArray(animales);
//Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).
let laGranjaDePepe = {
    vaca: "Muu",
    cerdo: "Oink",
    gallina: "Kokorako",
    caballo: "ujdshiuvsdfuih",
    oveja: "Beee",
    pato: "Cuac"
  };
  function readObject(object) {
    for (let key in object) {
      console.log(object[key]);
       }
   }
  readObject(laGranjaDePepe);

































  













  