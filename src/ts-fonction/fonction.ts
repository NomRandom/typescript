// TS arrive a inférer le retour de la fonction,
// pour cette fonction c'est un nombre
function addFunction(n1: number, n2: number) {
  return n1 + n2;
}

// Methode renvoyant void (JS ne connait que le undefinned,
// et du coup TS aussi mais mauvaise pratique)
function printresult(num: number) {
  console.log("Result :" + num);
}

printresult(addFunction(5, 12));

/* 
Il est possible d'associer à une var un type fonction
Par conséquent on peut lui associer des fonction 
ex :
let varFunction:Function;
varFunction = add;

La varFunction est associée à la méthode add qui prend
2 params

Mais on peut lui associer une autre function par la suite,
comme :

varFunction = printresult;

Sauf qu'il n'y a qu'un seul param à présent ce qui peut 
engendrer des erreurs de runtime. Soit à cause du nombre de 
params ou du retour différents

Pour être sur que la var est associée au bon type de function
on peut faire de cette manière :

(on precise le type de param entre les parenthèse et
    le type de sortie apres la flèche)
  */
let combineValues: (n1: number, n2: number) => number;
combineValues = addFunction;

/* 
Par conséquent on ne peut plus associé la var à l'autre 
fonction qui a une signature différente */
//combineValues = printresult;

console.log(combineValues(8, 8));


/* 
Callback function
En gros c'est une fonction qu'on va appeler dans la méthode à un certain moment

La fonction qu'on vient de définir prend en param 2 number
et un fonction avec 1 param number et retourne void
*/
function addAndHandler(n1:number,n2:number, callBackFunction:(num:number)=>void) {
    const result = n1 + n2;
    callBackFunction(result);
}

/* 
si on appelle la méthode précédente avec une fonction anonyme
ca donne ca : 

Attention la fonction anonyme doit respecter le patterne de la fonction
renseignée dans addAndHandler

(PI : une fonction anonyme c'est juste une fonction 
implémenté dans la fonction appelante)*/

addAndHandler(10,58, (paramFuncAnonyme)=> {
    console.log(paramFuncAnonyme);
})