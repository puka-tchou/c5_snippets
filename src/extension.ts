import * as vscode from 'vscode';
import { generateSinglePage } from './controllers/SinglePageController';
import { generatePageType } from './controllers/PageTypeController';

export function activate({ subscriptions }: vscode.ExtensionContext) {
  subscriptions.push(
    vscode.commands.registerCommand(
      'c5helper.createSinglePageController',
      async ({ path }) => {
        generateSinglePage(path);
      }
    )
  );

  subscriptions.push(
    vscode.commands.registerCommand(
      'c5helper.createPageTypeController',
      async ({ path }) => {
        generatePageType(path);
      }
    )
  );
}

// this method is called when your extension is deactivated
export function deactivate() {}
