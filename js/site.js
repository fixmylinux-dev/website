const desktopInputs = document.querySelectorAll('input[name="desktop"]');
const copyButtons = document.querySelectorAll("button[data-copy]");

// Open the same tab as last visit. localStorage can throw in private
// windows, in which case we just stay on the default tab.
try {
  const saved = localStorage.getItem("desktop");
  for (const input of desktopInputs) {
    if (input.value === saved) input.checked = true;
  }
} catch {}

for (const input of desktopInputs) {
  input.addEventListener("change", () => {
    try {
      localStorage.setItem("desktop", input.value);
    } catch {}
  });
}

for (const button of copyButtons) {
  button.addEventListener("click", async () => {
    const pre = document.getElementById(button.dataset.copy);

    try {
      await navigator.clipboard.writeText(pre.textContent);
    } catch {
      // No clipboard access, so select the text for the user to copy.
      window.getSelection().selectAllChildren(pre);
      button.textContent = "Press Ctrl+C";
      return;
    }

    button.textContent = "Copied";
    button.classList.add("done");
    setTimeout(() => {
      button.textContent = "Copy";
      button.classList.remove("done");
    }, 2000);
  });
}
