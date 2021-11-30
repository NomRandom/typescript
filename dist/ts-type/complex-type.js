"use strict";
/* Voyons voir pour les objets :
 */
// Creation Enum
var RoleEnEnum;
(function (RoleEnEnum) {
    RoleEnEnum[RoleEnEnum["ADMIN"] = 5] = "ADMIN";
    RoleEnEnum[RoleEnEnum["READ_ONLY"] = 10] = "READ_ONLY";
    RoleEnEnum[RoleEnEnum["AUTHOR"] = 15] = "AUTHOR";
})(RoleEnEnum || (RoleEnEnum = {}));
// Type any => en gros y a pas de type specific associé
// a eviter car c'est comme si on faisait du JS
let anyVar;
//1 er cas : objet simple à la TS (qui ressemble à JS)
const person = {
    name: "Julien",
    age: 28,
    hobbies: ["Sports", "Marseille"],
    role: [2, "author"],
    roleEnEnum: RoleEnEnum.AUTHOR,
};
// 2eme cas d'une syntaxe en TS pour montrer
// le travail sous jacent du TS (les 2 cas font la meme chose)
const person2 = {
    name: "julien",
    age: 30,
    hobbies: ["Sports", "Marseille"],
    role: [2, "author"],
    roleEnEnum: RoleEnEnum.READ_ONLY,
};
console.log(person);
console.log(person2.hobbies);
