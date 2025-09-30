"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.spawnPetDeactivate = exports.activate = exports.storeCollectionAsMemento = exports.PetSpecification = void 0;
const vscode = require("vscode");
const types_1 = require("../common/types");
const names_1 = require("../common/names");
const localize = require("../common/localize");
const pets_1 = require("../panel/pets");
const EXTRA_PETS_KEY = 'vscode-pets.extra-pets';
const EXTRA_PETS_KEY_TYPES = EXTRA_PETS_KEY + '.types';
const EXTRA_PETS_KEY_COLORS = EXTRA_PETS_KEY + '.colors';
const EXTRA_PETS_KEY_NAMES = EXTRA_PETS_KEY + '.names';
const DEFAULT_PET_SCALE = "nano" /* PetSize.nano */;
const DEFAULT_COLOR = "brown" /* PetColor.brown */;
const DEFAULT_PET_TYPE = "cat" /* PetType.cat */;
const DEFAULT_POSITION = "panel" /* ExtPosition.panel */;
const DEFAULT_THEME = "none" /* Theme.none */;
class PetQuickPickItem {
    name_;
    type;
    color;
    constructor(name_, type, color) {
        this.name_ = name_;
        this.type = type;
        this.color = color;
        this.name = name_;
        this.label = name_;
        this.description = `${color} ${type}`;
    }
    name;
    label;
    kind;
    description;
    detail;
    picked;
    alwaysShow;
    buttons;
}
let webviewViewProvider;
function getConfiguredSize() {
    var size = vscode.workspace
        .getConfiguration('vscode-pets')
        .get('petSize', DEFAULT_PET_SCALE);
    if (types_1.ALL_SCALES.lastIndexOf(size) === -1) {
        size = DEFAULT_PET_SCALE;
    }
    return size;
}
function getConfiguredTheme() {
    var theme = vscode.workspace
        .getConfiguration('vscode-pets')
        .get('theme', DEFAULT_THEME);
    if (types_1.ALL_THEMES.lastIndexOf(theme) === -1) {
        theme = DEFAULT_THEME;
    }
    return theme;
}
function getConfiguredThemeKind() {
    return vscode.window.activeColorTheme.kind;
}
function getConfigurationPosition() {
    return vscode.workspace
        .getConfiguration('vscode-pets')
        .get('position', DEFAULT_POSITION);
}
function getThrowWithMouseConfiguration() {
    return vscode.workspace
        .getConfiguration('vscode-pets')
        .get('throwBallWithMouse', true);
}
function getEffectsDisabledConfiguration() {
    return vscode.workspace
        .getConfiguration('vscode-pets')
        .get('disableEffects', false);
}
function updatePanelDisableEffects() {
    const panel = getPetPanel();
    if (panel !== undefined) {
        panel.updateDisableEffects(getEffectsDisabledConfiguration());
    }
}
function updatePanelThrowWithMouse() {
    const panel = getPetPanel();
    if (panel !== undefined) {
        panel.setThrowWithMouse(getThrowWithMouseConfiguration());
    }
}
async function updateExtensionPositionContext() {
    await vscode.commands.executeCommand('setContext', 'vscode-pets.position', getConfigurationPosition());
}
class PetSpecification {
    color;
    type;
    size;
    name;
    constructor(color, type, size, name) {
        this.color = color;
        this.type = type;
        this.size = size;
        if (!name) {
            this.name = (0, names_1.randomName)(type);
        }
        else {
            this.name = name;
        }
    }
    static fromConfiguration() {
        var color = vscode.workspace
            .getConfiguration('vscode-pets')
            .get('petColor', DEFAULT_COLOR);
        if (types_1.ALL_COLORS.lastIndexOf(color) === -1) {
            color = DEFAULT_COLOR;
        }
        var type = vscode.workspace
            .getConfiguration('vscode-pets')
            .get('petType', DEFAULT_PET_TYPE);
        if (types_1.ALL_PETS.lastIndexOf(type) === -1) {
            type = DEFAULT_PET_TYPE;
        }
        return new PetSpecification(color, type, getConfiguredSize());
    }
    static collectionFromMemento(context, size) {
        var contextTypes = context.globalState.get(EXTRA_PETS_KEY_TYPES, []);
        var contextColors = context.globalState.get(EXTRA_PETS_KEY_COLORS, []);
        var contextNames = context.globalState.get(EXTRA_PETS_KEY_NAMES, []);
        var result = new Array();
        for (let index = 0; index < contextTypes.length; index++) {
            result.push(new PetSpecification(contextColors?.[index] ?? DEFAULT_COLOR, contextTypes[index], size, contextNames[index]));
        }
        return result;
    }
}
exports.PetSpecification = PetSpecification;
async function storeCollectionAsMemento(context, collection) {
    var contextTypes = new Array(collection.length);
    var contextColors = new Array(collection.length);
    var contextNames = new Array(collection.length);
    for (let index = 0; index < collection.length; index++) {
        contextTypes[index] = collection[index].type;
        contextColors[index] = collection[index].color;
        contextNames[index] = collection[index].name;
    }
    await context.globalState.update(EXTRA_PETS_KEY_TYPES, contextTypes);
    await context.globalState.update(EXTRA_PETS_KEY_COLORS, contextColors);
    await context.globalState.update(EXTRA_PETS_KEY_NAMES, contextNames);
    context.globalState.setKeysForSync([
        EXTRA_PETS_KEY_TYPES,
        EXTRA_PETS_KEY_COLORS,
        EXTRA_PETS_KEY_NAMES,
    ]);
}
exports.storeCollectionAsMemento = storeCollectionAsMemento;
let spawnPetStatusBar;
async function handleRemovePetMessage(message) {
    var petList = Array();
    switch (message.command) {
        case 'list-pets':
            message.text.split('\n').forEach((pet) => {
                if (!pet) {
                    return;
                }
                var parts = pet.split(',');
                petList.push({
                    type: parts[0],
                    name: parts[1],
                    color: parts[2],
                });
            });
            break;
        default:
            return;
    }
    if (!petList) {
        return;
    }
    if (!petList.length) {
        await vscode.window.showErrorMessage(vscode.l10n.t('There are no pets to remove.'));
        return;
    }
    await vscode.window
        .showQuickPick(petList.map((val) => {
        return new PetQuickPickItem(val.name, val.type, val.color);
    }), {
        placeHolder: vscode.l10n.t('Select the pet to remove.'),
    })
        .then(async (pet) => {
        if (pet) {
            const panel = getPetPanel();
            if (panel !== undefined) {
                panel.deletePet(pet.name, pet.type, pet.color);
                const collection = petList
                    .filter((item) => {
                    return item.name !== pet.name;
                })
                    .map((item) => {
                    return new PetSpecification(item.color, item.type, "medium" /* PetSize.medium */, item.name);
                });
                await storeCollectionAsMemento(this, collection);
            }
        }
    });
}
function getPetPanel() {
    if (getConfigurationPosition() === "explorer" /* ExtPosition.explorer */ &&
        webviewViewProvider) {
        return webviewViewProvider;
    }
    else if (PetPanel.currentPanel) {
        return PetPanel.currentPanel;
    }
    else {
        return undefined;
    }
}
function getWebview() {
    if (getConfigurationPosition() === "explorer" /* ExtPosition.explorer */ &&
        webviewViewProvider) {
        return webviewViewProvider.getWebview();
    }
    else if (PetPanel.currentPanel) {
        return PetPanel.currentPanel.getWebview();
    }
}
function activate(context) {
    context.subscriptions.push(vscode.commands.registerCommand('vscode-pets.start', async () => {
        if (getConfigurationPosition() === "explorer" /* ExtPosition.explorer */ &&
            webviewViewProvider) {
            await vscode.commands.executeCommand('petsView.focus');
        }
        else {
            const spec = PetSpecification.fromConfiguration();
            PetPanel.createOrShow(context.extensionUri, spec.color, spec.type, spec.size, getConfiguredTheme(), getConfiguredThemeKind(), getThrowWithMouseConfiguration(), getEffectsDisabledConfiguration());
            if (PetPanel.currentPanel) {
                var collection = PetSpecification.collectionFromMemento(context, getConfiguredSize());
                collection.forEach((item) => {
                    PetPanel.currentPanel?.spawnPet(item);
                });
                // Store the collection in the memento, incase any of the null values (e.g. name) have been set
                await storeCollectionAsMemento(context, collection);
            }
        }
    }));
    spawnPetStatusBar = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
    spawnPetStatusBar.command = 'vscode-pets.spawn-pet';
    context.subscriptions.push(spawnPetStatusBar);
    context.subscriptions.push(vscode.window.onDidChangeActiveTextEditor(updateStatusBar));
    context.subscriptions.push(vscode.window.onDidChangeTextEditorSelection(updateStatusBar));
    context.subscriptions.push(vscode.window.onDidChangeActiveTextEditor(updateExtensionPositionContext));
    updateStatusBar();
    const spec = PetSpecification.fromConfiguration();
    webviewViewProvider = new PetWebviewViewProvider(context.extensionUri, spec.color, spec.type, spec.size, getConfiguredTheme(), getConfiguredThemeKind(), getThrowWithMouseConfiguration(), getEffectsDisabledConfiguration());
    updateExtensionPositionContext().catch((e) => {
        console.error(e);
    });
    context.subscriptions.push(vscode.window.registerWebviewViewProvider(PetWebviewViewProvider.viewType, webviewViewProvider));
    context.subscriptions.push(vscode.commands.registerCommand('vscode-pets.throw-ball', () => {
        const panel = getPetPanel();
        if (panel !== undefined) {
            panel.throwBall();
        }
    }));
    context.subscriptions.push(vscode.commands.registerCommand('vscode-pets.delete-pet', async () => {
        const panel = getPetPanel();
        if (panel !== undefined) {
            panel.listPets();
            getWebview()?.onDidReceiveMessage(handleRemovePetMessage, context);
        }
        else {
            await createPetPlayground(context);
        }
    }));
    context.subscriptions.push(vscode.commands.registerCommand('vscode-pets.roll-call', async () => {
        const panel = getPetPanel();
        if (panel !== undefined) {
            panel.rollCall();
        }
        else {
            await createPetPlayground(context);
        }
    }));
    context.subscriptions.push(vscode.commands.registerCommand('vscode-pets.export-pet-list', async () => {
        const pets = PetSpecification.collectionFromMemento(context, getConfiguredSize());
        const petJson = JSON.stringify(pets, null, 2);
        const fileName = `pets-${Date.now()}.json`;
        if (!vscode.workspace.workspaceFolders) {
            await vscode.window.showErrorMessage(vscode.l10n.t('You must have a folder or workspace open to export pets.'));
            return;
        }
        const filePath = vscode.Uri.joinPath(vscode.workspace.workspaceFolders[0].uri, fileName);
        const newUri = vscode.Uri.file(fileName).with({
            scheme: 'untitled',
            path: filePath.fsPath,
        });
        await vscode.workspace
            .openTextDocument(newUri)
            .then(async (doc) => {
            await vscode.window
                .showTextDocument(doc)
                .then(async (editor) => {
                await editor.edit((edit) => {
                    edit.insert(new vscode.Position(0, 0), petJson);
                });
            });
        });
    }));
    context.subscriptions.push(vscode.commands.registerCommand('vscode-pets.import-pet-list', async () => {
        const options = {
            canSelectMany: false,
            openLabel: 'Open pets.json',
            filters: {
                json: ['json'],
            },
        };
        const fileUri = await vscode.window.showOpenDialog(options);
        if (fileUri && fileUri[0]) {
            console.log('Selected file: ' + fileUri[0].fsPath);
            try {
                const fileContents = await vscode.workspace.fs.readFile(fileUri[0]);
                const petsToLoad = JSON.parse(String.fromCharCode.apply(null, Array.from(fileContents)));
                // load the pets into the collection
                var collection = PetSpecification.collectionFromMemento(context, getConfiguredSize());
                // fetch just the pet types
                const panel = getPetPanel();
                for (let i = 0; i < petsToLoad.length; i++) {
                    const pet = petsToLoad[i];
                    const petSpec = new PetSpecification((0, pets_1.normalizeColor)(pet.color, pet.type), pet.type, pet.size, pet.name);
                    collection.push(petSpec);
                    if (panel !== undefined) {
                        panel.spawnPet(petSpec);
                    }
                }
                await storeCollectionAsMemento(context, collection);
            }
            catch (e) {
                await vscode.window.showErrorMessage(vscode.l10n.t('Failed to import pets: {0}', e?.message));
            }
        }
    }));
    const pathExists = async (uri) => {
        try {
            await vscode.workspace.fs.stat(uri);
            return true; // File exists
        }
        catch {
            return false; // File doesn't exist
        }
    };
    const getPetIconPath = async (petType, color) => {
        if (color) {
            const colorClean = color.replace(' ', '_');
            const iconColorUri = vscode.Uri.joinPath(context.extensionUri, 'media', petType, `icon_${colorClean}.png`);
            if (await pathExists(iconColorUri)) {
                return iconColorUri;
            }
        }
        const iconUri = vscode.Uri.joinPath(context.extensionUri, 'media', petType, 'icon.png');
        if (await pathExists(iconUri)) {
            return iconUri;
        }
        // No custom icon found, use fallback
        return vscode.Uri.joinPath(context.extensionUri, 'media', 'cat.svg');
    };
    context.subscriptions.push(vscode.commands.registerCommand('vscode-pets.spawn-pet', async () => {
        const panel = getPetPanel();
        if (getConfigurationPosition() === "explorer" /* ExtPosition.explorer */ &&
            webviewViewProvider) {
            await vscode.commands.executeCommand('petsView.focus');
        }
        if (panel) {
            // Create QuickPick items with proper icon paths
            const quickPickItems = await Promise.all(localize
                .stringListAsQuickPickItemList(types_1.ALL_PETS)
                .map(async (qpi) => ({
                ...qpi,
                iconPath: await getPetIconPath(qpi.value),
            })));
            const selectedPetType = await vscode.window.showQuickPick(quickPickItems, {
                placeHolder: vscode.l10n.t('Select a pet'),
            });
            if (selectedPetType === undefined) {
                console.log('Cancelled Spawning Pet - No Pet Type Selected');
                return;
            }
            var petColor = DEFAULT_COLOR;
            const possibleColors = (0, pets_1.availableColors)(selectedPetType.value);
            if (possibleColors.length > 1) {
                const colorQuickPickItems = await Promise.all(localize
                    .stringListAsQuickPickItemList(possibleColors)
                    .map(async (qpi) => ({
                    ...qpi,
                    iconPath: await getPetIconPath(selectedPetType.value, qpi.value),
                })));
                var selectedColor = await vscode.window.showQuickPick(colorQuickPickItems, {
                    placeHolder: vscode.l10n.t('Select a color'),
                });
                if (selectedColor === undefined) {
                    console.log('Cancelled Spawning Pet - No Pet Color Selected');
                    return;
                }
                petColor = selectedColor.value;
            }
            else {
                petColor = possibleColors[0];
            }
            if (petColor === undefined) {
                console.log('Cancelled Spawning Pet - No Pet Color Selected');
                return;
            }
            const name = await vscode.window.showInputBox({
                placeHolder: vscode.l10n.t('Leave blank for a random name'),
                prompt: vscode.l10n.t('Name your pet'),
                value: (0, names_1.randomName)(selectedPetType.value),
            });
            const spec = new PetSpecification(petColor, selectedPetType.value, getConfiguredSize(), name);
            if (!spec.type || !spec.color || !spec.size) {
                return vscode.window.showWarningMessage(vscode.l10n.t('Cancelled Spawning Pet'));
            }
            else if (spec) {
                panel.spawnPet(spec);
            }
            var collection = PetSpecification.collectionFromMemento(context, getConfiguredSize());
            collection.push(spec);
            await storeCollectionAsMemento(context, collection);
        }
        else {
            await createPetPlayground(context);
            await vscode.window.showInformationMessage(vscode.l10n.t("A Pet Playground has been created. You can now use the 'Spawn Additional Pet' Command to add more pets."));
        }
    }));
    context.subscriptions.push(vscode.commands.registerCommand('vscode-pets.remove-all-pets', async () => {
        const panel = getPetPanel();
        if (panel !== undefined) {
            panel.resetPets();
            await storeCollectionAsMemento(context, []);
        }
        else {
            await createPetPlayground(context);
            await vscode.window.showInformationMessage(vscode.l10n.t("A Pet Playground has been created. You can now use the 'Remove All Pets' Command to remove all pets."));
        }
    }));
    // Listening to configuration changes
    context.subscriptions.push(vscode.workspace.onDidChangeConfiguration((e) => {
        if (e.affectsConfiguration('vscode-pets.petColor') ||
            e.affectsConfiguration('vscode-pets.petType') ||
            e.affectsConfiguration('vscode-pets.petSize') ||
            e.affectsConfiguration('vscode-pets.theme') ||
            e.affectsConfiguration('workbench.colorTheme')) {
            const spec = PetSpecification.fromConfiguration();
            const panel = getPetPanel();
            if (panel) {
                panel.updatePetColor(spec.color);
                panel.updatePetSize(spec.size);
                panel.updatePetType(spec.type);
                panel.updateTheme(getConfiguredTheme(), getConfiguredThemeKind());
                panel.update();
            }
        }
        if (e.affectsConfiguration('vscode-pets.position')) {
            void updateExtensionPositionContext();
        }
        if (e.affectsConfiguration('vscode-pets.throwBallWithMouse')) {
            updatePanelThrowWithMouse();
        }
        if (e.affectsConfiguration('vscode-pets.disableEffects')) {
            updatePanelDisableEffects();
        }
    }));
    if (vscode.window.registerWebviewPanelSerializer) {
        // Make sure we register a serializer in activation event
        vscode.window.registerWebviewPanelSerializer(PetPanel.viewType, {
            async deserializeWebviewPanel(webviewPanel) {
                // Reset the webview options so we use latest uri for `localResourceRoots`.
                webviewPanel.webview.options = getWebviewOptions(context.extensionUri);
                const spec = PetSpecification.fromConfiguration();
                PetPanel.revive(webviewPanel, context.extensionUri, spec.color, spec.type, spec.size, getConfiguredTheme(), getConfiguredThemeKind(), getThrowWithMouseConfiguration(), getEffectsDisabledConfiguration());
            },
        });
    }
}
exports.activate = activate;
function updateStatusBar() {
    spawnPetStatusBar.text = `$(squirrel)`;
    spawnPetStatusBar.tooltip = vscode.l10n.t('Spawn Pet');
    spawnPetStatusBar.show();
}
function spawnPetDeactivate() {
    spawnPetStatusBar.dispose();
}
exports.spawnPetDeactivate = spawnPetDeactivate;
function getWebviewOptions(extensionUri) {
    return {
        // Enable javascript in the webview
        enableScripts: true,
        // And restrict the webview to only loading content from our extension's `media` directory.
        localResourceRoots: [vscode.Uri.joinPath(extensionUri, 'media')],
    };
}
class PetWebviewContainer {
    _extensionUri;
    _disposables = [];
    _petColor;
    _petType;
    _petSize;
    _theme;
    _themeKind;
    _throwBallWithMouse;
    _disableEffects;
    _tickIntervalId;
    constructor(extensionUri, color, type, size, theme, themeKind, throwBallWithMouse, disableEffects) {
        this._extensionUri = extensionUri;
        this._petColor = color;
        this._petType = type;
        this._petSize = size;
        this._theme = theme;
        this._themeKind = themeKind;
        this._throwBallWithMouse = throwBallWithMouse;
        this._disableEffects = disableEffects;
        this._tickIntervalId = setInterval(() => {
            this.tick();
        }, 100);
    }
    petColor() {
        return (0, pets_1.normalizeColor)(this._petColor, this._petType);
    }
    petType() {
        return this._petType;
    }
    petSize() {
        return this._petSize;
    }
    theme() {
        return this._theme;
    }
    themeKind() {
        return this._themeKind;
    }
    throwBallWithMouse() {
        return this._throwBallWithMouse;
    }
    disableEffects() {
        return this._disableEffects;
    }
    updatePetColor(newColor) {
        this._petColor = newColor;
    }
    updatePetType(newType) {
        this._petType = newType;
    }
    updatePetSize(newSize) {
        this._petSize = newSize;
    }
    updateTheme(newTheme, themeKind) {
        this._theme = newTheme;
        this._themeKind = themeKind;
    }
    setThrowWithMouse(newThrowWithMouse) {
        this._throwBallWithMouse = newThrowWithMouse;
        void this.getWebview().postMessage({
            command: 'throw-with-mouse',
            enabled: newThrowWithMouse,
        });
    }
    updateDisableEffects(disableEffects) {
        this._disableEffects = disableEffects;
        void this.getWebview().postMessage({
            command: 'disable-effects',
            disabled: disableEffects,
        });
    }
    throwBall() {
        void this.getWebview().postMessage({
            command: 'throw-ball',
        });
    }
    resetPets() {
        void this.getWebview().postMessage({
            command: 'reset-pet',
        });
    }
    spawnPet(spec) {
        void this.getWebview().postMessage({
            command: 'spawn-pet',
            type: spec.type,
            color: spec.color,
            name: spec.name,
        });
        void this.getWebview().postMessage({
            command: 'set-size',
            size: spec.size,
        });
    }
    listPets() {
        void this.getWebview().postMessage({ command: 'list-pets' });
    }
    rollCall() {
        void this.getWebview().postMessage({ command: 'roll-call' });
    }
    deletePet(petName, petType, petColor) {
        void this.getWebview().postMessage({
            command: 'delete-pet',
            name: petName,
            type: petType,
            color: petColor,
        });
    }
    getWebview() {
        throw new Error('Not implemented');
    }
    _update() {
        const webview = this.getWebview();
        webview.html = this._getHtmlForWebview(webview);
    }
    update() { }
    _getHtmlForWebview(webview) {
        // Local path to main script run in the webview
        const scriptPathOnDisk = vscode.Uri.joinPath(this._extensionUri, 'media', 'main-bundle.js');
        // And the uri we use to load this script in the webview
        const scriptUri = webview.asWebviewUri(scriptPathOnDisk);
        // Local path to css styles
        const styleResetPath = vscode.Uri.joinPath(this._extensionUri, 'media', 'reset.css');
        const stylesPathMainPath = vscode.Uri.joinPath(this._extensionUri, 'media', 'pets.css');
        const silkScreenFontPath = webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, 'media', 'Silkscreen-Regular.ttf'));
        // Uri to load styles into webview
        const stylesResetUri = webview.asWebviewUri(styleResetPath);
        const stylesMainUri = webview.asWebviewUri(stylesPathMainPath);
        // Get path to resource on disk
        const basePetUri = webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, 'media'));
        // Use a nonce to only allow specific scripts to be run
        const nonce = getNonce();
        return `<!DOCTYPE html>
			<html lang="en">
			<head>
				<meta charset="UTF-8">
				<!--
					Use a content security policy to only allow loading images from https or from our extension directory,
					and only allow scripts that have a specific nonce.
				-->
				<meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src ${webview.cspSource} 'nonce-${nonce}'; img-src ${webview.cspSource} https:; script-src 'nonce-${nonce}';
                font-src ${webview.cspSource};">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<link href="${stylesResetUri}" rel="stylesheet" nonce="${nonce}">
				<link href="${stylesMainUri}" rel="stylesheet" nonce="${nonce}">
                <style nonce="${nonce}">
                @font-face {
                    font-family: 'silkscreen';
                    src: url('${silkScreenFontPath}') format('truetype');
                }
                </style>
				<title>VS Code Pets</title>
			</head>
			<body>
                <div id="petCanvasContainer">
                    <canvas id="ballCanvas"></canvas>
                    <canvas id="foregroundEffectCanvas"></canvas>
                    <canvas id="backgroundEffectCanvas"></canvas>
                </div>
				<div id="petsContainer"></div>
				<div id="foreground"></div>
                <div id="background"></div>
				<script nonce="${nonce}" src="${scriptUri}"></script>
				<script nonce="${nonce}">petApp.petPanelApp("${basePetUri}", "${this.theme()}", ${this.themeKind()}, "${this.petColor()}", "${this.petSize()}", "${this.petType()}", ${this.throwBallWithMouse()}, ${this.disableEffects()});</script>
			</body>
			</html>`;
    }
    tick() {
        throw new Error('Not implemented');
    }
    dispose() {
        // Dispose of all disposables
        while (this._disposables.length) {
            const x = this._disposables.pop();
            if (x) {
                x.dispose();
            }
        }
        if (this._tickIntervalId) {
            clearInterval(this._tickIntervalId);
            this._tickIntervalId = undefined;
        }
    }
}
function handleWebviewMessage(message) {
    switch (message.command) {
        case 'alert':
            void vscode.window.showErrorMessage(message.text);
            return;
        case 'info':
            void vscode.window.showInformationMessage(message.text);
            return;
    }
}
/**
 * Manages pet coding webview panels
 */
class PetPanel extends PetWebviewContainer {
    /**
     * Track the currently panel. Only allow a single panel to exist at a time.
     */
    static currentPanel;
    static viewType = 'petCoding';
    _panel;
    static createOrShow(extensionUri, petColor, petType, petSize, theme, themeKind, throwBallWithMouse, disableEffects) {
        const column = vscode.window.activeTextEditor
            ? vscode.window.activeTextEditor.viewColumn
            : undefined;
        // If we already have a panel, show it.
        if (PetPanel.currentPanel) {
            if (petColor === PetPanel.currentPanel.petColor() &&
                petType === PetPanel.currentPanel.petType() &&
                petSize === PetPanel.currentPanel.petSize()) {
                PetPanel.currentPanel._panel.reveal(column);
                return;
            }
            else {
                PetPanel.currentPanel.updatePetColor(petColor);
                PetPanel.currentPanel.updatePetType(petType);
                PetPanel.currentPanel.updatePetSize(petSize);
                PetPanel.currentPanel.update();
            }
        }
        // Otherwise, create a new panel.
        const panel = vscode.window.createWebviewPanel(PetPanel.viewType, vscode.l10n.t('Pet Panel'), vscode.ViewColumn.Two, getWebviewOptions(extensionUri));
        PetPanel.currentPanel = new PetPanel(panel, extensionUri, petColor, petType, petSize, theme, themeKind, throwBallWithMouse, disableEffects);
    }
    static revive(panel, extensionUri, petColor, petType, petSize, theme, themeKind, throwBallWithMouse, disableEffects) {
        PetPanel.currentPanel = new PetPanel(panel, extensionUri, petColor, petType, petSize, theme, themeKind, throwBallWithMouse, disableEffects);
    }
    constructor(panel, extensionUri, color, type, size, theme, themeKind, throwBallWithMouse, disableEffects) {
        super(extensionUri, color, type, size, theme, themeKind, throwBallWithMouse, disableEffects);
        this._panel = panel;
        // Set the webview's initial html content
        this._update();
        // Listen for when the panel is disposed
        // This happens when the user closes the panel or when the panel is closed programatically
        this._panel.onDidDispose(() => this.dispose(), null, this._disposables);
        // Update the content based on view changes
        this._panel.onDidChangeViewState(() => {
            this.update();
        }, null, this._disposables);
        // Handle messages from the webview
        this._panel.webview.onDidReceiveMessage(handleWebviewMessage, null, this._disposables);
    }
    tick() {
        if (this._panel.visible) {
            void this.getWebview().postMessage({ command: 'tick' });
        }
    }
    dispose() {
        PetPanel.currentPanel = undefined;
        // Clean up our resources
        this._panel.dispose();
        super.dispose();
    }
    update() {
        if (this._panel.visible) {
            this._update();
        }
    }
    getWebview() {
        return this._panel.webview;
    }
}
/**
 * Managers pet coding webview views (Explorer)
 */
class PetWebviewViewProvider extends PetWebviewContainer {
    static viewType = 'petsView';
    _webviewView;
    resolveWebviewView(webviewView) {
        this._webviewView = webviewView;
        webviewView.webview.options = getWebviewOptions(this._extensionUri);
        webviewView.webview.html = this._getHtmlForWebview(webviewView.webview);
        webviewView.webview.onDidReceiveMessage(handleWebviewMessage, null, this._disposables);
    }
    tick() {
        if (this._webviewView) {
            void this.getWebview().postMessage({ command: 'tick' });
        }
    }
    getWebview() {
        if (this._webviewView === undefined) {
            throw new Error(vscode.l10n.t('Panel not active, make sure the pets view is visible before running this command.'));
        }
        else {
            return this._webviewView.webview;
        }
    }
    dispose() {
        this._webviewView = undefined;
        super.dispose();
    }
}
function getNonce() {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 32; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}
async function createPetPlayground(context) {
    const spec = PetSpecification.fromConfiguration();
    PetPanel.createOrShow(context.extensionUri, spec.color, spec.type, spec.size, getConfiguredTheme(), getConfiguredThemeKind(), getThrowWithMouseConfiguration(), getEffectsDisabledConfiguration());
    if (PetPanel.currentPanel) {
        var collection = PetSpecification.collectionFromMemento(context, getConfiguredSize());
        collection.forEach((item) => {
            PetPanel.currentPanel?.spawnPet(item);
        });
        await storeCollectionAsMemento(context, collection);
    }
    else {
        var collection = PetSpecification.collectionFromMemento(context, getConfiguredSize());
        collection.push(spec);
        await storeCollectionAsMemento(context, collection);
    }
}
//# sourceMappingURL=extension.js.map