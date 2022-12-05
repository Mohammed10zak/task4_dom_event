let paintMe = document.getElementById("paint_me");
let chooseColor = document.getElementById("choose_color");
let inputColor = document.getElementById("input_color");

// #0xFFFFFF(16777215) --> (max value in colors)

// function to change color of div by clicking the button
const changeColor = () => {
  var randomColor = Math.floor(Math.random() * 16777215).toString(16);

  let style = (paintMe.style.backgroundColor = "#" + randomColor);

  inputColor.value = style;
};
chooseColor.addEventListener("click", changeColor);

// finction to change the background color of th div by by enter hexa color in input
const fillColors = () => {
  paintMe.style.backgroundColor = inputColor.value;
};
inputColor.addEventListener("input", fillColors);
