"use strict";
/*
User unknown est différent de any
On peut parser du any en string directement
Avec un unknown, on doit checker avant de parser

Par conséquent il faut mieux utiliser unknown à la place de any

(type peut utilisé)

Ex 1 avec any
Ex 2 avec unknown*/
let userInputAny;
let userNameAny;
// Le check est passant car on utilise any
userInputAny = 5;
userNameAny = userInputAny;
// Ex2
let userInputUnknown;
let userNameunknown;
// Le check est passant car on check d'abord le type
userInputUnknown = "test";
if (typeof userInputUnknown === "string") {
    userNameunknown = userInputUnknown;
}
/*  Il existe un type never pour les retours de méthode
Il permet juste de ne pas renvoyer un void et indique de manière
visible que la méthode ne renvoie rien

(type peut utilisé)

ex : methode jetant une erreur
*/
function throwErro(message) {
    throw { message: message };
}
/*
Pour eviter de faire à chaque fois tsc app.ts,

on peut utiliser l'invite de commande tsc app.ts -w

(correspondant au wathc mode)
(pour quitter le mode wathcmode ctrl + c)
*/
