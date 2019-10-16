/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/

/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

function GameObject(gameAttr) {
  this.createdAt = gameAttr.createdAt,
    this.dimensions = gameAttr.dimensions,
    this.name = gameAttr.name;
}

GameObject.prototype.destroy = function () {
  return `${this.name} was removed from the game`;
}

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/


function CharacterStats(charAttr) {
  this.healthPoints = charAttr.healthPoints,
    GameObject.call(this, charAttr);
}

CharacterStats.prototype = Object.create(GameObject.prototype); // inheritance 

CharacterStats.prototype.takeDamage = function () {
  return `${this.name} took damage!`;
}

CharacterStats.prototype.speak = function () {
  return `${this.name} barked precariously until completely passing out.`;
}


/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/


function Humanoid(humanAttr) {
  this.team = humanAttr.team,
    this.weapons = humanAttr.weapons,
    this.language = humanAttr.language,
    this.born = humanAttr.born,
    CharacterStats.call(this, humanAttr);
}

Humanoid.prototype = Object.create(CharacterStats.prototype); // inheritance 

Humanoid.prototype.greet = function () {
  return `${this.name} offers a greeting in ${this.language}`;
}



/*
 * Inheritance chain: GameObject -> CharacterStats -> Humanoid
 * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
 * Instances of CharacterStats should have all of the same properties as GameObject.
 */

// Test you work by un-commenting these 3 objects and the list of console logs below:


const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1,
  },
  healthPoints: 5,
  name: 'Bruce',
  team: 'Mage Guild',
  weapons: [
    'Staff of Shamalama'
  ],
  language: 'Common Tongue',
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2,
  },
  healthPoints: 15,
  name: 'Sir Mustachio',
  team: 'The Round Table',
  weapons: [
    'Giant Sword',
    'Shield',
  ],
  language: 'Common Tongue',
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  healthPoints: 10,
  name: 'Lilith',
  team: 'Forest Kingdom',
  weapons: [
    'Bow',
    'Dagger',
  ],
  language: 'Elvish',
});

// stretch

function HealhKnock(value) {
  return value - Math.round(Math.random() * 100);
}


// villian
function Villian(villianAttr) {
  Humanoid.call(this, villianAttr);
  HealhKnock.call(this. villianAttr);
  this.attack = villianAttr.attack;
  this.hp = villianAttr.hp;
}

Villian.prototype = Object.create(Humanoid.prototype);


// hero
function Hero(heroAttr) {
  Humanoid.call(this, heroAttr);
  this.attack = heroAttr.attack;
  this.hp = heroAttr.hp;
}

Hero.prototype = Object.create(Humanoid.prototype);




const Kai = new Villian({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  healthPoints: 100,
  name: 'Kai',
  team: 'The Hot Dogs',
  weapons: [
    'Claw',
    ' Attitude',
  ],
  language: 'Elvish',
  attack: 'Claw with a pinch of attitude',
  hp: 100,
});

const Eko = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  healthPoints: 100,
  name: 'Eko',
  team: 'The Potatoes',
  weapons: [
    'Claw',
    ' Mouth',
  ],
  language: 'Elvish',
  attack: 'Steps on your feet',
  hp: 100,
});



console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.



console.log(`3`);
console.log(`2`);
console.log(`1`);
console.log(`Fight!`);
console.log(`${Kai.name} the Villian has ${Kai.healthPoints} healthpoints and the following weapons: ${Kai.weapons}!`);
console.log(`${Eko.name} the Hero has ${Eko.healthPoints} healthpoints and the following weapons: ${Eko.weapons}!`);
console.log(`Who will win?!`);
console.log(`${Kai.name} activates a special attack! (${Kai.attack})`);
console.log(`${Kai.name} does ${HealhKnock(Eko.hp)} damage to ${Eko.name}`);
console.log(`${Eko.name} retaliates back with a special attack! (${Eko.attack}), inducing ${HealhKnock(Kai.hp)} damage!`);



// Stretch task: 
// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
// * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villain and one a hero and fight it out with methods!