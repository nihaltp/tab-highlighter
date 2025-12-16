document.addEventListener("DOMContentLoaded", () => {
  const indentSizeSelect = document.getElementById("indentSize");
  const symbolSelect = document.getElementById("symbol");

  indentSizeSelect.addEventListener("change", () => {
    chrome.storage.sync.set({ indentSize: indentSizeSelect.value });
  });

  symbolSelect.addEventListener("change", () => {
    chrome.storage.sync.set({ tabReplacement: symbolSelect.value });
  });

  chrome.storage.sync.get(["indentSize", "tabReplacement"], (items) => {
    indentSizeSelect.value = items.indentSize || "4";
    symbolSelect.value = items.tabReplacement || "_";
  });
});
