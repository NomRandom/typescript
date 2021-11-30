console.log("hello there, it's me mario");

let typeNombre: number; // nombre, pas de différence entre integer / float double
let typeString: string; // String pouvant etre encadré par ' ', " ", ' '
let typeBoolean: boolean; // true ou false, pas de truthy or falsy (qui existe en JS)

const number1 = 5;
const number2 = 3;
const toPrint = true;
const phrase = "lololl ";

/* Méthode en JS qui peut concaténer en string 
dans le cas ou on renseigne un string par ex
alors qu'on veut une addition */
// function add(n1, n2){
//     return n1 + n2;
// }

/*  Méthode TS qui oblige le typage des vars
 */
function add(n1: number, n2: number, showResult: boolean, input: string) {
  console.log(typeof number1);
  const result = n1 + n2;
  if (toPrint) {
    console.log(input + result); 
  } else {
    return result;
  }
}
add(number1, number2, toPrint, phrase);
