const fs = require("fs");

const pkg = JSON.parse(fs.readFileSync("package.json", "utf8"));

const update = (path) => {
  const manifest = JSON.parse(fs.readFileSync(path, "utf8"));
  manifest.version = pkg.version;
  fs.writeFileSync(path, JSON.stringify(manifest, null, 2) + "\n");
};

update("manifests/manifest.chrome.json");
update("manifests/manifest.firefox.json");
update("manifests/manifest.edge.json");

console.log("Updated manifest versions to:", pkg.version);
