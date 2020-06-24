import AboutUs from './about-us';
import Menu from './menu';
import './style.css';

const aboutus = new AboutUs();
const menu = new Menu();
const content = document.querySelector('#content')
console.log(menu)
content.append(menu.render());