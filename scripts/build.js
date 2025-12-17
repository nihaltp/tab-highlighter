const fs = require("fs-extra");
const path = require("path");

// Get target browser from env variable, or build both if not set
const target = process.env.TARGET_BROWSER; // "chrome" or "firefox"
const browsers = target ? [target] : ["chrome", "firefox", "edge"];

browsers.forEach((browser) => {
  const distPath = path.join("dist", browser);

  // 1. Clean destination folder
  fs.emptyDirSync(distPath);

  // 2. Copy required directories
  fs.copySync("src", path.join(distPath, "src"));

  // 3. Copy the correct manifest
  const manifestSrc = path.join("manifests", `manifest.${browser}.json`);
  const manifest = fs.readJsonSync(manifestSrc);

  // Copy manifest
  fs.writeJsonSync(path.join(distPath, "manifest.json"), manifest, { spaces: 2 });

  // Extract & copy icons
  const iconPaths = extractIconPaths(manifest);

  iconPaths.forEach((iconPath) => {
    const src = path.join(iconPath);
    const dest = path.join(distPath, iconPath);

    fs.ensureDirSync(path.dirname(dest));
    fs.copyFileSync(src, dest);
  });

  console.log(`✅ ${browser} build created at ${distPath}`);
});

function extractIconPaths(manifest) {
  const paths = new Set();

  function walk(obj) {
    if (!obj || typeof obj !== "object") return;

    for (const value of Object.values(obj)) {
      if (typeof value === "string" && value.startsWith("icons/")) {
        paths.add(value);
      } else if (typeof value === "object") {
        walk(value);
      }
    }
  }

  walk(manifest);
  return Array.from(paths);
}
