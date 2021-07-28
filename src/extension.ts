import * as vscode from 'vscode';
import {generateSinglePage} from "./controllers/SinglePageController";
import {generatePageType} from "./controllers/PageTypeController";

export function activate({subscriptions}: vscode.ExtensionContext) {
	
	const myCommandId = 'c5helper.showHelpers';
	subscriptions.push(vscode.commands.registerCommand(myCommandId, () => {
		vscode.window.showInformationMessage(`Afficher les helper concrete`);
	}));

	subscriptions.push(vscode.commands.registerCommand('c5helper.createSinglePageController', async ({path}) => {
		generateSinglePage(path);
	}));

	subscriptions.push(vscode.commands.registerCommand('c5helper.createPageTypeController', async ({path}) => {
		generatePageType(path);
	}));
}

// this method is called when your extension is deactivated
export function deactivate() {}
