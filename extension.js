const vscode = require('vscode');
const loadHtmlFile = require('./util/loadHtmlFile');

function activate(context) {
	let openWebviewDisposable = vscode.commands.registerCommand(
		'extension.ImageToBase64',
		function (uri) {
			const panel = vscode.window.createWebviewPanel(
				'ImageToBase64', // viewType
				"ImageToBase64", // 视图标题
				vscode.ViewColumn.One, // 显示在编辑器的哪个部位
				{
					enableScripts: true, // 启用JS，默认禁用
					retainContextWhenHidden: true, // webview被隐藏时保持状态，避免被重置
				}
			);
			panel.webview.html = loadHtmlFile.getWebViewContent(context, 'view/index.html');
		})
	context.subscriptions.push(openWebviewDisposable)
}

function deactivate() { }

module.exports = {
	activate,
	deactivate
}
