const terminalLines = [
  "Booting Digital Card System...",
  "Initializing networks...",
  "Loading encrypted identity modules...",
  "Authenticating contact protocol...",
  "Deploying frontend UI...",
  "Rendering virtual assistant...",
  "✔ Boot Complete. Launching Card..."
];

const terminal = document.getElementById("terminal-lines");
const loader = document.getElementById("loader");
const card = document.getElementById("card");

let index = 0;

function typeLine() {
  if (index < terminalLines.length) {
    terminal.textContent += terminalLines[index] + "\n";
    index++;
    setTimeout(typeLine, 500);
  } else {
    setTimeout(() => {
      loader.style.display = "none";
      card.classList.remove("hidden");
      card.classList.add("visible");
    }, 800);
  }
}

window.onload = () => {
  typeLine();
};
