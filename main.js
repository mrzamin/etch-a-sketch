//Set global variables.

const container = document.querySelector('.container');

function genDivs (number) {
    for(let i = 0; i < (number * number); i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('gridItem');
        container.appendChild(gridItem);
    }
}

genDivs(16);