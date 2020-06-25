import Navbar from './navbar';
import './style.css';

const navbar = new Navbar();
const content = document.querySelector('#content');
// console.log(menu)
content.append(navbar.render());