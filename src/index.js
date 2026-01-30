import "./styles.css";
import { loadHome } from "./home.js";
import { loadMenu } from "./menu.js";
import { loadAbout } from "./about.js";

const content = document.querySelector("#content");
const buttonsNav = document.querySelector("nav");
loadHome(content);
buttonsNav.querySelector('button:first-child').classList.add('active');

buttonsNav.addEventListener('click', (e) => {
  if (e.target.tagName !=='BUTTON') return;
  
  const buttonText = e.target.textContent;
  content.innerHTML = '';

  // button styling
  const allButtons = buttonsNav.querySelectorAll('button');
  allButtons.forEach(btn => btn.classList.remove('active'));
  e.target.classList.add('active');

  switch(buttonText) {
    case 'Home':
      loadHome(content);
      break;
    case 'Menu':
      loadMenu(content);
      break;
    case 'About':
      loadAbout(content);
      break;
  }
});
