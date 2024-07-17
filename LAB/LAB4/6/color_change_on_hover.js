window.onload = function() {
    let colorText = document.getElementById("colorText");
    let colors = ["red", "green", "blue", "yellow", "purple", "orange", "pink", "cyan", "magenta", "lime"];

    colorText.onmouseover = function() {
        let randomColor = colors[Math.floor(Math.random() * colors.length)];
        document.body.style.backgroundColor = randomColor;
    };

    colorText.onmouseout = function() {
        document.body.style.backgroundColor = "";
    };
};
