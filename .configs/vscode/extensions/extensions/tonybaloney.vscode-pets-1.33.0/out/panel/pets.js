"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizeColor = exports.availableColors = exports.createPet = exports.InvalidPetException = exports.PetCollection = exports.PetElement = void 0;
const bunny_1 = require("./pets/bunny");
const cat_1 = require("./pets/cat");
const chicken_1 = require("./pets/chicken");
const clippy_1 = require("./pets/clippy");
const cockatiel_1 = require("./pets/cockatiel");
const crab_1 = require("./pets/crab");
const deno_1 = require("./pets/deno");
const dog_1 = require("./pets/dog");
const fox_1 = require("./pets/fox");
const frog_1 = require("./pets/frog");
const horse_1 = require("./pets/horse");
const mod_1 = require("./pets/mod");
const morph_1 = require("./pets/morph");
const panda_1 = require("./pets/panda");
const rat_1 = require("./pets/rat");
const rocky_1 = require("./pets/rocky");
const rubberduck_1 = require("./pets/rubberduck");
const snail_1 = require("./pets/snail");
const snake_1 = require("./pets/snake");
const totoro_1 = require("./pets/totoro");
const turtle_1 = require("./pets/turtle");
const zappy_1 = require("./pets/zappy");
class PetElement {
    el;
    collision;
    speech;
    pet;
    color;
    type;
    remove() {
        this.el.remove();
        this.collision.remove();
        this.speech.remove();
        this.color = "null" /* PetColor.null */;
        this.type = "null" /* PetType.null */;
    }
    constructor(el, collision, speech, pet, color, type) {
        this.el = el;
        this.collision = collision;
        this.speech = speech;
        this.pet = pet;
        this.color = color;
        this.type = type;
    }
}
exports.PetElement = PetElement;
class PetCollection {
    _pets;
    constructor() {
        this._pets = new Array(0);
    }
    get pets() {
        return this._pets;
    }
    push(pet) {
        this._pets.push(pet);
    }
    reset() {
        this._pets.forEach((pet) => {
            pet.remove();
        });
        this._pets = [];
    }
    locate(name) {
        return this._pets.find((collection) => {
            return collection.pet.name === name;
        });
    }
    locatePet(name, type, color) {
        return this._pets.find((collection) => {
            return (collection.pet.name === name &&
                collection.type === type &&
                collection.color === color);
        });
    }
    remove(targetPet) {
        this._pets.forEach((pet) => {
            if (pet === targetPet) {
                pet.remove();
            }
        });
        this._pets = this._pets.filter((pet) => {
            return pet !== targetPet;
        });
    }
    seekNewFriends() {
        if (this._pets.length <= 1) {
            return;
        } // You can't be friends with yourself.
        const theFriendless = this._pets.filter((pet) => !pet.pet.hasFriend);
        if (theFriendless.length <= 1) {
            return;
        } // Nobody to be friends with.
        theFriendless.forEach((lonelyPet) => {
            const potentialFriends = theFriendless.filter((pet) => pet !== lonelyPet); // Exclude the lonely pet itself.
            potentialFriends.forEach((potentialFriend) => {
                if (!potentialFriend.pet.canChase) {
                    return;
                } // Pet is busy doing something else.
                if (potentialFriend.pet.left > lonelyPet.pet.left &&
                    potentialFriend.pet.left <
                        lonelyPet.pet.left + lonelyPet.pet.width) {
                    // We found a possible new friend..
                    console.log(lonelyPet.pet.name, ' wants to be friends with ', potentialFriend.pet.name, '.');
                    if (lonelyPet.pet.makeFriendsWith(potentialFriend.pet)) {
                        potentialFriend.pet.showSpeechBubble('❤️', 2000);
                        lonelyPet.pet.showSpeechBubble('❤️', 2000);
                    }
                }
            });
        });
    }
}
exports.PetCollection = PetCollection;
class InvalidPetException {
    message;
    constructor(message) {
        this.message = message;
    }
}
exports.InvalidPetException = InvalidPetException;
function createPet(petType, el, collision, speech, size, left, bottom, petRoot, floor, name) {
    if (name === undefined || name === null || name === '') {
        throw new InvalidPetException('name is undefined');
    }
    const standardPetArguments = [el, collision, speech, size, left, bottom, petRoot, floor, name];
    switch (petType) {
        case "bunny" /* PetType.bunny */:
            return new bunny_1.Bunny(...standardPetArguments, 5 /* PetSpeed.veryFast */);
        case "cat" /* PetType.cat */:
            return new cat_1.Cat(...standardPetArguments, 3 /* PetSpeed.normal */);
        case "chicken" /* PetType.chicken */:
            return new chicken_1.Chicken(...standardPetArguments, 3 /* PetSpeed.normal */);
        case "deno" /* PetType.deno */:
            return new deno_1.Deno(...standardPetArguments, 2 /* PetSpeed.slow */);
        case "dog" /* PetType.dog */:
            return new dog_1.Dog(...standardPetArguments, 3 /* PetSpeed.normal */);
        case "fox" /* PetType.fox */:
            return new fox_1.Fox(...standardPetArguments, 4 /* PetSpeed.fast */);
        case "frog" /* PetType.frog */:
            return new frog_1.Frog(...standardPetArguments, 3 /* PetSpeed.normal */);
        case "crab" /* PetType.crab */:
            return new crab_1.Crab(...standardPetArguments, 2 /* PetSpeed.slow */);
        case "clippy" /* PetType.clippy */:
            return new clippy_1.Clippy(...standardPetArguments, 2 /* PetSpeed.slow */);
        case "mod" /* PetType.mod */:
            return new mod_1.Mod(...standardPetArguments, 3 /* PetSpeed.normal */);
        case "totoro" /* PetType.totoro */:
            return new totoro_1.Totoro(...standardPetArguments, 3 /* PetSpeed.normal */);
        case "snail" /* PetType.snail */:
            return new snail_1.Snail(...standardPetArguments, 1 /* PetSpeed.verySlow */);
        case "snake" /* PetType.snake */:
            return new snake_1.Snake(...standardPetArguments, 1 /* PetSpeed.verySlow */);
        case "rubber-duck" /* PetType.rubberduck */:
            return new rubberduck_1.RubberDuck(...standardPetArguments, 4 /* PetSpeed.fast */);
        case "zappy" /* PetType.zappy */:
            return new zappy_1.Zappy(...standardPetArguments, 5 /* PetSpeed.veryFast */);
        case "rocky" /* PetType.rocky */:
            return new rocky_1.Rocky(...standardPetArguments, 0 /* PetSpeed.still */);
        case "cockatiel" /* PetType.cockatiel */:
            return new cockatiel_1.Cockatiel(...standardPetArguments, 3 /* PetSpeed.normal */);
        case "rat" /* PetType.rat */:
            return new rat_1.Rat(...standardPetArguments, 3 /* PetSpeed.normal */);
        case "turtle" /* PetType.turtle */:
            return new turtle_1.Turtle(...standardPetArguments, 1 /* PetSpeed.verySlow */);
        case "horse" /* PetType.horse */:
            return new horse_1.Horse(...standardPetArguments, 3 /* PetSpeed.normal */);
        case "panda" /* PetType.panda */:
            return new panda_1.Panda(...standardPetArguments, 2 /* PetSpeed.slow */);
        case "morph" /* PetType.morph */:
            return new morph_1.Morph(...standardPetArguments, 3 /* PetSpeed.normal */);
        default:
            throw new InvalidPetException("Pet type doesn't exist");
    }
}
exports.createPet = createPet;
function availableColors(petType) {
    switch (petType) {
        case "bunny" /* PetType.bunny */:
            return bunny_1.Bunny.possibleColors;
        case "cat" /* PetType.cat */:
            return cat_1.Cat.possibleColors;
        case "chicken" /* PetType.chicken */:
            return chicken_1.Chicken.possibleColors;
        case "morph" /* PetType.morph */:
            return morph_1.Morph.possibleColors;
        case "dog" /* PetType.dog */:
            return dog_1.Dog.possibleColors;
        case "deno" /* PetType.deno */:
            return deno_1.Deno.possibleColors;
        case "fox" /* PetType.fox */:
            return fox_1.Fox.possibleColors;
        case "frog" /* PetType.frog */:
            return frog_1.Frog.possibleColors;
        case "crab" /* PetType.crab */:
            return crab_1.Crab.possibleColors;
        case "clippy" /* PetType.clippy */:
            return clippy_1.Clippy.possibleColors;
        case "mod" /* PetType.mod */:
            return mod_1.Mod.possibleColors;
        case "totoro" /* PetType.totoro */:
            return totoro_1.Totoro.possibleColors;
        case "snail" /* PetType.snail */:
            return snail_1.Snail.possibleColors;
        case "snake" /* PetType.snake */:
            return snake_1.Snake.possibleColors;
        case "rubber-duck" /* PetType.rubberduck */:
            return rubberduck_1.RubberDuck.possibleColors;
        case "zappy" /* PetType.zappy */:
            return zappy_1.Zappy.possibleColors;
        case "rocky" /* PetType.rocky */:
            return rocky_1.Rocky.possibleColors;
        case "cockatiel" /* PetType.cockatiel */:
            return cockatiel_1.Cockatiel.possibleColors;
        case "rat" /* PetType.rat */:
            return rat_1.Rat.possibleColors;
        case "turtle" /* PetType.turtle */:
            return turtle_1.Turtle.possibleColors;
        case "horse" /* PetType.horse */:
            return horse_1.Horse.possibleColors;
        case "panda" /* PetType.panda */:
            return panda_1.Panda.possibleColors;
        default:
            throw new InvalidPetException("Pet type doesn't exist");
    }
}
exports.availableColors = availableColors;
/**
 * Some pets can only have certain colors, this makes sure they haven't been misconfigured.
 * @param petColor
 * @param petType
 * @returns normalized color
 */
function normalizeColor(petColor, petType) {
    const colors = availableColors(petType);
    if (colors.includes(petColor)) {
        return petColor;
    }
    else {
        return colors[0];
    }
}
exports.normalizeColor = normalizeColor;
//# sourceMappingURL=pets.js.map