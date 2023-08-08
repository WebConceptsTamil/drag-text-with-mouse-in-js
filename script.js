const movableElement = document.getElementById("txt");
let isDragging = false;
const colors = ["red", "blue", "green", "rose", "yellow", "orange", 'coral'];

function getRandomColor(params) {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index]
}

movableElement.addEventListener("mousedown", (e) => {
  isDragging = true;
});

document.addEventListener("mousemove", (e) => {
  if (isDragging) {
    movableElement.style.left = e.clientX + "px";
    movableElement.style.top = e.clientY + "px";
    movableElement.style.color = getRandomColor();
  }
});

document.addEventListener("mouseup", () => {
  isDragging = false;
});
