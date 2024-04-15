const gridSize = 16; 
const gridPixelWidth = 960;
const divWidth = String(gridPixelWidth / gridSize) + 'px';
const divHeight = divWidth;

container = document.querySelector("#container");

let newRow;

for(let i = 0; i < gridSize; i++) {
  newRow = document.createElement("div");
  newRow.style.display = "flex";
  newRow.style.flex = "1";
  for(let j = 0; j < gridSize; j++) {
    // Aggiungi il div
    newDiv = document.createElement("div");
    newDiv.style.flex = "1";
    newDiv.style.border = "1px solid black";

    newRow.appendChild(newDiv);
  }
  container.appendChild(newRow)
}
