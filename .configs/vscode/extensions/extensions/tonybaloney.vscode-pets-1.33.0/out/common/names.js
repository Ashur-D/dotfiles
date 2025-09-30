"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomName = void 0;
const bunny_1 = require("../panel/pets/bunny");
const cat_1 = require("../panel/pets/cat");
const chicken_1 = require("../panel/pets/chicken");
const morph_1 = require("../panel/pets/morph");
const clippy_1 = require("../panel/pets/clippy");
const cockatiel_1 = require("../panel/pets/cockatiel");
const crab_1 = require("../panel/pets/crab");
const deno_1 = require("../panel/pets/deno");
const dog_1 = require("../panel/pets/dog");
const fox_1 = require("../panel/pets/fox");
const frog_1 = require("../panel/pets/frog");
const mod_1 = require("../panel/pets/mod");
const panda_1 = require("../panel/pets/panda");
const rocky_1 = require("../panel/pets/rocky");
const rubberduck_1 = require("../panel/pets/rubberduck");
const snail_1 = require("../panel/pets/snail");
const snake_1 = require("../panel/pets/snake");
const totoro_1 = require("../panel/pets/totoro");
const zappy_1 = require("../panel/pets/zappy");
const rat_1 = require("../panel/pets/rat");
const turtle_1 = require("../panel/pets/turtle");
const horse_1 = require("../panel/pets/horse");
function randomName(type) {
    const collection = {
        ["bunny" /* PetType.bunny */]: bunny_1.BUNNY_NAMES,
        ["cat" /* PetType.cat */]: cat_1.CAT_NAMES,
        ["chicken" /* PetType.chicken */]: chicken_1.CHICKEN_NAMES,
        ["dog" /* PetType.dog */]: dog_1.DOG_NAMES,
        ["fox" /* PetType.fox */]: fox_1.FOX_NAMES,
        ["frog" /* PetType.frog */]: frog_1.FROG_NAMES,
        ["crab" /* PetType.crab */]: crab_1.CRAB_NAMES,
        ["clippy" /* PetType.clippy */]: clippy_1.CLIPPY_NAMES,
        ["deno" /* PetType.deno */]: deno_1.DENO_NAMES,
        ["mod" /* PetType.mod */]: mod_1.MOD_NAMES,
        ["totoro" /* PetType.totoro */]: totoro_1.TOTORO_NAMES,
        ["snail" /* PetType.snail */]: snail_1.SNAIL_NAMES,
        ["snake" /* PetType.snake */]: snake_1.SNAKE_NAMES,
        ["rubber-duck" /* PetType.rubberduck */]: rubberduck_1.DUCK_NAMES,
        ["zappy" /* PetType.zappy */]: zappy_1.ZAPPY_NAMES,
        ["rocky" /* PetType.rocky */]: rocky_1.ROCKY_NAMES,
        ["cockatiel" /* PetType.cockatiel */]: cockatiel_1.COCKATIEL_NAMES,
        ["rat" /* PetType.rat */]: rat_1.RAT_NAMES,
        ["turtle" /* PetType.turtle */]: turtle_1.TURTLE_NAMES,
        ["horse" /* PetType.horse */]: horse_1.HORSE_NAMES,
        ["panda" /* PetType.panda */]: panda_1.PANDA_NAMES,
        ["morph" /* PetType.morph */]: morph_1.MORPH_NAMES,
    }[type] ?? cat_1.CAT_NAMES;
    return (collection[Math.floor(Math.random() * collection.length)] ?? 'Unknown');
}
exports.randomName = randomName;
//# sourceMappingURL=names.js.map