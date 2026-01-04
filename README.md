# Tab Highlighter [![Star on GitHub](https://img.shields.io/github/stars/nihaltp/tab-highlighter?style=social)](https://github.com/nihaltp/tab-highlighter/stargazers)

A cross-browser extension for Chrome and Firefox that highlights GitHub repository tabs with custom colors and indent levels, enhancing code readability and navigation.

🦊 Available on Firefox Add-ons with automatic updates. [![Firefox Add-on](https://img.shields.io/amo/v/tabhighlighter)](https://addons.mozilla.org/en-US/firefox/addon/tabhighlighter/)

✨ Available on Microsoft Edge Addons. [![Microsoft Edge Version](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/nihaltp/tab-highlighter/main/manifests/manifest.edge.json&query=$.version&label=Microsoft%20Edge&logo=microsoft-edge&color=0078D7)](https://microsoftedge.microsoft.com/addons/detail/tab-highlighter/penlfgfbglnpeodjfojhhfbifgjmcmbe)

🌐 Chrome support via GitHub Releases.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT) [![Open Issues](https://img.shields.io/github/issues/nihaltp/tab-highlighter)](https://github.com/nihaltp/tab-highlighter/issues) [![Pull Requests](https://img.shields.io/github/issues-pr/nihaltp/tab-highlighter)](https://github.com/nihaltp/tab-highlighter/pulls) [![Latest Release](https://img.shields.io/github/release/nihaltp/tab-highlighter.svg)](https://github.com/nihaltp/tab-highlighter/releases/latest)

## 📚 Table of Contents

- [Tab Highlighter ](#tab-highlighter-)
  - [📚 Table of Contents](#-table-of-contents)
  - [Features](#features)
  - [Installation \& Usage](#installation--usage)
    - [Firefox (Recommended)](#firefox-recommended)
    - [Edge (Recommended)](#edge-recommended)
    - [Manual Installation](#manual-installation)
      - [Chrome / Chromium](#chrome--chromium)
      - [Firefox (manual)](#firefox-manual)
      - [Edge (manual)](#edge-manual)
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
    - [Edge](#edge)
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

[![Get the add-on](resources/get-the-addon-firefox.webp)](https://addons.mozilla.org/firefox/addon/tabhighlighter/)

This provides automatic updates and does not require Developer Mode.

### Edge (Recommended)

The extension is officially published on **Microsoft Edge Addons**.

👉 **Install from Microsoft Edge Addons:**

[https://microsoftedge.microsoft.com/addons/detail/tab-highlighter/penlfgfbglnpeodjfojhhfbifgjmcmbe](https://microsoftedge.microsoft.com/addons/detail/tab-highlighter/penlfgfbglnpeodjfojhhfbifgjmcmbe)

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
>
> For daily use, installing from Firefox Add-ons is strongly recommended.

1. Download `tab-highlighter-firefox.zip`
2. Open `about:addons`
3. Click the ⚙️ menu → **Install Add-on From File**
4. Select the ZIP file

#### Edge (manual)

> ⚠️ Manual installation is intended for testing and development.
>
> For daily use, installing from Microsoft Edge Addons is strongly recommended.

1. Download `tab-highlighter-edge.zip`
2. Open `edge://extensions/`
3. Enable **Developer mode**
4. Click **Load unpacked**
5. Select the extracted folder

### Using the Extension

Go to any GitHub repository file page (e.g. browsing files in a repo).
Tabs will be highlighted automatically.

## Contributing

Contributions are welcome! Bug fixes, feature suggestions, and pull requests are appreciated. For major changes, please open an issue first to discuss your ideas.

## Project Structure

```text
tab_highlighter/
├── .github/
│   └── workflows/
│       └── build.yml          # GitHub Actions workflow for building the extension
│
├── .husky/
│   └── pre-commit             # Pre-commit hook for linting and formatting
│
├── dist/                      # Compiled output
│
├── icons/                     # Extension icons
│
├── manifests/
│   ├── manifest.chrome.json   # Chrome extension manifest (Manifest V3)
│   ├── manifest.firefox.json  # Firefox extension manifest (Manifest V3)
│   └── manifest.edge.json     # Edge extension manifest (Manifest V3)
│
├── node_modules/              # Project dependencies
│
├── scripts/
│   ├── build.js               # Build script
│   └── update-manifests.js    # Script to update manifest files
│
├── src/
│   ├── content/
│   │   ├── content.js             # Content script injected into pages
│   │   └── content.css            # Content styling
│   └── popup/
│       ├── popup.css              # Popup styling
│       ├── popup.html             # Popup HTML
│       └── popup.js               # Popup JavaScript
│
├── .gitignore                 # Git ignore rules
├── .prettierrc                # Prettier configuration for consistent formatting
├── LICENSE                    # MIT License
├── package-lock.json          # Locked dependency versions
├── package.json               # Project dependencies and scripts
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

### Edge

1. Open `edge://extensions/`
2. Enable "Developer mode" (toggle in bottom left)
3. Click "Load unpacked"
4. Navigate to `dist/edge/` and select it
5. The extension will be loaded and ready to use

### Manifest Files

- `manifest.chrome.json`: Chrome-specific configuration
- `manifest.firefox.json`: Firefox-specific configuration
- `manifest.edge.json`: Edge-specific configuration

## Roadmap

- Allow users to set custom colors for different file types
- Consider files' indent levels while highlighting tabs
- Chrome Web Store publishing

## License

MIT License - see [LICENSE](LICENSE) file for details
