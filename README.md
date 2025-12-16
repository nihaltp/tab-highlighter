# Tab Highlighter [![Star on GitHub](https://img.shields.io/github/stars/nihaltp/tab-highlighter?style=social)](https://github.com/nihaltp/tab-highlighter/stargazers)

A cross-browser extension for Chrome and Firefox that highlights GitHub repository tabs with custom colors and indent levels, enhancing code readability and navigation.

🦊 Available on Firefox Add-ons with automatic updates. [![Firefox Add-on](https://img.shields.io/amo/v/tabhighlighter)](https://addons.mozilla.org/en-US/firefox/addon/tabhighlighter/)

🌐 Chrome support via GitHub Releases.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT) [![Open Issues](https://img.shields.io/github/issues/nihaltp/tab-highlighter)](https://github.com/nihaltp/tab-highlighter/issues) [![Pull Requests](https://img.shields.io/github/issues-pr/nihaltp/tab-highlighter)](https://github.com/nihaltp/tab-highlighter/pulls) [![Latest Release](https://img.shields.io/github/release/nihaltp/tab-highlighter.svg)](https://github.com/nihaltp/tab-highlighter/releases/latest)

## 📚 Table of Contents

- [Tab Highlighter ](#tab-highlighter-)
  - [📚 Table of Contents](#-table-of-contents)
  - [Features](#features)
  - [Installation \& Usage](#installation--usage)
    - [Firefox (Recommended)](#firefox-recommended)
    - [Manual Installation](#manual-installation)
      - [Chrome / Chromium](#chrome--chromium)
      - [Firefox (manual)](#firefox-manual)
    - [Using the Extension](#using-the-extension)
  - [Contributing](#contributing)
  - [Project Structure](#project-structure)
  - [For Developers](#for-developers)
    - [Prerequisites](#prerequisites)
    - [Setup](#setup)
  - [Building (For Developers)](#building-for-developers)
    - [Build for Chrome](#build-for-chrome)
    - [Build for Firefox](#build-for-firefox)
  - [Loading the Extension](#loading-the-extension)
    - [Chrome](#chrome)
    - [Firefox](#firefox)
    - [Manifest Files](#manifest-files)
  - [Roadmap](#roadmap)
  - [License](#license)

## Features

- 🌐 Works on both Chrome and Firefox
- ⚡ Lightweight and fast
- 💾 Persistent tab highlighting
- 🎯 Easy-to-use popup interface
- 🎨 Customizable indent levels
- [ ] 🎨 Highlight tabs with custom colors
- [ ] 🔧Consider files indent level while highlighting

## Installation & Usage

### Firefox (Recommended)

The extension is officially published on **Firefox Add-ons (AMO)**.

👉 **Install from Firefox Add-ons:**

[https://addons.mozilla.org/en-US/firefox/addon/tabhighlighter/](https://addons.mozilla.org/en-US/firefox/addon/tabhighlighter/)

This provides automatic updates and does not require Developer Mode.

### Manual Installation

Pre-built extension packages are available on the [**GitHub Releases**](https://github.com/nihaltp/tab-highlighter/releases) page.
This is the easiest way to install the extension — no build step required.

👉 **Download the latest release:**
[https://github.com/nihaltp/tab-highlighter/releases/latest](https://github.com/nihaltp/tab-highlighter/releases/latest)

Each release includes:

- `tab-highlighter-chrome.zip` — for Chrome / Chromium browsers
- `tab-highlighter-firefox.zip` — for Firefox

#### Chrome / Chromium

1. Download `tab-highlighter-chrome.zip`
2. Extract the ZIP
3. Open `chrome://extensions/`
4. Enable **Developer mode**
5. Click **Load unpacked**
6. Select the extracted folder

#### Firefox (manual)

> ⚠️ Manual installation is intended for testing and development.

> For daily use, installing from Firefox Add-ons is strongly recommended.

1. Download `tab-highlighter-firefox.zip`
2. Open `about:addons`
3. Click the ⚙️ menu → **Install Add-on From File**
4. Select the ZIP file

### Using the Extension

Go to any GitHub repository file page (e.g. browsing files in a repo).
Tabs will be highlighted automatically.

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

## Building (For Developers)

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

## Roadmap

- Allow users to set custom colors for different file types
- Add support for more browsers (e.g., Edge, Safari)
- Consider files' indent levels while highlighting tabs
- Chrome Web Store publishing

## License

MIT License - see [LICENSE](LICENSE) file for details
