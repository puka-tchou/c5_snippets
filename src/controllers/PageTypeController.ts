import * as vscode from 'vscode';
import * as fs from 'fs';
import * as Path from 'path';

export async function generatePageType(path: string) {
  var singlePageController = await vscode.window.showInputBox({
    prompt: 'Saisir le nom du controleur de pagetype',
  });
  var singlePageControllerClass = singlePageController
    ?.split('_')
    .map((x) => x.charAt(0).toUpperCase() + x.slice(1))
    .join('');

  var realname = singlePageController + '.php';
  const filePath = Path.join(path, realname);

  const content = [
    `<?php`,
    `namespace Application\\Controller\\PageType;\n`,
    `use Concrete\\Core\\Page\\Controller\\PageTypeController;\n`,
    `class ${singlePageControllerClass} extends PageTypeController`,
    `{`,
    `   public function on_start()`,
    `   {\n`,
    `   }`,
    `   public function view()`,
    `   {\n`,
    `   }`,
    `}`,
  ].join('\n');

  fs.appendFile(filePath.substring(1), content, (err) => {
    if (err) {
      vscode.window.showErrorMessage(err.message);
    } else {
      vscode.workspace.openTextDocument(filePath).then(
        (a: vscode.TextDocument) => {
          vscode.window.showTextDocument(a);
        },
        (error: any) => {
          vscode.window.showErrorMessage(error);
        }
      );
    }
  });
}
