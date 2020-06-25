import Navbar from './navbar';
import './assets/style/style.css';

const navbar = new Navbar();
const content = document.querySelector('#content');
content.append(navbar.render());