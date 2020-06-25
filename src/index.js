import AboutUs from './about-us';
import Menu from './menu';
import ContactUs from './contact-us';
import Navbar from './navbar';
import './style.css';

const aboutus = new AboutUs();
const menu = new Menu();
const contact = new ContactUs;
const navbar = new Navbar();
const content = document.querySelector('#content')
// console.log(menu)
content.append(navbar.render());