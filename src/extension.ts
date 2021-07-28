import * as vscode from 'vscode';

let myStatusBarItem: vscode.StatusBarItem;

export function activate({ subscriptions }: vscode.ExtensionContext) {
  const myCommandId = 'c5.showHelpers';
  subscriptions.push(
    vscode.commands.registerCommand(myCommandId, () => {
      vscode.window.showInformationMessage(`Afficher les helper concrete`);
    })
  );

  myStatusBarItem = vscode.window.createStatusBarItem(
    vscode.StatusBarAlignment.Right,
    100
  );
  myStatusBarItem.command = myCommandId;
  myStatusBarItem.text = 'C5';
  myStatusBarItem.show();
  subscriptions.push(myStatusBarItem);
}

// this method is called when your extension is deactivated
export function deactivate() {}
