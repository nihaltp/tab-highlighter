# Tab Highlighter [![Star on GitHub](https://img.shields.io/github/stars/nihaltp/tab-highlighter?style=social)](https://github.com/nihaltp/tab-highlighter/stargazers)

A cross-browser extension for Chrome and Firefox that highlights GitHub repository tabs with custom colors and indent levels, enhancing code readability and navigation.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT) [![Open Issues](https://img.shields.io/github/issues/nihaltp/tab-highlighter)](https://github.com/nihaltp/tab-highlighter/issues) [![Pull Requests](https://img.shields.io/github/issues-pr/nihaltp/tab-highlighter)](https://github.com/nihaltp/tab-highlighter/pulls)

## 📚 Table of Contents

- [Tab Highlighter ](#tab-highlighter-)
  - [📚 Table of Contents](#-table-of-contents)
  - [Features](#features)
  - [Installation \& Usage](#installation--usage)
  - [Contributing](#contributing)
  - [Project Structure](#project-structure)
  - [For Developers](#for-developers)
    - [Prerequisites](#prerequisites)
    - [Setup](#setup)
  - [Building](#building)
    - [Build for Chrome](#build-for-chrome)
    - [Build for Firefox](#build-for-firefox)
  - [Loading the Extension](#loading-the-extension)
    - [Chrome](#chrome)
    - [Firefox](#firefox)
    - [Manifest Files](#manifest-files)
  - [License](#license)

## Features

- 🌐 Works on both Chrome and Firefox
- ⚡ Lightweight and fast
- 💾 Persistent tab highlighting
- [ ] 🎨 Highlight tabs with custom colors
- [ ] 🎨 Customizable indent levels
- [ ] 🎯 Easy-to-use popup interface

## Installation & Usage

1. Install the extension
2. Go to any GitHub repository file page

The tab will be highlighted based on the file's indent level.

## Contributing

Contributions are welcome! Bug fixes, feature suggestions, and pull requests are appreciated. For major changes, please open an issue first to discuss your ideas.

## Project Structure

```text
tab_highlighter/
├── src/
│   ├── content.js             # Content script injected into pages
│   └── content.css            # Content styling
├── dist/                      # Compiled output
├── icons/                     # Extension icons
├── manifests/
│   ├── manifest.chrome.json   # Chrome extension manifest (Manifest V3)
│   └── manifest.firefox.json  # Firefox extension manifest (Manifest V3)
├── scripts/
│   ├── build.js               # Build script
├── .prettierrc                # Prettier configuration for consistent formatting
├── .gitignore
├── package.json               # Project dependencies and scripts
├── package-lock.json          # Locked dependency versions
├── LICENSE                    # MIT License
└── README.md
```

## For Developers

### Prerequisites

- npm

### Setup

1. Clone the repository:

```bash
git clone https://github.com/nihaltp/tab-highlighter.git
cd tab-highlighter
```

2. Install dependencies:

```bash
npm install
```

## Building

### Build for Chrome

```bash
npm run build:chrome
```

The packaged extension will be in `dist/chrome/`.

### Build for Firefox

```bash
npm run build:firefox
```

The packaged extension will be in `dist/firefox/`.

## Loading the Extension

### Chrome

1. Open `chrome://extensions/`
2. Enable "Developer mode" (toggle in top right)
3. Click "Load unpacked"
4. Navigate to `dist/chrome/` and select it
5. The extension will be loaded and ready to use

### Firefox

1. Open `about:debugging#/runtime/this-firefox`
2. Click "Load Temporary Add-on"
3. Navigate to `dist/firefox/manifest.json` and select it
4. The extension will be loaded and ready to use

### Manifest Files

- `manifest.chrome.json`: Chrome-specific configuration
- `manifest.firefox.json`: Firefox-specific configuration

## License

MIT License - see LICENSE file for details
