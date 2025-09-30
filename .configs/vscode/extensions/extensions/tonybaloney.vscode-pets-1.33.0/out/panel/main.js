"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.petPanelApp = exports.saveState = exports.allPets = void 0;
// This script will be run within the webview itself
const names_1 = require("../common/names");
const pets_1 = require("./pets");
const states_1 = require("./states");
const themes_1 = require("./themes");
const ball_1 = require("./ball");
const FOREGROUND_EFFECT_CANVAS_ID = 'foregroundEffectCanvas';
const BACKGROUND_EFFECT_CANVAS_ID = 'backgroundEffectCanvas';
const PET_CANVAS_ID = 'ballCanvas';
exports.allPets = new pets_1.PetCollection();
var petCounter;
function handleMouseOver(e) {
    var el = e.currentTarget;
    exports.allPets.pets.forEach((element) => {
        if (element.collision === el && element.pet.canSwipe) {
            element.pet.swipe();
        }
    });
}
function startAnimations(collision, pet, stateApi) {
    if (!stateApi) {
        stateApi = acquireVsCodeApi();
    }
    collision.addEventListener('mouseover', handleMouseOver);
}
function addPetToPanel(petType, basePetUri, petColor, petSize, left, bottom, floor, name, stateApi) {
    var petSpriteElement = document.createElement('img');
    petSpriteElement.className = 'pet';
    document.getElementById('petsContainer').appendChild(petSpriteElement);
    var collisionElement = document.createElement('div');
    collisionElement.className = 'collision';
    document.getElementById('petsContainer').appendChild(collisionElement);
    var speechBubbleElement = document.createElement('div');
    speechBubbleElement.className = `bubble bubble-${petSize}`;
    speechBubbleElement.innerText = 'Hello!';
    document.getElementById('petsContainer').appendChild(speechBubbleElement);
    const root = basePetUri + '/' + petType + '/' + petColor;
    console.log('Creating new pet : ', petType, root, petColor, petSize, name);
    try {
        if (!(0, pets_1.availableColors)(petType).includes(petColor)) {
            throw new pets_1.InvalidPetException('Invalid color for pet type');
        }
        var newPet = (0, pets_1.createPet)(petType, petSpriteElement, collisionElement, speechBubbleElement, petSize, left, bottom, root, floor, name);
        petCounter++;
        startAnimations(collisionElement, newPet, stateApi);
    }
    catch (e) {
        // Remove elements
        petSpriteElement.remove();
        collisionElement.remove();
        speechBubbleElement.remove();
        throw e;
    }
    return new pets_1.PetElement(petSpriteElement, collisionElement, speechBubbleElement, newPet, petColor, petType);
}
function saveState(stateApi) {
    if (!stateApi) {
        stateApi = acquireVsCodeApi();
    }
    var state = new states_1.PetPanelState();
    state.petStates = new Array();
    exports.allPets.pets.forEach((petItem) => {
        state.petStates?.push({
            petName: petItem.pet.name,
            petColor: petItem.color,
            petType: petItem.type,
            petState: petItem.pet.getState(),
            petFriend: petItem.pet.friend?.name ?? undefined,
            elLeft: petItem.el.style.left,
            elBottom: petItem.el.style.bottom,
        });
    });
    state.petCounter = petCounter;
    stateApi?.setState(state);
}
exports.saveState = saveState;
function recoverState(basePetUri, petSize, floor, stateApi) {
    if (!stateApi) {
        stateApi = acquireVsCodeApi();
    }
    var state = stateApi?.getState();
    if (!state) {
        petCounter = 1;
    }
    else {
        if (state.petCounter === undefined || isNaN(state.petCounter)) {
            petCounter = 1;
        }
        else {
            petCounter = state.petCounter ?? 1;
        }
    }
    var recoveryMap = new Map();
    state?.petStates?.forEach((p) => {
        // Fixes a bug related to duck animations
        if (p.petType === 'rubber duck') {
            p.petType = 'rubber-duck';
        }
        try {
            var newPet = addPetToPanel(p.petType ?? "cat" /* PetType.cat */, basePetUri, p.petColor ?? "brown" /* PetColor.brown */, petSize, parseInt(p.elLeft ?? '0'), parseInt(p.elBottom ?? '0'), floor, p.petName ?? (0, names_1.randomName)(p.petType ?? "cat" /* PetType.cat */), stateApi);
            exports.allPets.push(newPet);
            recoveryMap.set(newPet.pet, p);
        }
        catch (InvalidPetException) {
            console.log('State had invalid pet (' + p.petType + '), discarding.');
        }
    });
    recoveryMap.forEach((state, pet) => {
        // Recover previous state.
        if (state.petState !== undefined) {
            pet.recoverState(state.petState);
        }
        // Resolve friend relationships
        var friend = undefined;
        if (state.petFriend) {
            friend = exports.allPets.locate(state.petFriend);
            if (friend) {
                pet.recoverFriend(friend.pet);
            }
        }
    });
}
function randomStartPosition() {
    return Math.floor(Math.random() * (window.innerWidth * 0.7));
}
function initCanvas(name) {
    const canvas = document.getElementById(name);
    if (!canvas) {
        console.log('Canvas not ready');
        return null;
    }
    const ctx = canvas.getContext('2d');
    if (!ctx) {
        console.log('Canvas context not ready');
        return null;
    }
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
    return canvas;
}
// It cannot access the main VS Code APIs directly.
function petPanelApp(basePetUri, theme, themeKind, petColor, petSize, petType, throwBallWithMouse, disableEffects, stateApi) {
    if (!stateApi) {
        stateApi = acquireVsCodeApi();
    }
    const themeInfo = themes_1.THEMES[theme];
    // Apply Theme backgrounds
    const foregroundEl = document.getElementById('foreground');
    const backgroundEl = document.getElementById('background');
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    backgroundEl.style.backgroundImage = themeInfo.backgroundImageUrl(basePetUri, themeKind, petSize);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    foregroundEl.style.backgroundImage = themeInfo.foregroundImageUrl(basePetUri, themeKind, petSize);
    const floor = themeInfo.floor(petSize);
    console.log('Starting pet session', petColor, basePetUri, petType, throwBallWithMouse, theme);
    // New session
    var state = stateApi?.getState();
    if (!state) {
        console.log('No state, starting a new session.');
        petCounter = 1;
        exports.allPets.push(addPetToPanel(petType, basePetUri, petColor, petSize, randomStartPosition(), floor, floor, (0, names_1.randomName)(petType), stateApi));
        saveState(stateApi);
    }
    else {
        console.log('Recovering state - ', state);
        recoverState(basePetUri, petSize, floor, stateApi);
    }
    initCanvas(PET_CANVAS_ID);
    (0, ball_1.setupBallThrowing)(PET_CANVAS_ID, petSize, floor);
    if (throwBallWithMouse) {
        (0, ball_1.dynamicThrowOn)(exports.allPets.pets);
    }
    else {
        (0, ball_1.dynamicThrowOff)();
    }
    // Initialize any effects
    if (themeInfo.effect) {
        const foregroundEffectCanvas = initCanvas(FOREGROUND_EFFECT_CANVAS_ID);
        const backgroundEffectCanvas = initCanvas(BACKGROUND_EFFECT_CANVAS_ID);
        if (foregroundEffectCanvas && backgroundEffectCanvas) {
            themeInfo.effect.init(foregroundEffectCanvas, backgroundEffectCanvas, petSize, floor, themeKind);
            if (!disableEffects) {
                themeInfo.effect.enable();
            }
        }
    }
    let windowLoaded = false;
    const onTick = () => {
        if (windowLoaded) {
            exports.allPets.seekNewFriends();
            exports.allPets.pets.forEach((petItem) => {
                petItem.pet.nextFrame();
            });
            saveState(stateApi);
        }
    };
    window.addEventListener('load', () => {
        windowLoaded = true;
    });
    // Handle messages sent from the extension to the webview
    window.addEventListener('message', (event) => {
        const message = event.data; // The json data that the extension sent
        switch (message.command) {
            case 'throw-with-mouse':
                if (message.enabled) {
                    (0, ball_1.dynamicThrowOn)(exports.allPets.pets);
                }
                else {
                    (0, ball_1.dynamicThrowOff)();
                }
                break;
            case 'throw-ball':
                (0, ball_1.throwAndChase)(exports.allPets.pets);
                break;
            case 'spawn-pet':
                exports.allPets.push(addPetToPanel(message.type, basePetUri, message.color, petSize, randomStartPosition(), floor, floor, message.name ?? (0, names_1.randomName)(message.type), stateApi));
                saveState(stateApi);
                break;
            case 'list-pets':
                var pets = exports.allPets.pets;
                stateApi?.postMessage({
                    command: 'list-pets',
                    text: pets
                        .map((pet) => `${pet.type},${pet.pet.name},${pet.color}`)
                        .join('\n'),
                });
                break;
            case 'roll-call':
                var pets = exports.allPets.pets;
                // go through every single
                // pet and then print out their name
                pets.forEach((pet) => {
                    stateApi?.postMessage({
                        command: 'info',
                        text: `${pet.pet.emoji} ${pet.pet.name} (${pet.color} ${pet.type}): ${pet.pet.hello}`,
                    });
                });
            case 'delete-pet':
                var pet = exports.allPets.locatePet(message.name, message.type, message.color);
                if (pet) {
                    exports.allPets.remove(pet);
                    saveState(stateApi);
                    stateApi?.postMessage({
                        command: 'info',
                        text: '👋 Removed pet ' + message.name,
                    });
                }
                else {
                    stateApi?.postMessage({
                        command: 'error',
                        text: `Could not find pet ${message.name}`,
                    });
                }
                break;
            case 'reset-pet':
                exports.allPets.reset();
                petCounter = 0;
                saveState(stateApi);
                break;
            case 'pause-pet':
                petCounter = 1;
                saveState(stateApi);
                break;
            case 'disable-effects':
                if (themeInfo.effect && message.disabled) {
                    themeInfo.effect.disable();
                }
                else if (themeInfo.effect && !message.disabled) {
                    themeInfo.effect.enable();
                }
                break;
            case 'tick':
                onTick();
                break;
        }
    });
    window.addEventListener('resize', function () {
        initCanvas(PET_CANVAS_ID);
        initCanvas(FOREGROUND_EFFECT_CANVAS_ID);
        initCanvas(BACKGROUND_EFFECT_CANVAS_ID);
        // If current theme has an effect, handle resize
        if (themeInfo.effect) {
            themeInfo.effect.handleResize();
        }
    });
}
exports.petPanelApp = petPanelApp;
//# sourceMappingURL=main.js.map