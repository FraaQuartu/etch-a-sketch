// Add row to a container
const addRow = function(container) {
  let newRow = document.createElement("div");
  newRow.style.display = "flex";
  newRow.style.flex = "1";
  container.appendChild(newRow);
  return newRow;
}

// Add a square in a row
const addSquare = function(row) {
  let newDiv = document.createElement("div");
  newDiv.style.flex = "1";
  newDiv.style.border = "1px solid black";
  newDiv.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = "black";
  });
  row.appendChild(newDiv);
  return newDiv;
}


const gridSize = 32; 
let container = document.querySelector("#container");
let newRow;

for(let i = 0; i < gridSize; i++) {
  newRow = addRow(container);
  for(let j = 0; j < gridSize; j++) {
    addSquare(newRow);
  }
}
