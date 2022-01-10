"use strict";
console.log("Rainning");

//grab the cavas element
const canvas = document.getElementById("Matrix");
//give us access to its rendering context(visual)
const context = canvas.getContext("2d");

//uses the window(whatever it may be)
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const katakana =
  "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン";
const latin = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const nums = "0123456789";
const russian = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ";
const hebrew = "אבגדהוזחטיכךלמםנןסעפףצץקרשת";
// create one string of all above strings
const aplhabet = katakana + latin + nums + russian + hebrew;

//set fontsize of text displayed
const fontSize = 16;
//does the window width divided by the font size(tells us how many columns can exist)
const columns = canvas.width / fontSize;

const rainDrops = [];
//set all array x value (incrementing) to 1 (why though???)
//believe this give it its x value (aka where horizontally it will be display inheriently)
//becuase it chooses randomly we get diff one at diff time that way not just going across in order
for (let x = 0; x < columns; x++) {
  rainDrops[x] = 1;
}

//function that actual does the displaying of all on screen
const draw = () => {
  //this creates the fading effect
  context.fillStyle = "rgba(0, 0, 0, 0.05)";
  //assuming that mean fill rectangle
  context.fillRect(0, 0, canvas.width, canvas.height);
  //give text it color and font
  context.fillStyle = "#0F0";
  context.font = fontSize + "px monospace";

  //loops through the rainDrops array
  for (let i = 0; i < rainDrops.length; i++) {
    //create/chooses the char that will be displayed
    const text = aplhabet.charAt(Math.floor(Math.random() * aplhabet.length));
    //we multiple the x and y by the fontSize to get proportioned spacing
    context.fillText(text, i * fontSize, rainDrops[i] * fontSize);
    //check if our text had crossed the bottom of our window page (random portion is to randomize colomns as well)
    if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      //if so reset its y so it can start back from the top again
      rainDrops[i] = 0;
    }
    //incrementing y to have that falling effect
    rainDrops[i]++;
  }
};
//this creates the raining effect
setInterval(draw, 33);

//did not write all (followed tutorial)
