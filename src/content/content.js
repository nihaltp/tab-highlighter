const ghIndentStyles = [
  "gh-indent-yellow",
  "gh-indent-green",
  "gh-indent-red",
  "gh-indent-blue",
];
let indentSize = 4; // number of spaces per indent level
let tabReplacement = "_"; // character to replace spaces with for visibility

function loadSettings() {
  if (chrome.storage) {
    chrome.storage.sync.get(["indentSize", "tabReplacement"], (data) => {
      let settingsChanged = false;

      // check if the data type is string
      if (data.indentSize && parseInt(data.indentSize) > 0) {
        indentSize = parseInt(data.indentSize);
        settingsChanged = true;
      }
      if (data.tabReplacement && typeof data.tabReplacement === "string") {
        tabReplacement = data.tabReplacement;
        settingsChanged = true;
      }
      // re-apply highlights with new settings
      if (!settingsChanged) return;
      highlightIndents(true);
    });
  }
}

function highlightIndents(settingsChanged = false) {
  if (window.location.href.includes("/blob/")) {
    highlightBlobIndents(settingsChanged);
    return;
  } else if (window.location.href.includes("/commit/")) {
    highlightCommitIndents(settingsChanged);
    return;
  }
  return;
}

function highlightBlobIndents(settingsChanged = false) {
  if (!window.location.href.includes("/blob/")) {
    return;
  }

  const lines = document.querySelectorAll(".react-file-line");
  processLines(lines, settingsChanged);
}

function processLines(lines, settingsChanged) {
  lines.forEach((line) => {
    processLine(line, settingsChanged);
  });
}

function highlightCommitIndents(settingsChanged = false) {
  if (!window.location.href.includes("/commit/")) {
    return;
  }

  const lines = document.querySelectorAll(".diff-text-inner");
  lines.forEach((line) => {
    if (line.classList.contains("color-fg-muted")) return; // skip lines like @@ -29,6 +29,10 @@
    processLine(line, settingsChanged);
  });
}

function processLine(line, settingsChanged) {
  // if the line has already been processed, return
  if (line.dataset.tabAdded === "true" && !settingsChanged) return;
  line.dataset.tabAdded = "true"; // mark as processed

  const nodes = Array.from(line.childNodes);
  const node = nodes[0];

  // if the node is not text or a span, return
  if (node.nodeName !== "#text" && node.nodeName !== "SPAN") return;

  // if the node is a span, handle it
  if (node.nodeName === "SPAN") {
    handleSpan(nodes);
    return;
  }

  if (node.data === "\n") return;

  // if the node is text, check if it is an indent
  const indent = node.data.match(/^\s*/)[0];
  if (indent.length === 0) return;

  // create the master span which will hold all the spans
  const masterSpan = document.createElement("span");
  masterSpan.className = "gh-indent";

  createIndentSpans(indent, masterSpan);
  line.prepend(masterSpan);
  node.data = node.data.trimStart();
}

function handleSpan(nodes) {
  if (nodes.length === 0) return;
  const node = nodes[0];

  if (node.nodeName !== "SPAN") return;
  if (node.firstChild == null) return;
  if (node.firstChild.nodeName !== "#text") return;

  const text = node.firstChild.data;
  const indent = text.match(/^\s*/)[0];
  if (indent.length === 0) return;

  const masterSpan = document.createElement("span");
  masterSpan.className = "gh-indent";

  createIndentSpans(indent, masterSpan);

  const remainingText = text.slice(indent.length);
  const remainingSpan = document.createElement("span");
  remainingSpan.textContent = remainingText;
  masterSpan.appendChild(remainingSpan);

  const parent = node.parentNode;
  if (parent) {
    parent.replaceChild(masterSpan, node);
  }
}

function createIndentSpans(indent, masterSpan) {
  // create the spans for the indent levels
  let i = 0;
  for (; i < indent.length; i += indentSize) {
    const chunk = indent.slice(i, i + indentSize);
    if (chunk.length < indentSize) break;
    createSpan(i, chunk, masterSpan);
  }
  // handle any remaining spaces that don't make a full indent
  if (i < indent.length) {
    createErrorSpan(indent, i, masterSpan);
  }
}

function createSpan(i, chunk, masterSpan) {
  // create a span for the indent level
  const span = document.createElement("span");
  span.className = ghIndentStyles[(i / indentSize) % ghIndentStyles.length];
  span.textContent = chunk.replace(/ /g, tabReplacement);
  masterSpan.appendChild(span);
}

function createErrorSpan(indent, i, masterSpan) {
  // create a span for the remaining spaces that don't make a full indent
  const span = document.createElement("span");
  span.className = "gh-indent-error";
  span.textContent = indent.slice(i).replace(/ /g, tabReplacement);
  masterSpan.appendChild(span);
}

// watch for changes to the DOM
const observer = new MutationObserver((mutations) => {
  highlightIndents();
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
});

loadSettings();

// watch for changes to the storage
if (chrome.storage) {
  chrome.storage.onChanged.addListener(loadSettings);
}

// Listen for GitHub's specific navigation event
document.addEventListener("turbo:load", () => {
  highlightIndents();
});
