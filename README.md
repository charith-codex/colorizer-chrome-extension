# Colorizer Chrome Extension

## Overview
Colorizer is a simple Chrome Extension built using React and Vite. It allows users to dynamically change the background and text color of a web page using color pickers. The extension utilizes Chrome's scripting API to apply the selected colors to the active tab.

## Features
- **Change Background Color:** Select a color and apply it to the background of the current web page.
- **Change Text Color:** Select a color and apply it to the text of the current web page.
- Built with React and TypeScript for a modern and efficient development experience.

## Installation and Usage

### 1. Clone the Repository
```bash
git clone https://github.com/charith-codex/colorizer-chrome-extension.git
cd colorizer-chrome-extension
```

### 2. Install Dependencies
```
npm install
```

### 3. Build the Project
Build the project for production:
```
npm run build
```
This will generate the dist folder.

### 4. Load the Extension in Chrome
Open Chrome and navigate to chrome://extensions/.
Enable Developer Mode (toggle switch at the top-right).
Click Load Unpacked and select the dist folder from the project directory.
The Colorizer extension will now be added to your Chrome browser.

### 5. Use the Extension
Click the extension icon in the Chrome toolbar.
Use the color pickers to select your desired background and text colors.
Click the buttons to apply the changes to the active tab.
