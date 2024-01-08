// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import { difference } from 'lodash';
import * as vscode from 'vscode';
import { ColorThemeKind, ConfigurationTarget, window, workspace } from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "chronicom-theme" is now active!');

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  // let disposable = vscode.commands.registerCommand('chronicom-theme.helloWorld', () => {
  // 	// The code you place here will be executed every time your command is executed
  // 	// Display a message box to the user
  // 	vscode.window.showInformationMessage('Hello World from chronicom-theme!');
  // });

  // context.subscriptions.push(disposable);

  const config = workspace.getConfiguration();

  function changeRainbow(theme: vscode.ColorTheme, themeName: string) {
    const chronicomRainbows = [
      'rgba(77,153,240,0.07)',
      'rgba(177,111,206,0.07)',
      'rgba(5,173,142,0.07)',
      'rgba(197,148,24,0.07)',
    ];

    if (
      config.has('indentRainbow.colors') &&
      themeName &&
      themeName.toLocaleLowerCase().includes('chronicom') &&
      theme &&
      theme.kind === ColorThemeKind.Light
    ) {
      config.update('indentRainbow.colors', chronicomRainbows, ConfigurationTarget.Workspace);
    } else {
      const rainbowColorsConfig = config.inspect('indentRainbow.colors');
      if (rainbowColorsConfig) {
        const diff: Array<string> = difference(
          rainbowColorsConfig.workspaceValue as Array<string>,
          chronicomRainbows,
        );
        if (diff.length === 0) {
          config.update(
            'indentRainbow.colors',
            rainbowColorsConfig.defaultValue,
            ConfigurationTarget.Workspace,
          );
        }
      }
    }
  }

  let theme: vscode.ColorTheme = window.activeColorTheme;
  let themeName = config.get('workbench.colorTheme') as string;
  changeRainbow(theme, themeName);

  window.onDidChangeActiveColorTheme((changedTheme: vscode.ColorTheme) => {
    theme = changedTheme;
    themeName = config.get('workbench.colorTheme') as string;
    changeRainbow(theme, themeName);
  });
}

// This method is called when your extension is deactivated
export function deactivate() {}
