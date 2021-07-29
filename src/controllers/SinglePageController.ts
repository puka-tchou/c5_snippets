import * as vscode from 'vscode';
import * as Path from 'path';

export async function generateSinglePage(path: string) {
  var singlePageController = await vscode.window.showInputBox({
    prompt: 'Saisir le nom du controleur de singlePage',
  });
  var singlePageControllerClass = singlePageController
    ?.split('_')
    .map((x) => x.charAt(0).toUpperCase() + x.slice(1))
    .join('');

  const realname = singlePageController + '.php';
  const filePath = Path.join(path, realname).substring(1);

  const content = [
    `<?php`,
    `namespace Application\\Controller\\SinglePage;\n`,
    `use Concrete\\Core\\Page\\Controller\\PageController;\n`,
    `class ${singlePageControllerClass} extends PageController`,
    `{`,
    `   public function on_start()`,
    `   {\n`,
    `   }`,
    `   public function view()`,
    `   {\n`,
    `   }`,
    `}`,
  ].join('\n');

  const wsEdit = new vscode.WorkspaceEdit();
  const uri = vscode.Uri.file(filePath);
  wsEdit.createFile(uri, { ignoreIfExists: true });
  wsEdit.insert(uri, new vscode.Position(0, 0), content);
  vscode.workspace.applyEdit(wsEdit);
  vscode.workspace.openTextDocument(filePath).then(
    (a: vscode.TextDocument) => {
      a.save();
      vscode.window.showTextDocument(a);
    },
    (error: any) => {
      vscode.window.showErrorMessage(error);
    }
  );
}
