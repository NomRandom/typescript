// Comment faire pour utiliser de multiple type dans une meme methode ?
// on utilise les unions symbolysé par | comme dans l'alias combinable ou en param de la méthode

// litteral types => on associe une (ou plusieurs en utilisant l'union) valeur possible, ce n'est pas de type string ou autre, c'est de type la valeur voulue
// exemple avec l'alias ConversionDescriptor

// on peut utiliser un alias pour representer un input qui peut prendre 2 valeurs (je laisse un exemple avec l'alias et un avec l'union directement)
type Combinable = number | string;
type ConversionDescriptor = "number" | "string";

function combine(
  input1: Combinable,
  input2: number | string,
  whichType: ConversionDescriptor
) {
  let result;
  // controle lors du runtime avec cette condition (sans utiliser le literal)
  /*   if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  } */

  if (whichType === "number") {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  return result;
}

const combinedAges = combine(30, 12, "number");
console.log(combinedAges);

const combineName = combine("lulu", "thierry", "string");
console.log(combineName);

const combineAgeEnString = combine(30, 12, "string");
console.log(combineAgeEnString);

