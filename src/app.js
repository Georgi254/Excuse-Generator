/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ['My dog', 'My cat', 'My turtle', 'A police officer', 'A clown', 'My grandma'];
  let what = ['ate', 'broke', 'stole', 'ripped','destroyed'];
  let when = ['my homework', 'my newspaper', 'my will to live', 'my sandwich', 'my nephew'];
  let emoji = ['<i class="bi bi-person-slash"></i>','<i class="bi bi-emoji-smile-upside-down"></i>', '<i class="bi bi-emoji-dizzy"></i>', '<i class="bi bi-emoji-frown"></i>', '<i class="bi bi-emoji-neutral"></i>', '<i class="bi bi-emoji-sunglasses-fill"></i>']
  

  let whoIndex = [Math.floor(Math.random() * who.length)]
  let whatIndex = [Math.floor(Math.random() * what.length)]
  let whenIndex = [Math.floor(Math.random() * when.length)]
  let emojiIndex = [Math.floor(Math.random() * emoji.length)]


  let excuse = who[whoIndex] + ' ' + what[whatIndex] + ' ' + when[whenIndex] + ' ' + emoji[emojiIndex];
  let element = document.querySelector('#excuse')
  let divimage = document.querySelector('#image')
  element.innerHTML = excuse;
  

  console.log(excuse)
};

