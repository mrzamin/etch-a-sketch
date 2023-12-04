//Set global variables.

const container = document.querySelector('.container');


function genDivs (number) {
    for(let i = 0; i < number; i++) {
        let gridRow = document.createElement('div');
        gridRow.classList.add('row');
        container.appendChild(gridRow);
        for (let k = 0; k < number; k++) {
            let gridColumn = document.createElement('div');
            gridColumn.classList.add('column');
            gridColumn.addEventListener ('mouseover', () =>
            {gridColumn.style.backgroundColor = "pink"});
            gridRow.appendChild(gridColumn);
        }
    }
}

genDivs(16);
