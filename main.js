//Set up global variables.
let container = document.getElementById("container");
let input = document.getElementById("input").value;
let btn = document.getElementById("btn");

//Makes a default grid that is 16x16 size.
function defaultGrid(input) {
  for (let i = 0; i < input; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);

    for (let k = 0; k < input; k++) {
      let column = document.createElement("div");
      column.classList.add("column");
      column.addEventListener("mouseover", () => {
        column.style.backgroundColor = "pink";
      });
      row.appendChild(column);
    }
  }
}

defaultGrid(input);

//Changes the grid size.
function changeSize(input) {
  myNode = document.getElementById("container");
  myNode.textContent = "";

  if (input < 2 || input > 99) {
    alert("Too big or too small. Pick a number between 2 and 99!");
    defaultGrid(16);
  } else {
    defaultGrid(input);
  }
}

//Runs the changeSize funtion once the button is clicked.
btn.addEventListener("click", () => {
  let input = document.getElementById("input").value;
  changeSize(input);
});
