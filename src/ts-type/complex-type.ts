/* Voyons voir pour les objets :
 */

// Creation Enum
enum RoleEnEnum {
  ADMIN = 5,
  READ_ONLY = 10,
  AUTHOR = 15,
}

// Type any => en gros y a pas de type specific associé
// a eviter car c'est comme si on faisait du JS

let anyVar: any;

//1 er cas : objet simple à la TS (qui ressemble à JS)
const person: object = {
  name: "Julien",
  age: 28,
  hobbies: ["Sports", "Marseille"],
  role: [2, "author"], // ici ce n'est pas une tuple car ts infere que c'est une array qui peut avoir 2 type d'elems mais qui peut avoir n elems dedans
  roleEnEnum: RoleEnEnum.AUTHOR,
};

// 2eme cas d'une syntaxe en TS pour montrer
// le travail sous jacent du TS (les 2 cas font la meme chose)
const person2: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; // objet de type 'tuple', c'est une array fixe de x elements (ici 2), qui peuvent être de différentes typologie
  roleEnEnum: number;
} = {
  name: "julien",
  age: 30,
  hobbies: ["Sports", "Marseille"],
  role: [2, "author"],
  roleEnEnum: RoleEnEnum.READ_ONLY,
};

console.log(person);

console.log(person2.hobbies);
