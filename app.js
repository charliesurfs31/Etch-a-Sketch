const gridContainer = document.querySelector("#container");
for (let i = 0; i < 256; i++) {
    const square = document.createElement("div");
    gridContainer.appendChild(square);
    square.classList.add("square");
    square.hoverCount = 0
    square.addEventListener('mouseenter', function() {
        square.style.backgroundColor = 'black';
        square.hoverCount++
        square.style.opacity = square.hoverCount * 0.10
        }
    )
};

const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', function() {
   const allSquares = document.querySelectorAll('.square');
   for (let square of allSquares) {
    square.hoverCount = 0
    square.style.opacity = 0
   }
});

const resizeButton = document.querySelector('#resize');
resizeButton.addEventListener('click', function() {
    let promptUser = prompt('Choose a size between 1-100');
    if (promptUser >=1 && promptUser <= 100) {
        const allSquares = document.querySelectorAll('.square');
        for (let square of allSquares) {
            square.remove();
        }
        for (let i = 0; i < promptUser**2; i++) {
            const square = document.createElement("div");
            square.style.width = 640 / promptUser + 'px';
            square.style.height = 640 / promptUser + 'px';
            gridContainer.appendChild(square);
            square.classList.add('square');
            square.hoverCount = 0
            square.addEventListener('mouseenter', function() {
            square.style.backgroundColor = 'black';
            square.hoverCount++;
            square.style.opacity = square.hoverCount * 0.10;
        }
    )
        }
    }
    else {
        alert("Please enter a valid number between 1-100")
    }

});