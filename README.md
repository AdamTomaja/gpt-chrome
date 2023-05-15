# My Extension

My Extension is a simple Chrome extension that provides a convenient way to perform a specific task.

## Description

The extension allows you to extract and send the current page URL to a specified webhook URL. It's useful for scenarios where you need to quickly capture the URL of the webpage you are visiting and send it to a backend system for further processing.

## How to Use

1. Install the Extension:
   - Download the extension package from the [Releases](https://github.com/my-extension/releases) page or obtain it from any other reliable source.
   - Extract the package to a local directory on your computer.

2. Load the Extension:
   - Open Google Chrome and type `chrome://extensions` in the address bar.
   - Enable the "Developer mode" toggle switch in the top-right corner of the page.
   - Click the "Load unpacked" button.
   - Select the directory where you extracted the extension package and click "Select" to load the extension.

3. Configure the Webhook URL:
   - Open the `config.js` file in the extension's directory using a text editor.
   - Modify the `webhookUrl` variable and replace it with the URL of the webhook that should receive the page URL.
   - Save the `config.js` file.

4. Use the Extension:
   - Click on the extension icon in the browser toolbar to activate the extension.
   - The extension will extract the URL of the current page.
   - The URL will be sent to the configured webhook URL automatically.
