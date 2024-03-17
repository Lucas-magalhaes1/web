function changeColor(element) {
    var colors = ["tomato", "lightblue", "lightgreen", "orange"];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    element.style.backgroundColor = randomColor;
}
