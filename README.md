# Chronicom Theme

This is great theme for anybody who love to use blue color.

## Features

This theme feature a readable coding colors (ultimately Javascript and Typescript) for light and dark theme.

![Dark](/images/screen/chronicom-dark-screen.gif)
![Light](/images/screen/chronicom-light-screen.gif)

## Recommendations

This theme is best used when you are also installing these fabulous extensions:

- [indent-rainbow](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow): A simple extension to make indentation more readable.
- [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag): Automatically add HTML/XML close tag, same as Visual Studio IDE or Sublime Text does..
- [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag): Automatically rename paired HTML/XML tag, same as Visual Studio IDE does.
- [Spaces Inside Braces](https://marketplace.visualstudio.com/items?itemName=AiryShift.spaces-inside-braces): Reformats braces (and others) as you type.
- [Todo Tree](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree): This extension quickly searches (using ripgrep) your workspace for comment tags like TODO and FIXME, and displays them in a tree view in the activity bar.

This theme also recommends these Workspace Settings configuration:

```json
"auto-close-tag.disableOnLanguage": ["typescript"],

"auto-rename-tag.activationOnLanguage": ["vue", "html", "xml"],

"debug.console.fontFamily": "'Maple Mono', 'Jetbrains Mono', Consolas, 'Courier New', monospace",
"debug.toolBarLocation": "commandCenter",

"diffEditor.ignoreTrimWhitespace": false,

"editor.autoClosingQuotes": "always",
"editor.bracketPairColorization.enabled": true,
"editor.codeLensFontFamily": "'Maple Mono', 'Jetbrains Mono', Consolas, 'Courier New', monospace",
"editor.fontFamily": "'Maple Mono', 'Jetbrains Mono', Consolas, 'Courier New', monospace",
"editor.fontLigatures": "'cv01', 'cv02', 'cv03', 'cv04', 'ss01', 'ss02', 'ss03', 'ss04', 'ss05'",
"editor.fontSize": 13,
"editor.guides.bracketPairs": "active",
"editor.inlayHints.fontFamily": "'Maple Mono', 'Jetbrains Mono', Consolas, 'Courier New', monospace",
"editor.mouseWheelZoom": true,
"editor.minimap.enabled": false,
"editor.renderWhitespace": "trailing",
"editor.rulers": [100],
"editor.stickyScroll.defaultModel": "foldingProviderModel",
"editor.stickyScroll.enabled": true,
"editor.stickyScroll.maxLineCount": 10,
"editor.tabSize": 2,

"html.format.wrapAttributes": "force-expand-multiline",

"jsonColorToken.languages": ["json", "jsonc", "javascript", "javascriptreact"],

"terminal.integrated.fontFamily": "'Maple Mono', 'Jetbrains Mono', Consolas, 'Courier New', monospace",

"todo-tree.general.tags": ["FIXME", "BUG", "HACK", "TODO", "[x]"],
"todo-tree.regex.regex": "(//|#|<!--|;|/\\*|^|^\\s*(-|\\d+.))\\s*($TAGS)",

"workbench.editor.enablePreview": false,
"workbench.editor.enablePreviewFromQuickOpen": false,
"workbench.tree.enableStickyScroll": true,

"zenMode.hideLineNumbers": false
```

## Why 'Maple Mono' font?

Well, it's a great font. You can preview 'Maple Mono' font via this great site: https://www.programmingfonts.org/#maple
