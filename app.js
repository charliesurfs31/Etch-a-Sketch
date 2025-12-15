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
}

