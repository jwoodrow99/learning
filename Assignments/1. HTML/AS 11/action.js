
var cnt = 0;

var colors = [
    "blue",
    "Chartreuse",
    "DeepPink",
    "Orange",
    "Tomato "
];

document.getElementById("btn").addEventListener("click", () => {
    if (cnt == (colors.length - 1)) {
        cnt = 0;
    } else {
        cnt ++;
    } // end if

    document.getElementById("lorem").style.color = colors[cnt];
});